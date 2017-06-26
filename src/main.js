import _ from 'underscore';
import {Events} from 'backbone';
import UserView from './views/UserView'
import APIView from './views/APIView';
import Recipes from './collections/Recipes'
import DateView from './views/DateView'



(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };


     //Run after dom is ready
    
    var init = function () {
        setGlobalVariables();
        let recipeCollection = new Recipes();
        new APIView({el: "#api_container", collection: recipeCollection});
        new UserView({el: 'body'});
        new DateView({el: 'body'})
    };

    window.addEventListener('load', init);
})();
