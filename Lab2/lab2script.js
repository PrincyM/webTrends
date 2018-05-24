// enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
console.log(days.Sunday);
console.log(days[0]);
//html 
window.onload = function () {
    // Part 1
    var pTodayDate = document.getElementById("p--today-date");
    //console.log(pTodayDate);
    // Today's date
    var today = new Date();
    //console.log(today);
    // today's month
    var todayMonth = months[today.getMonth()];
    //console.log(todayMonth);
    // today's day of the week
    var todayDayOfTheWeek = days[today.getDay()];
    //console.log(todayDayOfTheWeek);
    // display today's date in readable format to page
    if (pTodayDate != null) {
        pTodayDate.innerHTML = "Today is " + todayDayOfTheWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();
    }
    // Part 2
    var birthdayButton = document.getElementById("button--birthday");
    if (birthdayButton != null) {
        birthdayButton.onclick = birthdayButtonOnClick;
    }
}; // end of onload function
function birthdayButtonOnClick() {
    var bdayInput = document.getElementById("input--date-picker");
    var bdayMessage = document.getElementById("p--birthday-message");
    var bdayDate = new Date(bdayInput.value + 'GMT-0400'); //     Using GMT to 
    bdayMessage.innerHTML = getBdayString(bdayDate);
}
function getBdayString(selectedBdayDate) {
    var today = new Date();
    var bdayToday = selectedBdayDate; // if today is the birthday date of the user
    // check if bday is today. If yes, display 'Happy Birthday' or else show when the user's bday is
    if (bdayToday.toDateString() == today.toDateString()) {
        return "Happy Birthday";
    }
    else {
        return "Your birthday will be on " + days[bdayToday.getDay()] + ", " + months[bdayToday.getMonth()] + " " + bdayToday.getDate() + ", " + bdayToday.getFullYear();
    }
}
