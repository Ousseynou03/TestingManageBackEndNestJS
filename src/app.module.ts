import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AnomalieRepository } from './repository/anomalie.repository';
import { CasDeTestRepository } from './repository/casDeTest.repository';
import { ReleasRepository } from './repository/releas.repository';
import { ScenarioDeTestRepository } from './repository/scenarioDeTest.repository';
import { TesteurRepository } from './repository/testeur.repository';
import { TicketRepository } from './repository/ticket.repository';
import { Anomalie } from './entities/anomalie.entity';
import { CasDeTest } from './entities/casDeTest.entity';
import { ScenarioDeTest } from './entities/scenarioDeTest.entity';
import { Releas } from './entities/releas.entity';
import { Testeur } from './entities/testeur.entity';
import { Ticket } from './entities/ticket.entity';
import { AnomalieController } from './controller/anomalie.controller';
import { AnomalieServiceImpl } from './serviceImpl/anomalie.serviceImpl';
import { CasDeTestServiceImpl } from './serviceImpl/casDeTest.serviceImpl';
import { CasDeTestController } from './controller/casDeTest.controller';
import { ReleasController } from './controller/releas.controller';
import { ReleasServiceImpl } from './serviceImpl/releas.serviceImpl';
import { ScenarioDeTestServiceImpl } from './serviceImpl/scenarioDeTest.serviceImpl';
import { ScenarioDeTestController } from './controller/scenarioDeTest.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testingManageNestJS',
      entities: [Anomalie,CasDeTest,Releas,ScenarioDeTest,Testeur,Ticket],
      synchronize: false,
      ////synchronize: true, ne doit pas être utilisé en production
    }),
    TypeOrmModule.forFeature([Anomalie, CasDeTest, Releas, ScenarioDeTest, Testeur,Ticket]),
  ],
  controllers: [AppController, AnomalieController, CasDeTestController, ReleasController, ScenarioDeTestController],
  providers: [AppService, AnomalieRepository, CasDeTestRepository,ReleasRepository,ScenarioDeTestRepository,TesteurRepository, TicketRepository,
  AnomalieServiceImpl, CasDeTestServiceImpl, ReleasServiceImpl, ScenarioDeTestServiceImpl],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
