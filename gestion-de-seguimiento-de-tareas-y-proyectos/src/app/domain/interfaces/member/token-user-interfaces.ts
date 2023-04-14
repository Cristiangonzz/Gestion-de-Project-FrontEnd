export interface ITokenUser {
    iat: number;
    member: {
        _id: string;
        name: string;
        document: string;
        salary: number;
        role: string;

        email:string;
        password:string;
    }
    
} ;