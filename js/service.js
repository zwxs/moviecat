//10. 创建一个服务模块 创建一个$movieServ服务
angular.module('movieApp.service', [])
    .service('$movieServ', function() {
        this.jsonp = function(url, params, callback) {
            url += '?';
            for (var key in params) {
                url += key + '=' + params[key] + '&';
            }
            url += 'callback=aa';

            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script)
            window.aa = function(data) {
                callback(data)
                document.body.removeChild(script);
            }
        }

    });
