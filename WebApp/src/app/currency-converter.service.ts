import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency-model';
import { ConversionResult } from '../models/converted-result-model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private http = inject(HttpClient);
  private apiURL = environment.apiURL + 'currencyconverter'; 

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.apiURL}/currencies`);
  }

  convert(from: string, to: string, amount: string) {
    return this.http.get<ConversionResult>(`${this.apiURL}/convert?from=${from}&to=${to}&amount=${amount}`);
  }
}
