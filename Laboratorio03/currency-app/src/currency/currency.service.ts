import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService implements OnModuleInit {
  private dollarValue: number;
  private readonly logger = new Logger(CurrencyService.name);

  async onModuleInit() {
    await this.getDollarValue();
  }

 async getDollarValue(): Promise<number> {
  try {
    const response = await axios.get('https://api.hacienda.go.cr/indicadores/tc');
    const data = response.data as any;

    // ✅ Acceso correcto al valor del dólar
    const valorVenta = data.dolar?.venta?.valor;

    if (!valorVenta) {
     throw new Error('No se encontró el valor de venta en la respuesta de Hacienda');
    }

    this.dollarValue = valorVenta;
    return this.dollarValue;
  } catch (error) {
    this.logger.error('Error obteniendo el valor del dólar:', error.message);
    throw new Error('No se pudo obtener el valor del dólar');
  }
}

  getDollarEquivalent(colones: number): number {
    if (!this.dollarValue) {
      throw new Error('El valor del dólar aún no ha sido cargado');
    }
    return colones / this.dollarValue;
  }
}
