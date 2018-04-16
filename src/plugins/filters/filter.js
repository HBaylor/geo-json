import Vue from 'vue'

Vue.filter('formatMoney', value => {
  let result = []
  let counter = 0
  let number
  if (isNaN(Number(value))) {
    number = 0
  } else {
    number = Number(value).toFixed(2)
  }
  let round = number.split('.')[0]
  let fixed = number.split('.')[1]
  for (let i = round.length - 1; i >= 0; i--) {
    counter++
    result.unshift(number[i])
    if (!(counter % 3) && i !== 0) {
      result.unshift(',')
    }
  }
  return `${result.join('')}.${fixed}`
})
