import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './question.schema';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async create(questionData: any): Promise<Question> {
    const createdQuestion = new this.questionModel(questionData);
    return createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async findOne(id: string): Promise<Question> {
    return this.questionModel.findById(id).exec();
  }

  async update(id: string, questionData: any): Promise<Question> {
    return this.questionModel
      .findByIdAndUpdate(id, questionData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Question> {
    return this.questionModel.findByIdAndRemove(id).exec();
  }
}
