class Ticket {
    constructor({ id, title, description, priority, status }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

module.exports = Ticket;