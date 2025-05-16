using System.Text.Json.Serialization;

namespace CurrencyConverter.Models
{
    public class ConversionResultModel
    {
        [JsonPropertyName("base_currency")]
        public string BaseCurrencyIso { get; set; }

        [JsonPropertyName("quote_currency")]
        public string ResultCurrencyIso { get; set; }

        [JsonPropertyName("quote")]
        public decimal ExchangeRate { get; set; }

        [JsonPropertyName("requested_time")]
        public string RequestedTime { get; set; }

        [JsonPropertyName("timestamp")]
        public long Timestamp { get; set; }

        [JsonPropertyName("total")]
        public decimal ResultAmount { get; set; }

        [JsonPropertyName("endpoint")]
        public string Endpoint { get; set; } // not sent to frontend
    }
}
