(function() {
    "use strict";
    angular.module('customMap', ['uiGmapgoogle-maps'])

    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBXdebOIenfCQGQZfIlTPQMTw0ZHeC7tww',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    })

    .controller("mapController", function($scope, uiGmapGoogleMapApi) {

        // Define variables for our Map object
        var areaLat = 44.2126995,
            areaLng = -100.2471641,
            areaZoom = 3;

        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = {
                center: {
                    latitude: areaLat,
                    longitude: areaLng
                },
                zoom: areaZoom
            };
            $scope.options = {
                scrollwheel: false
            };
        });

    });
}());
