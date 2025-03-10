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