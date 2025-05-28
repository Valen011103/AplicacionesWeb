import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);

    // 🧪 1. Mockeamos el valor del dólar fijo
    (service as any).dollarValue = 500;
  });

  it('🧪 debería retornar el equivalente correcto en dólares', () => {
    // 🧪 2. Número estático
    const colones = 1000;
    const expectedDollars = 2;

    const result = service.getDollarEquivalent(colones);
    expect(result).toBe(expectedDollars);
  });
});

