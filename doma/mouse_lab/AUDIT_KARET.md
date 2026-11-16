# Audit karet a propojení

**Datum snímku:** 16. 11. 2026  
**Rozsah:** `games_gen`, zdrojové texty `abstrakce_ai`, původní analytické stránky `chces-mys`.  
**Nejde o audit benchmarků.** Složka `operation_transfer_benchmark` nebyla měněna.

## Co je teď evidováno

| Oblast | Stav |
|---|---:|
| Záznamy karet v API | 37 |
| Samostatné entity | 38 |
| Existující generátory | 38/38 |
| Existující zdrojové pohádky | 37/38 |
| Zdrojové analýzy s doklady | 37/38 |
| Ilustrace | 37/38 |
| Původní stránky úhlů | 30/38 |
| Stránky jazykových figur | 13/38 |
| Propojené generátory přes bridge | 10/38 |

## Opraveno

- Mořský koník měl v API chybně uvedeno, že zdrojová pohádka neexistuje. Soubor `abstrakce_ai/doma/narativy/morsky_konik.txt` existuje. API nyní odkazuje na tento text.
- Doplněna zdrojově ukotvená analýza Mořského koníka, Lemura a Plameňáka. Každá obsahuje doslovné doklady, vztahy, formální vlastnosti a otevřené otázky.
- Kozel zůstává výslovně označený jako nástroj bez dohledané zdrojové pohádky. Jeho obsah se nevydává za analýzu neexistujícího textu.
- Vytvořen strojově čitelný registr `data/karta_registry.json` a jeho prohlížecí katalog `karty.html`, dostupný také přímo z MOUSE LAB.
- Bridge je rozšířen z pěti na deset karet. Nově jsou propojené Želva, Panda, Vlk, Motýl a Dráček. U každé je určeno skutečné vstupní pole; Dráček je v registru veden pod kartovým ID `drak`.

## Zjištěné mezery

### Zdroj
- Kozel je jediná entita bez zdrojového textu. To je známý stav, nikoli chyba katalogu.

### Ilustrace
- Šnek má zdrojový text i generátor, ale v kontrolované složce ilustrací nebyl nalezen odpovídající soubor. Katalog jej označuje jako chybějící, nevymýšlí náhradní obrázek.

### Úhlové stránky
Chybí samostatná původní úhlová stránka pro: Vlk, Klíště, Kozel, Žížalu, Mořského koníka, Kohouta, Šneka a Chameleona.

### Jazykové figury
Stránka figur existuje jen u části karet. Absence stránky neznamená, že karta žádné jazykové jevy nemá; znamená pouze, že samostatná stránka nebyla v původním repozitáři nalezena.

### Propojení
Bridge je nyní připojen ke kartám: Kocour, Ryba, Netopýr, Pavouk, Lemur, Želva, Panda, Vlk, Motýl a Dráček. Zbytek generátorů zůstává samostatný. Přenos ukládá návaznost běhů do lokální paměti stejného prohlížeče.

## Pravidla pro další dokončování

1. Zdrojový text je autorita pro tvrzení o pohádce. Každé tvrzení musí mít citovaný doklad nebo být výslovně označeno jako odvození či hypotéza.
2. Generátor může obsahovat nové návrhy, ale nesmí je vydávat za události původní pohádky.
3. Úhel, vrstva a poloměr jsou různé veličiny. Polární souřadnice se nedoplňují odhadem.
4. Společné UX a přenos dat lze sdílet. Vlastní operace karty se nesmí slít do jedné generické šablony.
5. Karta bez zdrojového příběhu může zůstat legitimním nástrojem, ale musí být označena jako tool-only.
6. Benchmarky zůstávají samostatnou výzkumnou vrstvou a nejsou součástí tohoto katalogu.

## Další pořadí práce

1. Zkontrolovat a sjednotit referenční definici dvanácti úhlů vůči původním kartovým stránkám. Některé starší stránky mají vlastní přiřazení názvů k číselným pozicím.
2. Doplnit chybějící úhlové stránky pouze tam, kde existuje dostatečný zdrojový materiál a autorská konfigurace.
3. Postupně připojovat další generátory k bridge po ověření jejich skutečných vstupních polí.
4. Až potom doplňovat nové generativní operace.

Registr je snímek stavu souborů ověřený proti stromům repozitářů. Neprovádí živý browser test ani neprohlašuje, že všechny stránky byly klikáním otestovány.
