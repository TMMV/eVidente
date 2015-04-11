'use strict';

/* Services */
angular.module('Sigma.services')
    .factory('Logic', ["$http", "$q", "$cookies",
        function($http, $q, $cookies) {
            var rows = 25;
            var cols = 25;
            return {
                createGame: function(){
                    var megaArray = [];
                    for(var i=0; i<cols; i++){
                        var tempArray = [];
                        for(var j=0; j<rows; j++){
                            tempArray.push(0);
                        }
                        megaArray.push(tempArray);
                    }
                    return megaArray;
                },
                calculateProfitPerTurn: function(boxesArray,items){
                    var temp = 0;
                    for(var y=0;y<boxesArray.length;y++){
                        for(var x=0;x<boxesArray[y].length;x++){
                            if(boxesArray[y][x] > 0){
                                temp += items[boxesArray[y][x]-1].production;
                            }
                        }
                    }
                    return temp;
                }
            }
        }
    ]);