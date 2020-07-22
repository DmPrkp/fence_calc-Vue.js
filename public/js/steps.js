// CARD 1 ////////////////////////////////////////////////////CARD 1///////////////
export const stepCard1 = Vue.component('stepCard1', {
	data() {
		return {
			depth: {
				1: 0.5,
				2: 1,
				3: 1.5,
				4: 2
			},
			colorDepth: ['red', 'yellow', 'green', 'blue'],
			map: "../img/depth.png",
			chosenDepth: '1',
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-5" height="450">
			<h3 class="mb-2">Определяем глубину промерзания и залегания фундамента</h3>
			<v-row>
				<v-col cols="12" sm="6">
					<v-img :src="map" height="auto" max-width="600px"></v-img>
				</v-col>			
				<v-col cols="12" sm="6">
					<div class="d-flex justify-start" v-for="(val, key) in depth" :key="key">
						<div 	:style="{ backgroundColor: colorDepth[key-1] }"
								style="width: 20px; height: 20px; border-radius: 50%; margin-right: 10px;">
						</div>
						<p>-Тип {{key}}. Глубина промерзания до {{val}} м</p>
					</div>
				</v-col>
			</v-row>
			
			<div>
				<h4 class="text-center">Укажите глубину промерзания:</h4>
								
				<v-radio-group v-model="chosenDepth" :mandatory="false" row>					
      				<v-radio label="Тип 1" :checked="setDepth()"  :value="depth[1]"></v-radio>
					<v-radio label="Тип 2" :checked="setDepth()"  :value="depth[2]"></v-radio>
					<v-radio label="Тип 3" :checked="setDepth()"  :value="depth[3]"></v-radio>
					<v-radio label="Тип 4" :checked="setDepth()"  :value="depth[4]"></v-radio>
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
		baseDepth: function () {
			return bootstrapData.state.currentType.baseDepth
		}
	},
	methods: {
		setDepth() {
			bootstrapData.commit({
				type: 'setDepth', depth: this.chosenDepth
			})
		}
	}
})

// CARD 2 //////////////////////////////////////////////////// CARD 2 ///////////////
export const stepCard2 = Vue.component('stepCard2', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-5" color="lighten-1" height="450">
			<v-item-group mandatory  @change="setBaseType($event)">
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
							<v-item v-slot:default="{ active, toggle }" :value="n.id" >
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
	},
	methods: {
		setBaseType(e) {
			bootstrapData.commit({
				type: 'setBaseType', depthType: e
			})
		}
	}
})

// CARD 3 ////////////////////////////////////////////////////CARD 3///////////////
export const stepCard3 = Vue.component('stepCard3', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-5" color="lighten-1" height="450">
			<v-item-group mandatory @change="setPillarsType($event)">
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
							<v-item v-slot:default="{ active, toggle }" :value="n.id" >
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
	},
	methods: {
		setPillarsType(e) {
			bootstrapData.commit({
				type: 'setPillarType', pillarType: e
			})
		}
	}
})

// CARD 4 ////////////////////////////////////////////////////CARD 4///////////////
export const stepCard4 = Vue.component('stepCard4', {
	data() {
		return {

		}
	},
	template: `
		<v-card class="mb-5" color="lighten-1" min-height="450">
			<v-item-group mandatory @change="setCoverType($event)">
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
							<v-item v-slot:default="{ active, toggle }" :value="n.id" >
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
	},
	methods: {
		setCoverType(e) {
			bootstrapData.commit({
				type: "setCoverType", coverType: e
			})
		}
	}
})

// CARD 5 ////////////////////////////////////////////////////CARD 5///////////////
export const stepCard5 = Vue.component('stepCard5', {
	data() {
		return {
			height: 1.8,
			raptor: "../img/raptor.png",
			human: "../img/human.png",
			rules: [
				value => !!value || 'необходимо заполнить!',
				value => !isNaN(value) || 'введите значение в метрах! (Примеры: 2.3; 2; 1.79)',
				value => !(value > 3) || 'для такого высокого забора лучше сделать проект!',
			],
		}
	},
	template: `
		<v-card color="lighten-1" class="d-flex flex-column align-center mb-5" min-height="450">
			<h4 class="mb-15" >Определяем высоту</h4>

			<div class="d-flex flex-row align-end mb-10">

				<v-img :src="raptor" contain  max-width="600px" class="m-0"></v-img>
				
				<div :style="{height:(fenceHeight < 10) ? fenceHeight*50 : 10*50 }"
					style="width: 10px; background-color: black;" class="mx-10"></div>
				
				<v-img :src="human" contain  max-width="150px"></v-img>

			</div>
			
			<div>
				<h3>Укажите высоту забора от земли(м): </h3>

				<v-text-field type="number" placeholder="1.8 м"  @input="uploadHeight($event)" :rules="rules"></v-text-field>
				
								
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
		uploadHeight(e) {
			bootstrapData.commit({
				type: 'setHeight', height: e,
			})
		}
	}
})