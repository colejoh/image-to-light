var request = require('request-promise');

var state = {
    update: function(req, res) {
        var responseObj = {};

        for(var i = 0; i < 50; i++) {
            var lightNum = ((i%3)+1);
            var urlBase = "http://192.168.1.125/api/jMjKRla3IH5kBfSSYBFxeXeshsCNi9F2FP2KNoxj/";
            var urlParam = "lights/" + lightNum + "/state";
            var query = urlBase + urlParam;

            var hue = Math.floor(Math.random() * 65535);
            var sat = Math.floor(Math.random() * 254);
            var bri = Math.floor(Math.random() * 254);

            var objID = "light" + lightNum;

            var options = {
                method: 'PUT',
                uri: query,
                body: {
                    "on": true,
                    "sat": sat,
                    "bri": bri,
                    "hue": hue,
                    "transitiontime":0
                },
                json: true
            }

            request(options).then(function(response) {
                responseObj[objID] = response;
            }).catch(function(err) {
                responseObj[objID] = response;
            });
        };
        res.send(responseObj);
    }
};

module.exports = state;
