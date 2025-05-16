namespace CurrencyConverter.Dtos
{
    public class ConversionResultDto
    {
        public string BaseCurrencyIso { get; set; }
        public decimal ExchangeRate { get; set; }
        public string RequestedTime { get; set; }
        public decimal ResultAmount { get; set; }
    }
}
