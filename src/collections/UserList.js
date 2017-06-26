import {Collection, Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import SaveUsers from '../models/User';
import AjaxModel from '../models/User'


let UserList = Backbone.Collection.extend({
    initialize: function(){

    },
    

     //model: SaveUsers,
     localStorage: new LocalStorage('users')

});


export default UserList;