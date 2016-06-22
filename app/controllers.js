(function() {
    "use strict";
    angular.module('mapSample', ['uiGmapgoogle-maps'])
        .controller('MainController', function($scope) {
            $scope.map = {
                center: {
                    latitude: 7.0933,
                    longitude: 79.9989
                },
                draggable: true,
                zoom: 15
            };
            $scope.options = {
                scrollwheel: false,
                panControl: true,
                rotateControl: true,
                scaleControl: true,
                streetViewControl: true
            };
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: 7.0933,
                    longitude: 79.9989
                },
                options: {
                    draggable: false,
                    title: 'The KVK Blog',
                    animation: 1 // 1: BOUNCE, 2: DROP
                }
            };
        });
}());
