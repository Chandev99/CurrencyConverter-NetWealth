using Microsoft.AspNetCore.Mvc;

namespace CurrencyConverter.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CurrencyConverterController : ControllerBase
    {

        private readonly ILogger<CurrencyConverterController> _logger;
        private readonly CurrencyConvertService _currencyService;

        public CurrencyConverterController(ILogger<CurrencyConverterController> logger, CurrencyConvertService currencyService)
        {
            _logger = logger;
            _currencyService = currencyService;
        }

        [HttpGet("currencies")]
        public async Task<IActionResult> GetCurrencies()
        {
            //return Ok();
            var currencies = await _currencyService.GetCurrenciesAsync();
            return Ok(currencies);
        }

        [HttpGet("convert")]
        public async Task<IActionResult> Convert([FromQuery] string from, [FromQuery] string to, [FromQuery] decimal amount)
        {
            var result = await _currencyService.ConvertCurrencyAsync(from, to, amount);
            return Ok(result);
        }
    }
}
