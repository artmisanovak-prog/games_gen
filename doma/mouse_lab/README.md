# MOUSE LAB · obousměrný generativní pracovní prostor

První pracovní prototyp pro práci s korpusem pohádek, externími vstupy a relačním prostorem MOUSE.

## Otevření
- GitHub Pages: https://artmisanovak-prog.github.io/games_gen/doma/mouse_lab/
- Zdrojový kód: https://github.com/artmisanovak-prog/games_gen/tree/main/doma/mouse_lab

## Dva směry
1. Ze zdrojů ven: pohádky a jejich konfigurace jsou vstupem pro tvorbu výstupu podle zadání.
2. Zvenčí dovnitř: problém, požadavek nebo data jsou vstupem; MOUSE pomáhá rozlišit perspektivy, vztahy, mezery a konfigurace.
3. Kombinovaný běh: externí problém se propojuje s vybranými pohádkami, ale původ obou typů informací zůstává rozlišený.

## Funkce
- Načítání dvaceti devíti zdrojových entit z původních textů v `abstrakce_ai/doma/narativy/`: Myš, Kocour, Ryba, Želva, Panda, Vlk, Motýl, Drak, Klíště, Plameňák a Lemur. MOUSE LAB přikládá celý vybraný zdrojový text i strukturovanou analýzu s citovanými doklady, vztahy, formou a otevřenými otázkami.
- Volba směru práce, zadání, cílového formátu a externího vstupu.
- Generování promptu pro jazykový model.
- Kopírování nebo stažení promptu a vložení odpovědi modelu.
- Záznam hodnocení a poznatků pro další instrukce.
- Lokální historie běhů a export JSON.

## Hranice prototypu
- Zatím nejde o přímé API připojení modelu. Jde o bezpečný ruční most: prompt ven, odpověď zpět.
- API klíč nesmí být vložen do veřejného HTML/JavaScriptu. Přímé připojení vyžaduje bezpečný serverový prostředník.
- Polární prostor zatím zobrazuje 12 referenčních směrů, ale automaticky nevypočítává poloměr ani vrstvy. Jejich přesná operační definice musí být stanovena v MOUSE CORE.
- Síla textového dokladu, vzdálenost od reference a kvalita výstupu jsou různé veličiny.
- Historie je uložena v localStorage konkrétního prohlížeče. Exportuj důležité běhy.

## Další fáze
1. Strukturovaný záznam perspektiv, vrstev, polárních souřadnic a vztahů.
2. Oddělené úložiště zdrojových dokladů, dočasných konfigurací a opakovaně použitelných zkušeností.
3. Vizuální polární mapa a konfigurátor vztahů.
4. Bezpečný modelový konektor.
5. Zpřesňování instrukcí MOUSE na základě skutečných běhů.

Toto je pracovní laboratoř, nikoli hotový produkt ani tvrzení, že MOUSE již automaticky řeší externí problémy.


## Samostatné generativní operace karet

Každá operace má vlastní generátor a vlastní pravidla. MOUSE LAB je propojuje přes kartu API; polární konfigurace zůstává samostatným pracovním záznamem a není automaticky odvozena z generátoru.

- [Myš](../mys/) — pozorování a záznam přehlížených jevů
- [Kocour](../kocour/) — předčasné ukončování vět a návrat řečových konců
- [Ryba](../ryba/) — signál mění prostředí a voda odpovídá
- [Želva](../zelva/) — oběh pohybu, pohlednic a důvodů pokračovat
- [Panda](../panda/) — barevnost jako vztah vzhledu, pozorovatele a kritéria
- [Vlk](../vlk/) — překlad mezi smyslovým vjemem, symbolem a jednáním
- [Plameňák](../plamenak/) — směr, pád, orientace a posouvání cíle
- [Lemur](../lemur/) — paradox nápadnosti při snaze být neviditelný
- [Pavouk](../pavouk/) — síť odložených a nevyřčených stavů
- [Páv](../pav/) — projekce vlastního rozpoznávacího vzoru na svět
- [Čáp](../cap/) — nesení možností, které nelze vlastnit ani prodat
- [Slon](../slon/) — motivační běh udržovaný nedosažitelným cílem
- [Netopýr](../netopyr/) — dvojí režim pravdy v nočním a denním kontextu

Kocourův generátor je nově vytvořená samostatná operace podle původního textu. Experimentální varianty v jeho formuláři jsou odlišeny od pevných údajů pohádky (dvě berušky, čtrnáct teček, třicet minut a návrat spolknutých konců).

## Herní generátory zvířecích karet

Každá entita má vlastní herní operaci a samostatný generátor. MOUSE je součástí herního prostředí a slouží jako aktivní nástroj práce s kartami, nikoli jako testovaný subjekt.

- [Tygr](../tygr/) — překlad přání a odmítnutí předepsané proměny
- [Osel](../osel/) — orientace mezi protiklady a nevyslovenými pravidly
- [Jednorožec](../jednorozec/) — popírání vlastního původu a hranice možného
- [Krokodýl](../krokodyl/) — výprodej významu a komercializace emocí
- [Motýl](../motyl/) — záměna skutečné potřeby za symbolickou nabídku
- [Drak / Dráček](../dracek/) — zvuk, zákaz a vznik přestupku
- [Kozel](../kozel/) — půjčovna perspektiv; samostatný zdrojový text pohádky zatím chybí
- [Veverka](../veverka/) — jednání, opakování a praktický výsledek
- [Hvězdice](../hvezdice/) — paměť dopadu a stopa nevratné události
- [Parohy](../parohy/) — fotografický blesk a paměť, která se tváří jako přítomnost

## Další herní generátory

- [Mořský koník](../morsky-konik/) — zprávy pro vodu; zatím bez samostatného zdrojového textu
- [Klíště](../kliste/) — společný sen klíšťat, laň jako hostitel a projekce touhy
- [Vrabec](../vrabec/) — jistota v hrsti se mění v myšlenku na hlavě
- [Žížala](../zizala/) — rozklad, rozdělení identity a pokračování
- [Žralok](../zralok/) — poměr nad a pod, viditelnost a skrytost
- [Had](../had/) — deformace jazyka, syčení a význam mezi protiklady
- [Hyeny](../hyeny/) — smích jako obranná stěna
- [Husy](../husy/) — kolektivní já a gramatická krize

## Polární konfigurace entit

- [Otevřít polární úhloměr](https://artmisanovak-prog.github.io/games_gen/doma/mouse_lab/polar.html)
- Samostatné pracovní konfigurace: Myš, Kocour, Ryba, Želva, Panda, Vlk, Motýl, Drak, Klíště, Plameňák a Lemur. Panda a Vlk jsou dvě entity ve společném zdrojovém příběhu.
- Vizuální model: úhel = směr perspektivy; vrstva = samostatná souřadnice 1–12; poloměr = pracovní odchylka od reference.
- Vrstvy a poloměry se nepředvyplňují, protože je nelze poctivě odvodit jen z pohádek. Konfigurátor začíná prázdnými poli a ukládá až ručně zadané hodnoty. Staré automaticky vytvořené návrhy se nepoužívají jako zdrojová data.
- Každá entita může být zobrazena ve všech 12 referenčních směrech; vrstva se přiřazuje ručně a v jedné konfiguraci se nesmí opakovat.


## Zdrojová analýza\n\n- `data/referencni_material.json` obsahuje rozbor konkrétních pohádek: citované doklady, vztahy, formu a otevřené otázky.\n- `data/karty.json` je API pro nástroje. Každá karta odkazuje na skutečný soubor v původním repozitáři.\n- MOUSE LAB přikládá vybrané celé texty a zdrojovou analýzu do promptu. Nový obsah modelu musí označit jako návrh, ne jako obsah pohádky.\n- V Myši se věta o zajíci s popálenými ušima vyskytuje pouze jako vedlejší pozorování. Samostatný příběh zaječice je jiný zdroj a do tohoto výběru zatím není zařazena.\n\n## Sdílená architektura MOUSE

- **Karta API:** `data/karty.json` je společný zdroj karet a entit. Nese zdrojový text, identifikaci entity, doslovné doklady, popis mechanismů a formální vlastnosti. Panda a Vlk jsou samostatné entity a samostatné soubory `panda.txt` a `vlk.txt`; jejich současný obsah je totožný, což je v datech výslovně zachováno. Polární souřadnice nejsou předvyplněné.
- **Sdílené jádro:** `../shared/mouse-core.js` poskytuje čtení/zápis lokálních dat, načítání karet, URL stav a export. Lze jej připojit do dalších HTML nástrojů.
- **Sdílená navigace:** `../shared/nav.js` propojuje MOUSE LAB, ÚHLO_GEN, Polární konfiguraci a Paměť.
- **Paměť / LocalStorage:** samostatný modul pro prohlížení, editaci, import, export, zálohu a obnovu dat: https://artmisanovak-prog.github.io/games_gen/doma/mouse_lab/storage/.
- **URL stav:** Polární konfigurace umí vytvořit odkaz s aktuální entitou a konfiguracemi. ÚHLO_GEN umí exportovat a obnovit vlastní projekt přes URL. URL je přenosný snímek stavu, nikoli synchronizovaná databáze.
- **Opětovné použití:** nové nástroje mohou připojit `../shared/mouse-core.js` a `../shared/nav.js`; pro ukládání použijí `MOUSE.read`, `MOUSE.write`, `MOUSE.all`, `MOUSE.stateUrl`, `MOUSE.encodeState`, `MOUSE.decodeState` a `MOUSE.download`.
