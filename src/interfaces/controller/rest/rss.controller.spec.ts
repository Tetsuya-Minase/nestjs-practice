import { Test, TestingModule } from '@nestjs/testing';
import { RssController } from './rss.controller';
import { RssParseService } from '../../../application/usecase/rss-parse.service';

describe('RssController', () => {
  let appController: RssController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RssController],
      providers: [RssParseService],
    }).compile();

    appController = app.get<RssController>(RssController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
