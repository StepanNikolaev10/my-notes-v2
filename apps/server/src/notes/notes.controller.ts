import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddNoteDto } from './dto/req/add-note.dto';
import { RemoveNoteDto } from './dto/req/remove-note.dto';
import { NotesService } from './notes.service';
import { JwtAccessAuthGuard } from 'src/auth/guards/jwt-access-auth.guard';
import { AddNoteResDto } from './dto/res/add-note-res.dto';
import { plainToInstance } from 'class-transformer';
import { GetAccessTokenPayload } from 'src/auth/decorators/get-at-payload.decorator';
import type { Tokens } from 'src/auth/types/tokens.interface';
import type { NotesServiceArgs } from './types/notes-service-args.interface';

@Controller('notes')
export class NotesController {
  
  constructor(
    private readonly notesService: NotesService
  ) {}

  @Post('/add')
  @UseGuards(JwtAccessAuthGuard)
  async addNote(
    @Body() dto: AddNoteDto,
    @GetAccessTokenPayload() accessTokenPayload: Tokens['accessTokenPayload']
  ): Promise<AddNoteResDto> { // передав дженерик промису мы говорим что данный метод на resolve ...
  // ... вернёт тип переданный в этом дженерике.
    const addNoteArgs: NotesServiceArgs['addNote'] = {
      ...dto,
      authorId: accessTokenPayload.userId
    }
    const createdNote = await this.notesService.addNote(addNoteArgs); // await ловит resolve, а код после является then, если ошибка то это throw и catch

    return plainToInstance(AddNoteResDto, createdNote); // это синхронная функция, она ждёт значение, а не промис, поэтому выше нужен await
  }

  
  
  // @Post('/remove')
  // @UseGuards(JwtAccessAuthGuard)
  // removeNote(
  //   @Body() dto: RemoveNoteDto,
  //   @GetAccessTokenPayload() accessTokenPayload: AccessTokenPayload
  // ): Promise<void> {
  //   const removeNotePayload = {
  //     ...dto,
  //     userId: accessTokenPayload.userId
  //   }
  //   return this.notesService.removeNote(removeNotePayload);
  // }

}
