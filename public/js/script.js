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

const bootstrapData = new Vuex.Store({
	state: {
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
				name: `Без фундамента`,
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
	}
})

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
			
						<v-icon x-large color="primary" @click="nextStep(1)">mdi-arrow-right-circle</v-icon>
					</v-stepper-content>
						

					<v-stepper-content :step="2">
						<stepCard2/>

						<v-btn color="primary" @click="nextStep(2)">Далее</v-btn>

					</v-stepper-content>

					<v-stepper-content :step="3">
						<v-card  color="grey lighten-1" height="400px"></v-card>

						<v-btn color="primary" @click="nextStep(3)">Далее</v-btn>

					</v-stepper-content>

					<v-stepper-content :step="4">
						<v-card  color="grey lighten-1" height="400px"></v-card>

						<v-btn color="primary" @click="nextStep(4)">Далее</v-btn>

					</v-stepper-content>

					<v-stepper-content :step="5">
						<stepCard5/>

						<v-btn color="primary" @click="nextStep(5)">Далее</v-btn>

					</v-stepper-content>					
				</v-stepper-items>
			</v-stepper>
		</div>
	`
})

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
			radios: '',
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-12">
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
				<h4>Укажите глубину промерзания:</h4>				
				<v-radio-group v-model="radios" :mandatory="false" row >					
      		<v-radio label="Тип 1" :value="depth[1]"></v-radio>
					<v-radio label="Тип 2" :value="depth[2]"></v-radio>
					<v-radio label="Тип 3" :value="depth[3]"></v-radio>
					<v-radio label="Тип 4" :value="depth[4]"></v-radio>
				</v-radio-group>
				<p><strong>Глубина фундамента: {{ radios || '' }} м </strong></p>
			</div>		
		</v-card>
	  `
})



const stepCard5 = Vue.component('stepCard5', {
	data() {
		return {
			depth: {
				1: 0.5,
				2: 1,
				3: 1.5,
				4: 2
			},
			colorDepth: ['red', 'yellow', 'green', 'blue'],
			raptor: "img/raptor.png",
			human: "img/human.png",
			radios: '',
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-12">
			<h3 class="mb-2">Определяем высоту</h3>

			<div class="d-flex flex-row align-end">
				
				
					<v-img :src="raptor" contain  max-width="600px" class="m-0"></v-img>
				
					<div style="height: 100px; width: 5px; background-color: black;" class="mx-10"></div>
				
					<v-img :src="human" contain  max-width="150px"></v-img>
				

			</div>
			
			<div>
				<h4>Укажите высоту:</h4>		
					
				<p><strong>Высота фундамента: {{ radios || '' }} м </strong></p>
			</div>		
		</v-card>
	  `
})

const stepCard2 = Vue.component('stepCard2', {
	data() {
		return {
			depth: [1, 1.5, 2],
			map: "img/depth.png",
		}
	},
	template: `
		<v-card class="mb-12" color="grey lighten-1" >
			<v-item-group mandatory>
				<v-container>
					<v-row>
						<v-col
							v-for="n in 3"
							:key="n"
							cols="12"
							md="4"
						>
							<v-item v-slot:default="{ active, toggle }">
								<v-card
									:color="active ? 'primary' : ''"
									class="d-flex align-center"
									dark
									height="200"
									@click="toggle"
								>
									<v-scroll-y-transition>
										<div
											v-if="active"
											class="display-3 flex-grow-1 text-center"
										>
											Active
										</div>
									</v-scroll-y-transition>
								</v-card>
							</v-item>
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</v-card>
	  `
})

new Vue({
	el: '#app',
	router,
	bootstrapData,
	vuetify: new Vuetify({
		theme: {
			dark: false,
		}
	}),
	components: {
		'how': How,
		'compute': Compute,
		'home': Home,
	},
});



