import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(public messagesService: MessagesService) {
  }

  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found!');
    }

    return message;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
