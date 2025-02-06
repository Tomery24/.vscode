// Get today's date in month and day format
let today = new Date();
let month = String(today.getMonth() + 1).padStart(2, '0'); // Format month to two digits
let day = String(today.getDate()).padStart(2, '0');        // Format day to two digits

// Construct the URL for fetching the events from the Wikimedia API
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

// Fetch events from the Wikimedia API
fetch(url)
    .then(response => response.json())
    .then(data => {
        const eventList = document.getElementById("event-list");

        // Check if the data contains items
        if (data && data.items && data.items.length > 0) {
            data.items.forEach(item => {
                // Create a list item for each historical event
                const listItem = document.createElement("li");
                listItem.textContent = `${item.year} - ${item.text}`;
                eventList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = "No major events found for today.";
            eventList.appendChild(listItem);
        }
    })
    .catch(error => {
        console.error("Error fetching events:", error);
        const eventList = document.getElementById("event-list");
        const listItem = document.createElement("li");
        listItem.textContent = "Unable to fetch historical events. Please try again later.";
        eventList.appendChild(listItem);
    });

// Display current date dynamically
document.getElementById("date").textContent = "Today's Date: " + new Date().toDateString();
