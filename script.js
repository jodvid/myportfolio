var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	}	
];

var userNamePrompt = prompt("Input your username");
var passwordPrompt = prompt("input your password");

function signIn(user,pass) {
	if (user === database[0].username &&
		pass === database[0].password)
		{console.log(newsfeed);
	}
		else { 
			alert("mga bobo"); }

	}

signIn(userNamePrompt,passwordPrompt);