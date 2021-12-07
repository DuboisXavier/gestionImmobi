export interface IUser{
    id : number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    token: string;
    role: string;
}
export interface IEmployee{
    id : number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    passwd: null;
    role: string;
    birthdate: Date;
}