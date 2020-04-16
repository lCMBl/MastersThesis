// /**
//  * @readonly
//  * @enum {string}
//  */
// const ItemType = {
// 	COMMUNITY:"community",
// 	ADDRESSINFO:"addressinfo",
// 	CIRCLE:"circle",
// 	CURRENTUSER:"currentuser",
// 	ACTIVEDISCUSSION:"activediscussion",
// 	ACTIVESTAKE:"activestake",
// 	ARCHIVEDDISCUSSION:"archiveddiscussion",
// 	ARCHIVEDSTAKE:"archivedstake",
// 	POST:"post",
// 	PENDINGPOST:"pendingpost",
//     REDMARK:"redmark"
// }

//= initial setup
//
localStorage.setItem("communityApp", JSON.stringify({}))


//= Add Communities
// 
SaveLocal("communities", [
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
        },
        location:{
            zipCode:80905
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
        },
        location:{
            zipCode:80906
        }
    }
])

SaveLocal("addressInfo", {searchRadius:2000, units:"meters", address:"1010 Jupiter dr."})

SaveLocal("currentUser", {
    name:"Christian",
    community:"Jenkins Park"
})


SaveLocal("assignedCircle", {
    name:"Community Circle",
    cdate:"3/24/2020",
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
})

SaveLocal("foundActiveDiscussions", [
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
        cdate:"3/24/2020",
        decision:"Undecided",
        ddate:"null",
        deadline:"3/29/2020"
    }
])

SaveLocal("foundActiveStakes", {"Setting up a local farmer's market":[
    {
        author:"Christian", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"The Old Lot",
        explanation:`By using the old lot, we'll clean up an eyesore 
        and at the same time gain more usable space!`,
        cdate:"3/24/2020"
    },
    {
        author:"Aunt Jemima", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"The Old Lot",
        explanation:`We're already using the park pretty frequntly.
        Best not to overload it.`,
        cdate:"3/24/2020"
    },
    {
        author:"Scrouge", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"No Farmer's Market",
        explanation:`Both the park and the old lot see a lot of traffic. Its already bad enough!
        I dont want any more traffic!`,
        cdate:"3/24/2020"
    }
]
})

SaveLocal("foundArchivedDiscussions", [
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
        ddate:"3/26/2020",
        deadline:"3/29/2020"
    }
])

SaveLocal("foundArchivedStakes", {"Should we Stay Inside?":[
    {
        author:"Christian", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"No",
        explanation:`I'm going crazy in here!`,
        cdate:"3/24/2020, 08:00:00"
    },
    {
        author:"Aunt Jemima", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"Yes",
        explanation:`I don't want to get sick or be cold.`,
        cdate:"3/24/2020, 08:00:00"
    },
    {
        author:"Scrouge", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"Yes",
        explanation:`I don't like people`,
        cdate:"3/24/2020, 08:00:00"
    }
]})

SaveLocal("foundPosts", 
{"3/24/2020":[
    {
        title:"Free Vegetables!",
        body:"My garden has been growing wild this year. We have all sorts of vegetables if anyone wants some!",
        author:"Aunt Jemima",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"3/23/2020",
        pdate:"3/24/2020"
    },
    {
        title:"Need help with insulation",
        body:"Hey all, I really need some help getting insulation put up in my attic. " +
        "I'll have pizza for anyone that wants to help me out!",
        author:"Christian",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"3/23/2020",
        pdate:"3/24/2020"
    },
    {
        title:"Get Off My Lawn",
        body:"All you kids need to get off my lawn! Inone of use should even be able to post today because we all made red marks!",
        author:"Scrouge",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"3/23/2020",
        pdate:"3/24/2020"
    }
],
"3/25/2020":[
    {
        title:"Scrouge is terrible",
        body:"Why do we even have him on here?",
        author:"Christian",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"3/24/2020",
        pdate:"3/25/2020"
    },
    {
        title:"Too much hostility",
        body:"There has been too much anger lately. I've contributed to it too for which I'm Sorry.",
        author:"Christian",
        href:"#", // actually a link to the author's public profile drive.
        cdate:"3/24/2020",
        pdate:"3/25/2020"
    }
]
})

SaveLocal("foundRedMarks", {
    "3/24/2020":[
        {
            href:"Aunt JemimaFree Vegetables!",
            marker:"Scrouge",
            cdate:"3/24/2020"
        },
        {
            href:"ScrougeGet Off My Lawn",
            marker:"Christian",
            cdate:"3/24/2020"
        },
        {
            href:"ScrougeGet Off My Lawn",
            marker:"Aunt Jemima",
            cdate:"3/24/2020"
        }
    ]
})

console.log("Done Adding data")