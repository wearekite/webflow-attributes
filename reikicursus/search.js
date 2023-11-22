const testEl = document.querySelector('[wunder-element="test"]');
const cmsListItems = document.querySelectorAll("[wunder-list-item]");
const cmsListWrapper = document.querySelector('[wunder-element="list-wrapper"]');

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const searchLocation = params.get("query");
console.log(searchLocation);

async function getData() {
    const cms = await fetch(`https://wunderapi.vercel.app/api/reikicursus/find-near?location=${searchLocation}`, {
        method: "GET",
    })
    const cmsData = await cms.json();
    
    const cmsDataObj = cmsData.reduce((acc, item) => {
        acc[item.slug] = item.distance;
        return acc;
    }, {});

    // Step 2: Sort cmsListItems based on their distance in cmsDataObj
    const sortedListItems = Array.from(cmsListItems).sort((a, b) => {
        const distanceA = cmsDataObj[a.getAttribute('wunder-list-item')];
        const distanceB = cmsDataObj[b.getAttribute('wunder-list-item')];
        return distanceA - distanceB;
    });

    // Step 3: Append sorted divs to the container div
    sortedListItems.forEach(item => {
        const slug = item.getAttribute('wunder-list-item');
        const distance = cmsDataObj[slug];
        const distanceElement = item.querySelector('[wunder-element="distance"]');
        if(distanceElement) {
            distanceElement.textContent = `${distance} km`;
        }
        cmsListWrapper.appendChild(item);
    });
}

if (searchLocation) {
    getData();
}