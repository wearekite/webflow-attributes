const elements = document.querySelectorAll('[wunder-loc-element="date"]');

const options = {
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  short: { year: 'numeric', month: 'short', day: 'numeric' },
}

for (let i = 0; i < elements.length; i++) {
  let language = elements[i].getAttribute('wunder-loc-language');
  let format = elements[i].getAttribute('wunder-loc-format');

  if (format !== 'long' && format !== 'short') {
    format = undefined;
  } else {
    format = options[format];
    console.log(format);
  }
	let el = elements[i];
  let text = el.innerText;
  let date = new Date(text);

  if (!language && !format) {
    text = date.toLocaleDateString(undefined);
  } else if (language && !format) {
    text = date.toLocaleDateString(language);
  } else if (!language && format) {
    text = date.toLocaleDateString(undefined, format);
  } else if (language && format) {
    text = date.toLocaleDateString(language, format);
  }
  
  el.innerText = text;
}