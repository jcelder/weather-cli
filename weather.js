const http = require('http')

const city = process.argv.slice(2).join(' ')
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=c9413c58c7e5e49759c38829914ec6a2`

http.get(url, (res) => {
  let rawData = ''
  res.on('data', (chunk) => { rawData += chunk })
  res.on('end', () => {
    const parsedData = JSON.parse(rawData)
    const temp = parsedData.main.temp * (9 / 5) - 459.67
    console.log(`Temperature in Fahrenheit: ${temp.toFixed([3])}`)
  })
})
