angular-config-interceptor
==========================

Interceptor for adding default configurations.

$http service wrapper.

# Basic usage

```javascript
var app = angular.module('myApp', ['config-interceptor']);

app.config(function(configInterceptorProvider) {
    configInterceptorProvider.setBaseUrl('http://examplee.com');
});

app.controller('MyCtrl', function($scope, $http) {
    $http.get('/some-url').success(function(data) { 
        // Get some data from http://example.com/some-url?foo=bar
    });
});
```


