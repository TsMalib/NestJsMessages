import { MessagesRepository } from './messages.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {

  constructor(public messagesRepository: MessagesRepository) {
  }

  /*
  messagesRepository: MessagesRepository;

  constructor(messagesRepository: MessagesRepository) {
    this.messagesRepository = messagesRepository;
  }
  */

  /*
  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON REAL APPS
    this.messagesRepository = new MessagesRepository();
  }
   */

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
