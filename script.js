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

const newtonsForm = document.getElementById("newtons");

newtonsForm.addEventListener("submit", e => {
	document.getElementById("newtons-result").value = newtons(
		newtonsForm.elements["guess"].value
	)
});

const polynomialForm = document.getElementById("polynomial");

polynomialForm.addEventListener("submit", e => {
	let result = polynomial(
		polynomialForm.elements["coefficients"].value,
		polynomialForm.elements["exponents"].value,
		polynomialForm.elements["x-value"].value
	);
	document.getElementById("poly-func").value = result[0];
	document.getElementById("poly-eval").value = result[1];
});

const herons = (a, b, c) =>
	(Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - 
	Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2))) / 4;

const ambiguousCase = (angle, a, b) => {
	const h = b * Math.sin(angle * (Math.PI/180));
	console.log(`${angle} ${a} ${b} ${h}`)
	if (angle <= 90) {
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
			return "two triangles (ambiguous case)";
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
	return "error";
}

const newtons = (g) => {
	return g - ((6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6)/
	(24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7))
}

const polynomial = (coefficients, exponents, x) => {
	const coefficientArray = coefficients.split(" ");
	const exponentArray = exponents.split(" ");
	let func = "f(x) = ";
	let eval = `f(${x}) = `;
	let result = 0;
	coefficientArray.forEach((coefficient, index) => {
		func += coefficient + "x^" + exponentArray[index];
		result += Math.pow(coefficient, exponentArray[index]);
		if (index != coefficientArray.length - 1) {
			func += " + ";
		}
	})
	eval += result;
	console.log(func);
	return [func, eval];
}