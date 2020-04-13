community = {
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
}

currentUser = {
    name:"Christian"
}


// also need to include unique variables for moderator and agenda circles as well (circle instead of council)
discussionBoardCircle = {
    name:"Community Circle",
    cdate:"03/24/2020",
    memberHrefs:[
        "Aunt Jemima",
        "Scrouge",
        "Christian",
        "Bobby",
        "Franky",
        "Test1",
        "Test2",
        "Test3",
        "Test4",
        "Test5"
    ]
}

// need moderator and agenda collections as well.
foundDiscussionBoardDiscussions = [
    {
        subject:"Setting up a local farmer's market",
        description:`We have some very talented gardeners here, like Aunt Jemima and
        her tomatoes, and Scrouge and his prunes. Lets set up a space for them to 
        strut their stuff! This would also let us support their effors to enrich our community.
        The real question is, if we do this, where would we put it?`,
        // positions:{ // need a way to sanitize inputs for use as ID's?
        //     the_old_lot:"The old lot",
        //     the_community_park:"The community park",
        //     no_farmers_market:"No farmer's market"
        // },
        positions:[
            "The old lot",
            "The community park",
            "No farmer's market"
        ],
        participatingMemberHrefs:[
            "Aunt Jemima",
            "Scrouge",
            "Christian"
        ],
        cdate:"03/24/2020",
        decision:"Undecided",
        ddate:"null",
        deadline:"03/29/2020"
    }
]

foundDiscussionBoardStakes = [
    {
        author:"Christian", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"the_old_lot",
        explanation:`By using the old lot, we'll clean up an eyesore 
        and at the same time gain more usable space!`,
        cdate:"03/24/2020"
    },
    {
        author:"Aunt Jemima", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"the_old_lot",
        explanation:`We're already using the park pretty frequntly.
        Best not to overload it.`,
        cdate:"03/24/2020"
    },
    {
        author:"Scrouge", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"no_farmers_market",
        explanation:`Both the park and the old lot see a lot of traffic. Its already bad enough!
        I dont want any more traffic!`,
        cdate:"03/24/2020"
    }
]

foundArchivedDiscussions = [
    {
        subject:"Should we Stay Inside?",
        description:`It's cold and there's a virus. Should we stay inside today?`,
        // positions:{ // need a way to sanitize inputs for use as ID's?
        //     the_old_lot:"The old lot",
        //     the_community_park:"The community park",
        //     no_farmers_market:"No farmer's market"
        // },
        positions:[
            "Yes",
            "No"
        ],
        participatingMemberHrefs:[
            "Aunt Jemima",
            "Scrouge",
            "Christian"
        ],
        cdate:"03/24/2020",
        decision:"Yes",
        ddate:"03/26/2020",
        deadline:"03/29/2020"
    }
]

// need moderator and agenda collections as well. use stakes to describe the positions members take.
foundArchiveStakes = [
    {
        author:"Christian", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"No",
        explanation:`I'm going crazy in here!`,
        cdate:"03/24/2020, 08:00:00"
    },
    {
        author:"Aunt Jemima", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"Yes",
        explanation:`I don't want to get sick or be cold.`,
        cdate:"03/24/2020, 08:00:00"
    },
    {
        author:"Scrouge", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"Yes",
        explanation:`I don't like people`,
        cdate:"03/24/2020, 08:00:00"
    }
]

/*
h3><a href="discussion_view.html">Setting up a local farmers market</a></h3>
                <p>Participating members: {# members} / {quorum #}</p>
                <p>Opened {# date} | {#} rounds left</p>
*/

function GetCommunity() {
    return community
}

function GetCurrentUser() {
    return currentUser
}

function GetCurrentCircle() {
    return discussionBoardCircle
}

function GetActiveDiscussions() {
    return foundDiscussionBoardDiscussions
}

function GetActiveDiscussionsDict() {
    results = {}
    foundDiscussionBoardDiscussions.forEach(d => {
        results[d.subject] = d
    })
    return results
}

function GetDiscussionStakes() {
    return foundDiscussionBoardStakes
}

function GetArchivedDiscussions() {
    return foundArchivedDiscussions
}

function GetArchivedDiscussionsDict() {
    results = {}
    foundArchivedDiscussions.forEach(d => {
        results[d.subject] = d
    })
    return results
}

function GetArchivedDiscussionStakes() {
    return foundArchiveStakes
}
