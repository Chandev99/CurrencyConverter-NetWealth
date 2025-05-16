using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using CurrencyConverter.Controllers;
using Microsoft.Extensions.Configuration;
using CurrencyConverter.Dtos;
using CurrencyConverter.Models;

namespace CurrencyConverter.Services;
public class CurrencyConvertService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;
    private readonly string _baseUrl = "https://marketdata.tradermade.com/api/v1";

    public CurrencyConvertService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _apiKey = config["CurrencyConvertApiKey"];
    }

    public async Task<ConversionResultDto> ConvertCurrencyAsync(string from, string to, decimal amount)
    {
        var url = $"{_baseUrl}/convert?api_key={_apiKey}&from={from}&to={to}&amount={amount}";
        var response = await _httpClient.GetAsync(url);
        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();
        var model = JsonSerializer.Deserialize<ConversionResultModel>(json);

        if (model == null)
        {
            throw new InvalidOperationException("No data was returned.");
        }
        else
        {
            return mapToDto(model);
        }
    }

    public async Task<List<CurrencyDto>> GetCurrenciesAsync()
    {
        var url = $"{_baseUrl}/live_currencies_list?api_key={_apiKey}";
        var response = await _httpClient.GetAsync(url);
        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();
        var model = JsonSerializer.Deserialize<CurrencyModel>(json);

        var currencyItems = model.AvailableCurrencies
            .Select(d => new CurrencyDto { ISO = d.Key, CurrencyName = d.Value })
            .ToList();

        return currencyItems ?? new List<CurrencyDto>();
    }

    private ConversionResultDto mapToDto(ConversionResultModel model)
    {
        return new ConversionResultDto
        {
            BaseCurrencyIso = model.BaseCurrencyIso,
            ExchangeRate = model.ExchangeRate,
            RequestedTime = model.RequestedTime,
            ResultAmount = model.ResultAmount
        };
    }
}
