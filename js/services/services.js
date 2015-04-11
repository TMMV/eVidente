'use strict';

/* Services */
angular.module('eVidente.services')
    .factory('Servicos', [
        function() {
            var titulos = ["Dr.","Doutor","Mestre","Prof.","Professor","Vidente","Médium","Sábio","Astrólogo","Espirita","Cartomante","Feiticeiro","Guru","Curandeiro","Bruxo","Mago"];
            var acrescentoTitulo = ["Magnífico","Grande","Genial","Conceituado","Célebre"];
            var areasProblemas =
                [
                    ["amor"],["exames"],["dinheiro","perdas financeiras"],["sorte"],["negócio"],["vida"],["inveja"],
                    ["mau olhado"],["intímos","sexuais","impotência","falta de vigor"],["felicidade"],
                    ["separações e divórcios"],["amantes","infedilidade"],["jogo"],["vícios"],["injustiça","justiça"],["alcool"],["tabaco","cigarro"],
                    ["droga"],["proteção"],["conflitos familiares e profissionais"],["desvios de comportamento"],
                    ["gene estragado"],["harmonia matrimonial","casamento"],
                    ["gravidez"],["heranças"],["trabalho","progressão da carreira","emprego"],["casas assombradas"],
                    ["doenças","saúde","maleitas"],["depressão"],
                    ["angústia"],["insucesso"],["segurança"]
                ];
            var areasEspecialista = [
                ["amarrações","aproximações","uniões","reconciliações","retorno imediato"],
                ["afastamentos","abandonos","rupturas de uniões","rupturas de relações"],
                ["fantasias","poder","domínio"],["previsões futuro"],["limpeza espiritual"],["ler a sina"],["espiritualismo"]
            ]

            var preAreasProblemas = ["Resolve problema de ","Trata situações de ","Soluciona problema de "];
            var preAreasEspecialista = ["Especialista em ", "Autoridade em "];

            var bonus = ["Usa magia negra.","Usa magia branca.","Faz exorcismos.","",""];

            var descricao = ["Descendente de uma antiga e rica família. ","Não há problemas sem solução. ","Africano de Confiança. "];
            var descricaoComNumero = ["X anos de experiência.","Êxito em X horas."];
            return {
                sortearTitulo: function(){
                    var texto = acrescentoTitulo[Math.floor((Math.random() * acrescentoTitulo.length))] + " ";
                    texto += titulos[Math.floor((Math.random() * titulos.length))]
                    return texto;
                },
                sortearDescricao: function(){
                    var texto = descricao[Math.floor((Math.random() * descricao.length))]
                    var replacing = descricaoComNumero[Math.floor((Math.random() * descricaoComNumero.length))]
                    texto += replacing.replace("X",Math.floor((Math.random() * 28)+20).toString());
                    return texto;
                },
                sorteiaTexto: function(){

                    var verificaSeUsado = function(array1,allArrays){
                        if(allArrays.length == 0){return false}
                        var index = 0;
                        for(index in allArrays){
                            var array2 = allArrays[index];
                            if(array2.length == 0){return false;}
                            var n = 0;
                            while(n < Math.min(array1.length,array2.length)){
                                if(array1[n] == array2[n]){
                                    return true;
                                }
                                n++;
                            }
                        }
                        return false;
                    }

                    var texto = preAreasProblemas[Math.floor((Math.random() * preAreasProblemas.length))];

                    var n = 0;
                    var numberOfAreas = 3;
                    var areasSorteadas = [];
                    while(n <= numberOfAreas){
                        var sorteado = areasProblemas[Math.floor((Math.random() * areasProblemas.length))];
                        console.log(sorteado);
                        console.log(areasSorteadas);
                        if(verificaSeUsado(sorteado,areasSorteadas)){
                            console.log("ja temos");
                            n -= 1;
                        }
                        else{
                            areasSorteadas.push(sorteado);
                        }
                        n++;
                    }
                    n = 0;
                    for(sorteado in areasSorteadas){
                        var sorteados = areasSorteadas[sorteado];
                        sorteado = sorteados[Math.floor((Math.random() * sorteados.length))];
                        texto += sorteado;
                        if(n < numberOfAreas){
                            texto += ", ";
                        }
                        n ++;
                    }
                    texto += ". ";

                    // a partir daqui vemos as especializações
                    texto += preAreasEspecialista[Math.floor((Math.random() * preAreasEspecialista.length))];
                    n = 0;
                    var numberOfAreasEspecializacao = 2;
                    var areasSorteadas = [];

                    while(n <= numberOfAreasEspecializacao){
                        var sorteado = areasEspecialista[Math.floor((Math.random() * areasEspecialista.length))];
                        if(verificaSeUsado(sorteado,areasSorteadas)){
                            console.log("ja temos");
                            n -= 1;
                        }
                        else{
                            areasSorteadas.push(sorteado);
                        }
                        n++;
                    }

                    n = 0;
                    for(sorteado in areasSorteadas){
                        var sorteados = areasSorteadas[sorteado];
                        sorteado = sorteados[Math.floor((Math.random() * sorteados.length))];
                        texto += sorteado;
                        if(n < numberOfAreasEspecializacao){
                            texto += ", ";
                        }
                        n ++;
                    }
                    texto += ". ";
                    texto += bonus[Math.floor((Math.random() * bonus.length))];

                    return texto;
                }
            }
        }
    ]);