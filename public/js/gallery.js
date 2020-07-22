/*module img uploaded and resize: https://www.npmjs.com/package/vue-image-upload-resize*/

export const uploadImg = Vue.component('uploadImg', {
    data() {
        return {            
            hasImage: false,
            image: null
        };
    },
    methods: {
        setImage: function (output) {
            this.hasImage = true;
            this.image = output;
            console.log('Info', output.info)
            console.log('Exif', output.exif)
        },
        addImage: function () {
            let openRequest = indexedDB.open(name, version);
            let db = openRequest.result;
            let transaction = db.transaction("gallery");
            let gallery = transaction.objectStore("gallery");
            let request = gallery.add(this.image)
            request.onsuccess = function() {
                console.log("Картинка добавлена в хранилище", request.result);                
            };
        }
    },
    template: `
    <div class="my-8 d-flex flex-column align-center">    

    <div class="my-8">
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :maxHeight="1080"
        :maxWidth="2280"
        :debug="1"        
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage"        
      >
      
        <label for="fileInput" slot="upload-label">          
          <path
            class="path1"
            d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
          ></path>
          <div>          
            <span class="upload-caption">
              {{
                hasImage ? "Click to replace" : "Click to upload"
              }}
            </span>
          </div>
        </label>     

      </image-uploader>
    </div>    
    <v-btn @click="addImage"> Add image </v-btn>
    <div id="img-gallery"></div>    
  </div>
    `,    
})
