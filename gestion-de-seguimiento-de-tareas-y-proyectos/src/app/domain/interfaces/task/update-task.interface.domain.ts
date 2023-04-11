export interface IUpdateTaskModel{
    _id:string | null | undefined;
    name: string | null | undefined;
    dataExpiration: string | null | undefined;
    description: string | null | undefined;
    progress : string | null | undefined;
    priority: string | null | undefined; 
}