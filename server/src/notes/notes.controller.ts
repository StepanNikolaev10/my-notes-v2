import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddNoteDto } from './dto/add-note.dto';
import { RemoveNoteDto } from './dto/remove-note.dto';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/common/get-user.decorator';
import type { IUser } from '../../../shared/interfaces/user.interface';

@Controller('notes')
export class NotesController {
  
  constructor(private notesService: NotesService) {}

  @Post('/add')
  @UseGuards(JwtAuthGuard)
  addNote(@Body() dto: AddNoteDto, @GetUser('userId') userId: IUser['id']) {
    return this.notesService.addNote(dto, userId)
  }
  
  @Post('/remove')
  removeNote(@Body() dto: RemoveNoteDto) {
    this.notesService.removeNote(dto)
  }

}
