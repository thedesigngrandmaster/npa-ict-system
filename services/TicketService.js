const db = require('../database/db');
const Ticket = require('../models/Ticket');

class TicketService {
    create({ title, description, priority }) {
        const result = db.prepare(
            'INSERT INTO tickets (title, description, priority) VALUES (?, ?, ?)'
        ).run(title, description, priority);
        return this.getById(result.lastInsertRowid);
    }

    getById(id) {
        const row = db.prepare('SELECT * FROM tickets WHERE id = ?').get(id);
        return row ? new Ticket(row) : null;
    }

    getAll() {
        return db.prepare('SELECT * FROM tickets ORDER BY id DESC')
            .all()
            .map(row => new Ticket(row));
    }

    updateStatus(id, status) {
        db.prepare('UPDATE tickets SET status = ? WHERE id = ?').run(status, id);
        return this.getById(id);
    }
}

module.exports = new TicketService();