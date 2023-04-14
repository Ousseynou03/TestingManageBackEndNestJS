import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CasDeTest } from "src/entities/casDeTest.entity";
import { CasDeTestRepository } from "src/repository/casDeTest.repository";
import { ICasDeTestService } from "src/service/ICasDeTest.service";

@Injectable()
export class CasDeTestServiceImpl implements ICasDeTestService{
    
    constructor(@InjectRepository(CasDeTest) private casDeTestRepository : CasDeTestRepository) {}


    //Méthode pour récupérer la liste des cas de test
    async getAllCasDeTest(): Promise<CasDeTest[]> {
        return this.casDeTestRepository.find();
    }

    //Méthode pour récupérer un cas de test sachant son ID
    async getCasDeTestById(refCasTest: number): Promise<CasDeTest> {
        const casDeTest = await this.casDeTestRepository.findOneBy({refCasTest});
        if (!casDeTest) {
          throw new NotFoundException(`Cas de test with ID:${refCasTest} not found`);
        }
        return casDeTest;
      }



    //Méthode pour ajouter un cas de test
    async addCasDeTest(casDeTest: CasDeTest): Promise<CasDeTest> {
        return this.casDeTestRepository.save(casDeTest);
    }


    //Méthode pour mettre à jour un cas de test
    async updateCasDeTest(casDeTest: CasDeTest): Promise<CasDeTest> {
        return this.casDeTestRepository.save(casDeTest);
    }


    //Méthode pour supprimer un cas de test
    async deleteCasDeTest(refCasTest: number): Promise<void> {
        await this.casDeTestRepository.delete({refCasTest});
    }



}