// Task 2 - Support Tickets Dynamic Addition
function addTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');

    // Making a div for tickets
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket');

    // Section for name of customer
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    // Section for issue description
    const issueText= document.createElement('p');
    issueText.textContent = issueDescription;

    // Section for priority level
    const priorityState = document.createElement('span');
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute('class', priorityLevel.toLowerCase());

    // Making a button to resolve ticket issue
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

    // Task 4 - Support Ticket Resolution with Event Bubbling
    resolveButton.addEventListener('click', function(event) {
        ticketContainer.removeChild(ticket); // removing ticket from container
        event.stopPropagation();
    })

    // Section for appending elements to ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket); // appending ticket to container

    // Task 5 - Inline Editing for Support Tickets
    ticket.addEventListener('dblclick', function() {
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = nameHeading.textContent;

        const issueInput = document.createElement('input');
        issueInput.setAttribute('type', 'text');
        issueInput.value = issueText.textContent;

        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'text');
        priorityInput.value = priorityState.textContent.split(": ")[1]; // trying to get current priority

        // making save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // clearing current content
        ticket.innerHTML = '';

        // appending again just in case
        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton);

        // save button listener
        saveButton.addEventListener('click', function() {
            // updating new values
            nameHeading.textContent = nameInput.value;
            issueText.textContent = issueInput.value;
            priorityState.textContent = `Priority: ${priorityInput.value}`;
            priorityState.setAttribute('class', priorityInput.value.toLowerCase());

            // reverting back fields to static text
            ticket.innerHTML = '';
            ticket.appendChild(nameHeading);
            ticket.appendChild(issueText);
            ticket.appendChild(priorityState);
            ticket.appendChild(resolveButton);
        });
    });
}

// Task 3 -  Highlighted High Priority Tickets
// Creating a function to highlight tickets
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.high');
    const highPriorityArray = Array.from(highlightHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = 'lightorange'; // Setting a highlight color
        ticket.style.border = '2px solid purple'; // Added a border
    });
}

highlightHighPriorityTickets()

// Attaching an Event listener to ticketContainer
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click', function() {
    console.log('A ticket was clicked')
});

// examples;

addTicket('Becca Shaw', 'Software bug report', 'High');
addTicket('Elizabeth Jackson', 'Page not displaying', 'Low');