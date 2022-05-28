import { ProxyState } from "../AppState.js";
import { Flight } from "../Models/Flights.js";



class FlightService{
    createFlight(flightData){
        console.log('flights', flightData);
        ProxyState.flights = [...ProxyState.flights, new Flight(flightData)]
    }
   
}




export const flightService = new FlightService()