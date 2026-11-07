# MOUSE LAB

Experimentální pracovní prostředí pro zkoumání vztahových a topologických struktur. Projekt vzniká postupně jako samostatná offline-first laboratoř v repozitáři `games_gen`.

## Aktuální nástroj

### 01 · GRAPH — interaktivní mapa vztahů
[Otevřít MOUSE LAB · GRAPH](./index.html)

První funkční modul umožňuje:
- zobrazit uzly a vztahy v interaktivní síti;
- přidávat, upravovat a mazat uzly i vazby;
- rozlišovat typy vztahů (podobnost, rozpor, příčina, transformace, závislost, kontext, hypotéza);
- zaznamenat zdroj vazby a stav jejího ověření;
- filtrovat síť podle typu vztahu a hledat uzly;
- importovat a exportovat JSON;
- uchovávat pracovní data lokálně v prohlížeči.

Ukázková síť je demonstrační. Její vazby nejsou automaticky odvozené ani vědecky ověřené. Nástroj záměrně rozlišuje hypotézu, neověřenou vazbu, ověřenou vazbu a odmítnutou vazbu.

## Plánované moduly

1. **GRAPH** — interaktivní mapa (první implementace).
2. **TOPOLOGY** — analýza komponent, centrality, komunit, mostů a izolovaných uzlů.
3. **GAP EXPLORER** — hledání cest a nečekaných spojení mezi vzdálenými prvky.
4. **SIMULATOR** — experimenty s přidáváním, odebíráním a změnou vztahů; porovnání před/po.
5. **GAME COMPOSER** — skládání herních mechanismů z ověřených principů a konfigurací.
6. **OBSERVATORY** — historie a porovnávání vývoje sítí.

## Datový formát

Základní JSON používá pole `nodes` a `edges`. Uzel má identifikátor, popisek, typ, popis a souřadnice. Vazba má identifikátor, počáteční a koncový uzel, typ vztahu, poznámku, zdroj a stav ověření.

## Technické zásady

- Samostatné HTML/CSS/JavaScript, bez backendu.
- Bez externích knihoven a bez povinného připojení k internetu.
- Data zůstávají v místním úložišti prohlížeče; mezi zařízeními se automaticky nesynchronizují.
- Přenos dat probíhá přes JSON.
- Automaticky navržená vazba není totéž co ověřený vztah.
