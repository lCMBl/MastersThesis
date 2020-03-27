function GetRenderCommunityBlurb(communityInfo) {
    return `
    <div>
        <a href="community_view.html?name=${communityInfo.name}">${communityInfo.name}</a><br>
        <p>${communityInfo.distance} ${communityInfo.units} from your address.</p>
        <p>${GetCommunityStatus(communityInfo.established)} ${communityInfo.establishmentDate}</p>
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
    return `<h3>Showing communities within ${addressInfo.searchRadius} ${addressInfo.units} from ${addressInfo.address}.</h3>`
}

function GetRenderCommunityStats(communityInfo) {
    return `
    <h2>Number of ${communityInfo.established ? "": "pledged "} members: ${communityInfo.memberCount} | 
    ${GetCommunityStatus(communityInfo.established)} ${communityInfo.establishmentDate}</h2>
    <h3>${communityInfo.distance} ${communityInfo.units} away.</h3>
    <br>
    `
}

function GetRenderCommunityInfo(communityInfo) {
    return `
    <h2>Number of ${communityInfo.established ? "": "pledged "} members: ${communityInfo.memberCount} | 
    ${GetCommunityStatus(communityInfo.established)} ${communityInfo.establishmentDate}</h2>
    <h3>${communityInfo.distance} ${communityInfo.units} away.</h3>
    <br>
    <p>${communityInfo.description}</p>
    `
}

function GetRenderCommunityPledgeLink(communityInfo) {
    return `<p><a href="${
        communityInfo.established ? "Community/Pages/newsletter_view.html":"community_pledged.html"
    }?name=${communityInfo.name}">
    ${communityInfo.established ? "Join": "Pledge To"} this Community</a></p>`
}

/*
<div>
    <a href="community_view.html">Fakename Park</a><br>
    <p>200 meters (600 ft.) from your address.</p>
    <p>Established Jan 12, 2020</p>
</div>
*/


