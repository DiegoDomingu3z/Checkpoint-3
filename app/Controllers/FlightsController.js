import { ProxyState } from "../AppState.js";
import { flightService } from "../Services/FlightsService.js";


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
        _drawFlights()

    }

    createFlight(){
        window.event.preventDefault()
        console.log('this working?');
        let form = window.event.target
        let flightData = {
            flight: form.flight.value

        }
        flightService.createFlight(flightData)
    }
}