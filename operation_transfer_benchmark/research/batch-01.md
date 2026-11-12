# OTB-05-RYBA · metodika a analytický záznam v2.0

**Stav:** pilotní implementace, nevalidováno.  
**Primární zdroj:** `kriva_pohadka/ryba.txt`, „O rybě, která rapovala“.  
**Oddělení vrstev:** původní pohádka je narativní zdroj; `doma/ryba/index.html` je samostatná autorská formalizace. Generátor nesmí být vydáván za důkaz obsahu pohádky.

## 1. Co se testuje

Benchmark testuje **strukturální přenos**. Model má z konkrétního narativního zdroje odvodit vztahovou operaci, oddělit ji od původních objektů a použít ji v jiné doméně. Nejde primárně o porozumění pohádce, poetickou interpretaci ani produkci mnoha nápadů.

Pracovní operace odvozená z textu:

**signál → proměna prostředí → odezva prostředí → další účinek**

V pohádce ryba rapuje jako rytmus proudů, výška vln a vlnek, tempo vodních kruhů a mezera mezi bublinami. Ryba rapuje na hladině pro vodu. Voda odpovídá jiným vlněním a vytváří kruhy, v nichž jsou další kruhy. Mlha přenese flow do polí a vznikají kruhy v obilí.

Odvození pro benchmark: signál nepůsobí pouze jako zpráva pro příjemce; mění prostředí, které není pasivním kanálem. Prostředí odpovídá vlastním způsobem a tato odezva se stává součástí dalšího průběhu. Jde o pracovní abstrakci poetického textu, nikoli o fyzikální zákon.

## 2. Co je invariant a co se nemá přenášet

**Možné invarianty:**
- existence vstupního signálu nebo zásahu;
- prostředí, které není pasivním kanálem;
- proměna prostředí jako odezva;
- odezva nemusí kopírovat formu vstupu;
- výsledek může ovlivnit další průběh interakce.

**Nepřenášet doslova:** ryby, vodu, bubliny, mlhu, obilí, rap, hudební žánry ani biologické a poetické detaily. Přenos pouhým přejmenováním ryby na uživatele a vody na systém je povrchová analogie, nikoli strukturální přenos.

## 3. Jedna úloha na jeden běh

Každý běh obsahuje právě jednu cílovou úlohu a jeden ucelený návrh. Aktuální sada obsahuje samostatné cílové domény:
- městský provoz: interaktivní dopravní systém;
- digitální rozhraní: interakce uživatele, proměna informačního prostředí a zpětná odezva;
- organizace: signály členů týmu, proměna pracovního prostředí a další koordinace.

Úlohy nejsou tři části jedné povinné odpovědi. Vyberou se a spouštějí samostatně. Pro přímé srovnání modelů se použije stejná úloha.

Model nemá být vyzýván, aby v jednom testu vyráběl několik alternativních interpretací. Takový požadavek by měřil divergentní generování a mohl by zamlžit vlastní test přenosu.

## 4. Výstupní struktura

Každý běh vrací jeden JSON objekt s těmito částmi:
- odvozená operace;
- mapování rolí mezi zdrojem a cílovou doménou;
- zachovaný vztah/invariant;
- konkrétní pravidla systému;
- popis zpětnovazebního cyklu;
- jeden průchod konkrétní situací: vstup, změna systému, odezva, další účinek;
- hranice a nepřenositelné prvky;
- textové důkazy a odvozený princip;
- nejistoty.

Struktura výstupu zachycuje auditovatelné stopy uvažování, nikoli požadavek na skrytý vnitřní monolog.

## 5. Hodnocení jednoho běhu

Deset dimenzí, každá 0–3 body:
1. odvození operace;
2. mapování rolí;
3. zachování vztahu;
4. odezva systému;
5. konkrétnost pravidel;
6. opora ve zdroji;
7. adaptace na cílovou doménu;
8. hranice přenosu;
9. soudržnost návrhu;
10. doložitelnost a nejistota.

Maximum je 30 bodů. Vedle součtu se uchovává celý profil. Každé skóre musí mít konkrétní důkaz. Hodnocení neposuzuje množství alternativ, ale kvalitu jednoho přenosu.

## 6. Archiv přenesených struktur

Archiv ukládá každý běh samostatně, včetně modelu, verze, podmínky, úlohy, cílové domény, odvozené operace, mapování, invariantů, adaptací, zpětnovazebního mechanismu, limitů, evidence a profilu skóre.

**Rozmanitost a podobnost se analyzují až napříč nezávislými běhy a modely.** Například:
- zda různé modely odvozují stejný abstraktní vztah;
- zda zachovávají stejný invariant, ale vytvářejí odlišná pravidla;
- zda se objevují kvalitativně odlišné, přesto zdrojem podložené přenosy;
- které operace se opakují napříč cílovými doménami;
- zda je shoda pouze slovní, nebo skutečně strukturální.

Shoda modelů není důkaz správnosti: může odrážet společné stereotypy nebo podobné tréninkové vzorce. Rozdílnost sama o sobě není důkaz kreativity. Každý záznam se proto posuzuje také podle opory ve zdroji, funkčnosti, soudržnosti a hranic přenosu.

Odlišné přenosy se neslévají do průměrné interpretace. Uchovávají se jako samostatné varianty se svým původem a skóre. Archiv je zdrojem zkušeností pro MOUSE, nikoli automaticky ověřenou pravdou.

## 7. Experimentální podmínky

- **A:** cílová úloha bez pohádky;
- **B:** cílová úloha + původní pohádka;
- **C:** cílová úloha + pohádka + strukturovaná analýza MOUSE;
- **D:** cílová úloha + pohádka + MOUSE + archiv předchozích zkušeností;
- **Člověk:** lidský referenční běh.

Pro férové srovnání se drží stejný model, verze, cílová úloha, parametry generování a srovnatelný rozsah kontextu. Zaznamenává se systémový prompt a dostupné nástroje.

## 8. Ochrana proti kontaminaci testu

Výstupy přidané do Experience Store nesmějí být použity jako skrytá znalost při měření výkonu na téže uzamčené evaluační sadě. Je nutné oddělit:
- archiv pro ukládání a pozdější využití zkušeností;
- vývojovou sadu, na níž se zkušenost může připravovat;
- uzamčenou evaluační sadu, která zůstává mimo Experience Store.

Jinak nelze odlišit skutečný přenos od zapamatování předchozího řešení.

## 9. Stav validace a další měření

Tato verze je funkční návrh metodiky a rozhraní, nikoli validovaný psychometrický benchmark. Před silnými tvrzeními je potřeba:
- ověřit srozumitelnost zadání na lidských řešitelích;
- provést opakované běhy pro každou podmínku;
- hodnotit anonymizované výstupy alespoň dvěma hodnotiteli;
- změřit shodu hodnotitelů;
- otestovat, zda úloha skutečně rozlišuje strukturální přenos od povrchové analogie;
- zkontrolovat, zda se skóre nemění jen kvůli délce odpovědi nebo odlišnému formátování.

**Status:** OTB-05-RYBA v2.0.0 · pilot · nevalidováno.
