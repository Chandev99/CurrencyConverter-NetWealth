using System.Collections.Generic;
using System.Text.Json.Serialization;

public class CurrencyModel
{
    [JsonPropertyName("available_currencies")]
    public Dictionary<string, string> AvailableCurrencies { get; set; }

    [JsonPropertyName("endpoint")]
    public string Endpoint { get; set; }  //not sent to front end
}
