//Creates array for each hour of today
var day = [
    {
        id: "0",
        hour: "6",
        time: "6",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "7",
        time: "7",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "8",
        time: "8",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "9",
        time: "9",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "10",
        time: "10",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "11",
        time: "11",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "0",
        hour: "12",
        time: "12",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "1",
        time: "13",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "2",
        time: "14",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "3",
        time: "15",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "4",
        time: "16",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "5",
        time: "17",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "0",
        hour: "6",
        time: "18",
        merdiem: "pm",
        schedule: ""
    },
]

//Uses moment.js to  find today's date
function todayDate() {
    var currentDay = moment().format("MMM Do YY");
    $("#currentDay").text(currentDay);
}

todayDate();

//Saves reminders
function saveReminders() {
    localStorage.setItem("day", JSON.stringify("day"));
}

//Displays reminders 
function displayReminders() {
    
}

//Checks and applies and saved reminders upon page load
function loadReminders () {
    var storedReminder = JSON.parse(localStorage.getItem("day"));

    if(storedReminder) {
        day = storedReminder;
    }

    saveReminders();
    displayReminders();
}

loadReminders();