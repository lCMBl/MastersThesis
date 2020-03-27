foundCommunities = GetCommunities()
addressInfo = GetAddressInfo()

RenderCollection("results_container", GetRenderCommunityBlurb, foundCommunities)
RenderElement("address_info", GetRenderAddressInfo, addressInfo)
