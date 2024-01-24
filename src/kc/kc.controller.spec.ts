import { Test, TestingModule } from '@nestjs/testing';
import { KcController } from './kc.controller';

describe('KcController', () => {
  let controller: KcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KcController],
    }).compile();

    controller = module.get<KcController>(KcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
