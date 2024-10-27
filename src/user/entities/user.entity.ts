import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableForeignKey, Timestamp } from "typeorm";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({type: 'longtext', nullable: true })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;

  //foregign key reference
  // @Column({nullable: true})
  // roleId: number;
  //
  // @ManyToOne(() => Role, (role) => role.id)
  // @JoinColumn({name: 'role_id'})
  // role: Role;
}
// Basically my model...the goal is to master type ORM as it covers all databse types....SQL and NoSQL's