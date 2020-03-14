function CheckRedMarks(redMarkObjects, redMarkCost) {
    let dayCounter = 0

    let tempCounter = 0

    let examiningDate = new Date()
    let currentDate = new Date()

    let earliestOutstandingCost = new Date()

    for (i=0; i < redMarkObjects.length; i++) {
        if (examiningDate != redMarkObjects[i].date) {
            diff = (currentDate - examiningDate.getTime()) / (1000 * 60 * 60 * 24)
            tempCounter = Math.max(tempCounter - diff, 0) // make sure temp counter is > 0
            dayCounter += tempCounter
            if (tempCounter > 0) {
                earliestOutstandingCost = redMarkObjects[i].date
            }
        }
        examiningDate = redMarkObjects[i].date
        tempCounter += redMarkCost
    }
    
}