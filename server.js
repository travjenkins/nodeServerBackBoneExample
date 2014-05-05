var express = require('express');
var app = express();
var engines = require('consolidate');

app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/html"));

app.get('/product/:productID', function (req, res) {
    var response = {},
        id = req.params.productID;
    
    if (id === "1") {
        response = {
            "id": "productDetails",
            "colors": [
                {
                    "name":"red",
                    "swatch": "someURL"
                },
                {
                    "name":"green",
                    "swatch": "someURL"
                },
                {
                    "name":"blue",
                    "swatch": "someURL"
                }
            ],
            "price": "$100.00",
            "sizes":[
                {
                    "name": "Small",
                    "abbr": "S",
                    "inStock": true
                },
                {
                    "name": "Medium",
                    "abbr": "M",
                    "inStock": false
                },
                {
                    "name": "Large",
                    "abbr": "L",
                    "inStock": true
                }
            ],
            "type": "shirt",
            "variants": [
                {
                    "name": "tall",
                    "url": "someURL"
                },
                {
                    "name": "petite",
                    "url": "someURL"
                }
            ]
        };
    } else if (id === "2") {
        response = {
            "id": "productDetails",
            "colors": [
                {
                    "name":"purple",
                    "swatch": "someURL"
                },
                {
                    "name":"gray",
                    "swatch": "someURL"
                },
                {
                    "name":"brown",
                    "swatch": "someURL"
                }
            ],
            "price": "$150.00",
            "sizes":[
                {
                    "name": "Small",
                    "abbr": "S",
                    "inStock": true
                },
                {
                    "name": "Medium",
                    "abbr": "M",
                    "inStock": false
                },
                {
                    "name": "Large",
                    "abbr": "L",
                    "inStock": true
                }
            ],
            "type": "pants",
            "variants": [
                {
                    "name": "long",
                    "url": "someURL"
                },
                {
                    "name": "big",
                    "url": "someURL"
                }
            ]
        };
    } else if (id === "3") {
        response = {
            "id": "productDetails",
            "colors": [
                {
                    "name":"yellow",
                    "swatch": "someURL"
                },
                {
                    "name":"white",
                    "swatch": "someURL"
                },
                {
                    "name":"black",
                    "swatch": "someURL"
                }
            ],
            "price": "$10.00",
            "sizes":[
                {
                    "name": "Small",
                    "abbr": "S",
                    "inStock": true
                },
                {
                    "name": "Medium",
                    "abbr": "M",
                    "inStock": false
                },
                {
                    "name": "Large",
                    "abbr": "L",
                    "inStock": true
                }
            ],
            "type": "shoes",
            "variants": [
                {
                    "name": "wide",
                    "url": "someURL"
                },
                {
                    "name": "narrow",
                    "url": "someURL"
                }
            ]
        };
    }
    
    //res.set("Content-Type", "applicaiton/JSON");
    res.send(response);
});

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});