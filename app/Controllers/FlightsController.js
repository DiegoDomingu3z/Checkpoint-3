import { ProxyState } from "../AppState.js";
import { flightService } from "../Services/FlightsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawFlights(){
    let flights = ProxyState.flights
    let template = ''
    flights.forEach(f => template += f.Template)
    document.getElementById('flights').innerHTML = template

       

}



export class FlightsController{
    constructor(){
       console.log('irking');
       ProxyState.on('flights', _drawFlights)
       ProxyState.on('lists', _drawFlights)
       ProxyState.on('flights', saveState)
       ProxyState.on('lists', saveState)
       loadState()
        _drawFlights()

    }

    createFlight(){
        window.event.preventDefault()
        console.log('this working?');
        let form = window.event.target
        let flightData = {
            flight: form.flight.value,
            

        }
        flightService.createFlight(flightData)
    }

    updateFlight(id){
        let textarea = window.event.target
        console.log(textarea.value, id);
        flightService.updateFlight(textarea.value, id)
    }
}