function DateCheck(dateOne, dateTwo) {
    return dateOne.getDate() == dateTwo.getDate() && dateOne.getMonth() == dateTwo.getMonth() && dateOne.getFullYear() == dateTwo.getFullYear()
}

function GetNewsletterFolderName(dateObject) {
    // have the newsletter folders be in the format year-month-day
    return '' + dateObject.getFullYear() + "-" + (dateObject.getMonth() + 1) + "-" + dateObject.getDate()
}

function GetPostFileName(post) {
    var time = new Date().getTime()
    return post.author + "_" + post.title + '_' + time +"_post.json"
}

function GetAmericanDateString(dateObject) {
    return '' + (dateObject.getMonth() + 1) + '-' + dateObject.getDate() + "-" + dateObject.getFullYear()
}

function NotImplemented() {
    throw {name: "NotImplemented", message: "The calling function hasn't been implemented."}
}

function IsDefined(obj, prop) {
    return typeof obj != "undefined" && typeof opj[prop] != "undefined"
}