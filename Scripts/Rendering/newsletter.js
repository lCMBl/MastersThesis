/*
{
        title:"Free Vegetables!",
        body:"My garden has been growing wild this year. We have all sorts of vegetables if anyone wants some!",
        author:"Aunt Jemima",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"03-23-2020",
        pdate:"03-24-2020"
    }
*/


function GetRenderPost(post) {
    let allowMark = post.currentUser.name != post.author && !HasMarkedPost(post, post.allMarks, post.currentUser)
    if (post.pdate != GetAmericanSlashDateString(new Date())) {
        allowMark = false
    }
    let rmc = GetRedMarkCount(post, post.allMarks)
    let markCountString = rmc === 0 ? '': `<h4 style="color:red">${rmc}</h4>`
    return `
    <div>
    <h4>${post.title}</h4>
    <p>Posted by <a href="${post.href}">${post.author}</a></p>
    <p>${post.body}</p>
    ${allowMark ? `<button onclick="GiveRedMark('${post.author}', '${post.title}', '${post.pdate}')">X</button>` : ""}
    ${markCountString}
    </div>
    <br>
    `
}

function GetRenderPendingPost(post) {
    sameDate = DateCheck(new Date(), new Date(post.pdate))
    return `
    <div>
    <h4>${post.title}</h4>
    <p>Posted by <a href="${post.href}">${post.author}</a></p>
    <p>${post.body}</p>
    ${!sameDate ? `<p><a href="#">Delete this Post</a></p>` : ""}
    </div>
    <br>
    `
}

/*
{
        href:"Aunt JemimaFree Vegetables!",
        marker:"Scrouge",
        cdate:"03-24-2020"
    }
*/

function MarkMatchesPost(mark, post) {
    return mark.href === post.author + post.title
}

function HasMarkedPost(post, marks, user) {
    for (mi = 0; mi < marks.length; mi++) {
        m = marks[mi]
        if (m.marker == user.name && MarkMatchesPost(m, post)) {
            return true
        }
    }
    return false
}

function GetRedMarkCount(post, marks) { // and what else besides the marks collection?
    count = 0
    marks.forEach( m => {
        if (MarkMatchesPost(m, post)) {
            count += 1
        }
    })
    return count
}

function GetRenderBlurb(blurbText) {
    return `<h3>${blurbText}</h3>`
}