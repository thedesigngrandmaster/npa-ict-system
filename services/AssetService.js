const db = require('../database/db');
const Asset = require('../models/Asset');

class AssetService {
    create({ assetTag, name, category, location }) {
        const result = db.prepare(
            'INSERT INTO assets (asset_tag, name, category, location) VALUES (?, ?, ?, ?)'
        ).run(assetTag, name, category, location);
        return this.getById(result.lastInsertRowid);
    }

    getById(id) {
        const row = db.prepare('SELECT * FROM assets WHERE id = ?').get(id);
        return row ? new Asset(row) : null;
    }

    getAll() {
        return db.prepare('SELECT * FROM assets ORDER BY id DESC')
            .all()
            .map(row => new Asset(row));
    }

    assign(id) {
        db.prepare("UPDATE assets SET status = 'Assigned' WHERE id = ?").run(id);
        return this.getById(id);
    }
}

module.exports = new AssetService();