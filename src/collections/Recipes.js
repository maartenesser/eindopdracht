import {Collection} from 'backbone';
import $ from 'jquery';
import Recipe from '../models/Recipe';


var app_id = '37bea647';
var app_key = 'd1fba26f82f34f5f3e035064f33c9ced';
var searchInput = $('#searchInput').val();

const Recipes = Backbone.Collection.extend ({

    model: Recipe,
    url: 'url: "https://api.edamam.com/search?q="' + searchInput + '"&app_id="'+ app_id + '"&app_key="' + app_key +''
    
});

export default Recipes;
