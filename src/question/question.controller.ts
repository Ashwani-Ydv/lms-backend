import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  async create(@Body() body: any) {
    return this.questionService.create(body);
  }

  @Get()
  async findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.questionService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
