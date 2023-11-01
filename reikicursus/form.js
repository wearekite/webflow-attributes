const form = document.querySelector('[wunder-element="form"]');

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	if (data) {
		window.location = `/zoeken?query=${data.adres}`;
	}
});