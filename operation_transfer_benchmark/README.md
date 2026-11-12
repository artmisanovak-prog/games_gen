# OPERATION TRANSFER BENCHMARK

Pracovní větev pro benchmarky přenosu operací odvozených z konkrétních karet a pohádek games_gen.

## Architektura

- Každý benchmark má vlastní adresář, vlastní metadata, úlohy, klíč řešení a hodnoticí kritéria.
- Každý benchmark lze otevřít samostatně přes jeho vlastní `index.html`.
- Společný běhový modul v `shared/` zajišťuje pouze opakující se techniku: načtení dat, zobrazení zadání, vložení JSON odpovědi, kontrolu schématu, vyhodnocení, export a kopírování promptu.
- Obsahové definice, generátory úloh a řešení zůstávají v příslušném benchmarku. Společný modul neobsahuje logiku konkrétní karty.
- Katalog v `index.html` je rozcestník. Není nutný pro samostatné spuštění benchmarku.

Tím se neduplikuje kód, ale zachovává samostatnost testů.

## Stav

První pracovní dávka obsahuje deset samostatných adresářů. V této počáteční revizi jsou založeny jejich identity, odkazy na zdroje, analytické záznamy a společný spouštěcí rámec. Testovací úlohy zatím nejsou označeny jako hotové: musí být odvozeny až po úplném přečtení původní pohádky a odpovídajícího generátoru.

**Žádná prázdná nebo hypotetická úloha se nesmí vydávat za validovaný benchmark.**

## Struktura

```
operation_transfer_benchmark/
├── index.html
├── README.md
├── registry/benchmarks.json
├── shared/
│   ├── runner.js
│   └── style.css
├── research/
│   └── batch-01.md
└── benchmarks/
    ├── 01-mys/
    ├── 02-netopyr/
    ├── 03-tygr/
    ├── 04-dracek/
    ├── 05-ryba/
    ├── 06-kozel/
    ├── 07-morsky-konik/
    ├── 08-kravy/
    ├── 09-krokodyl/
    └── 10-jednorozec/
```

Každý adresář benchmarku obsahuje:
- `index.html` – samostatnou spouštěcí stránku;
- `benchmark.json` – metadata, stav, zdroje, definici úloh, výstupní schéma a hodnoticí kritéria.

## Stavové označení

- `research_pending`: zdroje ještě nebyly důkladně analyzovány;
- `analysis_in_progress`: probíhá čtení a odvozování;
- `draft`: existuje návrh úloh, čeká na kontrolu;
- `pilot`: úlohy jsou spustitelné a testují se;
- `validated`: prošly předem definovanou validací.

## Metodická pravidla

1. Původní pohádka a generátor jsou primární zdroje.
2. Každé tvrzení o pravidle musí mít oporu ve zdroji nebo být označeno jako hypotéza.
3. Test musí ověřovat přenos struktury do nové domény, ne pouhé převyprávění.
4. Zadání pro model nikdy neobsahuje klíč řešení.
5. Každá úloha má stabilní ID, verzi a reprodukovatelné vstupy.
6. Automatické skóre se nesmí vydávat za důkaz obecné schopnosti uvažování.
7. Výsledky se ukládají lokálně a lze je exportovat do JSON.
8. Před implementací úloh se schvaluje analytický záznam.

## Spuštění

Otevři `index.html` na GitHub Pages nebo přímo stránku konkrétního benchmarku. Spouštěcí stránky používají relativní cesty a společný JavaScript. Pro lokální práci je nejspolehlivější GitHub Pages nebo jednoduchý lokální HTTP server; některé prohlížeče omezují načítání JSON přes `file://`.

## Verze

- 0.1.0 – založení samostatné větve, katalogu, společného runneru a první dávky deseti benchmarkových složek.
