
community = GetCommunity()
currentUser = GetCurrentUser()
discussions = GetActiveDiscussions()
assignedCircle = GetCurrentCircle()

activeDiscussions = []
participatingDiscussions = []

discussions.forEach(d => {
    discussionInfo = {
        assignedCircle:assignedCircle,
        discussion:d,
        community:community
    }
    
    if (d.participatingMemberHrefs.includes(currentUser.name)) {
        participatingDiscussions.push(discussionInfo)
    } else {
        activeDiscussions.push(discussionInfo)
    } 
})

SetText("group_name", community.name)

// include in council stats the community, currentUser, and assignedCircle
councilStats = {community:community, currentUser:currentUser, assignedCircle:assignedCircle}
RenderElement("circle_stats_container", GetRenderCouncilStats, councilStats)

RenderCollection("joined_discussions_container", GetRenderDiscussionStub, participatingDiscussions)
RenderCollection("active_discussions_container", GetRenderDiscussionStub, activeDiscussions)


