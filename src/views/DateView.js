import _ from 'underscore'
import $ from 'jquery'
import {View} from 'backbone';



const DateView = Backbone.View.extend({

    // initialize date
    initialize: function () {
        
            var d = new Date();
            var n = d.toDateString();
            document.getElementById("Date").innerHTML = n;
    }
    
});


export default DateView;