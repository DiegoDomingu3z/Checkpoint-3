import { ProxyState } from "../AppState.js";
import { Flight } from "../Models/Flights.js";
import { Lists } from "../Models/Lists.js";






export function saveState(){
    console.log('saving');
    let data = {
        flights : ProxyState.flights,
        lists : ProxyState.lists
    }
    window.localStorage.setItem('flights', JSON.stringify(data))
    
}

export function loadState(){
    console.log('loading');
    let data = window.localStorage.getItem('flights')
    if(data){
        let obj = JSON.parse(data)
        ProxyState.flights = obj.flights.map(fd => new Flight(fd))
        ProxyState.lists = obj.lists.map(ld => new Lists(ld))
    }
}