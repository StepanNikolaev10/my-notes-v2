import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddNoteDto } from './dto/add-note.dto';
import { RemoveNoteDto } from './dto/remove-note.dto';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/common/get-user.decorator';
import type { IUser } from '../../../shared/interfaces/user.interface';
import { Note } from './note.entity';

@Controller('notes')
export class NotesController {
  
  constructor(private notesService: NotesService) {}

  @Post('/add')
  @UseGuards(JwtAuthGuard)
  addNote(@Body() dto: AddNoteDto, @GetUser('userId') userId: IUser['id']): Promise<Note> { // передав дженерик промису мы говорим что данный метод на resolve ...
  // ... вернёт тип переданный в этом дженерике.
    return this.notesService.addNote(dto, userId);  // await ловит resolve, а код после является then, если ошибка то это throw и catch
  }
  
  @Post('/remove')
  @UseGuards(JwtAuthGuard)
  removeNote(@Body() dto: RemoveNoteDto): Promise<void> {
    return this.notesService.removeNote(dto);
  }

}
