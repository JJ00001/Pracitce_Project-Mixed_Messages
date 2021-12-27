var summaryAdjArr = ['rainy', 'wet', 'humid', 'dry', 'arid', 'frigid', 'foggy', 'windy', 'stormy', 'breezy', 'windless', 'calm', 'still']

var dayAdjArr = ['long', 'dark', 'cold', 'black', 'stormy', 'clear', 'wild', 'quiet', 'terrible', 'criminal', 'silent', 'awful']

var nightAdjArr = ['happy', 'peaceful', 'wonderful', 'inspirational', 'bright', 'energetic', 'lovely', 'glorious', 'fabulous', 'grand']

var driveAdjArr = ['dangerously', 'aggressively', 'carefully', 'drunk', 'fast', 'erraticaly', 'poorly', 'dominantly', 'recklessly', 'reasonably']


function randomWeatherForecast() {

    var summaryAdj = summaryAdjArr[Math.floor(Math.random() * summaryAdjArr.length)];
    var nightAdj = nightAdjArr[Math.floor(Math.random() * nightAdjArr.length)];
    var dayAdj = dayAdjArr[Math.floor(Math.random() * dayAdjArr.length)];
    var driveAdj = driveAdjArr[Math.floor(Math.random() * driveAdjArr.length)];

    console.log(`Tomorrow, the weather will be ${summaryAdj}! While the night is ${nightAdj}, the day will be ${dayAdj}. So please drive ${driveAdj}!`)

}

randomWeatherForecast()