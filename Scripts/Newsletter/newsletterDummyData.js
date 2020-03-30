// for now, create dummy data. later, this will be a query based on distance to a lat long point


currentUser = {
    name:"Christian"
}

blurbOfDay = "Consider Starting a community garden for a bonding experience and fresh fruit and veggies!"

// author information will be pulled from the drive in which the post is actually stored.
// for now, add it to the json object.
foundPosts = [
    {
        title:"Free Vegetables!",
        body:"My garden has been growing wild this year. We have all sorts of vegetables if anyone wants some!",
        author:"Aunt Jemima",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"03-23-2020",
        pdate:"03-24-2020"
    },
    {
        title:"Need help with insulation",
        body:"Hey all, I really need some help getting insulation put up in my attic. " +
        "I'll have pizza for anyone that wants to help me out!",
        author:"Christian",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"03-23-2020",
        pdate:"03-24-2020"
    },
    {
        title:"Get Off My Lawn",
        body:"All you kids need to get off my lawn! Inone of use should even be able to post today because we all made red marks!",
        author:"Scrouge",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"03-23-2020",
        pdate:"03-24-2020"
    }
]

// how to handle red marks? store marks in seperate files for sure, so need to be a separate collection.
// also, link by title and author for now, but eventually a red mark file will be a .goto with appropriate metadata.
foundMarks = [
    {
        href:"Aunt JemimaFree Vegetables!",
        marker:"Scrouge",
        cdate:"03-24-2020"
    },
    {
        href:"ScrougeGet Off My Lawn",
        marker:"Christian",
        cdate:"03-24-2020"
    },
    {
        href:"ScrougeGet Off My Lawn",
        marker:"Aunt Jemima",
        cdate:"03-24-2020"
    }
]

function GetRedMarks() {
    return foundMarks // actually need to query by date here.
}

// function GetRedMarks(date) { // is this even reasonable? wouldn't we just query for marks of a specific day?
//     results = []
//     foundMarks.forEach(m => {
//         if (new Date(m.cdate).getTime() == date.getTime()) {
//             results.push(m)
//         }
//     })
//     return results
// }

function GetPosts() {
    return foundPosts // again, we'll actually need to query by date here.
}

// function GetPosts(date) {
//     results = []
//     foundPosts.forEach(p => {
//         if (new Date(p.pdate).getTime() == date.getTime()) {
//             results.push(p)
//         }
//     })
//     return results
// }

function GetCurrentUser() {
    return currentUser
}

function GetBlurb() {
    return blurbOfDay
}