import UserList from '../collections/UserList'
import _ from 'underscore'
import $ from 'jquery'
import SaveUsers from '../models/User'


var UserView = Backbone.View.extend({

    tagName: 'ul',

    events: {
        'click #add-input':  'getUser'
    },
    
// Dit zou vervolgens allemaal via een server moeten gaan en niet via de local storage
    
    // initialize view and render model 
    initialize: function() {
        var thisView = this;
        this.userslist = new UserList;
        _.bindAll(this, 'render');
        this.userslist.bind("add", function(model ){
            thisView.render( model );
        })
    },
    
    // Get user from local storage
    getUser: function() {
        var user_name = $('#input').val();
        this.userslist.add( {name: user_name} );
        //praten met de local storage server
        
    },
    
    // Save User to the local storage
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
        $("#users-list").append("<ul>"+ model.get("name")+"</ul>");
        
    }

});

export default UserView;