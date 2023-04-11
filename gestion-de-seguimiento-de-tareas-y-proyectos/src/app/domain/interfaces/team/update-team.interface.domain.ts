export interface IUpdateTeamModel{
    _id: string | null | undefined;
    name: string | null | undefined;
    member: string[] | null | undefined;
    task: string[] | null | undefined;
    proyect: string | null | undefined;
    collaboration: string[] | null | undefined;
}