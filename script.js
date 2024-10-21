const form = document.getElementById('herons');

form.addEventListener("submit", e => {
	console.log(herons(
		form.elements['side-a'].value, 
		form.elements['side-b'].value, 
		form.elements['side-c'].value
		));
});

const herons = (a, b, c) =>
	(Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - 
	Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2))) / 4;

const ambiguousCase = (angle, a, b) => {
	h = b * Math.sin(a);
	if (angle < 90) {
		if (a < h) {
			return "no triangle";
		}
		else if (a == h) {
			return "right triangle";
		}
		else if (a > b) {
			return "one triangle";
		}
		else if (h < a && a < b) {
			return "two triangles";
		}
	}
	else {
		if (a < b || a == h) {
			return "no triangle";
		}
		else if (a > b) {
			return "one triangle";
		}
	}
}

const newtons = (g) => {
	return g - ((6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6)/
	(24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7))
}

const polynomial = (coefficients, exponents, x) => {
	coefficientArray = coefficients.split(" ");
	func = '';
}