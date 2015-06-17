angular.module('Grid')
    .directive('tile', function() {
        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            templateUrl: 'scripts/grid/tile.html'
        };
    })
.directive('grid', function(){
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'scripts/grid/grid.html'
        };
    });