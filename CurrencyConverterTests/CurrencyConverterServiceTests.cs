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

namespace CurrencyConvertServiceTests;

[TestFixture]
public class CurrencyConvertServiceTests
{
    private Mock<HttpMessageHandler> _handlerMock;
    private HttpClient _httpClient;
    private CurrencyConvertService _service;
    private Mock<IConfiguration> _configMock;

    [SetUp]
    public void Setup()
    {
        _handlerMock = new Mock<HttpMessageHandler>();
        _httpClient = new HttpClient(_handlerMock.Object);
        _configMock = new Mock<IConfiguration>();
        _configMock.Setup(c => c["CurrencyConvertApiKey"]).Returns("test-api-key");

        _service = new CurrencyConvertService(_httpClient, _configMock.Object);
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
                ItExpr.IsAny<HttpRequestMessage>(),
                ItExpr.IsAny<CancellationToken>())
            .ReturnsAsync(response);

        // Act
        var result = await _service.ConvertCurrencyAsync("GBP", "USD", 500);

        // Assert
        Assert.AreEqual("GBP", result.BaseCurrencyIso);
        Assert.AreEqual(1.5, result.ExchangeRate);
        Assert.AreEqual(750, result.ResultAmount);
        Assert.AreEqual("now", result.RequestedTime);
    }

    [TearDown]
    public void TearDown()
    {
        _httpClient.Dispose();
    }

}
