


/* Get the values of First and Last name from 
the following form. 
Then display those values on the web page like so:

Hello Curtis Jackson

*/


/*
creat a let for each and connect be js .document etc...


answerdisplay.....      .doc get by getElementById  innerhtml

*/

function getFormValue(){
	let fName = document.getElementById("fname").value;
	let lName = document.getElementById("lname").value;
	document.getElementById("display").innerHTML = fName+ " " + lName;

};

/*
//get name from prompt and saves it in user variable
let user = prompt('Enter Name');
//prints welcome message to console
console.log('Welcome ' + user);

//gets h1 element with id 'message'
let messageH1 = document.getElementById('message');
*/





