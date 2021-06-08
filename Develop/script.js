// Creates array for each hour of today
var day = [
    {
        id: "0",
        hour: "6",
        time: "6",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "1",
        hour: "7",
        time: "7",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "2",
        hour: "8",
        time: "8",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "3",
        hour: "9",
        time: "9",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "4",
        hour: "10",
        time: "10",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "5",
        hour: "11",
        time: "11",
        merdiem: "am",
        schedule: ""
    },
    {
        id: "6",
        hour: "12",
        time: "12",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "7",
        hour: "1",
        time: "13",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "8",
        hour: "2",
        time: "14",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "9",
        hour: "3",
        time: "15",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "10",
        hour: "4",
        time: "16",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "11",
        hour: "5",
        time: "17",
        merdiem: "pm",
        schedule: ""
    },
    {
        id: "12",
        hour: "6",
        time: "18",
        merdiem: "pm",
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
    localStorage.setItem("day", JSON.stringify(day));
}

// Displays schedule reminders 
function displaySchedule() {
    day.forEach(function(_hourTime) {
        $(`#${_hourTime.id}`).val(_hourTime.schedule)
    })
}

// Checks and applies and saved schedule reminders upon page load
function loadSchedule () {
    var storedSchedule = JSON.parse(localStorage.getItem("day"));

    if(storedSchedule) {
        day = storedSchedule;
    }

    saveSchedule();
    displaySchedule();
}

// Displays blocks of time as hours
day.forEach(function(currentHour) {
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