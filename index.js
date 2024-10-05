import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI('cur_live_bDrDEdZVKsAtiqpnrJFD4nk7ipz4P1x6aG2r3wfk');

export async function free_currency_converter(fromCurrency,toCurrency,units){
    const res=await currencyApi.latest({
        base_currency:fromCurrency,
        currencies:toCurrency

    })

    const today_rate=res.data[toCurrency]
    return today_rate*units


}