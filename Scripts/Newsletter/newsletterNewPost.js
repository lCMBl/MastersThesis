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

currentUser = GetLocal("currentUser")

var postForm = document.getElementById("new_post_form")
var submitButton = document.getElementById("submit_post")
postForm.addEventListener('submit', OnClickSubmit)

function OnClickSubmit(e) {
    e.preventDefault()

    let newPost = {
        title:postForm.post_title.value,
        body:postForm.post_body.value,
        broadcast:postForm.broadcast.checked,
        author:currentUser.name,
        href:"#",
        cdate:new Date(),
        pdate:new Date(new Date().getTime() + offset)
    }

    // store new post in app info
    let posts = GetLocal("foundPosts")
    pdateString = GetAmericanSlashDateString(newPost.pdate)
    if (!IsDefined(posts, pdateString)) {
        posts[pdateString] = []
    }
    posts[pdateString].push(newPost)
    // await save file here
    window.location.replace("/home/cmb/Desktop/MastersThesis/Community/Pages/newsletter_view.html")
}