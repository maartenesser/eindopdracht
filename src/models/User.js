import {Model, Collection} from 'backbone'
import {LocalStorage} from 'backbone.localstorage';
import $ from 'jquery'

var SaveUsers = Backbone.Model.extend({

    localStorage: new LocalStorage('SaveUsers'),

    urlRoot: '/users/'
});


// Koppelen aan server
const User = new SaveUsers();
User.fetch({
    ajaxSync: true  // Fetches from the server
});

User.save({
    new: $("#input")
    // koppelen aan een url => php script
}, {
    ajaxSync: true
});


export default SaveUsers;