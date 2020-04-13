community = GetCommunity()
discussions = GetArchivedDiscussionsDict()
discussionStakes = GetArchivedDiscussionStakes()

const urlParams = new URLSearchParams(window.location.search)
const discussion = discussions[urlParams.get('subject')]
discussion.quorumNumber = community.discussionParams.quorumNumber


SetText("discussion_subject", discussion.subject)
SetText("discussion_description", discussion.description)
RenderElement("discussion_stats", GetRenderDiscussionFinalStats, discussion)

SetText("final_round_number", DaysRemaining(new Date(discussion.cdate), new Date(discussionStakes[0].cdate)))

RenderCollection("stakes_container", GetRenderStake, discussionStakes)