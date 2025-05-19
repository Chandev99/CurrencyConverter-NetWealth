import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currency-converter.service';
import { Currency } from 'src/models/currency-model';
import { ConversionResult } from 'src/models/converted-result-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: Currency[] = [];

  fromCurrency: string = '';
  toCurrency: string = '';
  amount: string = '';
  resultAmount: string = '';
  fxRate: string = '';

  constructor(private currencyService: CurrencyConverterService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }

  switchCurrencies(): void {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
  }

  onConvert() {
    if (!this.fromCurrency || !this.toCurrency || !this.amount) {
      alert('Please select both currencies and enter an amount.');
      return;
    }

    this.currencyService.convert(this.fromCurrency, this.toCurrency, this.amount).subscribe({
      next: (result: ConversionResult) => {
        this.resultAmount = result.resultAmount.toString();
        this.fxRate = result.exchangeRate.toString();
      },
      error: () => {
        alert('Conversion failed. Please try again.');
      }
    });
  }
}
