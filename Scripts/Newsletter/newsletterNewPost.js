currentDate = new Date()
offset = 28 * 60 * 60 * 1000
pubDate = new Date(currentDate.getTime() + offset)
cutoffDate = currentDate
// for the cutoff date, get today's date, but 8 pm.
remainingTimeS = Math.floor((cutoffDate - currentDate)/1000)
remainingTimeH = Math.floor(remainingTimeS / 3600)
remainingTimeS -= remainingTimeH * 3600
remainingTimeM = Math.floor(remainingTimeS / 60)
remainingTimeS == remainingTimeM * 60
// document.getElementById("time_to_publish").innerText = `${remainingTimeH}:${remainingTimeM}:${remainingTimeS}`
document.getElementById("publish_date").innerText = GetAmericanDateString(pubDate)