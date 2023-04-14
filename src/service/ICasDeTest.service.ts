import { CasDeTest } from "src/entities/casDeTest.entity";

export interface ICasDeTestService {


    getAllCasDeTest(): Promise<CasDeTest[]>;


    getCasDeTestById(refCasTest : number) : Promise<CasDeTest>



    updateCasDeTest(casDeTest : CasDeTest): Promise<CasDeTest>
   
    
    
    addCasDeTest(casDeTest : CasDeTest) : Promise<CasDeTest>
   
    
    
    deleteCasDeTest(refCasTest : number) : Promise<void>
   
    
    
    
    
}