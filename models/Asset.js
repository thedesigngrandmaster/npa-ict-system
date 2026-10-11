class Asset {
    constructor({ id, asset_tag, name, category, status, location }) {
        this.id = id;
        this.assetTag = asset_tag;
        this.name = name;
        this.category = category;
        this.status = status;
        this.location = location;
    }

    assign() {
        this.status = 'Assigned';
    }
}

module.exports = Asset;