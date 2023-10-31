const form = document.querySelector('[wunder-element="form"]');

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	if (data) {
		window.location = `http://127.0.0.1:5500/reikicursus/test.html?query=${data.adres}`;
	}
});