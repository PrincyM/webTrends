// enums

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(days.Sunday);
console.log(days[0]);

//html 

window.onload = function() {

    // Part 1

    let pTodayDate = document.getElementById("p--today-date");
//console.log(pTodayDate);

// Today's date
let today : Date = new Date();
//console.log(today);

// today's month
let todayMonth : string = months[today.getMonth()];
//console.log(todayMonth);

// today's day of the week
let todayDayOfTheWeek : string = days[today.getDay()];
//console.log(todayDayOfTheWeek);

// display today's date in readable format to page
    if(pTodayDate!= null){
        pTodayDate.innerHTML = `Today is ${ todayDayOfTheWeek }, ${ todayMonth} ${ today.getDate()}, ${ today.getFullYear()}`;
    }


// Part 2
 
let birthdayButton = document.getElementById("button--birthday");

if(birthdayButton!=null){
    birthdayButton.onclick = birthdayButtonOnClick;
}

} // end of onload function

function birthdayButtonOnClick(){
   
    let bdayInput = document.getElementById("input--date-picker");
    let bdayMessage = document.getElementById("p--birthday-message");

    let bdayDate =   new Date(bdayInput.value + 'GMT-0400'); //     Using GMT to 
    bdayMessage.innerHTML = getBdayString(bdayDate);
}

function getBdayString(selectedBdayDate : Date) : string {
       let today : Date = new Date();
       let bdayToday : Date = selectedBdayDate; // if today is the birthday date of the user
       // check if bday is today. If yes, display 'Happy Birthday' or else show when the user's bday is

       if(bdayToday.toDateString() == today.toDateString()) {
           return "Happy Birthday";
       }
       else {
           return `Your birthday will be on ${ days[bdayToday.getDay()]}, ${ months[bdayToday.getMonth()]} ${ bdayToday.getDate()}, ${ bdayToday.getFullYear()}`;
       }

}





