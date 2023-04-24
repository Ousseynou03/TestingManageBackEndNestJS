import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScenarioDeTest } from "./scenarioDeTest.entity";
import { Ticket } from "./ticket.entity";
import { Resultat } from "src/enums/resultat.enum";

@Entity("cas_de_test")
export class CasDeTest {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ref_cas_test" })
  refCasTest: number;

  @Column("varchar", { name: "resultat", nullable: true, length: 38 })
  resultat: Resultat | null;

  @OneToMany(
    () => ScenarioDeTest,
    (scenarioDeTest) => scenarioDeTest.casDeTestRefCasTest2
  )
  scenarioDeTests: ScenarioDeTest[];

  @OneToMany(() => Ticket, (ticket) => ticket.casDeTestRefCasTest2)
  tickets: Ticket[];
}