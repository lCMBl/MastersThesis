function GetRenderCouncilStats(councilStats) {
    // include in council stats the community, currentUser, and assignedCircle
    cdate = new Date(councilStats.assignedCircle.cdate)
    rolloverDate = new Date(cdate.getTime() + (councilStats.community.discussionParams.councilRotationTime * 24 * 60 * 60 * 1000))
    dr = DaysRemaining(new Date(), rolloverDate)
    
    memberListStrings = ''
    councilStats.assignedCircle.memberHrefs.forEach(m => {
        if (m == councilStats.currentUser.name) {
            memberListStrings += `<li><h3>${m}</h3></li>`
        } else {
            memberListStrings += `<li>${m}</li>`
        }
    })
    return `
    <h3>Time remaining before rotation: ${dr} days</h3>
        <ul>
            ${memberListStrings}
        </ul>
    `
}

// {
//     subject:"Setting up a local farmer's market",
//     description:`We have some very talented gardeners here, like Aunt Jemima and
//     her tomatoes, and Scrouge and his prunes. Lets set up a space for them to 
//     strut their stuff! This would also let us support their effors to enrich our community.
//     The real question is, if we do this, where would we put it?`,
//     positions:{ // need a way to sanitize inputs for use as ID's?
//         the_old_lot:"The old lot",
//         the_community_park:"The community park",
//         no_farmers_market:"No farmer's market"
//     },
//     participatingMemberHrefs:[
//         "Aunt Jemima",
//         "Scrouge",
//         "Christian"
//     ],
//     cdate:"03-24-2020",
//     decision:"undecided",
//     ddate:"null"
// }

function GetRenderDiscussionStub(councilStats) {
    // include in council stats the community, discussion, and assignedCircle
    discussion = councilStats.discussion
    daysLeft = DaysRemaining(new Date(), new Date(discussion.deadline))
    return `
    <div>
        <h3><a href="discussion_view.html?subject=${discussion.subject}">${discussion.subject}</a></h3>
        <p>Participating members: ${discussion.participatingMemberHrefs.length} / ${councilStats.community.discussionParams.quorumNumber}</p>
        <p>Opened ${discussion.cdate} | ${daysLeft} days left</p>
    </div>
    `
    // ROUND NUMBER IS DETERMINED BY NUMBER OF DAYS FROM CREATION. (ONE ROUND A DAY).
}

// add the quorum number to the discussion object.
function GetRenderDiscusionStats(discussion) {
    daysLeft = DaysRemaining(new Date(), new Date(discussion.deadline))
    numParticipants = discussion.participatingMemberHrefs.length
    qNum = discussion.quorumNumber

    optionListStrings = ''
    discussion.positions.forEach(p => {
        optionListStrings += `<li>${p}</li>`
    })
    optionListStrings += `<li>Undecided</li>`


    return `
    <p> ${daysLeft} days remaining | Quorum: ${numParticipants} / ${qNum} participants</p>
    <p>Discussed options:</p>
    <ul>
        ${optionListStrings}
    </ul>
    `
}

function GetRenderStake(stake) {
    /*
    {
        author:"Christian", // not necessary for actual deployment? (author stores their own positions on their mounted drive)
        // however, this isn't shown to people (needs to be anonymous)
        position:"the_old_lot",
        explanation:`By using the old lot, we'll clean up an eyesore 
        and at the same time gain more usable space!`,
        cdate:"03/24/2020"
    }
    */
    return `
    <div>
        <h4>${stake.position}</h4>
        <p>
            ${stake.explanation}
        </p>
    </div>
    <br>
    `
}

function GetRenderPositionOption(option) {
    /*
    <option value="option_1">Option  1</option>
    <option value="option_2">Option  2</option>
    <option value="option_3">Option  3</option>
    <option value="undecided">Undecided</option>
    <option value="new">Take a new position</option> 
    */
    return `<option value="${option}">${option}</option>`
}