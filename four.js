const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

function calcularPercentuais(faturamento) {
  const total = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  )

  const percentuais = {}
  for (const [estado, valor] of Object.entries(faturamento)) {
    percentuais[estado] = ((valor / total) * 100).toFixed(2) + '%'
  }

  return percentuais
}

const percentuais = calcularPercentuais(faturamentoEstados)

console.log('Percentual de representação por estado:')
for (const [estado, percentual] of Object.entries(percentuais)) {
  console.log(`${estado}: ${percentual}`)
}
