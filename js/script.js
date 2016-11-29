var a,
	h;

function getTriangleArea(a, h) {
	if((a > 0) && (h > 0)) {
		var wynik = a*h/2;
		console.log(wynik);
		return document.write('Pole trójkąta z podstwą: ' + a + ' oraz wysokością: ' + h + ' wynosi: ' + wynik + '<br >');
	} else {
		document.write('Nieprawidłowe dane');
		console.log(wynik);
	}
}

getTriangleArea(10,6);
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(3, 8);
var triangle3Area = getTriangleArea(0, 6);



