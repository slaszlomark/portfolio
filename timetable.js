function ora() {
    setInterval(melyikOra(), 1000);
}

function melyikOra() {
    var ido = new Date();
    var nap = ido.getDay();
    var ora = ido.getHours();

    var startDate = new Date(ido.getFullYear(), 0, 1);
    var napok = Math.floor((ido - startDate) / (24 * 60 * 60 * 1000));
    var het = Math.ceil(napok / 7);

    if(het % 2 == 1) {
        switch(nap){
            case 1:                                                 //HÉTFŐ
                if(ora >= 14 && ora < 16)
                    beallit("HÁLÓZATOK", "1H4");
                else if(ora >= 16 && ora < 18)
                    beallit("ADATBÁZIS-KEZELŐ RENDSZEREK", "1H5");
            break;

            case 2:                                                 //KEDD
                if(ora >= 8 && ora < 10)
                    beallit("GRAFIKA", "1K1");
            break;

            case 3:                                                 //SZERDA
                if(ora >= 8 && ora < 10)
                    beallit("ADATBÁZIS-KEZELŐ RENDSZEREK", "1SZ1");
            break;

            case 4:                                                 //CSÜTÖRTÖK
                if(ora >= 8 && ora < 10)
                    beallit("MESTERSÉGES INTELLIGENCIA", "1CS1");
                else if(ora >= 10 && ora < 12)
                    beallit("DINAMIKUS RENDSZEREK", "1CS2");
                else if(ora >= 14 && ora < 16)
                    beallit("HÁLÓZATOK", "1CS4");
            break;

            case 5:                                                 //PÉNTEK
                if(ora >= 10 && ora < 12)
                    beallit("WEBPROGRAMOZÁS", "1P2");
                else if(ora >= 16 && ora < 18)
                    beallit("DINAMIKUS RENDSZEREK", "1P5");
            break;

            default:
                break;
        }
    } else {
        switch(nap){
            case 1:                                                 //HÉTFŐ
                if(ora >= 14 && ora < 16)
                    beallit("HÁLÓZATOK", "2H4");
                else if(ora >= 16 && ora < 18)
                    beallit("ADATBÁZIS-KEZELŐ RENDSZEREK", "2H5");
            break;

            case 2:                                                 //KEDD
                if(ora >= 8 && ora < 10)
                    beallit("GRAFIKA", "2K1");
                else if(ora >= 10 && ora < 12)
                    beallit("GRAFIKA", "2K2");
                else if(ora >= 12 && ora < 14)
                    beallit("ADATBÁZIS-KEZELŐ RENDSZEREK", "2K3");
                else if(ora >= 16 && ora < 18)
                    beallit("WEBPROGRAMOZÁS", "2K5");
                else if(ora >= 18 && ora < 20)
                    beallit("MESTERSÉGES INTELLIGENCIA", "2K6");
            break;

            case 3:                                                 //SZERDA
                if(ora >= 10 && ora < 12)
                    beallit("MESTERSÉGES INTELLIGENCIA", "2SZ2");
                else if(ora >= 12 && ora < 14)
                    beallit("GRAFIKA", "2SZ3");
                else if(ora >= 16 && ora < 18)
                    beallit("DINAMIKUS RENDSZEREK", "2SZ5");
            break;

            case 4:                                                 //CSÜTÖRTÖK
                if(ora >= 8 && ora < 10)
                    beallit("MESTERSÉGES INTELLIGENCIA", "2CS1");
                else if(ora >= 10 && ora < 12)
                    beallit("DINAMIKUS RENDSZEREK", "2CS2");
                else if(ora >= 16 && ora < 18)
                    beallit("WEBPROGRAMOZÁS", "2CS5");
            break;

            case 5:                                                 //PÉNTEK
                if(ora >= 10 && ora < 12)
                    beallit("WEBPROGRAMOZÁS", "2P2");
                else if(ora >= 16 && ora < 18)
                    beallit("HÁLÓZATOK", "2P5");
            break;

            default:
                break;
        }
    }
    setTimeout(melyikOra, 1000);
}

function deaktivator() {
    document.getElementById("currently").innerHTML = "";
    document.getElementById("currently").style.display = "none";

    var tantargy = document.getElementsByClassName("tanora");

    for(var i = 0; i < tantargy.length; i++){
        tantargy[i].classList.remove("aktiv");
    }
}

function beallit(targy, pozicio) {
    deaktivator();
    document.getElementById("currently").style.display = "block";
    document.getElementById("currently").innerHTML = "Perpill " + targy + " van";
    document.getElementById(pozicio).classList.add("aktiv");
}

function hetIndikator(){
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
         
    var weekNumber = Math.ceil(days / 7);
    weekNumber++;

    if(weekNumber % 2 == 0) {
        document.getElementById("paros").classList.add("aktivhet");
        console.log("Páros hét van");
    }
    else {
        document.getElementById("paratlan").classList.add("aktivhet");
        console.log("Páratlan hét van");
    }
}
