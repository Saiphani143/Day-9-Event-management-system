// Sample data for events
const events = [
    { title: 'Birthday Event', date: '2024-02-22', time: '07:00 PM', location: 'Guntur', description: 'Description for Birthday Event' },
    { title: 'wedding Event', date: '2024-06-05', time: '10:00 PM', location: 'Ponnur', description: 'Descrition  for wedding event ' },
    { title: 'Birthday Function', date: '2024-07-26', time: '09:30 AM', location: 'Guntur', description: 'Description for Birthday Function' }
];

// Function to display events
function displayEvents() {
    const eventCards = document.getElementById('event-cards');
    eventCards.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
        `;
        eventCards.appendChild(card);
    });
}

// Function to handle form submission
function addEvent(event) {
    event.preventDefault();
    const form = event.target;
    const newEvent = {
        title: form.title.value,
        date: form.date.value,
        time: form.time.value,
        location: form.location.value,
        description: form.description.value
    };
    events.push(newEvent);
    displayEvents();
    form.reset();
}

// Event listeners
document.getElementById('event-form').addEventListener('submit', addEvent);

// Initial display of events
displayEvents();