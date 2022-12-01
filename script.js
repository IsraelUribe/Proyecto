function initializeApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyDN7fxSQ3io8rPa3w4tL5if4918Fxmo9Gs",
        authDomain: "domotica-avicola-5b00e.firebaseapp.com",
        databaseURL: "https://domotica-avicola-5b00e-default-rtdb.firebaseio.com/",
        projectId: "domotica-avicola-5b00e",
        storageBucket: "domotica-avicola-5b00e.appspot.com",
        messagingSenderId: "333870749422",
        appId: "1:333870749422:web:2df0a7f6058d366b8ec5ff"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();

    let aguaLec = "Avicola/AguaDisponible";
    let humedadLec = "Avicola/Humedad";
    let temperaturaLec = "Avicola/Temperatura";
    let alimentoLec = "Avicola/nivelalimento"
    
    const dbAgua = db.ref(aguaLec);
    const dbHumedad = db.ref(humedadLec);
    const dbTemperatura = db.ref(temperaturaLec);
    const dbAlimento = db.ref(alimentoLec);

    //Variables
    let valorAgua;
    let ValorHumedad;
    let valorTemperatura;
    let valorAlimento;

    dbHumedad.on(
    "value",
    (snapshot) => {
        ValorHumedad = snapshot.val();
        console.log("leyendo Datos: " + ValorHumedad);
        document.getElementById("humedad").innerHTML = ValorHumedad;
    },
    (error) => {
        console.log("Error al leer los datos: " + error.name);
        }
    );

    dbTemperatura.on(
    "value",
    (snapshot) => {
        valorTemperatura = snapshot.val();
        console.log(valorTemperatura);
        document.getElementById("temperatura").innerHTML = valorTemperatura;
    },
    (error) => {
        console.log("Error al leer los datos: " + error.name);
        }
    );

    dbAgua.on(
    "value",
    (snapshot) => {
        valorAgua = snapshot.val();
        console.log(valorAgua);
        document.getElementById("nivelAgua").innerHTML = valorAgua;
    },
    (error) => {
        console.log("Error al leer los datos: " + error.name);
        }
    );
    
    
    dbAlimento.on(
        "value",
        (snapshot) => {
            valorAlimento = snapshot.val();
            console.log(valorAlimento);
            document.getElementById("nivelAlimento").innerHTML = valorAlimento;
        },
        (error) => {
            console.log("Error al leer los datos: " + error.name);
        }
    );   
        const ctx = document.getElementById('myChart');    
    document.getElementById('cargar').onclick = function(){
        var agua = parseFloat(valorAgua);
        var humedad = parseFloat(ValorHumedad);
        var temperatura = parseFloat(valorTemperatura);
        
        /* dbTemperatura.set(!valorTemperatura);
        dbAgua.set(!valorAgua);
        dbHumedad.set(!ValorHumedad);
        dbAlimento.set(!valorAlimento);
        
        setTimeout(() => {
            dbTemperatura.set(!valorTemperatura);
            dbAgua.set(!valorAgua);
            dbHumedad.set(!ValorHumedad);
            dbAlimento.set(!valorAlimento);
        }, 8000); */
        
        setTimeout(() =>{
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Humedad', 'Temperatura', 'Agua'],
                    datasets: [{
                        label: 'Lecturas',
                        data: [humedad,temperatura,agua],
                        borderWidth: 0.5
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },500)
    }
}

