// 1) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა 2 მნიშნელობა ,
// მასივი რომელშიც ჩაყრილია რენდომული რიცხვები 0 დან 100 მდე შალედში
// მოთავსებულიდა მეორე მასივი რომელშიც ჩაყრილია შემდეგი რიცხვები [ 2,3,5,11]
// დააბრუნეთ ამ ფუნქციიდან ყველა ის რიცხვი პირველი მასივიდან რომელიც
// იყოფა მეორე მასივის ერთ წევრზე მაინც უნაშთოდ
// let arr = [];
// let secArr = [2, 3, 5, 11];
// function fillArr(arr) {
// 	while (arr.length < 10) {
// 		let randomNum = Math.ceil(Math.random() * 22);
// 		arr.push(randomNum);
// 	}
// }
// fillArr(arr);
// console.log(arr);
// console.log(ifIsDivisors(arr, secArr));
// function ifIsDivisors(firstArr, secArr) {
// 	let divisors = [];
// 	for (let i = 0; i < firstArr.length; i++) {
// 		let isDivisable = secArr.some((secItem) => firstArr[i] % secItem === 0);
// 		if (isDivisable) divisors.push(firstArr[i]);
// 	}
// 	return divisors;
// }
// 2) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ რიცხვების
// რაოდენობას, რენდომული რიცხვების რეინჯს (start,end) და დააბრუნებს ეს
// ფუნქცია მასივს რომელშიც იქნება ჩაყრილი რიცხვები იმ რაოდენობის რამდენიც
// მომხმარებელმა გადმოგვცა და მოთავსებულები იქნებიან აგდაცემულ რეინჯში

// function getArr(lengthOfArr, start, end) {
// 	return Array.from(
// 		{ length: lengthOfArr },
// 		() => Math.floor(Math.random() * (end - start + 1)) + start
// 	);
// }
// const result = getArr(50, 1, 4);
// console.log(result);

// 3) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა მასივი რომელშიც
// არის ჩაყრილი რენდომული რიცხვებები, თქვენს ამოცანას წარმოადგენს რომ
// დაალაგოთ გადაცემულიმასივი ზრდადობის მიხედვით და დააბრუნოთ
// ფუნქციიდან
// let arr = [];
// let secArr = [2, 3, 5, 11];
// function fillArr(arr) {
// 	while (arr.length < 10) {
// 		let randomNum = Math.ceil(Math.random() * 22);
// 		arr.push(randomNum);
// 	}
// }
// fillArr(arr);
// console.log(arr);
// function sortArr(arr) {
// 	return arr.sort((a, b) => a - b);
// }
// console.log(sortArr(arr));
// 4) Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა რენდომული
// ფერების რაოდენობა და ეს ფუნქცია დააბრუნებს რენდომულ ფერებს იმ
// რაოდენობის რამდენსაც მომხმარებელი გადმოსცემს, რენდომული რიცხვები იყოს
// მოცემული RGB ფორმატში
// let userNum = Number(prompt('Enter number'));
// function getRandomColors(userNum) {
// 	let colorsArr = [];
// 	while (colorsArr.length < userNum) {
// 		let num1 = Math.round(Math.random() * 255);
// 		let num2 = Math.round(Math.random() * 255);
// 		let num3 = Math.round(Math.random() * 255);
// 		let color = `rgb(${num1},${num2},${num3})`;
// 		colorsArr.push(color);
// 	}
// 	return colorsArr;
// }
// console.log(getRandomColors(userNum));
// 5) Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა რენდომული
// ფერებისგან შედგენილი მასივი და ეს ფუნქცია დაბეჭდავს კონსოლში თითოეულ
// ფერს და გაუფერადებს დაბეჭდილ ტექს background -ს იმ ფერით რა ფერსაც
// ბეჭდავს
let userNum = Number(prompt('Enter number'));
function getRandomColors(userNum) {
	let colorsArr = [];
	while (colorsArr.length < userNum) {
		let num1 = Math.round(Math.random() * 255);
		let num2 = Math.round(Math.random() * 255);
		let num3 = Math.round(Math.random() * 255);
		let color = `rgb(${num1},${num2},${num3})`;
		colorsArr.push(color);
	}
	return colorsArr;
}
let colorsArr = getRandomColors(userNum);
function printColors(colors) {
	for (let color of colors) {
		console.log(`%c ${color}`, `background:${color}`);
	}
}
printColors(colorsArr);
