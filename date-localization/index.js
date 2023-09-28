const elements = document.querySelectorAll('[wunder-loc-element="date"]');

const options = {
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  short: { year: 'numeric', month: 'short', day: 'numeric' },
}

for (let i = 0; i < elements.length; i++) {
  // Language in which the date should be displayed
  let language = elements[i].getAttribute('wunder-loc-language');

  // Format in which the date should be displayed either long, short or custom
  let format = elements[i].getAttribute('wunder-loc-format');

  // If format === custom then the following attributes are used
  let year = elements[i].getAttribute('wunder-loc-year');
  let month = elements[i].getAttribute('wunder-loc-month');
  let day = elements[i].getAttribute('wunder-loc-day');
  let weekday = elements[i].getAttribute('wunder-loc-weekday');

  if (format !== 'long' && format !== 'short' && format !== 'custom') {
    format = undefined;
  } else if (format === 'long' || format === 'short') {
    format = options[format];
    console.log(format);
  } else if (format === 'custom') {
    format = {};
    if (year) {
      format.year = year;
    }
    if (month) {
      format.month = month;
    }
    if (day) {
      format.day = day;
    }
    if (weekday) {
      format.weekday = weekday;
    }
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