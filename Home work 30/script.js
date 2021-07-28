let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити.',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді.',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата.',
		icon: 'settings'
	}
];


class MenuBar{
	constructor(data){
		this.tab = data.tab;
		this.title = data.title;
		this.description = data.description;
		this.icon = data.icon;
	}

	renderHeader(){
		return `<p class='${this.icon}'>${this.tab}</p>`
	}
	renderContent(){
		return `<div class='${this.icon}_sec'>
				<img src="./icons/${this.icon}.svg" alt="" style="background-color:${generateColor()}"></img>
				<p>${this.title}</p>
				<p>${this.description}</p> 
				</div>`
	}
}

let MenuTab = menu
						.map(menu => {
							return new MenuBar(menu)
						})
						.map(MenuBar => {
							return MenuBar.renderHeader()
						})
						.join(``);

let MenuTitle= menu
						.map(menu => {
							return new MenuBar(menu)
						})
						.map(MenuBar => {
							return MenuBar.renderContent()
						})
						.join(``);

const header = document.querySelector(`.header`),
	  content = document.querySelector(`.content`);

header.innerHTML = MenuTab;
content.innerHTML = MenuTitle;

const payment = document.querySelector(`.payment`),
	  extract = document.querySelector(`.extract`),
	  settings = document.querySelector(`.settings`),
	  payment2 = document.querySelector(`.payment_sec`),
	  extract2 = document.querySelector(`.extract_sec`),
	  settings2 = document.querySelector(`.settings_sec`);


(function () {
    payment2.classList.add('active'); 
 }());

function generateColor() {
	return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function active(name){
	Active =  document.querySelector('.active');

	Active && Active.classList.remove('active');
	name.classList.add('active');
}

payment.addEventListener('click', ()=> active(payment2));
extract.addEventListener('click', ()=> active(extract2));
settings.addEventListener('click', ()=> active(settings2));