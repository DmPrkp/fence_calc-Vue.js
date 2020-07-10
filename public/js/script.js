//import { stepCard1 } from './steps';

// STORE //////////////////////////////////////////////////// STORE ///////////////
const bootstrapData = new Vuex.Store({
	state: {
		currentType: {
			baseDepth: 1,
			baseType: 1.3,
			pillarType: 1.2,
			coverType: 1.3,
			fenceHeight: 1.8,
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

//COMPONENTS//////COMPONENTS//////////COMPONENTS///////////COMPONENTS///////////////
// MAIN ////////////////////////////////////////////////////COMPONENT///////////////

const Home = Vue.component('home', {
	template: `<p>HOME</p>`
})

const Compute = Vue.component('compute', {
	template: `<fenceType></fenceType>`
})

const How = Vue.component('how', {
	template: `<p>HOW</p>`
})

const basement = Vue.component('basement', {

})

// TYPE ////////////////////////////////////////////////////COMPONENT///////////////
const fenceType = Vue.component('fenceType', {
	data() {
		return {
			e1: 1,
			steps: 5,
			editable: true,
			stepType: [
				"глубина промерзания",
				"тип фундамента",
				"тип колонн",
				"тип покрытия",
				"высота",
			]
		}
	},
	methods: {
		nextStep(n) {
			if (n === this.steps) {
				this.e1 = 1
			} else {
				this.e1 = n + 1
			}
		},
	},
	template: `
		<div>
			<h3 class="text-center mb-10"> Определяем конструкцию ограждения </h3>
			<v-stepper v-model="e1">
				<v-stepper-header>
					<template v-for="n in steps">
						<v-stepper-step :key="n" :complete="e1 > n" :step="n" editable>
						{{ stepType[n-1] }}
						</v-stepper-step>						

						<v-divider v-if="n !== steps" :key="n+10"></v-divider>
					</template>
				</v-stepper-header>
				

				<v-stepper-items>
					<v-stepper-content :step="1" >
						<stepCard1/>			
						<div class="d-flex justify-end">
							<v-icon  x-large color="primary" @click="nextStep(1)">mdi-arrow-right-circle</v-icon>
						</div>
					</v-stepper-content>						

					<v-stepper-content :step="2">
						<stepCard2/>
						<div class="d-flex justify-end">
							<v-icon  x-large color="primary" @click="nextStep(2)">mdi-arrow-right-circle</v-icon>
						</div>
					</v-stepper-content>

					<v-stepper-content :step="3">
						<stepCard3/>
						<div class="d-flex justify-end">
							<v-icon  x-large color="primary" @click="nextStep(3)">mdi-arrow-right-circle</v-icon>
						</div>
					</v-stepper-content>

					<v-stepper-content :step="4">
						<stepCard4/>
						<div class="d-flex justify-end">
							<v-icon  x-large color="primary" @click="nextStep(4)">mdi-arrow-right-circle</v-icon>
						</div>
					</v-stepper-content>

					<v-stepper-content :step="5">
						<stepCard5/>
						<div class="d-flex justify-end">
							<v-btn color="success" @click="nextStep(1)">К определению длинны ограждения ></v-btn>
						</div>
						</v-stepper-content>

				</v-stepper-items>
			</v-stepper>
		</div>
	`
})

// CARD 1 ////////////////////////////////////////////////////CARD 1///////////////
const stepCard1 = Vue.component('stepCard1', {
	data() {
		return {
			depth: {
				1: 0.5,
				2: 1,
				3: 1.5,
				4: 2
			},
			colorDepth: ['red', 'yellow', 'green', 'blue'],
			map: "img/depth.png",
			chosenDepth: '1',
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-12" height="450">
			<h3 class="mb-2">Определяем глубину промерзания и залегания фундамента</h3>

			<v-row>
				<v-col cols="12" sm="6">
					<v-img :src="map" height="auto" max-width="600px"></v-img>
				</v-col>			

				<v-col cols="12" sm="6">
					<div class="d-flex justify-center" v-for="(val, key) in depth" :key="key">
						<div 	:style="{ backgroundColor: colorDepth[key-1] }"
								style="width: 20px; height: 20px; border-radius: 50%; margin-right: 10px;">
						</div>
						<p>-Тип {{key}}. Глубина промерзания до {{val}} м</p>
					</div>
				</v-col>

			</v-row>
			
			<div>
				<h4 class="text-center">Укажите глубину промерзания:</h4>
								
				<v-radio-group v-model="chosenDepth" :mandatory="false" row >					
      				<v-radio label="Тип 1" :checked="setDepth(chosenDepth)"  :value="depth[1]"></v-radio>
					<v-radio label="Тип 2" :checked="setDepth(chosenDepth)"  :value="depth[2]"></v-radio>
					<v-radio label="Тип 3" :checked="setDepth(chosenDepth)"  :value="depth[3]"></v-radio>
					<v-radio label="Тип 4" :checked="setDepth(chosenDepth)"  :value="depth[4]"></v-radio>
				</v-radio-group>
				<p>
					<strong>
						Глубина залегания фундамента: {{ baseDepth }} м 
					</strong>
					<v-icon>mdi-help-rhombus-outline</v-icon>
				</p>				
			</div>		
		</v-card>
	  `,
	computed: {
		baseDepth: function() {
			return bootstrapData.state.currentType.baseDepth
		}
	},
	methods: {
		setDepth () {
			bootstrapData.commit({
				type:'inputDepth',depth: this.chosenDepth})
		}
	}
})

// CARD 2 //////////////////////////////////////////////////// CARD 2 ///////////////
const stepCard2 = Vue.component('stepCard2', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-12" color="lighten-1" height="450">
			<v-item-group mandatory>
				<v-container>
					<v-row>
						<v-col
							v-for="n in basementObj"
							:key="n.id"
							cols="4"
							md="3"
							lg="2"
						>
						<h4 style="height: 50px;" class="text-center">{{n.name}}</h4>
							<v-item v-slot:default="{ active, toggle }" :value="n.id">
									<v-img 	class="text-right pa-2"											
											:src="n.img"											
											@click="toggle"
											height="150"																						
											contain
											style="cursor: pointer;"
											>
											<v-btn x-small fab color="success">
												<v-icon >
													{{ active ? 'mdi-check-bold' : '' }}
												</v-icon>
											</v-btn>									
									</v-img>						
																
							</v-item>							
						</v-col>						
					</v-row>
				</v-container>
			</v-item-group>
		</v-card>
	`,
	computed: {
		basementObj: function () {
			return bootstrapData.state.basementObj;
		}
	}
})

// CARD 3 ////////////////////////////////////////////////////CARD 3///////////////
const stepCard3 = Vue.component('stepCard3', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-12" color="lighten-1" height="450">
			<v-item-group mandatory>
				<v-container>
					<v-row>
						<v-col
							v-for="n in pillarsObj"
							:key="n.id"
							cols="4"
							md="3"
							lg="2"
						>
						<h4 style="height: 45px;" class="text-center">{{n.name}}</h4>
							<v-item v-slot:default="{ active, toggle }">
									<v-img 	class="text-right pa-2"											
											:src="n.img"
											@click="toggle"
											height="150"																						
											contain
											style="cursor: pointer;"
											>
											<v-btn x-small fab color="success">
												<v-icon >
													{{ active ? 'mdi-check-bold' : '' }}
												</v-icon>
											</v-btn>									
									</v-img>						
																
							</v-item>							
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</v-card>
	`,
	computed: {
		pillarsObj: function () {
			return bootstrapData.state.pillarsObj;
		}
	}
})

// CARD 4 ////////////////////////////////////////////////////CARD 4///////////////
const stepCard4 = Vue.component('stepCard4', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-12" color="lighten-1" min-height="450">
			<v-item-group mandatory>
				<v-container>
					<v-row>
						<v-col
							v-for="n in coverObj"
							:key="n.id"
							cols="4"
							md="3"
							lg="2"							
						>
						<h4 style="height: 45px;" class="text-center">{{n.name}}</h4>
							<v-item v-slot:default="{ active, toggle }">
									<v-img 	class="text-right pa-2"											
											:src="n.img"
											@click="toggle"
											height="150"																					
											contain
											style="cursor: pointer;"
											>
											<v-btn x-small fab color="success">
												<v-icon outlined>
													{{ active ? 'mdi-check-bold' : '' }}
												</v-icon>
											</v-btn>									
									</v-img>															
							</v-item>							
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</v-card>
	`,
	computed: {
		coverObj: function () {
			return bootstrapData.state.coverObj;
		}
	}
})
// CARD 5 ////////////////////////////////////////////////////CARD 5///////////////
const stepCard5 = Vue.component('stepCard5', {
	data() {
		return {
			height: 1.8,
			raptor: "img/raptor.png",
			human: "img/human.png",
			rules: [
				value => !!value || 'необходимо заполнить!',
				value => !isNaN(value) || 'введите значение в метрах! (Примеры: 2.3; 2; 1.79)',
				value => !(value > 3) || 'для такого высокого забора лучше сделать проект!',
			],
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-12" min-height="450">
			<h4 class="mb-15" >Определяем высоту</h4>

			<div class="d-flex flex-row align-end mb-10">				
				<v-img :src="raptor" contain  max-width="600px" class="m-0"></v-img>
				
				<div :style="{height: height*50}"
				style="width: 10px; background-color: black;" class="mx-10"></div>
				
				<v-img :src="human" contain  max-width="150px"></v-img>
			</div>
			
			<div>
				<h4>Укажите высоту: </h4>	
				<v-text-field :placeholder="height+'м'" v-model="height" @input="uploadHeight(height)" :rules="rules"></v-text-field>
				<strong>
					Высота ограждения равна: {{ fenceHeight }} м 
				</strong>				
			</div>		
		</v-card>
	`,
	//computed: {...Vuex.mapState(['currentType'])}
	computed: {
		fenceHeight: function () {
			return bootstrapData.state.currentType.fenceHeight;
		}
	},
	methods: {
		uploadHeight () {
			bootstrapData.commit({
				type: 'inputHeight', height: this.height,
			})
		}
	}
})

// ROUTES //////////////////////////////////////////////////// ROUTES //////
const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
	}, {
		path: '/compute',
		component: Compute,
		name: 'compute',
	}, {
		path: '/how',
		component: How,
		name: 'how',
	}
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

// APP //////////////////////////////////////////////////// APP ///////////////
new Vue({
	el: '#app',
	router,
	bootstrapData,
	vuetify: new Vuetify({
		theme: {
			dark: false,
		}
	}),
});
