import { ProxyState } from "../AppState.js";
import { Flight } from "../Models/Flights.js";



class FlightService{
    createFlight(flightData){
        console.log('flights', flightData);
        ProxyState.flights = [...ProxyState.flights, new Flight(flightData)]
    }

    updateFlight(newText, id){

        let flight = ProxyState.flights.find(f => f.id == id)
        console.log('updating flight services', newText, flight);
        flight.note = newText
        ProxyState.flights = ProxyState.flights
    }
   
}




export const flightService = new FlightService()