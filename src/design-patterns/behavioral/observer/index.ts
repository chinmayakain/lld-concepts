/** Observer Interface */
interface Observer {
    notify(sender: string): void;
    send(message: string, sender: string, userName: string): void;
}

/** Subject (Chat Room) Class */
class ChatRoom {
    private observers: Map<string, Observer> = new Map();

    /** Attach an Observer to the chat room */
    public join(observer: Observer, userName: string): void {
        this.observers.set(userName, observer);
        console.log(`Yay! ${userName} just slid into the chat.`);
    }

    /** Detach an Observer from the chat room */
    public leave(userName: string): void {
        if (this.observers.has(userName)) {
            this.observers.delete(userName);
            console.log(`${userName} just left the chat!`);
        }
    }

    /** Notify all Observers in the chat room except the specified user */
    public sendMessage(message: string, sender: string): void {
        this.observers.forEach((observer, username) => observer.send(message, sender, username));
    }
}

/** Concrete Observer (Chat User) */
class ChatUser implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(sender: string): void {
        console.log(`Hey, ${sender} just slid into the chat!`);
    }

    send(message: string, sender: string, userName: string): void {
        console.log(`${this.name} (${userName}) received a message from ${sender}: ${message}`);
    }

    public directSendMessage(message: string, sender: string): void {
        console.log(`${this.name} sent a direct message to ${sender}: ${message}`);
    }
}

/** Client */
const chatRoom = new ChatRoom();

const user1 = new ChatUser("Koothrapalli");
const user2 = new ChatUser("Sheldon");
const user3 = new ChatUser("Lenard");
const user4 = new ChatUser("Howard");

chatRoom.join(user1, "koothrapalli@123");
chatRoom.join(user2, "sheldon@123");
chatRoom.join(user3, "lenard@123");
chatRoom.join(user4, "howey@123");

user3.directSendMessage("Hey, look at that Sheldon", "Sheldon.");

chatRoom.sendMessage("Guys, I just found a perfect parking spot!", "Koothrapalli");
chatRoom.sendMessage("That's not a scientific discovery, Raj. It's just good luck.", "Sheldon");
chatRoom.sendMessage("Sheldon, in Raj's world, finding a parking spot is a major achievement.", "Lenard");
chatRoom.sendMessage("Agreed. It's like discovering a new element in the periodic table - Rajium!", "Howard");

chatRoom.leave("koothrapalli@123");
