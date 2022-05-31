import { ProxyState } from "../AppState.js"
import { Lists } from "../Models/Lists.js"





 class ListsService{
     addList(listData){
         console.log('adding lists', listData);
        ProxyState.lists = [...ProxyState.lists, new Lists(listData)]
     }

     deleteList(id){
        console.log('list is being deleted', id);
        ProxyState.lists = ProxyState.lists.filter( l => l.id != id)
     }

}



export const listsService = new ListsService()
