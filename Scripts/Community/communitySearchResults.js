let foundCommunities = GetLocal("communitySearchResults")
let zipCode = GetLocal("searchedZipCode")

RenderCollection("results_container", GetRenderCommunityBlurb, foundCommunities)
RenderElement("zipcode_search_reminder", GetRenderZipcodeSearchReminder, zipCode)
