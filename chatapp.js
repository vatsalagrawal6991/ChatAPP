var cha = require('express')();
var htp = require('http').Server(cha);
var soc = require('socket.io')(htp);

var MC = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var user = [{username:"Mohit", pass:"asdf" },{username:"Cohit", pass:"asdf" },{username:"Kohit", pass:"asdf" },{username:"Dohit", pass:"asdf" },{username:"Eohit", pass:"asdf" }];
var grp = [{gr:"gr1", pass:"asdf" },{gr:"gr2", pass:"asdf" },{gr:"gr3", pass:"asdf" },{gr:"gr4", pass:"asdf" },{gr:"gr5", pass:"asdf" }];
var reco = []

MC.connect(url, (er, db)=>{
    if(er) throw er;
    console.log("User Database Created")
    
    
    db.db("chat").collection("recording30").find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res)
        for(i in res){
            console.log(i)
            grp.push(res[i])
            
        }
        console.log(grp)  
    })

    db.db("chat").collection("recordingB").find({}).toArray((err,res)=>{
        if(err) throw err;
        //console.log(res)
        
       
    })

    db.db("chat").collection("recording31").find({}).toArray((err,res)=>{
        if(err) throw err;
        //console.log(res)
        for(i in res){
            reco[i]=res[i].data
        }
        //console.log(reco)
        db.close()
    })
    
  })
function grpadd(datam){
    MC.connect(url, (er, db)=>{
        if(er) throw er;
        db.db("chat").collection("recording30").insertOne(datam,(err,result)=>{
            if(err) throw err;
            console.log(result)
        })
        db.db("chat").collection("recording30").find({}).toArray((err,result)=>{
            if(err) throw err;
            console.log(result)
            db.close()
        })
      })
}
function recadd(datam){
    MC.connect(url, (er, db)=>{
        if(er) throw er;
        db.db("chat").collection("recording31").insertOne({data:datam},(err,result)=>{
            if(err) throw err;
            console.log(result)
        })
        db.db("chat").collection("recording31").find({}).toArray((err,result)=>{
            if(err) throw err;
            console.log(result)
            db.close()
        })
      })
}

cha.set("view engine","ejs");
cha.use(require('express').urlencoded({extended:true}));
var useranm
cha.get('/',(req,res)=>{

    res.render('/home/baadalvm/Desktop/CHAT/views/frame.ejs');
    
})

cha.get('/grselect',function(req,res){
    res.render('/home/baadalvm/Desktop/CHAT/views/grpselect.ejs',{useranm : useranm});
    
})

cha.post('/',(req,res)=>{
    flag=1
    for (i in user){
        if ((user[i].username==req.body.usna) && (user[i].pass==req.body.pswda) ){
            console.log("user found");
            res.redirect('/grselect');
            useranm = req.body.usna;
            flag=0;
            break;
        }
    }
        if (flag==1){
            res.redirect('/');
    }
})

cha.get('/:grps/:grpnames',function(req,res){
    var x = req.params.grps
    useranm= req.params.grpnames
    
    res.redirect("/"+x)
})
cha.get('/:grps',function(req,res){
    res.render('/home/baadalvm/Desktop/CHAT/views/grssee.ejs',{grpname : useranm, grpuseran:req.params.grps});
    console.log(useranm)
})

soc.on('connection', function(ion){
    console.log('ok 1');
    ion.emit('inital',useranm);
    ion.emit('inital2',reco);
    ion.emit('inital3',user);
    ion.emit('inital4',grp);
    ion.on('inital1', function(data){
        console.log(data);
        ion.join(data)
    })
    ion.on('toserver', function(data){
        console.log(data.msga);
        reco.push([data.useran,data.msga,data.roomans,"texta"])
        recadd([data.useran,data.msga,data.roomans,"texta"])
        console.log(reco);
        ion.join(data.roomans)
        soc.in(data.roomans).emit('toclient', ({msgap:data.msga,ua:data.useran}));
    })
    ion.on('togrpr', function(data){
        console.log(data);
        grp.push({gr:data.gnna, pass:data.passwd })
        grpadd({gr:data.gnna, pass:data.passwd })
        console.log(grp);
        soc.emit('inital4',grp);
    })
    ion.on('fromimgsend', function(data){
        console.log(data);
        reco.push([data.useran,data.imgan,data.roomans,data.typersa])
        recadd([data.useran,data.imgan,data.roomans,data.typersa])
        ion.join(data.roomans)
        soc.in(data.roomans).emit('toimgsend', ({msgap:data.msga,ua:data.useran,imgdata:data.imgan,typersa:data.typersa}));
    })
})
htp.listen(5000,()=>{console.log("Ok 5000");})

