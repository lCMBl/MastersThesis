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
    allowMark = post.currentUser.name != post.author && !HasMarkedPost(post, post.allMarks, post.currentUser)
    return `
    <div>
    <h4>${post.title}</h4>
    <p>Posted by <a href="${post.href}">${post.author}</a></p>
    <p>${post.body}</p>
    ${allowMark ? `<p><a href="#">Give this post a Red Mark (eventually a button in the corner)</a></p>` : ""}
    <h4>${GetRedMarkCount(post, post.allMarks)}</h4>
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
    return mark.href == post.author + post.title
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