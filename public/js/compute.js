import { tableOfLength } from './tableOfLength.js'
import { yourFence } from './yourFence.js'
import { fenceType } from './fenceType.js'

export const compute = Vue.component('compute', {
	data() {
		return {
			isActive: true,			
		}		
	},
	template: `
  <div>	
  <transition name="fromLeft">	
		<div>
			<h3 class="text-center mb-10"> Определяем конструкцию ограждения и его длинну </h3>
			<v-row>
				<v-col
					col="12"
          lg="3">
          
          <transition name="fromLeft">
            <yourFence/>
          </transition>

				</v-col>
				<v-col 
					col="12"
					lg="9">
						<div>
              <transition name="fromLeft">
                <fenceType v-on:active="isActive=false" v-if="isActive"/>
              
							  <tableOfLength v-on:back="isActive=true" v-else/>
              </transition>	
						</div>
				</v-col>
			</v-row>
    </div>
    </transition>
    
	</div>	
	`
})