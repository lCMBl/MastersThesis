function GetRenderCommunityBlurb(communityInfo) {
    /*
    <p>${communityInfo.distance} ${communityInfo.units} from your address.</p>
        <p>${GetCommunityStatus(communityInfo.established)} ${communityInfo.establishmentDate}</p>
    */
    return `
    <div>
        <h4><a href="community_view.html?name=${communityInfo.name}">${communityInfo.name}</a> | 
        ${GetCommunityStatus(communityInfo.established)} ${GetAmericanSlashDateString(new Date(communityInfo.establishmentDate))}</h4>
    </div>
    `
}

function GetCommunityStatus(communityEstablished) {
    if (communityEstablished) {
        return "Established"
    } else {
        return "Membership drive ending"
    }
}

function GetRenderAddressInfo(addressInfo) {
    return `<h3>Showing communities in the ${addressInfo.searchRadius} ${addressInfo.units} from ${addressInfo.address}.</h3>`
}

function GetRenderZipcodeSearchReminder(zipcode) {
    return `<h3>Showing communities in the ${zipcode} Area Code. <a href="community_search.html">Search Again</a></h3>`
}

function GetRenderCommunityStats(communityInfo) {
    return `
    <h2>Number of ${communityInfo.established ? "": "pledged "} members: ${communityInfo.memberCount} | 
    ${GetCommunityStatus(communityInfo.established)} ${GetAmericanSlashDateString(new Date(communityInfo.establishmentDate))}</h2>
    `
}

function GetRenderCommunityInfo(communityInfo) {
    return `
    <h2>Number of ${communityInfo.established ? "": "pledged "} members: ${communityInfo.memberCount} | 
    ${GetCommunityStatus(communityInfo.established)} ${GetAmericanSlashDateString(new Date(communityInfo.establishmentDate))}</h2>
    <p>${communityInfo.description}</p>
    `
}

function GetRenderCommunityPledgeLink(communityInfo) {
    return `<p><a id=pledge_link href="#">
    ${communityInfo.established ? "Join": "Pledge To"} this Community</a></p>`
    
    // return `<p><a href="${
    //     communityInfo.established ? "Community/Pages/newsletter_view.html":"community_pledged.html"
    // }?name=${communityInfo.name}">
    // ${communityInfo.established ? "Join": "Pledge To"} this Community</a></p>`
}

/*
<div>
    <a href="community_view.html">Fakename Park</a><br>
    <p>200 meters (600 ft.) from your address.</p>
    <p>Established Jan 12, 2020</p>
</div>
*/


