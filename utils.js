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

// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
function Shuffle(array) {

	var currentIndex = array.length
	var temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array

}