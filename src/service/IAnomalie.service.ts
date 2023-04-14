import { Anomalie } from "src/entities/anomalie.entity";

export interface IAnomalieService {

 getAllAnomalie(): Promise<Anomalie[]>;

 
 getAnomalieById(refAnomalie : number) : Promise<Anomalie>



 updateAnomalie(anomalie : Anomalie): Promise<Anomalie>

 
 
 addAnomalie(anomalie : Anomalie) : Promise<Anomalie>

 
 
 deleteAnomalie(refAnomalie : number) : Promise<void>

 
 
 


}