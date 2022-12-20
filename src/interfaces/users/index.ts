export interface IUser{
    id: string;
    name: string;
    email:string;
    age:number;
    created_at :number | null;
    updated_at:number | null;
    
}

export interface IUserCreate{
    name: string;
    email:string;
    password:string;
    age:number;
    
}

export interface IUserUpdate{
    id: string;
    name?:string;
    email?:string;
    password?:string;
    age?:number 
}