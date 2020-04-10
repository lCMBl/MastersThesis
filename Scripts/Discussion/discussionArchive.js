community = GetCommunity()
discussions = GetActiveDiscussions() // this is just a placeholder. Instead of using active discussions,
// use the result of a search function instead.
discussions.forEach(d => {
    d.quorumNumber = community.discussionParams.quorumNumber
})

RenderCollection("archive_search_results_container", GetRenderArchiveDiscussionStub, discussions)
