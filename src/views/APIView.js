import _ from 'underscore'
import $ from 'jquery'
import {View} from 'backbone';

  //  var app_id = '37bea647';
//    var app_key = 'd1fba26f82f34f5f3e035064f33c9ced';



const APIView = Backbone.View.extend({

    templateMatches: '',
    templateError:'',


    initialize: function ()
    {
        this.templateMatches = _.template(this.$('#template-recipes').html());
        this.templateError = _.template(this.$('#template-error').html());

        App.events.on('newClub', this.getRecipe, this);
    },

    events: {
        //Waarom pakt hij hier de click niet??
        'click #search':  'getRecipe'
    },

    getRecipe: function(data) {
        alert();
        // console.log(data.label);
        // console.log(data.image);
        // console.log(data.ingredientLines);
        // console.log(data.url);
        this.collection.fetch({
            success: (collection) => this.loadRecipesSuccessHandler(collection),
            error: (collection, response) => this.loadRecipesErrorHandler(collection, response),
            data: {
                label: hits[0].recipe.label,
                image: hits[0].recipe.image,
                ingredientLines: hits[0].recipe.ingredientLines,
                url: hits[0].recipe.url
            }
        });
    },

    loadRecipesSuccessHandler: function (collection)
    {
        this.$el.html(this.templateMatches({matches: collection.models}));
    },


    loadRecipesErrorHandler: function (collection, response) {
    this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
    
    //     var searchInput = $('#searchInput').val();
    //     //var newObject = this.model.toJSON();
    //  //  var that = this; // to fix that `this` refers to in the callback
    //     $.ajax({
    //         url: "https://api.edamam.com/search?q=" + searchInput + "&app_id=" + app_id + "&app_key=" + app_key,
    //         type: 'GET',
    //         dataType: 'json',
    //         success: function (result) {
    //             var results = result.hits[0].recipe.label;
    //             console.log(result);
    //             console.log(results);
    //             //console.log(result.hits);
    //
    //             // Hoe kan ik hier een template maken met een loop die door de eerste
    //             // 10 gerechten heen loopt?
    //             $("#results").append("<ul>"+ results +"</ul>");
    //
    //         }
    //     });
    // }
});

export default APIView;



