/** Role type */
const UserMap = {
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    EDITOR: "EDITOR",
    MODERATOR: "MODERATOR",
} as const;

/** Abstract user */
interface IUserInfo {
    firstName: string;
    lastName: string;
    email: string;
}

/** User information */
interface IUser {
    getUser(): string;
    getRole(): (typeof UserMap)[keyof typeof UserMap];
    getPermissions(): string[];
}

/** Concrete Super Admin User */
class SuperAdmin implements IUser {
    private _role: (typeof UserMap)[keyof typeof UserMap];
    private _userInfo: IUserInfo;

    constructor(role: (typeof UserMap)[keyof typeof UserMap], userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): (typeof UserMap)[keyof typeof UserMap] {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit", "Delete", "Manage Users"];
    }
}

/** Concrete Admin User */
class AdminUser implements IUser {
    private _role: (typeof UserMap)[keyof typeof UserMap];
    private _userInfo: IUserInfo;

    constructor(role: (typeof UserMap)[keyof typeof UserMap], userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): (typeof UserMap)[keyof typeof UserMap] {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit", "Delete"];
    }
}

/** Concrete Editor User */
class EditorUser implements IUser {
    private _role: (typeof UserMap)[keyof typeof UserMap];
    private _userInfo: IUserInfo;

    constructor(role: (typeof UserMap)[keyof typeof UserMap], userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): (typeof UserMap)[keyof typeof UserMap] {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Read", "Write", "Edit"];
    }
}

/** Concrete Moderator User */
class ModeratorUser implements IUser {
    private _role: (typeof UserMap)[keyof typeof UserMap];
    private _userInfo: IUserInfo;

    constructor(role: (typeof UserMap)[keyof typeof UserMap], userInfo: IUserInfo) {
        this._role = role;
        this._userInfo = userInfo;
    }

    public getUser(): string {
        return `User Info: [${this._role}] => ${this._userInfo.firstName}, ${this._userInfo.lastName}, ${this._userInfo.email}`;
    }

    public getRole(): (typeof UserMap)[keyof typeof UserMap] {
        return this._role;
    }

    public getPermissions(): string[] {
        return ["Review", "Edit"];
    }
}

/** User factory */
class UserFactory {
    public createUser(role: (typeof UserMap)[keyof typeof UserMap], userInfo: IUserInfo): IUser {
        switch (role) {
            case UserMap.SUPER_ADMIN:
                return new SuperAdmin(role, userInfo);
            case UserMap.ADMIN:
                return new AdminUser(role, userInfo);
            case UserMap.EDITOR:
                return new EditorUser(role, userInfo);
            case UserMap.MODERATOR:
                return new ModeratorUser(role, userInfo);
            default:
                throw new Error(`Invalid user role: ${role}`);
        }
    }
}

/** Client code */
const userFactory = new UserFactory();

const user_1 = userFactory.createUser(UserMap.SUPER_ADMIN, { firstName: "Will", lastName: "Smith", email: "will@example.com" });
const user_2 = userFactory.createUser(UserMap.EDITOR, { firstName: "John", lastName: "Doe", email: "john@example.com" });
const user_3 = userFactory.createUser(UserMap.MODERATOR, { firstName: "Holly", lastName: "Flax", email: "flax@example.com" });

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
