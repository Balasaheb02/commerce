export interface User {
    id: string;
    createdAt: Date;
    name: string;
    avatar: string;
    zipCode: string;
    city: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    company: string;
    image: string;
    username: string;
    email: string;
    number: string;
    job: string;
    product: string;
}

export interface Product {
    createdAt: Date;
    Product: string;
    price: string;
    description: string;
    department: string;
    id: string;
}

export interface Company {
    createdAt: Date;
    name: string;
    company: string;
    state: string;
    city: string;
    catch: string;
    suffix: string;
    id: string;
}

export interface Finance {
    createdAt: Date;
    account: string;
    name: string;
    amount: string;
    type: string;
    currency: string;
    description: string;
    id: string;
}


