// STORE //////////////////////////////////////////////////// STORE ///////////////
const bootstrapData = new Vuex.Store({
	state: {
		currentType: {
			baseDepth: 1,
			baseType: 1.3,
			pillarType: 1.2,
			coverType: 1.3,
            fenceHeight: 1.8,
            overallLength: 1,
            pillarsNum: 1,
		},
		basementObj: [
			{
				id: 1.1,
				img: "img/basement/RFL.png",
				name: "Железобетонный ленточный фундамент",
				plus: ["Несущая способность", "долговечность"],
				minus: ["Стоймость"],
				type: "basement",
			},
			{
				id: 1.2,
				img: "img/basement/RF.png",
				name: "Железобетонный фундамент",
				plus: ["Долговечность"],
				minus: ["Cущественных нет"],
				type: "basement",
			},
			{
				id: 1.3,
				img: "img/basement/Pillar.png",
				name: `Колонны в грунте
				(по типу свай)`,
				plus: ["Стоимость"],
				minus: ["Недолговечность(10-20 лет)"],
				type: "basement",
			},
		],
		pillarsObj: [
			{
				id: 2.1,
				img: "img/pillars/BP.png",
				name: "Армированная кладка",
				plus: ["Несущая способность", "долговечность"],
				minus: ["Стоймость"],
				type: "pillars",
			},
			{
				id: 2.2,
				img: "img/pillars/MP.png",
				name: "Металлопрокат",
				plus: ["Долговечность"],
				minus: ["Cущественных нет"],
				type: "pillars",
			},
			{
				id: 2.3,
				img: "img/pillars/WP.png",
				name: "Пиломатериалы",
				plus: ["Стоимость"],
				minus: ["Недолговечность (10-20 лет)"],
				type: "pillars",
			},

		],
		coverObj: [
			{
				id: 3.1,
				img: "img/cover/Brick.jpg",
				name: "Кирпич",
				plus: ["Несущая способность", "долговечность"],
				minus: ["Стоймость"],
				type: "cover",
			},
			{
				id: 3.2,
				img: "img/cover/Proflist.jpg",
				name: "Профлист",
				plus: ["Долговечность"],
				minus: ["Cущественных нет"],
				type: "cover",
			},
			{
				id: 3.3,
				img: "img/cover/wood.jpg",
				name: "Доска",
				plus: ["Стоимость"],
				minus: [`Недолговечность (10-20 лет)`],
				type: "cover",
			},
			{
				id: 3.4,
				img: "img/cover/SetkaR.jpg",
				name: "Сетка рабица",
				plus: ["Стоимость"],
				minus: ["Недолговечность(10-20 лет)"],
				type: "cover",
			},
			{
				id: 3.5,
				img: "img/cover/Shtaket.jpg",
				name: "Штакет",
				plus: ["Стоимость"],
				minus: ["Недолговечность(10-20 лет)"],
				type: "cover",
			},
			{
				id: 3.6,
				img: "img/cover/Gitter.jpg",
				name: "ЗD сетка",
				plus: ["Стоимость"],
				minus: ["Недолговечность(10-20 лет)"],
				type: "cover",
			},
		],
	},
	mutations: {
		inputHeight:(state, val) => state.currentType.fenceHeight = val.height,
		inputDepth:(state, val) => state.currentType.baseDepth = val.depth,
	}
})