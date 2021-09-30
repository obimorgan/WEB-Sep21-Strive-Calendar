/* ------------ STRUCTURING THE DATA WE ARE DEALING WITH

ENTITIES WE ARE DEALING WITH:
- DAYS (day number for now, maybe month + year later on)
- MEETINGS (time, description)
- CALENDAR (will contain all existing days)

HOW ARE THEY CONNECTED TO EACH OTHER (what's the RELATIONSHIP between them)
- We have 0 to many different MEETINGS for each DAY
-> Every day will have a COLLECTION of several meetings

HOW WE CAN MODEL THAT:
- MEETING: we can use an object -> { time: "09:00", description: "Live lecture" }
- DAY: we can use an array -> [ { time: "09:00", description: "Live lecture" }, { time: "15:00", description: "Recap session" }  ]
- CALENDAR: we use an object as a Dictionary -> {
    "2021-09-13" : [ { time: "09:00", description: "Live lecture" }, { time: "15:00", description: "Recap session" }  ],
    "2021-09-15" : [ { time: "10:00", description: "Dentist" } ],
    "2021-09-18" : [ ],
    "2021-09-21" : [ { time: "17:00", description: "Debrief" } ],
}


*/

// TODO: This acts as a TEMPLATE, as BLUEPRINTS for how we want to structure our data
// we still need to properly organize user input this way (through functions)
// So we need to:
// 1. take user input and shape it as displayed below
// 2. read calendarData to properly display meetings in the page (= create LI based on the content of these objects/arrays)
let calendarData = {
    "13" : [ { time: "09:00", description: "Live lecture" }, { time: "15:00", description: "Recap session" }  ],
    "15" : [ { time: "10:00", description: "Dentist" } ],
    "18" : [ ],
    "21" : [ { time: "17:00", description: "Debrief" } ],
}


const displayMonth = function() {

    // TODO: getting the current month 
    // (for now we assume we're in September and we'll have 30 days)

    const monthContainerNode = document.getElementById("month-container")

    for (let dayNumber = 1; dayNumber <= 30; dayNumber++) { 

        // We create a new day DIV...
        let newDayNode = document.createElement("div") // <div></div>
        newDayNode.classList.add("day") // <div class="day"></div>
        newDayNode.innerText = dayNumber // <div class="day">1</div>

        // Set the "selectDay" function as a LISTENER to the CLICK event
        newDayNode.onclick = selectDay
        // (the other alternative would be)
        //newDayNode.addEventListener("click", selectDay)

        // ...and we attach it as the last child of the month container
        monthContainerNode.appendChild(newDayNode)
    }
}

const selectDay = function(eventData) {

    // If any other day is currently selected, DESELECT that
    const currentlySelectedDay = getSelectedDay()
    if (currentlySelectedDay != null) {
        currentlySelectedDay.classList.remove("selected")
    }

    // Find clicked element
    const clickedDayNode = eventData.target // This will give us the HTML node that has been clicked

    // Make it "selected" somehow
    clickedDayNode.classList.add("selected") // then we apply the 'selected' class to it
}

const getSelectedDay = function() {
    // we find the first element in the page that has the "selected" class assigned
    return document.querySelector(".selected")
}

const createNewMeeting = function() {

    // Read the user input (time, description)
    let meetingTimeNode = document.getElementById("meeting-time")
    let meetingTime = meetingTimeNode.value

    let meetingDescriptionNode = document.getElementById("meeting-description")
    let meetingDescription = meetingDescriptionNode.value

    // Display new meeting to the user
    let newMeetingListItemNode = document.createElement("li") // <li></li>
    newMeetingListItemNode.innerText = `${meetingTime} - ${meetingDescription}` // <li>09:00 - Live lecture</li>

    let meetingsContainerNode = document.getElementById("meetings-for-the-day")
    meetingsContainerNode.appendChild(newMeetingListItemNode)

    // TODO: we still need to somehow link those meetings to the currently selected day

}

window.onload = function() {

    // ALWAYS put all your instructions inside of FUNCTIONS!
    // ...and if you need to run them as soon as the page loads,
    // use window.onload
    displayMonth()
}