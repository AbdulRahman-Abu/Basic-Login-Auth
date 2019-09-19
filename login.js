let database = [
    { 
      username: "raybaba",
      password: "raybaba"
    },
    {
      username: "abdul",
      pasword: "abdul"
    }
];

let newsfeed = [
    {
     username: "Bobby",
     timeline: "JavaScript is awesome"
    },
    
    {
      username: "Sally",
      timeline: "HNG is going on well"
    }
];

var userNamePrompt = prompt("Whats your name?");
var passWordPrompt = prompt("Whats your password?");

function signIn(user, pass) { 
  if(user === database[0].username &&
     pass === database[0].password)
    {
     console.log(newsfeed);
    } else
    { 
      alert("Sorry, wrong username and password");
    };
};
signIn(userNamePrompt, passWordPrompt);
