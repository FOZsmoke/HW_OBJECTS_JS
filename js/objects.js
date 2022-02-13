"use strict"

// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).

// const student = {
// 	name: "Vitalik",
// 	surname: "Zinchuk",
// 	isMale: true,
// 	address: {
// 		city: "Zaporozhye",
// 		street: "union",
// 	},
// 	changeGender() {
// 		return this.isMale = !this.isMale;
// 	},
// 	studentAddress() {
// 		return `${this.address.city}, ${this.address.street}`;
// 	},
// }
// console.log(student.studentAddress());
// console.log(student.changeGender());
// 

// 2. Cоздать объект, который содержит свойства о факультете и кафедре, методы:
// переименование факультета (метод должен принимать в качестве параметра новое название факультета).

// const university = {
// 	faculty: "enterprise economy",
// 	department: "economy",
// 	changeName(name) {
// 		return this.faculty = name;
// 	}
// }
// university.changeName('мой факультет');
// console.log(university.faculty)
// // university.faculty = "ferrous metallurgy";






// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
//   * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.


function Book(autor, title, yearOfPublishing, publishing) {
	this.autor = autor;
	this.title = title;
	this.yearOfPublishing = yearOfPublishing;
	this.publishing = publishing;
	this.showYearBook = function () {
		const newDate = new Date();
		return newDate.getFullYear() - this.yearOfPublishing;

	}
}


const newBook = new Book('Вася', 'Конан', 2000, 'Варвар');

console.log(newBook.showYearBook());

console.log(newBook);



