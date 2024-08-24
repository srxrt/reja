console.log("TRAIN AREA");

/*
const list = [
	"yaxwi talaba boling",
	"togri boshliq tanlang va koproq xato qiling",
	"uzingizga ishlashingizni boshlang",
	"siz kuchli bolgan narsalarni qiling",
	"yoshlarga investitsya qiling",
	"endi dam oling, foydasi yoq",
];



//callback function are asynchronous
function maslahatBering(a, callback) {
	if (typeof a !== "number") callback("Insert number", null);
	else if (a <= 20) callback(null, list[0]);
	else if (a > 20 && a <= 30) callback(null, list[1]);
	else if (a > 30 && a <= 40) callback(null, list[2]);
	else if (a > 40 && a <= 50) callback(null, list[3]);
	else if (a > 50 && a <= 60) callback(null, list[4]);
	else {
		//callback(null, list[5]);
		//setTimeout
        setInterval(function () {
			callback(null, list[5]);
		}, 1000);
	}
}

console.log("Passsed here 1");
maslahatBering(65, (err, data) => {
	if (err) console.log("Error: ", err);
	console.log("Javob:", data);
});

console.log("Passed here 2");


// async functions
async function maslahatBering(a) {
	if (typeof a !== "number") throw new Error("insert a number");
	else if (a <= 20) return list[0];
	else if (a > 20 && a <= 30) return list[1];
	else if (a > 30 && a <= 40) return list[2];
	else if (a > 40 && a <= 50) return list[3];
	else if (a > 50 && a <= 60) return list[4];
	else {
		return new Promise((resolve, reject) => {
			//setInterval =>does not work
			setTimeout(() => {
				resolve(list[5]);
			}, 1000);
		});
	}
}
// then & catch
/*
console.log("Passsed here 1");
maslahatBering(65)
	.then((data) => {
		console.log("Javob:", data);
	})
	.catch((err) => {
		console.log("ERROR", err);
	});

console.log("Passed here 2");


async function run() {
	let result = await maslahatBering(65);
	console.log("Result: ", result);
	// result = await maslahatBering(34);
	// console.log("Result: ", result);
	// result = await maslahatBering(43);
	// console.log("Result: ", result);
}

run();

// A-Task 2 parametrli function, birinci parametr letter, ikkincisi string bosin.
// letter stringda neca martta takrorlanganini return qiladigan function

function countLetter(a, string) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (a === string.at(i)) count++;
	}

	return count;
}

console.log(
	"countLetter('e', 'Avengers, assemble!') => ",
	countLetter("e", "Avengers, assemble!")
);



//B-TASK:

//Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni
//sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(string) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (Number.isFinite(+string.at(i))) {
			count++;
		}
	}

	return count;
}

console.log("Number of numbers:", countDigits("ad2a54y79wet0sfgb9"));
*/

//C-TASK:

//Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
//MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

function checkContent(str1, str2) {
	if (str1.length !== str2.length) return false;
	for (let i = 0; i < str1.length; i++) {
		if (!str2.includes(str1.at(i))) return false;
		if (!str1.includes(str2.at(i))) return false;
	}

	return true;
}

console.log(checkContent("mitgroup", "gmtiprou"));
