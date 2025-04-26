// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize express and create a server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files like HTML, CSS, JS
app.use(express.static('public'));

// Listen for incoming WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for data from the client and broadcast to others
    socket.on('newStudent', (studentData) => {
        console.log('New student data received:', studentData);
        io.emit('newStudent', studentData); // Broadcast to all connected clients
    });

    socket.on('newCompetition', (competitionData) => {
        console.log('New competition data received:', competitionData);
        io.emit('newCompetition', competitionData); // Broadcast to all connected clients
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
