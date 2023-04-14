import { Anomalie } from "src/entities/anomalie.entity";

export interface IAnomalieService {

 getAnomalieById(refAnomalie : string) : Promise<Anomalie>



 updateAnomalie(anomalie : Anomalie): Promise<Anomalie>

 
 
 addAnomalie(anomalie : Anomalie) : Promise<Anomalie>

 
 
 deleteAnomalie(refAnomalie : number) : Promise<void>

 
 
 getAllAnomalie(): Promise<Anomalie[]>;


}