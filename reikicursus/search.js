const testEl = document.querySelector('[wunder-element="test"]');
// const elements = document.querySelectorAll("[wunder-list-item]");

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const searchLocation = params.get("query");
console.log(searchLocation);

async function getData() {
    const cms = await fetch(`https://wunderapi.vercel.app/api/reikicursus/find-near?location=${searchLocation}`, {
        method: "GET",
    })
    const cmsData = await cms.json();
    testEl.innerHTML = cmsData[0].slug;
    console.log("CMS: ",cmsData);
}

if (searchLocation) {
    getData();
}