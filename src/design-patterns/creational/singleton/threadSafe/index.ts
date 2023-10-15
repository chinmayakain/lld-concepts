class ThreadSafeSingleton {
    private static instance: ThreadSafeSingleton | null = null;
    private connection: string;
    private static lock: boolean = false;

    private constructor() {
        this.connection = "connected to database";
    }

    /** Thread safety to prevents multiple threads from instantiating the class */
    static getInstance(): ThreadSafeSingleton {
        /** Double Checked locking */
        if (ThreadSafeSingleton.instance === null) {
            /** lock gate to prevent multiple threads from instantiating */
            if (!ThreadSafeSingleton.lock) {
                ThreadSafeSingleton.lock = true;
                if (ThreadSafeSingleton.instance === null) {
                    ThreadSafeSingleton.instance = new ThreadSafeSingleton();
                }
                ThreadSafeSingleton.lock = false;
            }
        }
        return ThreadSafeSingleton.instance as ThreadSafeSingleton;
    }

    connect(): string {
        return this.connection;
    }

    query(sql: string): string {
        return `Querying the database with SQL: ${sql}`;
    }
}

/** Client code */
const threadSafeInstance1 = Database.getInstance();
console.log(threadSafeInstance1.connect());
console.log(threadSafeInstance1.query("SELECT * FROM users"));

const threadSafeInstance2 = Database.getInstance();
console.log(threadSafeInstance1.connect());
console.log(threadSafeInstance1.query("SELECT * FROM orders"));

console.log(threadSafeInstance1 === threadSafeInstance2);
