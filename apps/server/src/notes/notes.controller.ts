import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddNoteDto } from './dto/req/add-note.dto';
import { RemoveNoteDto } from './dto/req/remove-note.dto';
import { NotesService } from './notes.service';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';
import type { User } from '@my-notes/types';
import { AddNoteResDto } from './dto/res/add-note-res.dto';
import { plainToInstance } from 'class-transformer';
import { GetAccessTokenPayload } from 'src/auth/decorators/get-at-payload.decorator';
import type { AccessTokenPayload } from 'src/auth/interfaces/tokens-payload.interface';

@Controller('notes')
export class NotesController {
  
  constructor(
    private readonly notesService: NotesService
  ) {}

  @Post('/add')
  @UseGuards(JwtAccessAuthGuard)
  async addNote(
    @Body() dto: AddNoteDto,
    @GetAccessTokenPayload() accessTokenPayload: AccessTokenPayload
  ): Promise<AddNoteResDto> { // передав дженерик промису мы говорим что данный метод на resolve ...
  // ... вернёт тип переданный в этом дженерике.
    return plainToInstance(AddNoteResDto, await this.notesService.addNote(dto, accessTokenPayload.userId))  // await ловит resolve, а код после является then, если ошибка то это throw и catch
  }
  
  @Post('/remove')
  @UseGuards(JwtAccessAuthGuard)
  removeNote(
    @Body() dto: RemoveNoteDto,
    @GetAccessTokenPayload() accessTokenPayload: AccessTokenPayload
  ): Promise<void> {
    const removeNotePayload = {
      ...dto,
      userId: accessTokenPayload.userId
    }
    return this.notesService.removeNote(removeNotePayload);
  }

}
