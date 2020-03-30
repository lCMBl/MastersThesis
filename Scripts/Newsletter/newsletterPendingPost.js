currentDate = new Date()
document.getElementById("publish_date").innerText = GetAmericanDateString(new Date( currentDate.getTime() + (24 * 60 * 60 * 1000)))

pendingPosts = GetPendingPosts()

RenderCollection("pending_posts_container", GetRenderPendingPost, pendingPosts)