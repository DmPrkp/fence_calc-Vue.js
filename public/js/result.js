export const result = Vue.component("result", {
  data () {
    return {
      expanded: [],      
      headers: [
        {
          text: 'Материалы и инструмент',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'характеристики', value: 'char' },
        { text: 'кол-во', value: 'quantity' },
        { text: 'Ед.изм', value: 'unitOfMeasurement' },
        { text: '', value: 'actions', sortable: false },
      ],
      MandI: [
        {
          name: "Бетон",
          char: "В25",
          quantity: 5,
          unitOfMeasurement: "куб.м",  
        },{
          name: "Столб",
          char: "длинна 3м сечение 50х150",
          quantity: 32,
          unitOfMeasurement: "шт",  
        },{
          name: "горизонтальные соединения",
          char: "20х30",
          quantity: 64,
          unitOfMeasurement: "шт",  
        },{
          name: "Профлист",
          char: "ПФ-35",
          quantity: 230,
          unitOfMeasurement: "кв.м",  
        }
      ]      
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.MandI.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.MandI.indexOf(item)
      this.MandI.splice(index, 1)
      for (let i = 0; i < this.MandI.length; i++) {
        this.MandI[i].number = i + 1
      }
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
        if (this.editedIndex > -1) {
        Object.assign(this.MandI[this.editedIndex], this.editedItem)
      } else {
        this.MandI.push(this.editedItem)
      }
      this.close()
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },
  template: `
    <div>
      <h3 class="text-center mb-10"> РЕЗУЛЬТАТ РАСЧЕТА </h3>
      <div>      
        <v-data-table
          :headers="headers"
          :items="MandI"        
          :expanded.sync="expanded"
          item-key="char"
          show-expand
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Необходимые материалы и инструменты</v-toolbar-title>                      
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">More info about {{ item.name }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon          
              class="mr-2"
              @click="editItem(item)"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              mdi-pencil
            </v-icon>
          </template>
          <span>Редактировать</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon          
                color="error"
                @click="deleteItem(item)"
                v-bind="attrs"
                v-on="on"
              >
            mdi-delete
            </v-icon>
          </template>
          <span>Удалить</span>
        </v-tooltip>
      </template>  
        </v-data-table>
      </div>
    </div>
  `
})




/*let finalList = Vue.component ('finalList', {
  let volumePillar = (obj.freezDepth * 0.16 * obj.allpillarNum);
  let lengthMinusPillar = obj.fenceLength - (obj.allpillarNum*0.4);   
  let volumeLine = lengthMinusPillar * 0.16;    
  let allConcreteVolume = +((volumeLine + volumePillar).toFixed(2));
  let reinforcement12 = +(((lengthMinusPillar + (obj.allpillarNum*obj.freezDepth))*4).toFixed(2));
  let reinforcement6 = +(((lengthMinusPillar + (obj.allpillarNum*obj.freezDepth))*1.56/0.3).toFixed(2));
  finalObj.concreteVolume = allConcreteVolume;
  finalObj.reinforcement12 = reinforcement12;
  finalObj.reinforcement6 = reinforcement6;    
  console.log (`
  необходимый объем бетона ${allConcreteVolume} м3
  количество арматуры ⌀12 ${reinforcement12}  м/п
  количество арматуры ⌀6 ${reinforcement6}  м/п
  `)
  return finalObj;
})*/