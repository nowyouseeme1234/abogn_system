So Let me start by saying that I did not yet implement the adding and removing of items on the system but I did add the
server side of it, so on the front end I installed some libraries like axios and react-router-dom which I pushed so
you don't need to install them pulling by itself should be enough but if it doesn't I will walk you through installing them.
and on the back end I installed mysql, CORS, nodemon etc again your don't need to install them it should work just fine because
I pushed it all.

Next you need to set up mysql on xampp create a database named abognDB then create a table named login, then add 3 columns the id,
email, password(we will implement password encription later on) then make id auto increment and the primary key, and insert admin@gmail.com
as the email and 12345 as the password then save it.

On VScode open two terminals one for the client side and one for the server side(just cd abogn_client_side and cd sever) on the server terminal
you need to run npm start and you need to get the message Server Running and Connected to Abogn DB.

When you first run npm run dev(on the client side) you will get a blank page it is normal because I didn't yet specify the route to start at, so 
what you'll do is, on the top of the browser where you copy paste the url, just append the route /adminlogin and press enter,
this should take you to the login page. 

Now, get back to the login page and type in the email and password and then login, it should take you to the dashboard.
