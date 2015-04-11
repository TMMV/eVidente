'use strict';

/* Controllers */
angular.module('eVidente.controllers')
    .controller('MainCtrl', ["$scope","Servicos",
        function($scope,Servicos) {
            $scope.tituloNome = Servicos.sortearTitulo() + " " + "Vieira";
            $scope.imagem = "";
            $scope.descricao = Servicos.sortearDescricao();
            $scope.resultados = "Colocar aqui texto tipo: Resultados Garantidos...";
            $scope.contactos = "Colocar aqui texto tipo: 91 233 1123 - Porto";
            $scope.texto = Servicos.sorteiaTexto();
        }
    ]);