
export const yourFence = Vue.component('yourFence', {
    template: `
    <div>
        <v-card
        class="mx-auto"
        max-width="400"
        >
            <v-img
                class="white--text align-end"
                height="200px"
                src="../img/headcards/headcard4.jpg"
                gradient="to top right, rgba(19,84,122,.3), rgba(123,180,250,.6)"
            >
                <v-card-title>Характеристики</v-card-title>
            </v-img>
        
            <v-card-subtitle class="pb-0">Ваше ограждение:</v-card-subtitle>
        
            <v-card-text class="text--primary">
                <div>Глубина фундамента: <strong>{{fenceData.baseDepth}}</strong> <em>м</em></div>
        
                <div>Тип фундамента: <strong>{{fenceData.baseTypeString}}</strong></div>

                <div>Тип солбов: <strong>{{fenceData.pillarTypeString}}</strong></div>

                <div>Тип покрытия: <strong>{{fenceData.coverTypeString}}</strong></div>

                <div>Высота ограждения: <strong>{{fenceData.fenceHeight}}</strong> <em>м</em></div>

                <div>Общая длинна: <strong>{{fenceData.overallLength}}</strong> <em>м</em></div>

                <div>Количество солбов: <strong>{{fenceData.pillarsNum}}</strong> <em>шт</em></div>
            </v-card-text>
        
            <v-card-actions>
                
            </v-card-actions>
        </v-card>
    </div>
    `,
    computed: {
		fenceData: function () {
			return bootstrapData.state.currentType;
		}
	},
}) 