export interface SignUp {
    name: string,
    password: string,
    email: string,
}

export interface Login {
    email: string,
    password: string
}

export interface Product{
    product:string;
    price:number;
    color:string;
    category:string;
    description:string;
    image:string;
}