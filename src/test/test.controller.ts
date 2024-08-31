import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Post(':testId/start')
  async startTest(@Param('testId') testId: string) {
    return this.testService.startTest();
  }

  @Post(':testId/questions/:questionId/answer')
  async submitAnswer(
    @Param('testId') testId: string,
    @Param('questionId') questionId: string,
    @Body() body: any,
  ) {
    return this.testService.submitAnswer(testId, questionId, body.answer);
  }

  @Get(':testId')
  async getTestDetails(@Param('testId') testId: string) {
    return this.testService.getTestDetails(testId);
  }
}
