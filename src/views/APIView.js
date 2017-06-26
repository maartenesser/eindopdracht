import _ from 'underscore'
import $ from 'jquery'
import {View} from 'backbone';



const APIView = Backbone.View.extend({

    templateRecipes: '',
    templateError: '',
    
    initialize: function () {
        //Set Templates
        this.templateRecipes = _.template($('#template-recipes').html());
        this.templateError = _.template($('#template-error').html());
    },

    events: {
         'click #search': 'getRecipe'
    },

    // Load all recipes from search through the collection
    getRecipe: function () {

            this.collection.fetch({
                success: (collection) => this.loadRecipesSuccessHandler(collection),
                error: (collection, response) => this.loadRecipesErrorHandler(collection, response)
        });

    },
    
     //Success Handler will add HTML of matches to this $el
    loadRecipesSuccessHandler: function (collection) {

        this.$el.html(this.templateRecipes({recipes: collection.models}));

    },
     
     // On error, show error message in this $el
    loadRecipesErrorHandler: function (collection, response) {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default APIView;



