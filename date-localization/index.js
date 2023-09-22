const dates = document.querySelectorAll('[wunder-loc="date"]');

const formats = {
	nl: {
  	short: "D-M-YYYY",
    long: "MMMM D, YYYY"
  }
}
const options = { year: 'numeric', month: 'long', day: 'numeric' };

for (let i = 0; i < dates.length; i++) {
	let el = dates[i];
  let text = el.innerText;
  
  let date = new Date(text);
  text = date.toLocaleDateString(undefined, options);
  
  el.innerText = text;
}