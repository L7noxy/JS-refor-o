using System;

namespace MudarDia{
    class Index{
        public static void Naosei(string[] args)
        {
            dia();
            Console.WriteLine("Pressione Enter para sair...");
            Console.ReadLine();
        }

        public static void dia()
        {

        Random random = new Random();
        int diaDaSemanaAleatorio = random.Next(1, 9);

            switch (diaDaSemanaAleatorio) 
            {
                case 1:
                    Console.WriteLine("Segunda-feira");
                    break;
                case 2:
                    Console.WriteLine("Terça-feira");
                    break;
                case 3:
                    Console.WriteLine("Quarta-feira");
                    break;
                case 4:
                    Console.WriteLine("Quinta-feira");
                    break;
                case 5:
                    Console.WriteLine("Sexta-feira");
                    break;
                case 6:
                    Console.WriteLine("Sábado");
                    break;
                case 7:
                    Console.WriteLine("Domingo");
                    break;
                default:
                    Console.WriteLine("Dia inválido");
                    break;
            }
        }
    }
}