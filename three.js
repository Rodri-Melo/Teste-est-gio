// JSON simulado com os valores de faturamento diário
const faturamentoMensal = [
  { dia: 1, valor: 1000 },
  { dia: 2, valor: 0 },
  { dia: 3, valor: 2500 },
  { dia: 4, valor: 3000 },
  { dia: 5, valor: 0 },
  { dia: 6, valor: 2000 },
  { dia: 7, valor: 4500 },
  { dia: 8, valor: 0 },
  { dia: 9, valor: 1500 },
  { dia: 10, valor: 800 },
]

function calcularFaturamento(faturamentoMensal) {
  let menorValor = Number.MAX_SAFE_INTEGER
  let maiorValor = Number.MIN_SAFE_INTEGER
  let soma = 0
  let diasComFaturamento = 0

  faturamentoMensal.forEach((dia) => {
    if (dia.valor > 0) {
      soma += dia.valor
      diasComFaturamento++

      if (dia.valor < menorValor) {
        menorValor = dia.valor
      }
      if (dia.valor > maiorValor) {
        maiorValor = dia.valor
      }
    }
  })

  const mediaMensal = soma / diasComFaturamento

  let diasAcimaDaMedia = 0
  faturamentoMensal.forEach((dia) => {
    if (dia.valor > mediaMensal) {
      diasAcimaDaMedia++
    }
  })

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  }
}

const resultado = calcularFaturamento(faturamentoMensal)

console.log(`Menor valor de faturamento: R$ ${resultado.menorValor}`)
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor}`)
console.log(
  `Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`
)
