let newForm = document.getElementById("community_new_form") 
// let submitButton = document.getElementById("submit_community_search")
newForm.addEventListener("submit", NewCommunity)

function NewCommunity(e) {
    e.preventDefault()
    try {
        let zipCode = parseInt(newForm.zipcode.value)
        let name = newForm.name.value
        let desc = newForm.description.value

        let cdate = new Date()
        let edate = new Date(cdate.getTime() + (7 * 24 * 60 * 60 * 1000)) // set the establishment date 7 days from creation

        let communities = GetLocal("communities") // not worried about optimization right now. Assume we can do clever queires
        let currentUser = GetLocal("currentUser")
        

        let newCommunity = {
            name:name,
            description:desc,
            established:false,
            distance:-1,
            units:"feet",
            creationDate:cdate,
            establishmentDate:edate,
            memberCount:1, // TODO: automatically pledge creating user to this community
            // list of community params related to the discussion
            discussionParams:{
                councilRotationTime:30,
                quorumNumber:3, // could use different quorum numbers for each council later
                maxRounds:5
            },
            location:{
                zipCode:zipCode
            }
        }

        communities.push(newCommunity)
        currentUser.community = name
        currentUser.communityObject = newCommunity
        SaveLocal("communities", communities)
        SaveLocal("currentUser", currentUser)
        // window.location.href = "/home/cmb/Desktop/MastersThesis/community_search_results.html"
        window.location.replace("community_pledged.html") // removes the current address from the history list, making the back button unusable.
    } catch(e) {
        // this is where code to display the error message would go.
        console.warn(e)
    }
}