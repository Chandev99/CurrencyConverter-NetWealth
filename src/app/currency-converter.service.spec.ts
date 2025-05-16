import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyConverterService } from './currency-converter.service';
import { ConversionResult } from 'src/models/converted-result-model'

describe('CurrencyConverterService', () => {
  let currencyConverterService: CurrencyConverterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyConverterService]
    });

    currencyConverterService = TestBed.inject(CurrencyConverterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(currencyConverterService).toBeTruthy();
  });

  it('should fetch conversion result', () => {
    const mockResponse: ConversionResult = {
      baseCurrencyIso: 'GBP',
      exchangeRate: 1.5,
      requestedTime: 'now',
      resultAmount: 750
    };

    currencyConverterService.convert('GBP', 'USD', '500').subscribe(result => {
      expect(result).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('/currencyconverter/convert') &&
      req.params.get('from') === 'GBP' &&
      req.params.get('to') === 'USD' &&
      req.params.get('amount') === '500'
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
