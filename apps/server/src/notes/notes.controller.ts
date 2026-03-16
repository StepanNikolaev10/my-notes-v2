import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddNoteDto } from './dto/req/add-note.dto';
import { RemoveNoteDto } from './dto/req/remove-note.dto';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/common/get-user.decorator';
import type { User } from '@my-notes/types';
import { AddNoteResDto } from './dto/res/add-note-res.dto';
import { plainToInstance } from 'class-transformer';

@Controller('notes')
export class NotesController {
  
  constructor(
    private readonly notesService: NotesService
  ) {}

  @Post('/add')
  @UseGuards(JwtAuthGuard)
  async addNote(@Body() dto: AddNoteDto, @GetUser('userId') userId: User['id']): Promise<AddNoteResDto> { // передав дженерик промису мы говорим что данный метод на resolve ...
  // ... вернёт тип переданный в этом дженерике.
    return plainToInstance(AddNoteResDto, await this.notesService.addNote(dto, userId))  // await ловит resolve, а код после является then, если ошибка то это throw и catch
  }
  
  @Post('/remove')
  @UseGuards(JwtAuthGuard)
  removeNote(@Body() dto: RemoveNoteDto): Promise<void> {
    return this.notesService.removeNote(dto);
  }

}
