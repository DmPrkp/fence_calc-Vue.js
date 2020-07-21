export const tableOfLength = Vue.component('tableOfLength', {
  data: () => ({
    fullLength: 0,
    pillarsNum: 0,
    segments: [],
    dialog: false,    
    headers: [
      {
        text: '№ сегмента',
        align: 'start',
        sortable: true,
        value: 'number',
      },
      { text: 'начальная точка', value: 'startPoint', sortable: false },
      { text: 'длинна', value: 'lenght', sortable: true },
      { text: 'конечная точка', value: 'endPoint', sortable: false },
      { text: 'количество столбов', value: 'pillarNum', sortable: false },
      { text: 'среднее расстояние', value: 'pillarDistance', sortable: false },
      { text: '', value: 'actions', sortable: false },
    ],
    points: [
      "край с опорой",
      "край без опоры",
      "угол поворота",
    ],
    pillarNumExcute: 0,
    editedIndex: -1,
    editedItem: {
      number: "",
      startPoint: "край с опорой",
      lenght: 0,
      endPoint: "край с опорой",
      pillarNum: 0,
      pillarDistance: 0,
    },
    defaultItem: {
      number: "",
      startPoint: "край с опорой",
      lenght: 0,
      endPoint: "край с опорой",
      pillarNum: 0,
      pillarDistance: 0,
    },
    rules: [
      value => !!value || 'необходимо заполнить!',
      value => !isNaN(value) || 'введите значение в метрах! (Примеры: 2.3; 2; 1.79)',
      value => !(value > 500) || 'буржуазию не обслуживаем!',
    ],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'новый сегмент' : 'редактируемый сегмент'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    editedItem() {
      let l = 0;
      let n = 0;
      for (let i = 0; i < this.segments.length; i++) {
        l += +this.segments[i].lenght;
        n += +this.segments[i].pillarNum;
      }
      this.$store.commit('setOverallLength', l)
      this.$store.commit('setPillarsNum', n)
      this.fullLength = l;
      this.pillarsNum = n;
    },
    segments() {
      let l = 0;
      let n = 0;
      for (let i = 0; i < this.segments.length; i++) {
        l += +this.segments[i].lenght;
        n += +this.segments[i].pillarNum;
      }
      this.$store.commit('setOverallLength', l)
      this.$store.commit('setPillarsNum', n)
      this.fullLength = l;
      this.pillarsNum = n;
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.segments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.segments.indexOf(item)
      this.segments.splice(index, 1)
      for (let i = 0; i < this.segments.length; i++) {
        this.segments[i].number = i + 1
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
        if (isNaN(this.editedItem.lenght) || this.editedItem.lenght == 0) { this.editedItem.lenght = 1 };

        (this.editedItem.lenght <= 3) ? this.editedItem.pillarDistance = this.editedItem.lenght
          : this.editedItem.pillarDistance = (this.editedItem.lenght / (Math.ceil(this.editedItem.lenght / 3))).toFixed(2);

        if (this.editedIndex > -1) {
          this.editedItem.pillarNum = (Math.ceil(this.editedItem.lenght / 3)) - 1;
          if (this.editedItem.startPoint == "край с опорой" && this.editedItem.endPoint == "край с опорой") {
            this.editedItem.pillarNum += 2
          } else if (this.editedItem.startPoint == "угол поворота" && this.editedItem.endPoint == "угол поворота") {
            this.editedItem.pillarNum += 1
          } else if (this.editedItem.startPoint == "угол поворота" || this.editedItem.endPoint == "угол поворота") {
            this.editedItem.pillarNum += 0.5
          } else if (this.editedItem.startPoint == "край с опорой" || this.editedItem.endPoint == "край с опорой") {
            this.editedItem.pillarNum += 1
          }

        Object.assign(this.segments[this.editedIndex], this.editedItem)
      } else {
        this.editedItem.number = (this.segments.length + 1);

        if (isNaN(this.editedItem.lenght) || this.editedItem.lenght == 0) { this.editedItem.lenght = 1 };

        (this.editedItem.lenght <= 3) ? this.editedItem.pillarDistance = this.editedItem.lenght
          : this.editedItem.pillarDistance = (this.editedItem.lenght / (Math.ceil(this.editedItem.lenght / 3))).toFixed(2);

        this.editedItem.pillarNum = (Math.ceil(this.editedItem.lenght / 3)) - 1;
        if (this.editedItem.startPoint == "край с опорой" && this.editedItem.endPoint == "край с опорой") {
          this.editedItem.pillarNum += 2
        } else if (this.editedItem.startPoint == "угол поворота" && this.editedItem.endPoint == "угол поворота") {
          this.editedItem.pillarNum += 1
        } else if (this.editedItem.startPoint == "угол поворота" || this.editedItem.endPoint == "угол поворота") {
          this.editedItem.pillarNum += 0.5
        } else if (this.editedItem.startPoint == "край с опорой" || this.editedItem.endPoint == "край с опорой") {
          this.editedItem.pillarNum += 1
        }

        this.segments.push(this.editedItem)
      }
      this.close()
    },
  },
  template: `
  <div >
    <v-data-table
      :headers="headers"
      :items="segments"      
      class="elevation-1 mb-10"
      hide-default-footer 
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Укажите количество сегментов и их длинну </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer> </v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                small
                tile
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >+ добавить сегмент</v-btn>
            </template>
            <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>                    
                    <v-col cols="12" md="4">
                    <v-select
                              :items="points"
                              label="Начало сегмента"
                              v-model="editedItem.startPoint"
                              outlined
                            >
                    </v-select>                      
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field type="number" min="0.1" v-model="editedItem.lenght" label="Длинна" :rules="rules"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                    <v-select
                              :items="points"
                              label="Конец сегмента"
                              v-model="editedItem.endPoint"
                              outlined
                            >
                    </v-select>                                     
                    </v-col>                    
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon          
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon          
          color="error"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>           
    </v-data-table>

    <div>
      <v-row>
        <v-btn small tile @click="$emit('back')" color="primary" dark> < Назад</v-btn>
        <v-spacer> </v-spacer>
        <v-btn small tile color="primary" link :to="{name:'result'}" dark>Выполнить расчет > </v-btn>
      </v-row>
    </div>
  </div>
  `
})





