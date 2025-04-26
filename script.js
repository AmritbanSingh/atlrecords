// public/script.js
const socket = io(); // Initialize socket connection

// Add new student
function addStudent() {
    const name = prompt("Enter student name:");
    const achievement = prompt("Enter student achievement:");

    const student = { name, achievement };
    
    // Emit the new student data to the server
    socket.emit('newStudent', student);
}

// Add new competition
function addCompetition() {
    const title = prompt("Enter competition title:");
    const details = prompt("Enter competition details:");

    const competition = { title, details };
    
    // Emit the new competition data to the server
    socket.emit('newCompetition', competition);
}

// Listen for new student data from the server
socket.on('newStudent', (student) => {
    const studentList = document.getElementById('studentList');
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
        <h3>${student.name}</h3>
        <p>${student.achievement}</p>
    `;
    studentList.appendChild(div);
});

// Listen for new competition data from the server
socket.on('newCompetition', (competition) => {
    const compList = document.getElementById('compList');
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
        <h3>${competition.title}</h3>
        <p>${competition.details}</p>
    `;
    compList.appendChild(div);
});
