function submit() {
	var firstName = document.getElementById("first-name").value,
		lastName = document.getElementById("last-name").value,
		email = document.getElementById("email").value,
		date = new Date(document.getElementById("date").value),
		feedback = document.getElementById("feedback").value,
		now = new Date(),
		emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	
	document.getElementById("invalid-first-name").style.display = "none";
	document.getElementById("invalid-last-name").style.display = "none";
	
	if (!firstName || !lastName || !email || !feedback) {
		if (!firstName) {
			document.getElementById("invalid-first-name").style.display = "inline-block"
		}
		if (!lastName) {
			document.getElementById("invalid-last-name").style.display = "inline-block";
		}
		alert("You must complete all fields.");
		return;
	}
	if (isNaN(date)) {
		alert("You must enter a valid date.");
		return;
	}
	if (now.getTime() < date.getTime()) {
		alert("You cannot use a date in the future.");
		return;
	}
	if (!emailRegex.test(email)) {
		alert("You must enter a valid email.");
		return;
	}
//	var dateStr = document.getElementById("date").value.split("-"),
//		year = dateStr[0],
//		month = dateStr[1],
//		day = dateStr[2];
//	if (year > "2018") {
//		alert("You cannot use a date in the future.");
//	}
//	if (parseInt(date) < 1 || parseInt(date) > 12) {
//		alert("You have entered an invalid date.");
//	}
//	if (month === "1" && parseInt(day) > 28) {
//		alert("You have entered an invalid date.");
//	}
//	else if ((month === "3" && parseInt(day) > 30) || (month === "5" && parseInt(day) > 30) || (month === "8" && parseInt(day) > 30) || (month === "10" && parseInt(day) > 30)) {
//		alert("You have entered an invalid date.");
//	}
//	else if (parseInt(day) > 31) {
//		alert("You have entered an invalid date.");
//	}
	document.getElementById("name").innerHTML = "Thank you, " + firstName + " " + lastName + ".";
	document.getElementsByTagName("form")[0].reset();
	alert("Thank you for your feedback.");
};