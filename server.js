const express = require('express');
const path = require('path');
const TicketService = require('./services/TicketService');
const AssetService = require('./services/AssetService');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// ===== TICKET ROUTES =====
app.get('/api/tickets', (req, res) => {
    res.json(TicketService.getAll());
});

app.post('/api/tickets', (req, res) => {
    const ticket = TicketService.create(req.body);
    res.json(ticket);
});

app.patch('/api/tickets/:id', (req, res) => {
    const ticket = TicketService.updateStatus(req.params.id, req.body.status);
    res.json(ticket);
});

// ===== ASSET ROUTES =====
app.get('/api/assets', (req, res) => {
    res.json(AssetService.getAll());
});

app.post('/api/assets', (req, res) => {
    const asset = AssetService.create(req.body);
    res.json(asset);
});

app.patch('/api/assets/:id/assign', (req, res) => {
    const asset = AssetService.assign(req.params.id);
    res.json(asset);
});

// ===== PAGES =====
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/tickets', (req, res) => res.sendFile(path.join(__dirname, 'public', 'tickets.html')));
app.get('/assets', (req, res) => res.sendFile(path.join(__dirname, 'public', 'assets.html')));

app.listen(3000, () => {
    console.log('NPA ICT System running at http://localhost:3000');
});