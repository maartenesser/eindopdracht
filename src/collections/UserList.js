import {Collection, Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import SaveUsers from '../models/User';
import AjaxModel from '../models/User'


let UserList = Backbone.Collection.extend({
    initialize: function(){

    },
    
    //Waarvoor heb ik dit precies nodig?
    //Wat zijn collections precies?

     //model: SaveUsers,
     localStorage: new LocalStorage('users') // Uniquely identify this

});


export default UserList;