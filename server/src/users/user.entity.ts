import { Note } from "src/notes/note.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import type { IUser } from '../../../shared/interfaces/user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ default: 'no-email@example.com' })
  email: string;

  @Column()
  username: string;
  
  @Column()
  password: string;

  @OneToMany(() => Note, (note) => note.author)
  notes: Note[];
}