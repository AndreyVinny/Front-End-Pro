const PEOPLE= {
	"roles": {
		"admin": "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
		"student": "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
		"lector": "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
	},
	"gradation": [
		[0,20],
		[20,55],
		[55,85],
		[85,100]
	],
	"marks":{
		"0":`satisfactory`,
		"21":`good`,
		"56": `very good`,
		"86": `excellent`
	},
	"users": [
		{
			"name": "Jack Smith",
			"age": 23,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 20
				},
				{
					"title": "Java Enterprise",
					"mark": 100
				}
			]
		},
		{
			"name": "Amal Smith",
			"age": 20,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
			"role": "student"
		},
		{
			"name": "Noah Smith",
			"age": 43,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 50
				}
			]
		},
		{
			"name": "Charlie Smith",
			"age": 18,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
			"role": "student",
			"courses": [
				{
					"title": "Front-end Pro",
					"mark": 75
				},
				{
					"title": "Java Enterprise",
					"mark": 23
				}]
		},
		{
			"name": "Emily Smith",
			"age": 30,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
			"role": "admin",
			"courses": [
				{
					"title": "Front-end Pro",
					"score": 10,
					"lector": "Leo Smith"
				},
				{
					"title": "Java Enterprise",
					"score": 50,
					"lector": "David Smith"
				},
				{
					"title": "QA",
					"score": 75,
					"lector": "Emilie Smith"
				}]
		},
		{
			"name": "Leo Smith",
			"age": 253,
			"img": "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
			"role": "lector",
			"courses": [
				{
					"title": "Front-end Pro",
					"score": 78,
					"studentsScore": 79
				},
				{
					"title": "Java Enterprise",
					"score": 85,
					"studentsScore": 85
				}
			]
		}
	]
}

class User{
    constructor(img,name,age,role,courses){
        this.img=img;
		this.name=name;
		this.age=age;
		this.role=role;
		this.courses=courses;
    }
	render(){
		return `<div class="user__info">
					<div class="user__info--data">
						${this.getImg()}
						<div class="user__naming">
							${this.getName()}
							${this.getAge()}
						</div>
					</div>
					${this.getRole()}
				</div>`
	}
	getImg(){
		return `<img src="${this.img}" alt="${this.name}" height="50">`;
	}
	getName(){
		return `<p>Name: <b>${this.name}</b></p>`;
	}
	getAge(){
		return `<p>Age: <b>${this.age}</b></p>`;
	}
	getRole(){
		return `<div class="user__info--role ${this.role}">
					<img src="${PEOPLE.roles[this.role]}" alt="${this.role}" height="25">
					<p>${this.role}</p>
				</div>`;
	}
}

class Student extends User{
	constructor(img,name,age,role,courses){
		super(img,name,age,role,courses);
    }
	render(){
        return `<div class="user">${super.render()}
					<div class="user__courses">
						${this.getCourses()}
					</div>
				</div>`
	}
	getCourses(){
		let userCourse=``;
		if(this.courses!==undefined){
			this.courses.map(function(item){
				let markName;
				for (let key in PEOPLE.marks){
					if(key<=item.mark){
						markName=PEOPLE.marks[key]
					}
				}
				userCourse+= `<p class="user__courses--course student">${item.title} <span class="${markName}">${markName}</span></p>`
			})
		}
		return userCourse;
	}
}




class Admin extends User{
	constructor(img,name,age,role,courses){
		super(img,name,age,role,courses);
    }
	render(){
        return `<div class="user">${super.render()}
					<div class="user__courses admin--info">
						${this.getCourses()}
					</div>
				</div>`
	}
	getCourses(){
		let userCourse=``;
		if(this.courses!==undefined){
			this.courses.map(function(item){
				let markName;
				for (let key in PEOPLE.marks){
					if(key<=item.score){
						markName=PEOPLE.marks[key]
					}
				}
				userCourse+= `<div class="user__courses--course admin">
							<p>Title: <b>${item.title}</b></p>
							<p>Admin's score: <span class="${markName}">${markName}</span></p>
							<p>Lector: <b>${item.lector}</b></p>
						</div>`
			})
		}
		return userCourse;
	}
}


class Lector extends User{
	constructor(img,name,age,role,courses){
		super(img,name,age,role,courses);
    }
	render(){
        return `<div class="user">
					${super.render()}
					<div class="user__courses admin--info">
						${this.getCourses()}
					</div>
				</div>`
	}
	getCourses(){
		let userCourse=``;
		if(this.courses!==undefined){
			this.courses.map(function(item){
				let markName;
				for (let key in PEOPLE.marks){
					if(key<=item.score){
						markName=PEOPLE.marks[key]
					}
				}
				let studentMarkName;
				for (let key in PEOPLE.marks){
					if(key<=item.studentsScore){
						studentMarkName=PEOPLE.marks[key]
					}
				}
				userCourse += `<div class="user__courses--course lector">
								<p>Title: <b>${item.title}</b></p>
								<p>Lector's score: <span class="${markName}">${markName}</span></p>
								<p>Average student's score: <span class="${studentMarkName}">${studentMarkName}</span></p>
							</div>`
			})
		}
		return userCourse;
	}
}

let finalRender=``;
PEOPLE.users.map(
	item => {
	let user;
	switch(item.role){
		case `student`: user= new Student(item.img,item.name,item.age,item.role,item.courses).render();
		finalRender+=user;
		break;
		case `admin`: user= new Admin(item.img,item.name,item.age,item.role,item.courses).render();
		finalRender+=user;
		break;
		case `lector`: user= new Lector(item.img,item.name,item.age,item.role,item.courses).render();
		finalRender+=user;
		break;
	}
})
document.write(`<div class="users">${finalRender}</div>`);