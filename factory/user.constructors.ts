import { IBaseUser, UserType } from "./user.model";

function createId(date: number) {
    return `id_${date / 2}`
}

export abstract class BaseUser implements IBaseUser {
    public id: string;
    public name: string;
    public created: number | string;
    public abstract type: UserType;

    constructor(name: string) {
        const date: number = new Date().getTime();
        this.id = createId(date);
        this.name = name;
        this.created = date;
    }

    public abstract edit(): void;

    public abstract createUser(): void;
}

export class Visitor extends BaseUser implements IBaseUser {
    public type: UserType = UserType.Visitor;

    public edit (): void {
        throw Error;
    }

    public createUser(): void {
        throw Error;
    }
}

export class Editor extends BaseUser implements IBaseUser {
    public type: UserType = UserType.Editor;

    public edit: () => void = (): void => {
        console.log('Document saved');
    }

    public createUser(): void {
        throw Error;
    }
}

export class Admin extends Editor implements IBaseUser {
    public type: UserType = UserType.Admin;

    public createUser: () => void = (): void => {
        console.log('User created');
    }
}