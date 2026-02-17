import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {type NoteColorsKeysType, noteColorsKeys} from '../../../shared/constants/note-colors';
import { User } from "src/users/user.entity";
import type { INote } from '../../../shared/interfaces/note.interface';


@Entity()
export class Note implements INote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  mainText: string;

  @Column({
    type: 'enum',
    enum: noteColorsKeys,
    default: noteColorsKeys[0]
  })
  colorKey: NoteColorsKeysType;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  lastEdited: Date;

  @ManyToOne(() => User, (user) => user.notes, { 
    onDelete: 'CASCADE',
    nullable: false
   }) // 1. target, 2. Поле, 3.Опции
  author: User;
}