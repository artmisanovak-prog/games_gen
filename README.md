# games_gen

Pracovní katalog samostatných herních generátorů. Každý generátor vychází z konkrétní pohádky, karty nebo narativní poruchy a z její vlastní operace.

Toto README zatím slouží jako **pracovní rozcestník** pro průběžné prohlížení nástrojů. Konečný hlavní index a společné rozhraní vzniknou až později, až bude jasné, jaké generátory a funkce skutečně máme.

## Samostatné generátory

### 01 · Myš — přehlédnuté jevy a jejich následky
Generuje vyšetřování anomálií, questové řetězce, rozhodovací situace a události měnící svět. Vychází z pohádky **O myši a o tom, co se stane, když si jí nevšimneš**.

- [Otevřít Myš v GitHub Pages](https://artmisanovak-prog.github.io/games_gen/doma/mys/)
- [Zdrojový soubor Myš](doma/mys/index.html)

### 02 · Netopýr — dvojí režim pravdy
Generuje herní akty, v nichž se stejná událost v noci a ve dne interpretuje odlišně. Pracuje s přechodem mezi režimy, popřením, překladem významu, pamětí a následky, které přetrvávají i po změně kontextu. Vychází z pohádky **O netopýrovi a kráse, která ráno se už nehodí**.

- [Otevřít Netopýra v GitHub Pages](https://artmisanovak-prog.github.io/games_gen/doma/netopyr/)
- [Zdrojový soubor Netopýr](doma/netopyr/index.html)

### 03 · Tygr — překlad přání a právo na vlastní podobu
Generuje herní situace o střetu přání s tradicí, souhlasu s proměnou, právu vykládat cizí přání a důsledcích nové podoby. Pracuje také s vývojem přání v čase: pulec chtěl přeskočit vývojovou fázi a stát se tygrem rovnou. Vychází z pohádky **O tygrovi, princezně a žábě, která chtěla být tygrem**.

- [Otevřít Tygra v GitHub Pages](https://artmisanovak-prog.github.io/games_gen/doma/tygr/)
- [Zdrojový soubor Tygr](doma/tygr/index.html)

### 04 · Ryba — hudba jako zásah do prostředí
Generuje herní situace, v nichž hudební princip mění vlastnosti vody: proudy, vlnění, barvy, hloubku i způsoby vnímání. Voda není pasivní kulisa; odpovídá vlastním tahem. Pracuje se šesti operacemi: přesměrování proudů, proměna barev a hloubky, rytmus a vlnění, odpověď vody, překlad mezi druhy a aktivní ticho.

- [Otevřít Rybu v GitHub Pages](https://artmisanovak-prog.github.io/games_gen/doma/ryba/)
- [Zdrojový soubor Ryba](doma/ryba/index.html)

## Pracovní struktura

- `doma/` — pracovní prostor generátorů.
- `doma/mys/` — samostatný generátor Myš.
- `doma/netopyr/` — samostatný generátor Netopýr.
- `doma/ryba/` — samostatný generátor Ryba.
- `doma/tygr/` — samostatný generátor Tygr.

## Technické poznámky

Myš, Netopýr, Tygr a Ryba jsou samostatné lokální nástroje bez serveru a bez AI API. Historii ukládají do místního úložiště konkrétního prohlížeče a umožňují export záznamů do JSON. Záznamy se automaticky nesynchronizují mezi zařízeními.


Jednotlivé generátory se vyvíjejí samostatně. Jejich společný index, případné sdílené datové formáty a napojení AI modelu se navrhnou až podle toho, co se při vývoji jednotlivých nástrojů ukáže jako skutečně potřebné.
