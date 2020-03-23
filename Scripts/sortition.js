// responsible for creating councils from a list of members
const MembershipType = {
    INVITATION: "invitation",
    ROTATION: "rotation",
    RANDOM: "random"
}

// create council object
/**
 * 
 * @param {string} name 
 * @param {[string]} members 
 * @param {Decision,Date,null} terminationCriteria 
 */
function Council(name, members, terminationCriteria) {
    this.name = name
    this.id = name + '_' + new Date().getTime()
    this.members = members
    this.terminationCriteria = terminationCriteria
}

// procedure is, count the number of times served on this council for all available members.
// store them in an object like this: {name:"bob", timesServed:1} and store those objects in a list.
// then, shuffle the list, and sort it with the following compare function. 
// members will be grouped by number of times served, but in a random order. then, take from the front of the list.
function compareTimesServed(a, b) {return a.timesServed - b.timesServed} 


function GetRotatingCouncil(members, councilSize, sortingKey) {

    function compareToKey(a, b) {return a[sortingKey] - b[sortingKey]}

    Shuffle(members)

    members.sort(compareToKey)

    return members.splice(0, councilSize)

}


function SelectMembers(possibleMembers, numToSelect, orderByTimesServed=false) {
    // if there aren't enough possible members (i.e. everyone is on an official council) then just throw an error.
    if (numToSelect < possibleMembers.length) {
        throw {name:"NotEnoughMembers", message:"Requested a council of " + numToSelect + " members, but only " + possibleMembers.length + " available"}
    }

    // first, shuffle the members
    shuffledPMs = Shuffle(possibleMembers)

    if (orderByTimesServed) {
        // if we need to do a rotation model, then sort the shuffled members by number of times served
        shuffledPMs.sort(compareTimesServed)
    }

    // finally, return the number needed.
    return shuffledPMs.splice(0,numToSelect)
}

function GetTimesServed(members) {
    NotImplemented()
    return []
}



function MakeNewCouncil(name, members, membershipType, systemExclusive, terminationCriteria) {
    NotImplemented()
    // first, load all of the members in the community
    communityMembers = [] // placeholder for navigator.fileSystem.
    availableMembers = [] // add possible members here based on system exclusive, and later, rotation.
    // fill out the available members list
    if (systemExclusive) {
        occupiedMembers = [] // placeholder for navigator.fileSystem to find all members in currently active councils.
        
        for (const member in communityMembers) {
            if (!occupiedMembers.includes(member)) {
                availableMembers.push(member)
            }
        }

    } else {
        // then all community members are available.
        availableMembers = communityMembers
    }
    // check our membership type
    if (membershipType == MembershipType.INVITATION) {
        // assume that members is a list of chosen members
        for (const member in members) {
            if (!availableMembers.includes(member)) {
                throw {name: "InvalidMember", message: "The member " + member + " was not available."}
            }
        }
        // membership checks out, create and return the new council.
        return new Council(name, members, terminationCriteria)
    } else if (membershipType == MembershipType.ROTATION) { // >>>>>>>>>>>>> do I need this in making a council? wouldn't it only matter in refreshing a council?
        availableMembers = GetTimesServed(availableMembers)
        return new Council(name, SelectMembers(availableMembers, members, true), terminationCriteria)
    } else if (membershipType == MembershipType.RANDOM) {
        return new Council(name, SelectMembers(availableMembers, members), terminationCriteria)
    } else {
        throw {name: "InvalidMembershipType", message: "An invalid type was given to create a council. Use the MembershipType enum"}
    }
}

function ChangeCouncilMemberStatus() {
    // need to be able to modify the members of a council (add, remove, termlimit) without disbanding council
    NotImplemented()
}

function RefreshStandingCouncil(councilName, numToAdd) {
    NotImplemented()
}
