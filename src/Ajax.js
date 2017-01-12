let $ = require('jquery');

class Ajax {

    static Get (urlToGetFrom) {
        let result= {};
        $.ajax({
            url: urlToGetFrom,
            dataType: 'json',
            type: 'GET',
            async:false,
            cache:false,
            success: function (res) {
                result = res;
            },
            error: function (error) {
                return error;
            }
        });
        return result
    };

    static Post (urlToGetFrom, data) {
        let result= {};
        $.ajax({
            url: urlToGetFrom,
            contentType :'application/json',
            type : 'POST',
            data :  data,
            dataType: 'json',
            async:false,
            cache:false,
            success: function (res) {
                result = res;
            },
            error: function (error) {
                return error;
            }
        });
        return result;
    };

    static Delete (url) {
        let result= {};
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'DELETE',
            async:false,
            cache:false,
            success: function (res) {
                result = res;
            },
            error: function (error) {
                return error;
            }
        });
        return result
    }
}

module.exports = Ajax;

