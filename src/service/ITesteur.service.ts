import { Testeur } from "src/entities/testeur.entity";

export interface ITesteurService {

    getAllTesteur(): Promise<Testeur[]>;

 
    getTesteurById(idTesteur : number) : Promise<Testeur>
   
   
   
    addTesteur(testeur : Testeur) : Promise<Testeur>


    updateTesteur(testeur : Testeur): Promise<Testeur>
   
    
    
    deleteTesteur(idTesteur : number) : Promise<void>
   
    
}