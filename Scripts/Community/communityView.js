foundCommunities = GetCommunitiesDict()

// get the index from the query param
const urlParams = new URLSearchParams(window.location.search)
const community = foundCommunities[urlParams.get('name')]

// set the community name text
SetText("community_name", community.name)

RenderElement("community_info", GetRenderCommunityInfo, community)
RenderElement("community_pledge", GetRenderCommunityPledgeLink, community)