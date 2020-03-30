foundPosts = GetPosts()
marks = GetRedMarks()
currentUser = GetCurrentUser()

foundPosts.forEach(p => {
    p.allMarks = marks
    p.currentUser = currentUser
})


RenderCollection("newsletter_posts_container", GetRenderPost, foundPosts)
RenderElement("blurb", GetRenderBlurb, GetBlurb())