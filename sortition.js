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

    } else if (membershipType == MembershipType.ROTATION) {

    } else if (membershipType == MembershipType.RANDOM) {

    } else {
        throw {name: "InvalidMembershipType", message: "An invalid type was given to create a council. Use the MembershipType enum"}
    }




}
