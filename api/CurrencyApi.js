import currencyapi from "@everapi/currencyapi-js"

export async function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const config = useRuntimeConfig()
    const client = new currencyapi(config.public.currencyApiKey)

    const response = await client.latest({
        base_currency: moedaOrigem,
        currencies: moedaDestino
    })

    const taxa = response.data[moedaDestino.toUpperCase()].value

    return (valor * taxa).toFixed(2)
}
