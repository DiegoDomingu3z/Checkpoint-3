import { listsService } from "../Services/ListsService.js"

function _drawList(){
    
}




export class ListsController{
    constructor(){
        console.log('list controller is working');

    }


    addList(listId){
        window.event.preventDefault()
        console.log('is lists loading');
        let form = window.event.target
        let listData = {
            
        }
        listsService.addList(listData)
    }
    
}