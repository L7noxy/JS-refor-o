using System;

namespace MudarDia{
    class Index{
        public static void Main(string[] args)
        {
            Dia();
        }

        public class Dia()
        {

        Random random = new Random();
        let diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Dia inválido"];
        int diaDaSemanaAleatorio = random.Next(1, 9);

            function executar()
            {
                    int diaDaSemanaAleatorio = random.Next(1, 9);
                    switch (diaDaSemanaAleatorio) {
                case 1:
                    alert("Segunda-feira");
                    break;
                case 2:
                    alert("Terça-feira");
                    break;
                case 3:
                    alert("Quarta-feira");
                    break;
                case 4:
                    alert("Quinta-feira");
                    break;
                case 5:
                    alert("Sexta-feira");
                    break;
                case 6:
                    alert("Sábado");
                    break;
                case 7:
                    alert("Domingo");
                    break;
                default:
                    alert("Dia inválido");
                }
            }
        }
    }
}