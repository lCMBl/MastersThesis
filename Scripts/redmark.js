// instead of using a number based method, embrace the dates
// have, in the user profile, a file which tracks the date that the user can post on
// it is the max between the current date and the permitted posting date
// optimization is to have new red marks add on to the permited posting date. directly, with verification 
// happening occasionally.

// to determine / verify 
// start at the oldest red mark.
// for each mark, the existing permitted posting date is the max of (publish date, previous permitted posting date)
// then, add the cost in days onto the permitted posting date. 
// finally, return the permitted posting date as a max of the current date, prevoious permitted posting date.
function GetPermittedPostingDate(redMarkObjects, redMarkCost) {
    permittedPD = new Date()
    dayDuration = 1000 * 60 * 60 * 24
    if (redMarkObjects.length > 0) {
        // set the permitted post date for the first red mark object.
        permittedPD = new Date(redMarkObjects[0].date.getTime() + (redMarkCost * dayDuration))

        // for each subsequent red mark object, take the max of that publish date, or the permittedPD and add cost time.
        for (i = 1; i < redMarkObjects.length; i++) {
            // console.log(">>>" + redMarkObjects[i].date)
            permittedPD = new Date(Math.max(redMarkObjects[i].date.getTime(), permittedPD.getTime()) + (redMarkCost * dayDuration))
        }

        
    }

    // return the max of the current date and the permittedPD for the current permittedPD
    currentDate = new Date()
    if (permittedPD.getTime() > currentDate.getTime()) {
        return permittedPD
    } else {
        return currentDate
    }
}

// create a red mark file (object, worry about actual serialization later)
function CreateRedMarkFile(targetPost, permittedPD, redMarkCost) {
    NotImplemented()
    // check to see if there is a pending post that would conflict with this mark
    newPPD = new Date(permittedPD.getTime() + (redMarkCost * 1000 * 60 * 60 * 24))

    pendingPosts = [] // need way to compare dates, not times.
    // pendingPosts = navigator.fileSystem.Query(/Posts/*, x.date.getTime() > new Date() && x.date.getTime() <= newPPD) 

    if (pendingPosts.length > 0) {
        // throw an exception
    }


    // get a link to the target post
    markObject = {
        date: new Date(),
        href: "target post address here"
    }
    // could add days to a permitted publishing date in a profile file (optimization)
    // for now, just create the file.
    // save file.

}