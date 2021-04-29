const d = document,
 n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeOut: 5000,
        maximunAge:0
    };

    const succes = position =>{
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b> </li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy} </b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blanck" rel="noopened"">Ver mi ubicacion en Maps </a>
        `
    };

    const error = (error) => {
        $id.innerHTML = `<p>Error ${error.code}: <mark>${error.message}</mark></p>`;
        console.warn(`Error ${error.code}: ${error.message} `);
    };

    n.geolocation.getCurrentPosition(succes, error, options);


    //se actualiza 
    // n.geolocation.watchPosition(succes, error, options);

    // console.log($id)
}