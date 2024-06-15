const probleme = [
    "1 2020", "2 2020", "3, 2020", "4 2020", "1 2021", "2 2021", "3 2021", "4 2021", "5 2021", "6 2021", "7 2021", "8 2021", "9 2021", "10 2021", "11 2021", "12 2021"
];

const cerinta = [
    "Se consideră șirul 1, 1, 2, 5, 13, 34, 89, 233, 610 .... definit astfel: f1=f2=1, fn=3∙fn-1-fn-2 (unde n este un număr natural n≥3): Se citesc de la tastatură două numere naturale x și y (x≤y≤109), valorile a doi termeni aflați pe poziții consecutive în şirul dat, şi se cere să se scrie în fişierul text bac.txt, în ordine descrescătoare,  separați prin câte un spațiu, toţi termenii şirului care sunt mai mici sau egali cu y. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.",

    "Fişierul bac.in conţine un şir de numere naturale distincte, din intervalul [1,109]. Numerele din şir sunt separate prin câte un spaţiu şi cel puţin trei dintre ele au penultima cifră 2 și ultima cifră 0.Se cere să se afișeze pe ecran cele mai mari trei numere din şir cu proprietatea că au penultima cifră 2 și ultima cifră 0. Numerele determinate sunt afişate în ordine crescătoare, separate prin câte un spaţiu. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.", 

    "Fişierul bac.in conţine un şir de cel mult 106 numere întregi din intervalul [-109,109], separate princâte un spaţiu. Cel puţin un număr din șir este negativ. Se cere să se afişeze pe ecran lungimea maximă a unei secvenţe a şirului care fie începe, fie se încheie cu un număr negativ. O secvenţă este formată din termeni aflaţi pe poziţii consecutive în şir, iar lungimea secvenței este egală cu numărul de termeni ai acesteia. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.",

    "Fişierul bac.txt conţine, în ordine descrescătoare, cel puţin două şi cel mult 106 numere naturale din intervalul [0,109], separate prin câte un spaţiu. Se cere să se afişeze pe ecran, în ordine strict descrescătoare, separate prin câte un spaţiu, numai numerele care apar în fişier de exact două ori. Dacă nu există niciun astfel de număr, se afișează pe ecran mesajul nu exista. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.",

    "Fișierul bac.in conține cel mult 106 numere naturale din intervalul [0,109], separate prin câte un spațiu. Se cere să se afișeze pe ecran, în ordine descrescătoare, cele mai mari două numere de douăcifre distincte care NU se află în fișier. Numerele afișate sunt separate printr-un spațiu, iar dacă nu există două astfel de numere, se afișează pe ecran mesajul nu exista. Proiectați un algoritm eficient din punctul de vedere al timpului de executare.",

    "Fișierul bac.in conține un șir de cel mult 106 numere întregi din intervalul [-109,109], separate prin câte un spațiu. Cel puțin un număr din șir este pozitiv. Se cere să se afișeze pe ecran lungimea maximă a unei secvențe a șirului care fie începe, fie se încheie cu un număr pozitiv. O secvență este formată din termeni aflați pe poziții consecutive în șir, iar lungimea secvenței este egală cu numărul de termeni ai acesteia. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate și al timpului de executare.",

    "Două numere naturale sunt numite z-prietene dacă au aceeași cifră a zecilor. Fișierul bac.in conține un șir de cel mult 106 numere naturale din intervalul [10,109], separate prin câte un spațiu. Se cere să se afișeze pe ecran pozițiile din șir pe care se află termeni precedați de un număr maxim de valori z-prietene cu ei. Numerele afișate sunt separate prin câte un spațiu. Proiectați un algoritm eficient din punctul de vedere al timpului de executare.",

    "Fişierele bac1.txt și bac2.txt conţin numere naturale din intervalul [1,105]: fișierul bac1.txt conține pe prima linie un număr n1, iar pe a doua linie un șir de n1 numere, iar fișierul bac2.txt conține pe prima linie un număr n2, iar pe a doua linie un șir de n2 numere. Numerele aflate pe aceeași linie a unui fișier sunt ordonate crescător și sunt separate prin câte un spațiu. Se cere să se afișeze pe ecran, în ordine crescătoare, separate prin câte un spațiu, numerele divizibile cu 5 care se găsesc doar în unul dintre șirurile aflate în cele două fișiere. Dacă nu există niciun astfel de număr, se afișează pe ecran mesajul nu exista. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.",

    "Fişierul bac.txt conține numere naturale din intervalul [2,106]: pe prima linie n, iar pe a doua linie un șir de n numere, separate prin câte un spațiu. Se cere să se afișeze pe ecran, pentru fiecare număr natural i (i[1,n]), cea mai mare dintre primele i valori ale șirului aflat în fișier. Numerele afișate sunt separate prin câte un spațiu. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare.",

    "Fișierul bac.in conține un șir de cel puțin patru și cel mult 105 numere întregi nenule din intervalul [-109,109], dintre care trei sunt negative, iar restul pozitive. Numerele sunt separate prin câte un spațiu. O secvență este formată din termeni aflați pe poziții consecutive în șir, iar lungimea secvenței este egală cu numărul de termeni ai acesteia. Se cere să se afișeze pe ecran lungimea unei secvențe din șirul aflat în fișier care conține o singură valoare negativă și un număr maxim de valori pozitive. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate și al timpului de executare.",

    "Fișierul bac.txt conține cel mult 106 cifre, separate prin câte un spațiu. Se cere să se afișeze pe ecran, separate prin câte un spațiu, toate cifrele pare care apar în fișier sau mesajul nu exista, dacă nu există astfel de cifre. Proiectați un algoritm eficient din punctul de vedere al timpului de executare",

    "Fișierul bac.txt conține un șir de cel mult 106 numere naturale din intervalul [0,109]. Se cere să se determine și să se afișeze pe ecran, separate printr-un spațiu, ultimele două numere impare (nu neapărat distincte) din șirul aflat în fișier, sau mesajul nu exista, dacă nu există două astfel de numere. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate și al timpului de executare.",

    "Fișierul numere.txt conține cel mult 105 numere naturale din intervalul [1,109], câte unul pe fiecare linie. Se cere să se afișeze pe ecran cel mai mare număr care se poate forma cu toate cifrele care apar în numerele din fișier, ca în exemplu. Proiectați un algoritm eficient din punctul de vedere al timpului de executare.",

    "Fişierul bac.txt conține un șir de cel mult 105 numere naturale din intervalul [1,109], separate prin câte un spaţiu. Se cere să se afişeze pe ecran cea mai mică poziţie pe care ar putea-o ocupa primul termen al șirului aflat în fişier în şirul format cu aceleași valori, ordonat crescător. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate şi al timpului de executare. ",

    "Se consideră șirul 1, 3, 7, 13, 21, 31, 43 ... definit astfel: f0=1, iar fn=fn-1+2n, dacă n≥1 (unde n este un număr natural). Se citesc de la tastatură două numere naturale din intervalul [1,109], x și y (x < y), reprezentând doi termeni aflați pe poziții consecutive în șirul dat, și se cere să se scrie în fișierul text bac.out, separați prin câte un spațiu, toți termenii șirului mai mici sau egali cu y, în ordine inversă a apariției lor în șir. Proiectați un algoritm eficient din punctul de vedere al spațiului de memorie și al timpului de executare.",

    "Fișierul bac.txt conține un șir de cel mult 105 numere naturale din intervalul [1,109], separate prin câte un spațiu. Se cere să se afișeze pe ecran cea mai mare poziție pe care ar putea-o ocupa primul termen al șirului aflat în fișier în șirul format cu aceleași valori, ordonat descrescător. Proiectați un algoritm eficient din punctul de vedere al memoriei utilizate și al timpului de executare."
]

const cod = [
    `#include &lt;iostream&gt;
    #include &lt;fstream&gt;
    
    using namespace std;
    
    int main()
    {
        ofstream fout("bac.txt");
    
        int x, y;
    
        cin>>x>>y;
    
        fout&lt;&lt;y&lt;&lt;" "&lt;&lt;x&lt;&lt;" ";
    
        while(x != 1 || y != 1){
            x = 3 * x - y;
            y = (y + x) / 3;
            fout&lt;&lt;x&lt;&lt;" ";
        }
    }`, 
    `#include &lt;iostream&gt;
    #include &lt;fstream&gt;
                                    
    using namespace std;
                                    
    int main()
    {
        ifstream fin("bac.in");
                                    
        int n, a = 0, b = 0, c = 0;
                                    
        while(fin>>n){
            if(n % 10 == 0 && (n / 10) % 10 == 2){
                if(n > a){
                    c = b;
                    b = a;
                    a = n;
                }
                else if(n > b){
                    c = b;
                    b = n;
                }
                else if(n > c){
                    c = n;
                }
            }
        }
        cout&lt;&lt;c&lt;&lt;" "&lt;&lt;b&lt;&lt;" "&lt;&lt;a;
    }`,
     `#include &lt;iostream&gt;
     #include &lt;fstream&gt;
     
     using namespace std;
     
     int main()
     {
         ifstream fin(&quot;bac.in&quot;);
     
         int n, l = 0, k = 0, prim = 0, ultim = 0;
     
         while(fin&gt;&gt;n){
             k++;
             if(n &lt; 0){
                 if(prim == 0){
                     prim = k;
                 }
                 else{
                     ultim = k;
                 }
             }
         }
         if(ultim &gt; k - (prim - 1)){
             cout&lt;&lt;ultim;
         }
         else{
             cout&lt;&lt;k - (prim - 1);
         }
     }`,
      `#include &amp;lt;iostream&amp;gt;
      #include &amp;lt;fstream&amp;gt;
      
      using namespace std;
      
      int main()
      {
          ifstream fin(&amp;quot;bac.in&amp;quot;);
      
          int n, l = 0, k = 0, prim = 0, ultim = 0;
      
          while(fin&amp;gt;&amp;gt;n){
              k++;
              if(n &amp;lt; 0){
                  if(prim == 0){
                      prim = k;
                  }
                  else{
                      ultim = k;
                  }
              }
          }
          if(ultim &amp;gt; k - (prim - 1)){
              cout&amp;lt;&amp;lt;ultim;
          }
          else{
              cout&amp;lt;&amp;lt;k - (prim - 1);
          }
      }`,
       `#include &lt;iostream&gt;
       #include &lt;fstream&gt;
       
       using namespace std;
       
       int V[100];
       
       int main()
       {
           ifstream fin(&quot;bac.in&quot;);
       
           int n, k = 0, a, b;
       
           while(fin&gt;&gt;n){
               if(n &lt; 100){
                   V[n]++;
               }
           }
       
           for(int i = 98;i &gt;= 10 &amp;&amp; k &lt; 2;i--){
               if(V[i] == 0){
                   if(i % 10 != (i / 10) % 10){
                       if(k == 0){
                           a = i;
                       }
                       else{
                           b = i;
                       }
                       k++;
                   }
               }
           }
           if(k == 2){
               cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b;
           }
           else{
               cout&lt;&lt;&quot;nu exista&quot;;
           }
       }`,
        `#include &lt;iostream&gt;
        #include &lt;fstream&gt;
        
        using namespace std;
        
        int main()
        {
            ifstream fin(&quot;bac.in&quot;);
        
            int n, k = 1, x = 0, y = 0;
        
            while(fin&gt;&gt;n){
                if(n &gt; 0){
                    if(x == 0){
                        x = k;
                    }
                    else{
                        y = k;
                    }
                }
                k++;
            }
            if(y &gt; k - x){
                cout&lt;&lt;y;
            }
            else{
                cout&lt;&lt;k - x;
            }
        }`,
         `#include &lt;iostream&gt;
         #include &lt;fstream&gt;
         
         using namespace std;
         
         int V[10];
         int poz[10];
         
         int main()
         {
             ifstream fin(&quot;bac.in&quot;);
         
             int n, k = 1, max = 0, j;
         
             while(fin&gt;&gt;n){
                 j = (n / 10) % 10;
                 V[j]++;
                 if(V[j] &gt; max){
                     max = V[j];
                 }
                 poz[j] = k;
                 k++;
             }
         
             for(int i = 0;i &lt; 10;i++){
                 if(V[i] == max){
                     cout&lt;&lt;poz[i]&lt;&lt;&quot; &quot;;
                 }
             }
         }
         `,
          `#include <iostream>
          #include <fstream>
          
          using namespace std;
          
          int main()
          {
              ifstream fin("bac1.txt");
              ifstream fin2("bac2.txt");
          
              int n, n2, a, b, j = 1;
              bool exista = false;
          
              fin>>n;
              fin2>>n2;
          
              fin2>>b;
              for(int i = 0;i < n;i++){
                  fin>>a;
                  if(a % 5 == 0){
                          while(j < n2 && b < a){
                              fin2>>b;
                              if(b < a && b % 5 == 0){
                                  exista = true;
                                  cout<<b<<" ";
                              }
                              j++;
                          }
                          if(b != a){
                              exista = true;
                              cout<<a<<" ";
                          }
                      }
                  }
              if(exista == false){
                  cout<<"nu exista";
              }
          }
          `,
           `#include &lt;iostream&gt;
           #include &lt;fstream&gt;
           
           using namespace std;
           
           int main()
           {
               ifstream fin(&quot;bac.txt&quot;);
           
               int n, max = 0, a;
           
               fin&gt;&gt;n;
           
               for(int i = 1;i &lt;= n;i++){
                   fin&gt;&gt;a;
                   if(a &gt; max){
                       max = a;
                   }
                   cout&lt;&lt;max&lt;&lt;&quot; &quot;;
               }
           }
           `,
            `#include &lt;iostream&gt;
            #include &lt;fstream&gt;
            
            using namespace std;
            
            int main()
            {
                ifstream fin(&quot;bac.in&quot;);
            
                int k = 1, poz = 0, max = 0, n, l = 0;
            
                while(fin&gt;&gt;n){
                    if(n &lt; 0){
                        if(poz &gt; 0){
                            if(l &gt; max){
                                max = l;
                            }
                            l = k - poz - 1;
                        }
                        poz = k;
                    }
                    l++;
                    k++;
                }
                cout&lt;&lt;max;
            }
            `,
             `#include &lt;iostream&gt;
             #include &lt;fstream&gt;
             
             using namespace std;
             
             int V[5];
             
             int main()
             {
                 ifstream fin(&quot;bac.txt&quot;);
             
                 int n;
             
                 while(fin&gt;&gt;n){
                     if(n % 2 == 0){
                         V[n / 2]++;
                     }
                 }
             
                 for(int i = 0;i &lt; 5;i ++){
                     for(int j = 0;j &lt; V[i];j++){
                         cout&lt;&lt;i * 2&lt;&lt;&quot; &quot;;
                     }
                 }
             }`,
              `#include &lt;iostream&gt;
              #include &lt;fstream&gt;
              
              using namespace std;
              
              int main()
              {
                  ifstream fin(&quot;bac.txt&quot;);
              
                  int n, a = 0, b = 0;
              
                  while(fin&gt;&gt;n){
                      if(n % 2 == 1){
                          if(a == 0){
                              a = n;
                          }
                          else{
                              if(b != 0){
                                  a = b;
                              }
                              b = n;
                          }
                      }
                  }
                  if(b != 0){
                      cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b;
                  }
                  else{
                      cout&lt;&lt;&quot;nu exista&quot;;
                  }
              }
              
              `,
              `#include &lt;iostream&gt;
              #include &lt;fstream&gt;
              
              using namespace std;
              
              int V[10];
              
              int main()
              {
                  ifstream fin(&quot;numere.txt&quot;);
              
                  int n;
              
                  while(fin&gt;&gt;n){
                      while(n){
                          V[n % 10]++;
                          n /= 10;
                      }
                  }
                  for(int i = 9;i &gt;= 0;i--){
                      for(int j = 0;j &lt; V[i];j++){
                          cout&lt;&lt;i;
                      }
                  }
              }`, 
              `#include &lt;iostream&gt;
              #include &lt;fstream&gt;
              
              using namespace std;
              
              int main()
              {
                  ifstream fin(&quot;bac.txt&quot;);
              
                  int n, k = 1, nr;
              
                  fin&gt;&gt;nr;
              
                  while(fin&gt;&gt;n){
                      if(n &lt; nr){
                          k++;
                      }
                  }
                  cout&lt;&lt;k;
              }
              
              
              `, 
              `#include &lt;iostream&gt;
              #include &lt;fstream&gt;
              
              using namespace std;
              
              int main()
              {
                  ofstream fout(&quot;bac.out&quot;);
              
                  int x, y, n;
              
                  cin&gt;&gt;x&gt;&gt;y;
              
                  n = (y - x) / 2;
              
                  fout&lt;&lt;y&lt;&lt;&quot; &quot;;
              
                  while(n &gt; 0){
                      x = y - (2 * n);
                      fout&lt;&lt;x&lt;&lt;&quot; &quot;;
                      n--;
                      y = x;
                  }
              }
              `, 
              `#include &amp;lt;iostream&amp;gt;
              #include &amp;lt;fstream&amp;gt;
              
              using namespace std;
              
              int main()
              {
                  ofstream fout(&amp;quot;bac.out&amp;quot;);
              
                  int x, y, n;
              
                  cin&amp;gt;&amp;gt;x&amp;gt;&amp;gt;y;
              
                  n = (y - x) / 2;
              
                  fout&amp;lt;&amp;lt;y&amp;lt;&amp;lt;&amp;quot; &amp;quot;;
              
                  while(n &amp;gt; 0){
                      x = y - (2 * n);
                      fout&amp;lt;&amp;lt;x&amp;lt;&amp;lt;&amp;quot; &amp;quot;;
                      n--;
                      y = x;
                  }
              }
              `

]

const intrare = [
"89 233", 
"9731  50  112  20  8  16  8520  3  2520  1520",
"12 25 -6 7 80 -75 101 -6 52 -124 87 99 210",
" 100 50 50 50 49 49 36 16 16 12 10 10 9 7 7",
"12 235 123 67 98 6 96 94 123 67 98 100",
"-15 -7 4 -7 21 -5 -200 -26 52 -24 -7 -9 -20",
"726 358 98 157 20 49 128 879 659 271",
"bac1.in contine numerele<br> 7 <br> 1 2 3 4 7 20 60 <br><br> bac2.in contine numerele<br> 9 <br> 3 5 7 8 9 10 12 20 24",
"12 <br> 4 6 3 7 8 1 6 2 7 9 10 8",
"15 21 -61 9 870 -23 11 5 8 -81 5 14",
"3 3 0 8 2 1 2 1 3 7 1 5 2 7 1 0 3 2 3",
"122 1635 628 1413 1647 900 3001 4252",
"263<br> 39628 <br>79 <br>887308",
"15 7 15 17 6 4",
"x = 21 <br> y = 31",
"15 7 15 17 6 4 21"
]

const iesire = [
"233 89 34 13 5 2 1 1",
"1520  2520  8520",
"11",
"49 16 10 7",
"97 95",
"11   (corespunzător secvenței 4 -7 21 -5 -200 -26 52 -24 -7 -9 -20)",
"7 9  (termenii 128, respectiv 659 respectă proprietatea cerută)",
"5 10 60",
"4 6 6 7 8 8 8 8 8 9 10 10",
" 6  (corespunzător secvențelor 9 870 -23 11 5 8 sau 11 5 8 -81 5 14)",
"0 0 2 2 2 2 8",
"1647 3001",
"9988887766333220",
" 4 (15 se află pe a patra și pe a cincea poziție în şirul 4, 6, 7, 15, 15, 17)",
"31 21 13 7 3 1",
" 4 (15 se află pe a treia și pe a patra poziție în șirul 21, 17, 15, 15, 7, 6, 4)"
]

const video = ['../video/1.mp4', '', '', '', '', '', '', '', '', '', '']

const explicatie = ['O soluţie posibilă generează termenii șirului deducând forma generală a termenului curent și actualizând, la fiecare pas, valoarea acestuia: dacă crt,x,y sunt trei termeni aflați pe poziții consecutive în șir, în această ordine, atunci crt=3∙x-y.', 
'O soluţie posibilă parcurge șirul din fișier și memorează cele mai mari trei numere cu proprietatea cerută în trei variabile, fie acestea max1, max2, max3 (max1<max2<max3); fiecare termen curent citit se compară cu valorile maxime memorate, pe rând (max3, max2, max1), iar acestea se actualizează după caz.', 
'O soluţie posibilă parcurge șirul din fișier, numără valorile citite în variabila nr și memorează poziția primului număr negativ, p1, precum și poziția ultimului număr negativ, p2. Valoarea cerută este cea mai mare dintre valorile nr-p1+1 și p2.', 
'O soluţie posibilă parcurge șirul din fișier, memorând valoarea curentă (crt), valoarea anterioară celei curente (ant), precum și numărul de apariții ale valorii curente (nr); la întâlnirea unei valori crt diferită de ant, se afișează ant, după caz, și se actualizează corespunzător variabilele; ultima secvență este tratată individual.', 
'O soluție posibilă utilizează un vector de apariții, inițial cu valori nule, în care ap[i]=1 dacă valoarea i apare în șirul aflat în fișier. Se completează vectorul pe măsura citirii datelor din fișier, având în vedere numerele de două cifre, apoi se parcurge de la dreapta la stânga, începând cu poziția 98, memorându-se primele două valori x și y, cu cifre distincte, pentru care ap[x]=ap[y]=0.', 
'O soluție posibilă parcurge șirul din fișier, numără valorile citite în variabila nr și memorează poziția primului număr pozitiv, p1, precum și poziția ultimului număr pozitiv, p2. Valoarea cerută este cea mai mare dintre valorile nr-p1+1 și p2.',
 'O soluție posibilă utilizează două tablouri nr și p, cu câte 10 elemente, inițial nule, în care nr[i] este numărul de valori din fișier care au cifra zecilor i, iar p[i] este poziția în șir a ultimului număr care are cifra zecilor i. Pe măsura citirii datelor din fișier se actualizează în mod corespunzător poziția curentă, precum și tablourile nr și p. Dacă max este valoarea maximă din tabloul nr, se vor afișa toate valorile p[i] pentru care nr[i]=max.', 
 'O soluţie posibilă interclasează șirurile din cele două fișiere, afișând numai valorile cerute: cât timp există valori în ambele șiruri, acestea se parcurg memorându-se valoarea curentă din primul șir (fie aceasta x1) și valoarea curentă din al doilea șir (fie aceasta x2), care se compară la fiecare pas. - dacă x1<x2, atunci se afișează x1 (doar dacă este divizibil cu 5) și se citește următoarea valoare din primul fișier; - dacă x2<x1, atunci se afișează x2 (doar dacă este divizibil cu 5) și se citește următoarea valoare din al doilea fișier; - dacă x1=x2, atunci nu se afișează nimic și se citește următoarea valoare distinctă din fiecare dintre cele două fișiere. La final se parcurg termenii rămași în unul dintre șiruri și se afișează doar valorile divizibile cu 5. ',
  'O soluţie posibilă parcurge datele din fișier și memorează cea mai mare valoare dintre cele citite până la pasul curent, fie aceasta maxi; la fiecare pas se compară maxi cu valoarea citită curent, se actualizează maxi, după caz, și se afișează pe ecran.', 
  'O soluție posibilă parcurge șirul din fișier, numără valorile citite în variabila nr și memorează pozițiile numerelor negative, fie acestea p1, p2 și p3, în ordinea apariției lor în șir. Valoarea cerută este cea mai mare dintre valorile p2-1, p3-p1-1 și nr-p2.', 
  'O soluție posibilă utilizează un vector de frecvență v cu 5 elemente, inițial cu valori nule, în care vi reprezintă numărul de apariții ale cifrei 2·i. Pe măsura citirii datelor din fișier se actualizează vectorul de frecvență, după caz, iar la final se va afișa fiecare valoare 2·i de vi ori.', 
  'O soluție posibilă parcurge șirul din fișier, menținând în două variabile (inițial egale cu niște valori excepție) ultimele două valori impare citite, care se actualizează corespunzător la întâlnirea fiecărui număr impar.', 
  'O soluție posibilă folosește un vector de frecvență ap, inițial cu toate valorile nule, unde apx este egal cu numărul de apariții ale cifrei x în toate numerele din fișier. Pe măsura citirii datelor din fișier se actualizează vectorul ap, parcurgând cifrele fiecărui număr citit, apoi se afișează fiecare cifră x, cu x de la 9 la 0, de câte apx ori. ', 
  'O soluție posibilă citește primul număr din fișier (fie acesta x), apoi parcurge restul șirului, numărând valorile care sunt strict mai mici decât x în variabila nr, inițial nulă. Poziția cerută este nr+1.', 
  'O soluție posibilă determină valoarea lui n, corespunzătoare termenului fn=y, pe baza expresiei n=(y-x)/2; se generează termenii șirului mai mici decât y pe baza relației fn=x=y-2(n+1), unde x, y și n se actualizează corespunzător, la fiecare pas. O altă soluție posibilă nu utilizează deloc valoarea lui x, ci deduce formula termenului general ca fiind fn=1+n(n+1) și determină valoarea lui n corespunzătoare termenului fn=y rezolvând ecuația n 2+n-y+1=0; se generează termenii fn ai șirului pe baza formulei deduse, unde n se actualizează corespunzător, la fiecare pas.', 
  'O soluție posibilă citește primul număr din fișier (fie acesta x), apoi parcurge restul șirului, numărând valorile care sunt mai mari sau egale cu x în variabila nr, inițial egală cu 1. Poziția cerută este nr.'];

