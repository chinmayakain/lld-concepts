class Database {
    private static instance: Database;
    private connection: string;

    private constructor() {
        this.connection = "Connected to the database";
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect(): string {
        return this.connection;
    }

    query(sql: string): string {
        return `Querying the database with SQL: ${sql}`;
    }
}

/** Client code */
const dbInstance1 = Database.getInstance();
console.log(dbInstance1.connect());
console.log(dbInstance1.query("SELECT * FROM users"));

const dbInstance2 = Database.getInstance();
console.log(dbInstance2.connect());
console.log(dbInstance2.query("SELECT * FROM orders"));

console.log(dbInstance1 === dbInstance2);
