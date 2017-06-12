import UserList from '../collections/UserList'
import _ from 'underscore'
import $ from 'jquery'
import SaveUsers from '../models/User'


var UserView = Backbone.View.extend({

    tagName: 'lu',

    events: {
        'click #add-input':  'getUser',
        'click #delete' : 'removeUser'
    },

    initialize: function() {
        var thisView = this;
        this.userslist = new UserList;
        _.bindAll(this, 'render');
        this.userslist.bind("add", function(model ){
            alert("It Works!!");
            thisView.render( model );
        })
    },
    // Get Users from the local storage Waarom werkt het niet?
    // Hoe kan ik het beste een database hieraan linken?
    getUser: function() {
        var user_name = $('#input').val();
        this.userslist.add( {name: user_name} );
        //praten met de local storage server
        
    },
    removeUser: function(model) {
       // this.model.get("name").remove();
       // console.log(this);
       // console.log('test');
    },
    
    // Save User to the local storage
    // Als ik een database heb kan dit makkelijker en kan iedereen dit zien
    saveUser: function () {
        const User = new SaveUsers();
        User.save({
            new: $("#input")
        }, {
            ajaxSync: true
        });
        console.log('rendered')
    },

    render: function( model ) {
        $("#users-list").append("<ul>"+ model.get("name")+"</ul> <button id='delete'>Delete</button>");
        
    }

});

export default UserView;