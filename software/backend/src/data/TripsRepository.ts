import DB from "./DB";

class TripsRepository {
    db: DB;

    constructor(db: DB) {
        this.db = db;
    }

    getRoutes() {
        this.db.connect();
        // this.db.establishedConnection
        // this.db.establishedConnection.query('');
    }
}

export default TripsRepository;