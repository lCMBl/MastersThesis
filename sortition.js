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
    
    // check our membership type
    if (membershipType == MembershipType.INVITATION) {

    } else if (membershipType == MembershipType.ROTATION) {

    } else if (membershipType == MembershipType.RANDOM) {

    } else {
        throw {name: "InvalidMembershipType", message: "An invalid type was given to create a council. Use the MembershipType enum"}
    }

    


}
