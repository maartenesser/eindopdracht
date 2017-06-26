import {Collection} from 'backbone';
import $ from 'jquery';
import Recipe from '../models/Recipe';


// collection for search api results

var Recipes = Backbone.Collection.extend({

    model: Recipe,
    url: function () {
        var input = $('#searchInput').val();
        return "https://api.edamam.com/search?q="
            + input +
            "&app_id=37bea647&app_key=d1fba26f82f34f5f3e035064f33c9ced"
    },
    parse: function (response) {

        var check = response.hits;

        return check;
    }

});

export default Recipes;
