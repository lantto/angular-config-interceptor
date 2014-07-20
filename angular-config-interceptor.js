(function() {

var module = angular.module('config-interceptor', []);

module.provider('configInterceptor', function() {
    var baseConfig = {};

    this.setBaseUrl = function(baseUrl) {
        baseConfig.url = function(url) {
            return baseUrl + url;
        };
    };

    this.set = function(configProp, configFn) {
        baseConfig[configProp] = configFn;
    };

    // Set default

    this.$get = function() {
        return {
            request: function(config) {
                for (var prop in baseConfig) {
                    config[prop] = baseConfig[prop](config[prop]);
                };
                return config;
            }
        }
    };
});

})();