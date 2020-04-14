// for now, create dummy data. later, this will be a query based on distance to a lat long point
foundCommunities = [
    {
        name:"Jenkins Park",
        description:"This is the community centered on jenkins park, in southwest colorado springs.",
        established:true,
        distance:200,
        units:"feet",
        creationDate:"Jan 30, 2020",
        establishmentDate:"Mar 3, 2020",
        memberCount:16,
        // list of community params related to the discussion
        discussionParams:{
            councilRotationTime:30,
            quorumNumber:3, // could use different quorum numbers for each council later
            maxRounds:5
        }
    },
    {
        name:"Cheyenne Mountain",
        description:"Probably Norrad.",
        established:false,
        distance:1200,
        units:"meters",
        creationDate:"Mar 26, 2020",
        establishmentDate:"Apr 26, 2020",
        memberCount:3,
        // list of community params related to the discussion
        discussionParams:{
            councilRotationTime:30,
            quorumNumber:3, // could use different quorum numbers for each council later
            maxRounds:5
        }
    }
]

addressInfo = {searchRadius:2000, units:"meters", address:"1010 Jupiter dr."}

function GetCommunities() {
    return foundCommunities
}

function GetCommunitiesDict() {
    results = {}
    foundCommunities.forEach(c => {
        results[c.name] = c
    })
    return results
}

function GetAddressInfo() {
    return addressInfo
}