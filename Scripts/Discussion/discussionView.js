
community = GetCommunity()
currentUser = GetCurrentUser()
discussions = GetActiveDiscussionsDict()
assignedCircle = GetCurrentCircle()
discussionStakes = GetDiscussionStakes()

stakeForm = document.getElementById("new_stake_form")
formUnlockCheckbox = document.getElementById("form_unlock_checkbox")
stakeForm.style.display = "none"

// get the index from the query param
const urlParams = new URLSearchParams(window.location.search)
const discussion = discussions[urlParams.get('subject')]
discussion.quorumNumber = community.discussionParams.quorumNumber

SetText("discussion_subject", discussion.subject)
SetText("discussion_description", discussion.description)
RenderElement("discussion_stats", GetRenderDiscusionStats, discussion)

// eventually, stakes collection will be found by date, not the other way around by having the round number set by the stake date.
SetText("current_round_num", DaysRemaining(new Date(discussion.cdate), new Date()) - 1) 
RenderCollection("positions_container", GetRenderStake, discussionStakes)


// activeDiscussions = []
// participatingDiscussions = []

// discussions.forEach(d => {
//     discussionInfo = {
//         assignedCircle:assignedCircle,
//         discussion:d,
//         community:community
//     }
    
//     if (d.participatingMemberHrefs.includes(currentUser.name)) {
//         participatingDiscussions.push(discussionInfo)
//     } else {
//         activeDiscussions.push(discussionInfo)
//     } 
// })

// SetText("group_name", community.name)

// // include in council stats the community, currentUser, and assignedCircle
// councilStats = {community:community, currentUser:currentUser, assignedCircle:assignedCircle}
// RenderElement("circle_stats_container", GetRenderCouncilStats, councilStats)

// RenderCollection("joined_discussions_container", GetRenderDiscussionStub, participatingDiscussions)
// RenderCollection("active_discussions_container", GetRenderDiscussionStub, activeDiscussions)


