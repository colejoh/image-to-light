var request = require('request-promise');

var state = {
    update: function(req, res) {
        var urlBase = "http://192.168.1.125/api/jMjKRla3IH5kBfSSYBFxeXeshsCNi9F2FP2KNoxj/";
        var urlParam = "lights/1/state";
        var query = urlBase + urlParam;

        var state = req.body.on;

        var options = {
            method: 'PUT',
            uri: query,
            body: {
                "on": state
            },
            json: true
        }

        request(options).then(function(response) {
            res.send(response);
        }).catch(function(err) {
            res.send(err);
        });

        // request(options).then(function(response){
        //     var rep = {};
        //     var parsed = JSON.parse(response);
        //     res.send(parsed);
        // }).catch(function(err) {
        //     res.send(err);
        // });
    }
};

module.exports = state;
