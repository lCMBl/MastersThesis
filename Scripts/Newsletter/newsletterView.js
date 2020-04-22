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

// let markLinks = 


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
    // TODO make sure to count each mark once per author.
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

// = red mark functions
//

function GiveRedMark(targetAuthor, targetTitle, date) {
    // rely on text from button to give target for red mark
    // because text could be modified before sending here, 
    // need to check:
    // a) the post was published the same day the mark was created.
    // b) this user is not the author of the post
    // c) this user doesn't have any pending posts for tomorrow.
    // d) this user hasn't already marked this post.
    // after all of those are checked, mark the post!
    console.log(`Giving red mark to ${targetAuthor}'s post titled ${targetTitle}`)
    // first, retrieve the post object specified.
    let postsForDay = GetLocal("foundPosts")[date] || []
    let targetPost = null
    for (let i = 0; i < postsForDay.length; i++ ) {
        let p = postsForDay[i]
        if (p.title === targetTitle && p.author === targetAuthor) {
            targetPost = p
            break
        }
    }

    if (targetPost === null) {
        console.warn("No matching post found")
        return false
    }
    // a)
    let sameDayAsPublished = DateCheck(new Date(), new Date(targetPost.pdate))
    // b)
    let validAuthor = targetPost.author != currentUser.name
    // c)
    let tomorrowsDate = new Date(new Date().getTime() + (24 * 3600000))
    let postsForTomorrow = GetLocal("foundPosts")[GetAmericanSlashDateString(tomorrowsDate)] || []
    let noPendingPosts = true
    postsForTomorrow.forEach(p => {
        if (p.author === currentUser.name) {
            noPendingPosts = false
        }
    })
    // d) 
    let hasntMarkedPost = true
    marks.forEach(m => {
        if (m.marker === currentUser.name && m.href === targetPost.author+targetPost.title) {
            hasntMarkedPost = false
        }
    })

    // finally, mark the post.
    if (sameDayAsPublished && validAuthor && noPendingPosts && hasntMarkedPost) {
        // save mark
        let dateString = GetAmericanSlashDateString(new Date())
        // if allmark doesnt have this date, add it
        if (!IsDefined(allMarks, dateString)) {
            allMarks[dateString] = []
        }
        // push this mark to the appropriate day
        allMarks[dateString].push({
            href:targetPost.author+targetPost.title,
            marker:currentUser.name,
            cdate:dateString
        })

        // save local marks.
        SaveLocal("foundRedMarks", allMarks)
    } else if (!noPendingPosts) {
        alert("Cannot give a post a red mark while you have posts that are pending publication")
    } else if (!sameDayAsPublished) {
        alert("Cannot mark a post after the day of its publication")
    }

}