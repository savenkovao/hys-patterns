import { IBaseUser, UserType } from "./user.model";

function createId(date: number) {
    return `id_${date / 2}`
}

export class BaseUser implements IBaseUser {
    public id: string;
    public name: string;
    public created: number | string;
    public type: UserType;

    constructor(name: string) {
        const date: number = new Date().getTime();
        this.id = createId(date);
        this.name = name;
        this.type = null;
        this.created = date;
    }
}

export class Visitor extends BaseUser implements IBaseUser {
    public type: UserType = UserType.Visitor;
}

export class Editor extends BaseUser implements IBaseUser {
    public type: UserType = UserType.Editor;

    public edit: () => void = (): void => {
        console.log('Document saved');
    }
}

export class Admin extends Editor implements IBaseUser {
    public type: UserType = UserType.Admin;

    public createUser: () => void = (): void => {
        console.log('User created');
    }
}