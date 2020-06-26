/*calcular horas extras

numero entrantes:
> salario
> jornada de trabalho (ex: 180 , 220 horas)
> numero de horas extras totais 
> numero domingo ou feriados?


salario dividido por jornada de trabalho = preço por hora


numero de horas extras totais - domingos e feriados = horas extras 50%
1.5 *horas extras 50% 



domingos e feriados = horas extras 100%
horas extras 100% * 2
*/




(function() {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
        })
    });
})();








    function calcular() {
        var salarioTotal = document.getElementById("idquestion1");
        var jornadaDeTrabalho = document.getElementById("idquestion2");
        var horasExtrasTotais = document.getElementById("idquestion3");
        var domingosEFeriados = document.getElementById("idquestion4");

        
    function calcularPrecoHora () {
        var precoHora = salarioTotal / jornadaDeTrabalho;
       return(precoHora); /*5,454545454545455‬ por hora*/ 

   }
   

   /*Preço da hora extra 50% total trabalhada*/

   function calcularHorasExtras () {
       var calcularHorasCinquenta = horasExtrasTotais - domingosEFeriados;
       var horasCinquenta = calcularHorasCinquenta * 1.5;
       var totalCinquenta = horasCinquenta * calcularPrecoHora();
       return totalCinquenta;
       }

   /* Preço da hora domingo e feriado total */

   function calcularExtrasCem () {
       var horasCem =  domingosEFeriados * 2;
       var totalCem = horasCem * calcularPrecoHora();
       return totalCem;
   }
        
        function calcularTotalExtras () {
            var calcularTotal = calcularHorasExtras() + calcularExtrasCem();
            return calcularTotal;
        }


        function salarioComExtras () {
            var calcularSalario = salarioTotal + calcularTotalExtras();
            var resultadototal = document.getElementById("resultado").innerHTML = "R$" + calcularSalario.toFixed(2); 
        }

    return resultadototal;
    }