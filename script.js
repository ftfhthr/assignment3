const heronsForm = document.getElementById('herons');

heronsForm.addEventListener("submit", e => {
	document.getElementById("result").value = herons(
		heronsForm.elements['side-a'].value, 
		heronsForm.elements['side-b'].value, 
		heronsForm.elements['side-c'].value
	)
});

const ambiguousCaseForm = document.getElementById("ambiguous");

ambiguousCaseForm.addEventListener("submit", e => {
	document.getElementById("amb-result").value = ambiguousCase(
		ambiguousCaseForm.elements["angle"].value,
		ambiguousCaseForm.elements["side-a"].value,
		ambiguousCaseForm.elements["side-b"].value
	)
});

const herons = (a, b, c) =>
	(Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - 
	Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2))) / 4;

const ambiguousCase = (angle, a, b) => {
	const h = b * Math.sin(a);
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
	return "a";
}

const newtons = (g) => {
	return g - ((6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6)/
	(24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7))
}

const polynomial = (coefficients, exponents, x) => {
	const coefficientArray = coefficients.split(" ");
	const exponentArray = exponents.split(" ");
	let func = '';
	coefficientArray.forEach((coefficient, index) => {
		func += coefficient + "x^" + exponentArray[index];
		if (index != coefficientArray.length - 1) {
			func += " + ";
		}
	})
	console.log(func);
}

polynomial("1 1 1", "3 2 1", "1");