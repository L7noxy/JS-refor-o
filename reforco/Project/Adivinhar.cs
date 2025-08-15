using System;

namespace Adivinhar{
    class Index{
        public static void Main(string[] args)
        {
            Codigo();
            Console.WriteLine("Pressione Enter para sair...");
            Console.ReadLine();
        }

        public static void Codigo()
        {
            Random random = new Random();
            int aleatorio = random.Next(1, 11);

            Console.Write("Chute um número entre 1 e 10: ");
            int palpite = Convert.ToInt32(Console.ReadLine()); 

            if(aleatorio == palpite)
            {
                Console.WriteLine("ACERTOU o numero " + aleatorio + " e voce chutou " + palpite);
            }
            else
            {
                Console.Write("ERROU o numero era " + aleatorio + " e voce chutou " + palpite);
            }
        } 
    }
}