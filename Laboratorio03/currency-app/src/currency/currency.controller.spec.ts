import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { BadRequestException } from '@nestjs/common';

describe('CurrencyController', () => {
  let controller: CurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyController],
      providers: [CurrencyService],
    }).compile();

    controller = module.get<CurrencyController>(CurrencyController);

    // Mock del valor del dólar
    const service = module.get<CurrencyService>(CurrencyService);
    (service as any).dollarValue = 500;
  });

  it('🧪 debería lanzar BadRequest si el valor no es válido', () => {
    expect(() => controller.getDollarEquivalent(NaN)).toThrow(BadRequestException);
    expect(() => controller.getDollarEquivalent(-5)).toThrow(BadRequestException);
    expect(() => controller.getDollarEquivalent(0)).toThrow(BadRequestException);
  });

  it('🧪 debería retornar resultado si el valor es válido', () => {
    const result = controller.getDollarEquivalent(1000);
    expect(result).toEqual({ colones: 1000, dolares: 2 });
  });
});
