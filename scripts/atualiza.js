console.log('atualizando...')

async function getURL(url) {
    return (await fetch(url)).json();
}

let preco_iphone_brasil_brl = 7299.0
let preco_iphone_eua_usd = 799.0;

let preco = 0.0
async function calcula_precos() {
    let from = 'USD';
    let to = 'BRL';
    let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);
    let rate = rates[to];
    let info = `1 dólar = ${rate} reais`;
    preco = parseFloat(rate);
    let preco_iphone_eua_brl = preco * preco_iphone_eua_usd;
    let diferenca = ((preco_iphone_brasil_brl - preco_iphone_eua_brl) / preco_iphone_eua_brl)
    let dif_formatada = (diferenca * 100.0).toFixed(2)
    const preco_formatado = preco_iphone_eua_brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    preco_eua = document.getElementsByClassName('preco-eua')[0];
    preco_eua.innerHTML = `${preco_formatado}`
    preco_brasil = document.getElementsByClassName('preco-brasil')[0];
    const preco_formatado_brasil = preco_iphone_brasil_brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    preco_brasil.innerHTML = `${preco_formatado_brasil} 👉 (${dif_formatada}% mais caro)`
    console.log(info);
    console.log(preco_formatado);
}
calcula_precos();
