let searchForm = document.getElementById("community_search_form") 
// let submitButton = document.getElementById("submit_community_search")
searchForm.addEventListener("submit", CommunitySearch)

function CommunitySearch(e) {
    e.preventDefault()
    try {
        let zipCode = parseInt(searchForm.zipcode.value)
        let communities = GetLocal("communities") // not worried about optimization right now. Assume we can do clever queires
        let results = []
        communities.forEach(c => {
            if (c.location.zipCode === zipCode) {
                results.push(c)
            }
        })
        SaveLocal("communitySearchResults", results)
        SaveLocal("searchedZipCode", zipCode)
        window.location.href("/home/cmb/Desktop/MastersThesis/community_search_results.html")
        // window.location.replace removes the current address from the history list, making the back button unusable.
    } catch(e) {
        // this is where code to display the error message would go.
        console.warn(e)
    }
}