let name = "gallery_list_bd";
let version = 1; //Версия БД
let openRequest = indexedDB.open(name, version);

openRequest.onupgradeneeded = function (event) {

    let db = openRequest.result;
    switch (event.oldVersion) {
        case 0:
            console.log("Базы данных не существует");
            db.createObjectStore('gallery', { keyPath: 'id', autoIncrement: true});
    }
};

openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
    let db = openRequest.result;

    let transaction = db.transaction("gallery", "readwrite");

    let gallery = transaction.objectStore("gallery");

    let request = gallery.getAll();
        
        request.onsuccess = function() {
            console.log("Считаны картинки из хранилища", request.result);
            let gallery = document.getElementById("img-gallery");
            for(let i = 0; i < request.result.length; i++) {
                let img = document.createElement('img');
                img.src = request.result[i].url;
                gallery.append(img);
            }
        };

    request.onerror = function () {
        console.log("Error", request.error);
    };

    
};

openRequest.onblocked = function () {
    alert("please refresh other link working with ours application");
};