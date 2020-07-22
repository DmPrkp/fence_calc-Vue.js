import { uploadImg } from './gallery.js'
import { result } from './result.js'
import { compute } from './compute.js'

//COMPONENTS//////COMPONENTS//////////COMPONENTS///////////COMPONENTS///////////////
// MAIN ////////////////////////////////////////////////////COMPONENT///////////////

const Home = Vue.component('home', {
	template: `<p>HOME</p>`
})

const Calculation = Vue.component('calculation', {
	data() {
		return {
			isActive: true,			
		}		
	},
	template: `
	<div>
		<router-view></router-view>	
		<router-view name="compute"></router-view>	
		<router-view name="result"></router-view>		
	</div>	
	`
})

const How = Vue.component('how', {
	template: `<p>HOW</p>`
})

const Gallery = Vue.component('gallery', {
	template: `
	<uploadImg/>
	`
})

// ROUTES //////////////////////////////////////////////////// ROUTES //////
const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
	}, {
		path: '/calculation',
		component: Calculation,
		name: 'calculation',
		children: [
			{
				path: 'compute',
				component: compute,
				name: 'compute',
			},{
				path: 'result',
				component: result,
				name: 'result',
			}
		]	
	}, {
		path: '/how',
		component: How,
		name: 'how',
	}, {
		path: '/gallery',
		component: Gallery,
		name: 'gallery',
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
	store: bootstrapData,
	vuetify: new Vuetify({
		theme: {
			dark: false,
		}
	}),
	data: {
		
	},
	template: `
	<v-app id="inspire">
      <v-app-bar color="#fcb69f" fixed dark shrink-on-scroll src="../img/fence-road.jpg"
		scroll-target="#scrolling-techniques-2" class="overflow-hidden" app>
		
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
		</template>
		
        <v-toolbar-title class="d-flex align-center mb-n1">
          <v-img src="../img/fence-icon.png" width="40px"></v-img>
          <strong class="ml-2 d-none d-lg-flex">fence calc</strong>
        </v-toolbar-title>
        
        <v-btn class="ma-2" tile text link :to="{name:'home'}" exact>
          <v-icon dark>mdi-home</v-icon>
          <span class="ml-2 d-none d-md-flex">Главная</span>
        </v-btn>

        <v-btn class="ma-2" tile text link :to="{name:'compute'}">
          <v-icon dark class="mr-2">mdi-calculator-variant</v-icon>          
          <span class="ml-2 d-none d-md-flex">Расчитать</span>
        </v-btn>

        <v-btn class="ma-2" tile text link :to="{name:'how'}">          
          <v-icon class="mr-2">mdi-head-question-outline</v-icon>
          <span class="ml-2 d-none d-md-flex">Как это работает?</span>
		</v-btn>
		
		<v-btn class="ma-2" tile text link :to="{name:'gallery'}">          
          <v-icon class="mr-2">mdi-image-multiple-outline</v-icon>
          <span class="ml-2 d-none d-md-flex">Галерея пользователей</span>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon class="ml-2 d-none d-md-flex">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon class="ml-2 d-none d-md-flex">
          <v-icon dark>mdi-information-outline</v-icon>
        </v-btn>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="900">

        <v-main style="min-height: 1000px;" id="content-test">
          <v-container>            
						<transition mode="out-in" appear>
						
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
