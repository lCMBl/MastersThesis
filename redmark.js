
// make some test red mark objects
test1 = [
    {date:new Date()}
]

test2 = [
    {date: new Date()},
    {date: new Date()}
]

test3 = [
    {date: new Date("2020-2-2")},
    {date: new Date("2020-3-15")}, // seems to be one date behind for some reason?
    {date: new Date()}
]

console.log(GetPermittedPostingDate(test1, 3))
console.log(GetPermittedPostingDate(test2, 3))
console.log(GetPermittedPostingDate(test3, 3))

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


function CheckRedMarks(redMarkObjects, redMarkCost) { // unoptimized (should just run until you've found the latest outstanding red mark.)
    let dayCounter = 0

    let tempCounter = 0

    let examiningDate = new Date()
    let currentDate = new Date()

    // let earliestOutstandingCost = new Date()

    for (i=0; i < redMarkObjects.length; i++) {
        if (examiningDate != redMarkObjects[i].date) {
            diff = (currentDate - examiningDate.getTime()) / (1000 * 60 * 60 * 24)
            tempCounter = Math.max(tempCounter - diff, 0) // make sure temp counter is > 0
            dayCounter += tempCounter
        }
        examiningDate = redMarkObjects[i].date
        tempCounter += redMarkCost
    }

    return dayCounter
    
}