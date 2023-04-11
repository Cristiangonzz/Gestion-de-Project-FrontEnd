export interface ITeamDomainModel{
    name: string | null | undefined;
    member: string[] | null | undefined;
    task: string[] | null | undefined;
    project: string | null | undefined;
    collaboration: string[] | null | undefined;
}