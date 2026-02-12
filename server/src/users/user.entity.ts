import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ default: 'no-email@example.com' })
  email: string;

  @Column()
  username: string;
  
  @Column()
  password: string;
}

