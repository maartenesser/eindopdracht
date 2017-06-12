import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';
import UserView from './views/UserView'
import User from './models/User';
import UserList from './collections/UserList';
import APIView from './views/APIView';
import Recipes from './collections/Recipes'





(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);

        let recipesCollection = new Recipes();
        new APIView({el: '#recipe-results', collection:recipesCollection});
    };


    var init = function () {
        setGlobalVariables();
        showDate();
    };

    window.addEventListener('load', init);
})();

function showDate () {
    document.getElementById("Date").innerHTML = Date();
}

// User Model
var user = new User;
//console.log(user);
var Users = user.toJSON();
//console.log(Users);

// User List View
var userList = new UserList;
//console.log(userList);

var view = new UserView({el: 'body'});
//console.log(view);

let recipeCollection = new Recipes();
var API = new APIView({el: '#api_container'});
console.log(API);