// for now, create dummy data. later, this will be a query based on distance to a lat long point
foundCommunities = [
    {
        name:"Jenkins Park",
        description:"This is the community centered on jenkins park, in southwest colorado springs.",
        established:true,
        distance:200,
        units:"feet",
        creationDate:"Jan 30, 2020",
        establishmentDate:"Mar 3, 2020"
    },
    {
        name:"Cheyenne Mountain",
        description:"Probably Norad.",
        established:false,
        distance:1200,
        units:"meters",
        creationDate:"Mar 26, 2020",
        establishmentDate:"Apr 26, 2020"
    }
]

addressInfo = {searchRadius:2000, units:"meters", address:"1010 Jupiter dr."}

RenderCollection("results_container", GetRenderCommunityBlurb, foundCommunities)
RenderElement("address_info", GetRenderAddressInfo, addressInfo)
