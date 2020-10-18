export const handleResponse = (response) => {
	return response.json().then(data => {
		if (!response.ok) {
			return Promise.reject("error");
		}
		console.log("return");
		return data;
	}).catch(e=>{
		console.log("error",e);
	});
}

export const importResource = options => {
	let firstScript = document.getElementsByTagName('script')[0];
	if (options.id && document.getElementById(options.id)) return;
	let script = document.createElement('script');
	script.src = options.script;
	script.id = options.id;
	script.type = "text/javascript";
	script.defer = true;
	script.async = !!options.async;
	firstScript.parentNode.insertBefore(script, firstScript);
	return firstScript;
}

export const parseNumber = number => {
	if (!number || typeof number !== "number") return null;
	if (number < 1000) {
		return number;
	}
	if (number < 1000000) {
		return `${parseInt(number/10000)}K`
	}
	if (number < 1000000000) {
		return `${parseInt(number/10000)}M`
	}
	if (number >= 1000000000) {
		return `${parseInt(number/10000)}B`
	}
}
