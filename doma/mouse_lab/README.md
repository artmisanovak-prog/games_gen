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
- Načítání čtyř pohádek z veřejného repozitáře abstrakce_ai: ryba, kocour, pavouk, želva.
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


## Polární konfigurace entit

- [Otevřít polární úhloměr](https://artmisanovak-prog.github.io/games_gen/doma/mouse_lab/polar.html)
- Samostatné pracovní konfigurace: Myš, Kocour, Ryba, Želva, Panda, Vlk, Motýl, Drak a Klíště. Panda a Vlk jsou dvě entity ve společném zdrojovém příběhu.
- Vizuální model: úhel = směr perspektivy; vrstva = samostatná souřadnice 1–12; poloměr = pracovní odchylka od reference.
- Počáteční přiřazení vrstev a poloměrů jsou hypotézy odvozené z textů. Nejde o potvrzené autorské souřadnice. Uživatel je může upravit; změny se ukládají lokálně a lze je exportovat do JSON.
- Každá konfigurace obsahuje všech 12 úhlů a používá každou vrstvu právě jednou.
