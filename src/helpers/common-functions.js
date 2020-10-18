export const handleResponse = (response) => {
	return response.json().then(data => {
		if (!response.ok) {
			return Promise.reject("error");
		}
		return data;
	});
}
