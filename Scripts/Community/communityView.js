foundCommunities = GetLocalDict("communities", "name")

// get the index from the query param
const urlParams = new URLSearchParams(window.location.search)
const community = foundCommunities[urlParams.get('name')]

// set the community name text
SetText("community_name", community.name)

RenderElement("community_info", GetRenderCommunityInfo, community)
RenderElement("community_pledge", GetRenderCommunityPledgeLink, community)

// get element id pledge_link (link href is just #)
// set (mount - TODO) the current user's communityObject to this community (the object, not just a name)
// redirect the user to the newsletter view or the pledged view.
let pledgeLink = document.getElementById("pledge_link")
pledgeLink.addEventListener('click', JoinCommunity)

function JoinCommunity(e) {
    e.preventDefault()
    
    let result = confirm(`You are about to join ${community.name}. Are you sure you want to do this?`)
    if (result) {
        let currentUser = GetLocal("currentUser")
        currentUser.community =  community.name
        currentUser.communityObject = community
        // when this actually mounts to the community drive, other queries will pick up the changed member count.
        SaveLocal("currentUser", currentUser)
        if (community.established) {
            window.location.replace("Community/Pages/newsletter_view.html")
        } else {
            window.location.replace("community_pledged.html")
        } 
    }

}
