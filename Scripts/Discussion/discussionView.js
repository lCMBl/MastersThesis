stakeForm = document.getElementById("new_stake_form")
stakeForm.style.display = "none"

formUnlockCheckbox = document.getElementById("form_unlock_checkbox")
formUnlockCheckbox.checked = false
formUnlockCheckbox.addEventListener("CheckboxStateChange", DisplayForm)

stakeSubmit = document.getElementById("submit_position")
stakeSubmit.style.display = "none"

submitUnlockCheckbox = document.getElementById("submit_unlock_checkbox")
submitUnlockCheckbox.checked = false
submit_unlock_checkbox.addEventListener("CheckboxStateChange", DisplaySubmit)

newPositionForm = document.getElementById("new_position_form")
newPositionForm.style.display = "none"

positionDropdown = document.getElementById("position_choice")
positionDropdown.addEventListener("ValueChange", DisplayNewPositionForm)


community = GetCommunity()
currentUser = GetCurrentUser()
discussions = GetActiveDiscussionsDict()
assignedCircle = GetCurrentCircle()
discussionStakes = GetDiscussionStakes()

// get the index from the query param
const urlParams = new URLSearchParams(window.location.search)
const discussion = discussions[urlParams.get('subject')]
discussion.quorumNumber = community.discussionParams.quorumNumber
newStakePositions = [...discussion.positions]
newStakePositions.push("Undecided")
newStakePositions.push("New Position")

SetText("discussion_subject", discussion.subject)
SetText("discussion_description", discussion.description)
RenderElement("discussion_stats", GetRenderDiscusionStats, discussion)

// eventually, stakes collection will be found by date, not the other way around by having the round number set by the stake date.
SetText("current_round_num", DaysRemaining(new Date(discussion.cdate), new Date()) - 1) 
RenderCollection("stakes_container", GetRenderStake, discussionStakes)

RenderCollection("position_choice", GetRenderPositionOption, newStakePositions)
positionDropdown.value = "Undecided"

function DisplayForm() {
    stakeForm.style.display = formUnlockCheckbox.checked ? "block" : "none"
}

function DisplaySubmit() {
    stakeSubmit.style.display = submitUnlockCheckbox.checked ? "block" : "none"
}

function DisplayNewPositionForm() {
    console.log("Changed to: " + positionDropdown.value)
    newPositionForm.style.display = positionDropdown.value == "New Position" ? "block" : "none"
}




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


