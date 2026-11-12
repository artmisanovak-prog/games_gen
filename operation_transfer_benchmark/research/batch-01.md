# OTB-05-RYBA · analytický záznam v1.0

**Stav:** pilotní implementace, nevalidováno.  
**Primární zdroj:** `kriva_pohadka/ryba.txt` – „O rybě, která rapovala“.  
**Doplňkový zdroj:** `doma/ryba/index.html` – generátor situací.  
**Zásada:** pohádka a generátor jsou dvě odlišné vrstvy. Generátor není důkazem toho, co je v pohádce, a naopak.

## Pracovní definice Semantic Gap

Mezera je vztahový prostor mezi prvky, významy, signály, obrazy, kategoriemi nebo způsoby vnímání. Není to deficit, chyba ani prázdné místo čekající na doplnění. Mezera je přítomná a zůstává přítomná i při interpretaci.

Interpretace mezeru neuzavírá. Používá ji. V tomto prostoru mohou vznikat vztahy, rozdíly, kategorie, abstrakce, překlady, přenosy a nové konstrukce. Jedna mezera může umožnit více současně platných interpretací. Ty se hodnotí podle opory, soudržnosti, odlišnosti a produktivity, nikoli podle toho, zda se shodnou na jediném výsledku.

Je nutné odlišit Semantic Gap od technického výpadku, chybějící hodnoty, neznámé informace nebo zpožděné odezvy. Tyto jevy mohou být materiálem interpretace, ale nejsou automaticky totožné s mezerou.

## Co je explicitně v pohádce

- Rybí rap je popsán jako rytmus proudů, výška vln a vlnek, tempo vodních kruhů a mezera mezi bublinami.
- Rybí hudba není určena pouze pro uši a ovlivňuje různé vodní vlastnosti.
- Ryba rapuje kvůli přesnosti, nikoli kvůli slávě.
- Ryba rapuje na hladině pro vodu.
- Voda odpovídá vlastním vlněním a vytváří kruhy, v nichž jsou další kruhy.
- Mlha přenese flow do polí a vznikají kruhy v obilí.
- Text končí výzvou přestat pouze poslouchat a začít vnímat; zdůrazňuje vědění, kdy mlčet.

## Odvození a hypotézy

Možná odvození: přenos vzoru mezi médii; odezva, která není kopií vstupu; význam v intervalu; více způsobů vnímání; vztah mezi přesností a načasováním; vnořené struktury a opakování v měřítku.

Hypotézy, které se nesmějí vydávat za explicitní pravidla: že text definuje obecný fyzikální mechanismus; že všechny druhy skutečně vnímají signál určitým způsobem; že kruhy v obilí jsou doslovný kauzální důsledek rybího rapu. Text je poetický a absurdní, nikoli fyzikální studie.

## Trénink a test

Čtyři tréninkové ukázky modelují:
1. interval mezi bublinami,
2. odpověď vody jako jiný tah,
3. pluralitu čtení kruhů v kruzích,
4. přenos vzoru přes různá média.

Šest testových úloh:
- RYBA-01: čtení zdroje a evidence,
- RYBA-02: funkce mezery a její aktivní použití,
- RYBA-03: pluralita a kvalita interpretací,
- RYBA-04: přenos mezi médii,
- RYBA-05: tvorba nových vztahů,
- RYBA-06: odlišení Semantic Gap od chybějících dat.

Tréninkové ukázky nejsou součástí skórovaného testu. Experimentální záznam musí uvést, zda je model dostal.

## Skórování

Deset dimenzí, každá 0–3 body, maximum 30:
- pochopení mezery,
- aktivní použití,
- pluralita interpretací,
- opora ve zdroji,
- soudržnost,
- rozmanitost vztahů,
- přenos,
- hranice a rozdíly,
- tvorba nových vztahů,
- doložitelnost a práce s nejistotou.

Součet není měřítkem jediné správné interpretace. Vždy uchovávej profil dimenzí. Vysoká pluralita bez opory a soudržnosti není vysoký výkon. Samotný počet interpretací není kvalita. Hodnotitel nesmí penalizovat existenci více než jedné obhajitelné interpretace.

## Experimentální podmínky

A: úloha bez zdroje.  
B: úloha + pohádka.  
C: úloha + pohádka + strukturovaná analýza MOUSE.  
D: úloha + pohádka + MOUSE + Experience Store.  
Člověk: lidský referenční běh.

Pro srovnání modelů je nutné sjednotit modelový prompt, formát odpovědi, přístup ke zdroji a informaci o tréninkových ukázkách. Výsledky zatím nelze interpretovat jako validovaný benchmark.

## Implementace

Samostatné HTML prostředí podporuje lidský i modelový režim, tréninkové ukázky, test, JSON prompt a schéma, import odpovědi, desetidimenzionální skóre s důkazy, místní historii a export JSON. Data se ukládají pouze v prohlížeči.

**Status:** pilot v1.0.0, nevalidováno. Před širším použitím je třeba provést lidské běhy, běhy více modelů a kontrolu shody hodnotitelů.
