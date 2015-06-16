angular
    .module('twentyfortyeight', ['Game'])
    .controller('GameController',function(GameManager) {
        this.game = GameManager;
    });
