// this is all filtering which will be done with queries instead
let allPosts = GetLocal("foundPosts")
let allMarks = GetLocal("foundRedMarks")
let currentUser = GetLocal("currentUser")

let dateSearchBar = document.getElementById("newsletter_view_date")
dateSearchBar.addEventListener('keyup', SearchOnEnter)

let prevDayArrow = document.getElementById("prev_date")
prevDayArrow.addEventListener('click', PreviousDay)

let nextDayArrow = document.getElementById("next_date")
nextDayArrow.addEventListener('click', NextDay)

let foundPosts = []
let marks = []

// get the date from query params, if it exists.
const urlParams = new URLSearchParams(window.location.search)
const urlDate = urlParams.get('date')
const queryDate = GetQueryDate(urlDate)
dateSearchBar.value = GetAmericanSlashDateString(queryDate)

RenderNewsletterForDay()

// RenderCollection("newsletter_posts_container", GetRenderPost, foundPosts)
RenderElement("blurb", GetRenderBlurb, "Consider Starting a community garden for a bonding experience and fresh fruit and veggies!")

// TODO make sure that today's newsletter isn't published until 8 am.

function SearchOnEnter(e) {
    e.preventDefault()

    if (e.keyCode === 13) {
        
        GoToNewsletterPage(dateSearchBar.value)
    }
}

function GoToNewsletterPage(date) {
    let result = new Date()
    if (date instanceof Date) {
        result = date
    } else {
        try {
            result = new Date(date)
        } catch (e) {
            console.warn(e)
        } 
    }

    let currentPublishedTime = new Date(new Date().getTime() - (8 * 3600000))
    if (isNaN(result.getTime()) || result.getTime() >= currentPublishedTime.getTime() ) {
        result = currentPublishedTime
    }

    window.location.href = `newsletter_view.html?date=${GetAmericanSlashDateString(result)}`
}

function IncrementDateString(offset) {
    let ndate = new Date(dateSearchBar.value)
    return GetAmericanSlashDateString(new Date(ndate.getTime() + offset))
}

function NextDay() {
    GoToNewsletterPage(IncrementDateString(24 * 3600000))
}

function PreviousDay() {
    GoToNewsletterPage(IncrementDateString(-24 * 3600000))
}

function RenderNewsletterForDay() {

    foundPosts = allPosts[dateSearchBar.value] || []
    marks = allMarks[dateSearchBar.value] || []

    foundPosts.forEach(p => {
        p.allMarks = marks
        p.currentUser = currentUser
    })
    RenderCollection("newsletter_posts_container", GetRenderPost, foundPosts)
}

function GetQueryDate(urlDateString) {
    let result = new Date()
    if (urlDateString !== null) {
        try {
            result = new Date(urlDateString)
        } catch (e) {
            console.warn(e)
        }   
    }

    let currentPublishedTime = new Date(new Date().getTime() - (8 * 3600000))
    if (isNaN(result.getTime()) || result.getTime() >= currentPublishedTime.getTime() ) {
        result = currentPublishedTime
    }
    
    return result
}