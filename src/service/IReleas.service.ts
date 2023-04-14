import { Releas } from "src/entities/releas.entity";

export interface IReleasService {

    getAllRelease(): Promise<Releas[]>;

 
    getReleasById(refRelease : number) : Promise<Releas>
   
   
   
    updateReleas(releas : Releas): Promise<Releas>
   
    
    
    addReleas(releas : Releas) : Promise<Releas>
   
    
    
    deleteReleas(refRelease : number) : Promise<void>
    
}