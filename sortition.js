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

function SelectMembers(possibleMembers, numToSelect) {
    NotImplemented() // IMPORTANT: WHAT TO DO IF THERE AREN'T ENOUGH MEMBERS TO SELECT? JUST FAIL? WHAT ABOUT ROTATING COUNCILS?
    if (numToSelect < possibleMembers.length) {
        throw {name:"NotEnoughMembers", message:"Requested a council of " + numToSelect + " members, but only " + possibleMembers.length + " available"}
    }
    shuffledPMs = Shuffle(possibleMembers)
    return shuffledPMs.splice(0,numToSelect)
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
        // first, get the members that have already participated on this council
        prevMembers = [] // placeholder for query
        
        for (i= availableMembers.length - 1; i >= 0; i--) {
            // starting at the end of the loop, remove members that are in the prevMembers list
            if (prevMembers.includes(availableMembers[i])) {
                removedMember = availableMembers.splice(i,1)
                console.warn(removedMember[0] + " has already served on the " + name + " council. removing as an option")
            }
        }

        return new Council(name, SelectMembers(availableMembers), terminationCriteria)
    } else if (membershipType == MembershipType.RANDOM) {
        return new Council(name, SelectMembers(availableMembers), terminationCriteria)
    } else {
        throw {name: "InvalidMembershipType", message: "An invalid type was given to create a council. Use the MembershipType enum"}
    }




}
