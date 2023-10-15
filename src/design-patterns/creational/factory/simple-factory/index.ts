import { Users } from "../../../../enums";

/** Abstract user */
interface IUserInfo {
    firstName: string;
    lastName: string;
    email: string;
}

/** User information */
interface IUser {
    getUser(): string;
    getRole(): Users;
    getPermissions(): string[];
}

/** Concrete Super Admin User */
class SuperAdmin implements IUser {
    private _role: Users;
    private _userInfo: IUserInfo;

    constructor(role: Users, userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): Users {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit", "Delete", "Manage Users"];
    }
}

/** Concrete Admin User */
class AdminUser implements IUser {
    private _role: Users;
    private _userInfo: IUserInfo;

    constructor(role: Users, userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): Users {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit", "Delete"];
    }
}

/** Concrete Editor User */
class EditorUser implements IUser {
    private _role: Users;
    private _userInfo: IUserInfo;

    constructor(role: Users, userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): Users {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit"];
    }
}

/** Concrete Moderator User */
class ModeratorUser implements IUser {
    private _role: Users;
    private _userInfo: IUserInfo;

    constructor(role: Users, userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): Users {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Review", "Edit"];
    }
}

/** User factory */
class UserFactory {
    public createUser(role: Users, userInfo: IUserInfo): IUser {
        switch (role) {
            case Users.SUPER_ADMIN:
                return new SuperAdmin(role, userInfo);
            case Users.ADMIN:
                return new AdminUser(role, userInfo);
            case Users.EDITOR:
                return new EditorUser(role, userInfo);
            case Users.MODERATOR:
                return new ModeratorUser(role, userInfo);
            default:
                throw new Error(`Invalid user role: ${role}`);
        }
    }
}

/** Client code */
const userFactory = new UserFactory();

const user_1 = userFactory.createUser(Users.SUPER_ADMIN, { firstName: "Will", lastName: "Smith", email: "will@example.com" });
const user_2 = userFactory.createUser(Users.EDITOR, { firstName: "John", lastName: "Doe", email: "john@example.com" });
const user_3 = userFactory.createUser(Users.MODERATOR, { firstName: "Holly", lastName: "Flax", email: "flax@example.com" });

console.log(user_1.getUser());
console.log(user_1.getRole());
console.log(user_1.getPermissions());

console.log("***************************************************************************");

console.log(user_2.getUser());
console.log(user_2.getRole());
console.log(user_2.getPermissions());

console.log("*****************************************************************************");

console.log(user_3.getUser());
console.log(user_3.getRole());
console.log(user_3.getPermissions());
