# Made by Vatsal AGRAWAL
# ChatAPP

**************************HOW TO MAKE EXECUTABLE AND RUN PROGRAMME******************************
 
 DO NPM INIT and install all required modules like daemon, express, socket, mongodb, ejs,  etc
 
 "dependencies": {
    "cassandra-driver": "^4.6.3",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "formidable": "^2.0.1",
    "mongoose": "^6.0.13",
    "passport": "^0.5.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^6.1.0",
    "prompt": "^1.2.0",
    "socket.io": "^4.4.0"
  },
  
  
 Rest Copy All files as same 
 Be careful while copying json file
 
 
 1) Unzip File at location x
2) Open Terminal and change directory to that location x
3) Now enter the command.
export PATH=$PATH:/home/badaalvm/node -v x.x.x-Linux-64/bin
4) Now enter npm run startchat
It will run nodemon and nodejs
5) Some login Ids are
a) Mohit -asdf
b) Cohit -asdf
c) Dohit -asdf

Problem Question

build a real-time chat application that the students can use to communicate and
share reels and memes among their friends ;-). Below is the design requirement of the
chat application:
1. To verify the identity of the student, they should log in using the Kerberos
credentials.
2. The students can chat among themselves.
3. The students can create a chat room to have a group chat.
4. They must not lose their data after logout from the application or a system
shutdown or application crash.
5. The students may share any media file or meme, or reels among their friends.
In this assignment, you are expected to submit the following:
1. Implement a real-time chat application using Node JS. To design the front end,
you can use HTML/CSS and Angular JS or React JS or Ajax calls to manage API
calls to the server from the front end. You can either use Cassandra or MongoDB
to store information.

3. The API details and their implementation details should be documented in the
report.



Result
1) I have made a Web that performs all significant functions of chatting,
like chatting with individuals and in groups.
2) It also helps in sending media of almost all types like image reels gif
mp4 etc. Audio features can b added with some extra-same code as
video.
3) Users can also create new groups with passwords, and the
functionality of accessing groups with the password can be made
available with a prompt with some extra codes.
4) Users can login easily with their id and password. Also, we can add
extra functionality of adding a user with copying same code as a group
add in frame.ejs or creating new HTML
5) Users can send a broadcast message when they login but can also use
the link to join a group or click on names to chat with individuals
6) Note logout etc. features are not embedded, and the back button of
the browser is to be not used
7) Security can be enhanced by using render instead of redirect in my
programme.
8) Images are saved as URL in my programme. Similarly, Video and other
media are also saved as Url in my programme
9) I have implemented MongoDB, but due to some VM constraints, it is
not working properly sometimes.
10) I have the concept of local storage and global storage, which works
and stores chat data and other data of group and user.
11) I am not able to plot graphs for requests as unable to handle time
properly in my programme.
12) Data remain if a user logout and become disconnected and show up
in the same sequence when the user login again.
13) I have used only simple HTML for the interface, but interactive things
like React can be used.
14) From all five required points, I have implemented all at its full
potential.
15) Get for ‘/’ is used to render the login page
16) Post for ‘/’ is used to match login details and redirect to broadcast
page (general welcome page) if details match the input field and remain
on the same page and clear data of fields if details do not match.
17) Get for ‘/grselect’ is used to render broadcast page along with user id
of who logged in and requested that page.
18) Get for ‘/:grps/:grpnames’ is used to get the id of the user who
requested that page in the form of grpnames, and grps is the id of the
actual requested page. It redirects to “/:grps” along with user id.
19) Note we can use jquery instead of this Url cascading method.
20) We have to use the synchronous function to maintain their integrity.
21) Get for ‘/:grps’ is used to render group pages or individual chat pages
22) Note individual user page is of form 0_x_y, here x<y and represent two
user id of which chat begins
23) Note group individual page is of form 1_x, here x is group id
24) Note we can create a new room on the broadcast page only.
25) Initial1 socket event is used to join a room
26) Initial2 is used for sending record data
27) Initial 3 and 4 are used to send the group and list of people data.
28) toserver is used to get chat from client
29) toclient is used to send data to the client
30) togrpr is used to add new group data in client and server
31) fromimgsend is used to send media data to the server
32) toimgsend is used to send media data to clients immediately
33) my programme is able to send chats immediately as well as store them
locally and globally with database and chat with individuals as well as
in group and send media
34) It may not work correctly in case of heavy traffic due to a lack of
synchronization and security breaches.
