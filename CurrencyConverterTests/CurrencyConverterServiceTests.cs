using NUnit.Framework;
using Moq;
using Moq.Protected;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CurrencyConverter.Models;
using CurrencyConverter.Dtos;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using CurrencyConverter.Services;

namespace CurrencyConverter.CurrencyConverterServiceTests;

[TestFixture]
public class CurrencyConverterServiceTests
{
    private Mock<HttpMessageHandler> _handlerMock;
    private HttpClient _httpClient;
    private CurrencyConverterService _service;
    private Mock<IConfiguration> _configMock;

    [SetUp]
    public void Setup()
    {
        _handlerMock = new Mock<HttpMessageHandler>();
        _httpClient = new HttpClient(_handlerMock.Object);
        _configMock = new Mock<IConfiguration>();
        _configMock.Setup(c => c["CurrencyConvertApiKey"]).Returns("test-api-key");

        _service = new CurrencyConverterService(_httpClient, _configMock.Object);
    }

    [Test]
    public async Task ConvertCurrencyAsync_ReturnsExpectedResult()
    {
        // Arrange
        var mockModel = new ConversionResultModel
        {
            BaseCurrencyIso = "GBP",
            ResultCurrencyIso = "USD",
            ExchangeRate = 1.5m,
            RequestedTime = "now",
            ResultAmount = 750,
            Endpoint = "convert"
        };

        var response = new HttpResponseMessage
        {
            StatusCode = HttpStatusCode.OK,
            Content = new StringContent(JsonSerializer.Serialize(mockModel))
        };

        _handlerMock
            .Protected()
            .Setup<Task<HttpResponseMessage>>(
                "SendAsync",
                ItExpr.Is<HttpRequestMessage>(req => req.RequestUri.ToString().Contains("convert")),
                ItExpr.IsAny<CancellationToken>())
            .ReturnsAsync(response);

        // Act
        var result = await _service.ConvertCurrencyAsync("GBP", "USD", 500);

        // Assert
        Assert.IsNotNull(result);

        Assert.That(result.BaseCurrencyIso, Is.EqualTo("GBP"));
        Assert.That(result.ExchangeRate, Is.EqualTo(1.5));
        Assert.That(result.ResultAmount, Is.EqualTo(750));
        Assert.That(result.RequestedTime, Is.EqualTo("now"));
    }

    [Test]
    public void ConvertCurrencyAsync_WhenHttpRequestFails_ThrowsException()
    {
        // Arrange
        _handlerMock
            .Protected()
            .Setup<Task<HttpResponseMessage>>(
                "SendAsync",
                ItExpr.Is<HttpRequestMessage>(req => req.RequestUri.ToString().Contains("convert")),
                ItExpr.IsAny<CancellationToken>())
            .ThrowsAsync(new HttpRequestException("Network failure"));

        // Act & Assert
        var ex = Assert.ThrowsAsync<Exception>(async () => await _service.ConvertCurrencyAsync("GBP", "USD", 500));
        Assert.That(ex.Message, Is.EqualTo("Error converting amount via API."));
    }

    [Test]
    public async Task GetCurrenciesAsync_ReturnsExpectedCurrencyList()
    {
        // Arrange
        var mockCurrencyModel = new CurrencyModel
        {
            AvailableCurrencies = new Dictionary<string, string>
            {
                { "GBP", "British Pound" },
                { "USD", "US Dollar" }
            }
        };

        var response = new HttpResponseMessage
        {
            StatusCode = HttpStatusCode.OK,
            Content = new StringContent(JsonSerializer.Serialize(mockCurrencyModel))
        };

        _handlerMock
            .Protected()
            .Setup<Task<HttpResponseMessage>>(
                "SendAsync",
                ItExpr.Is<HttpRequestMessage>(req => req.RequestUri.ToString().Contains("live_currencies_list")),
                ItExpr.IsAny<CancellationToken>())
            .ReturnsAsync(response);

        // Act
        var result = await _service.GetCurrenciesAsync();

        // Assert
        Assert.IsNotNull(result);
        Assert.That(result.Count, Is.EqualTo(2));

        var gbp = result.FirstOrDefault(c => c.ISO == "GBP");
        Assert.That(gbp.CurrencyName, Is.EqualTo("British Pound"));

        var usd = result.FirstOrDefault(c => c.ISO == "USD");
        Assert.That(usd.CurrencyName, Is.EqualTo("US Dollar"));
    }

    [Test]
    public void GetCurrenciesAsync_WhenHttpRequestFails_ThrowsException()
    {
        // Arrange
        _handlerMock
            .Protected()
            .Setup<Task<HttpResponseMessage>>(
                "SendAsync",
                ItExpr.Is<HttpRequestMessage>(req => req.RequestUri.ToString().Contains("live_currencies_list")),
                ItExpr.IsAny<CancellationToken>())
            .ThrowsAsync(new HttpRequestException("Network failure"));

        // Act & Assert
        var ex = Assert.ThrowsAsync<Exception>(async () => await _service.GetCurrenciesAsync());
        Assert.That(ex.Message, Is.EqualTo("Error fetching Currencies List from API."));
    }


    [TearDown]
    public void TearDown()
    {
        _httpClient.Dispose();
    }

}
