import { stepCard1, stepCard2, stepCard3, stepCard4, stepCard5  } from './steps.js';

// TYPE ////////////////////////////////////////////////////COMPONENT///////////////
export const fenceType = Vue.component('fenceType', {
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
            ],
            headers: [
                {
                  text: '№ отрезка',
                  align: 'start',
                  sortable: true,
                  value: 'name',
                },
                { text: 'начальная точка', value: 'startPoint' },
                { text: 'длинна', value: 'lenght' },
                { text: 'конечная точка', value: 'endPoint' },                
              ],
            isActive: false,
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
                                <v-btn color="success" @click="isActive =  !isActive">К определению длинны ограждения ></v-btn>
                            </div>
                            </v-stepper-content>

                    </v-stepper-items>
                </v-stepper>
            </div>
            <template v-if="isActive">
                <v-data-table
                    :headers="headers"                    
                    :items-per-page="10"
                    hide-default-footer                    
                ></v-data-table>
            </template>
		</div>
	`
})