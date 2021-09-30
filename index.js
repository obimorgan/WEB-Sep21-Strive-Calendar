
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

}

window.onload = function() {

    // ALWAYS put all your instructions inside of FUNCTIONS!
    // ...and if you need to run them as soon as the page loads,
    // use window.onload
    displayMonth()
}