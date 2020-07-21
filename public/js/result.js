export const Result = Vue.component("result", {
  data () {
    return {
      expanded: [],
      singleExpand: false,
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
  template: `
    <div>
      <v-data-table
        :headers="headers"
        :items="MandI"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="char"
        show-expand
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Expandable Table</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">More info about {{ item.name }}</td>
        </template>
      </v-data-table>
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