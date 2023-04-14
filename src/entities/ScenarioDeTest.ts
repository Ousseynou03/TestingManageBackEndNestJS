import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn,
} from "typeorm";
import { CasDeTest } from "./CasDeTest";


@Entity("scenario_de_test")
export class ScenarioDeTest {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ref_scenario" })
  refScenario: string;

  @Column("varchar", { name: "scenario", nullable: true, length: 300 })
  scenario: string | null;

  @Column("bigint", { name: "cas_de_test_ref_cas_test" })
  casDeTestRefCasTest: string;

  @ManyToOne(() => CasDeTest, (casDeTest) => casDeTest.scenarioDeTests, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "cas_de_test_ref_cas_test", referencedColumnName: "refCasTest" },
  ])
  casDeTestRefCasTest2: CasDeTest;
}
