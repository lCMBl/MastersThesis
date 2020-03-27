function GetRenderCommunityBlurb(communityInfo) {
    return `
    <div>
        <a href="community_view.html">${communityInfo.name}</a><br>
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

/*
<div>
    <a href="community_view.html">Fakename Park</a><br>
    <p>200 meters (600 ft.) from your address.</p>
    <p>Established Jan 12, 2020</p>
</div>
*/


