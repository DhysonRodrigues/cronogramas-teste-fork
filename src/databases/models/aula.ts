import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("curso")
export default class Curso {
  //chave primária
  @PrimaryColumn()
  id_aula: string

  //atributos
  @Column()
  data_aula: Date

  @Column()
  status_aula: string

  @Column()
  fk_turma: string

  @Column()
  fk_unidade: string
  constructor() {
    this.id_aula = uuid()
  }
}
