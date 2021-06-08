// Creates array for each hour of today
var thisDay = [
    {
        id: "0",
        hour: "6",
        time: "6",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "1",
        hour: "7",
        time: "7",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "2",
        hour: "8",
        time: "8",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "3",
        hour: "9",
        time: "9",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "4",
        hour: "10",
        time: "10",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "5",
        hour: "11",
        time: "11",
        meridiem: "am",
        schedule: ""
    },
    {
        id: "6",
        hour: "12",
        time: "12",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "7",
        hour: "1",
        time: "13",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "8",
        hour: "2",
        time: "14",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "9",
        hour: "3",
        time: "15",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "10",
        hour: "4",
        time: "16",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "11",
        hour: "5",
        time: "17",
        meridiem: "pm",
        schedule: ""
    },
    {
        id: "12",
        hour: "6",
        time: "18",
        meridiem: "pm",
        schedule: ""
    },
]

// Uses moment.js to  find today's date
function todayDate() {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDay);
}

todayDate();

// Saves schedule reminders
function saveSchedule() {
    localStorage.setItem("thisDay", JSON.stringify(thisDay));
}

// Displays schedule reminders 
function displaySchedule() {
    thisDay.forEach(function (_currentHour) {
        $(`#${_currentHour.id}`).val(_currentHour.schedule);
    })
}

// Checks and applies and saved schedule reminders upon page load
function loadSchedule () {
    var storedSchedule = JSON.parse(localStorage.getItem("thisDay"));

    if(storedSchedule) {
        thisDay = storedSchedule;
    }

    saveSchedule();
    displaySchedule();
}

// Displays blocks of time as hours
thisDay.forEach(function(currentHour) {
    // Creates a row that the time, reminder and save button will sit on
    var timeBlock = $("<form>").attr({
        "class" : "row"
    });
    $(".container").append(timeBlock);

    // Creates the hour block of the time row
    var hourTime = $("<div>")
    .text(`${currentHour.hour}${currentHour.meridiem}`)
    .attr({
        "class": "col-md-1 hour"
    });

    // Creates the reminder block of the time row
    var hourReminder = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
    });
    
    // Adjusts the time row to reflect past, present or future
    var timeColorAdjust = $("<textarea>");

    hourReminder.append(timeColorAdjust);
    timeColorAdjust.attr("id", currentHour.id);

    // Checks current time and assigns class based on past/present/future to row
    if(currentHour.time < moment().format("HH")) {
        timeColorAdjust.attr ({
            "class" : "past"
        })
    } else if(currentHour.time === moment().format("HH")) {
        timeColorAdjust.attr ({
            "class" : "present"
        })
    } else if(currentHour.time > moment().format("HH")) {
        timeColorAdjust.attr ({
            "class" : "future"
        })
    }

    // Creates the save block of the time row
    var hourSaveBtn = $("<i class='far fa-solid fa-floppy-disks fa-lg'</i>");
    var hourSave = $("<button>")
    .attr({
        "class" : "col-md-1 saveBtn"
    });

    hourSave.append(hourSaveBtn)
    timeBlock.append(hourTime, hourReminder, hourSave);
})

loadSchedule();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    saveReminders();
    displayReminders();
})