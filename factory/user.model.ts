export interface IBaseUser {
    id: string;
    name: string;
    type: UserType;
    created: number | string;
}

export enum UserType {
    Visitor = 'visitor',
    Editor = 'editor',
    Admin = 'admin'
}