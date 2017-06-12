import {Model, Collection} from 'backbone'
import {LocalStorage} from 'backbone.localstorage';
import $ from 'jquery'

const attributes = {
    1: 'Maarten Esser',
    2: 'Gijs Louwers',
    3: 'Stan Botzen',
    4: 'Albert Aletrino',
    5: 'Bram Nijman',
    6: 'Jent Gantman'
};

// Wat heb ik precies aan een model?
// Wat kan een model wat de view niet kan?
// Inpincipe doe ik alles in de View

var SaveUsers = Backbone.Model.extend({

    localStorage: new LocalStorage('SaveUsers'),
    defaults: attributes,

    urlRoot: '/users/'
});


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

//console.log(User);


export default SaveUsers;