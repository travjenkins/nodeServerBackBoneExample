var app = {};

$(function() {
    "use strict";
    
    //This is the view model that will contain the details we need to display
    app.ProductDetails = Backbone.Model.extend({});
    
    //This is our collection of models. We only have one right now - but this would grow
    app.ProductPageCollection = Backbone.Collection.extend({
        "model": app.ProductDetails,
        "getProductDetails": function (productURL) {
            this.url = productURL;
            this.fetch({});
        }
    });
    app.productPage = new app.ProductPageCollection();
    
    //This is a view whose job it is to render the view
    app.ProductDetails = Backbone.View.extend({
        "el": ".outfitDetails",
        "tag": "div",
        "collection": app.productPage,
        
        "events": {
            "click .itemDetails": "updateModel"
        },
        
        "initialize": function () {
            this.template = $("#detailedView").html();
            
            this.collection.bind('change reset add remove', this.render, this);
        },
        "render": function () {
            var view = this,
                html = "",
                response = {},
                details = $("#productDetailsDisplay");
        
           response = view.collection.get("productDetails").toJSON();
        
           html = Mustache.render(view.template, response);
           
           if(details[0]){
               details.remove();
           }
           
            $(view.el).append(html);
           
           return view;
        },
        
        "updateModel": function (event) {
            var productID = "";
            
            productID = $(event.currentTarget).data("detailsurl");
            
            this.collection.getProductDetails(productID);
        }
    });
    app.productDetailsModule = new app.ProductDetails();
});