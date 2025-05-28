import { Controller, Get, Param, ParseFloatPipe, BadRequestException } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller()
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('dollarEquivalent/:amount')
  getDollarEquivalent(@Param('amount', ParseFloatPipe) amount: number) {
    if (amount <= 0 || isNaN(amount)) {
      throw new BadRequestException('El monto debe ser un número positivo');
    }
    const result = this.currencyService.getDollarEquivalent(amount);
    return { colones: amount, dolares: result };
  }
}
