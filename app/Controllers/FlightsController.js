import { ProxyState } from "../AppState.js";
import { flightService } from "../Services/FlightsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


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
        form.reset() 
        bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    }

    updateFlight(id){
        let textarea = window.event.target
        console.log(textarea.value, id);
        flightService.updateFlight(textarea.value, id)
        Pop.toast('Trip is Updated!')
    }

    async deleteFlight(id){
        if(await Pop.confirm('Are you sure you want to delete this flight')){

            console.log('deleting flight');
            flightService.deleteFlight(id)
        }
    }
}