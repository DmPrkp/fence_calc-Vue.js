import { fenceType } from './fenceType.js'
import { yourFence } from './yourFence.js'

//COMPONENTS//////COMPONENTS//////////COMPONENTS///////////COMPONENTS///////////////
// MAIN ////////////////////////////////////////////////////COMPONENT///////////////

const Home = Vue.component('home', {
	template: `<p>HOME</p>`
})

const Compute = Vue.component('compute', {
	template: `
	<div>
		<div>
			<h3 class="text-center mb-10"> Определяем конструкцию ограждения </h3>
			<v-row>
				<v-col
					col="12"
					lg="3">
				
					<yourFence/>

				</v-col>
				<v-col 
					col="12"
					lg="9">
					<div>
						<fenceType/>
					</div>				
				</v-col>
			</v-row>
		</div>
	</div>	
	`
})

const How = Vue.component('how', {
	template: `<p>HOW</p>`
})

const basement = Vue.component('basement', {

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
	data: {
		
	},
	template: `
	<v-app id="inspire">
      <v-app-bar color="#fcb69f" fixed dark shrink-on-scroll src="./img/fence-road.jpg"
        scroll-target="#scrolling-techniques-2" class="overflow-hidden" app>
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>
        <v-toolbar-title class="d-flex align-center mb-n1">
          <v-img src="./img/fence-icon.png" width="40px"></v-img>
          <strong class="ml-2">fence calc</strong>
        </v-toolbar-title>
        
        <v-btn class="ma-2" tile text link :to="{name:'home'}" exact>
          <v-icon dark class="mr-2">mdi-home</v-icon>
          Главная
        </v-btn>

        <v-btn class="ma-2" tile text link :to="{name:'compute'}">
          <v-icon dark class="mr-2">mdi-calculator-variant</v-icon>          
          Расчитать
        </v-btn>

        <v-btn class="ma-2" tile text link :to="{name:'how'}">          
          <v-icon class="mr-2">mdi-head-question-outline</v-icon>
          Как это работает?
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon dark>mdi-information-outline</v-icon>
        </v-btn>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="900">

        <v-main style="min-height: 1000px;" id="content-test">
          <v-container>            
            <transition name="compute" mode="out-in" appear>
              <router-view/>
            </transition>
          </v-container>
        </v-main>

        <v-footer absolute class="font-weight-medium" dark app>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>fence calc</strong>
          </v-col>
        </v-footer>
      </v-sheet>
    </v-app>
	`
});
