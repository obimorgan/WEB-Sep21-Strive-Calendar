
const displayMonth = function() {

    // TODO: getting the current month 
    // (for now we assume we're in September and we'll have 30 days)

    const monthContainerNode = document.getElementById("month-container")

    for (let dayNumber = 1; dayNumber <= 30; dayNumber++) { 

        // We create a new day DIV...
        let newDayNode = document.createElement("div") // <div></div>
        newDayNode.classList.add("day") // <div class="day"></div>
        newDayNode.innerText = dayNumber // <div class="day">1</div>

        // ...and we attach it as the last child of the month container
        monthContainerNode.appendChild(newDayNode)
    }
}

window.onload = function() {
    displayMonth()
}