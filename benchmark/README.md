# BENCHMARK

Experimentální větev games_gen pro generování kontrolovaných testovacích úloh odvozených od konkrétních karet.

## Otevření

- [Spustit BENCHMARK](https://artmisanovak-prog.github.io/games_gen/benchmark/)
- [Zdrojový soubor](index.html)

## Karty a testované operace

| Karta | Testovaná operace | Co se ověřuje |
|---|---|---|
| MYŠ | Indukce skrytého pravidla | Odvození operace z příkladů a použití na nový vstup |
| PAVOUK | Kauzální šíření | Uzavření sítě závislostí a určení aktivních stavů |
| KOZEL | Přepnutí perspektivy | Aplikace dvou odlišných hodnoticích pravidel na stejnou nabídku |
| CHAMELEON | Invariance | Rozpoznání identity při změně nerelevantní vlastnosti prostředí |

## Funkce

- Deterministické generování podle karty, seedu a počtu úloh.
- Lokální běh bez serveru a bez volání AI API.
- Zadání pro model lze zkopírovat jako jeden prompt.
- Export testovacích úloh a odděleného klíče řešení do JSON.
- Vložení odpovědi modelu ve strukturovaném JSON a automatické vyhodnocení přesné shody.
- Žádná data se neposílají mimo prohlížeč.

## Formát odpovědi modelu

Model má vrátit jediný JSON objekt:

```json
{
  "answers": [
    {"id": "MYŠ-MOUSE001-01", "answer": {"value": 2}},
    {"id": "PAVOUK-MOUSE001-02", "answer": {"active": ["A", "B", "D"]}},
    {"id": "KOZEL-MOUSE001-03", "answer": {"A": "VODA", "B": "CHLEBA"}},
    {"id": "CHAMELEON-MOUSE001-04", "answer": {"value": "C"}}
  ]
}
```

Konkrétní ID a požadovaná pole se mění podle vygenerované sady. Zadání pro model obsahuje instrukci pro přesný formát.

## Důležitá metodická omezení

Toto je funkční prototyp generátoru a automatického vyhodnocení, nikoli validovaný vědecký benchmark. Skóre měří přesnost výsledné strukturované odpovědi. Samo o sobě neprokazuje kvalitu uvažování ani to, že model skutečně odvodil pravidlo. Pro seriózní experiment je nutné:

1. ověřit jednoznačnost každé rodiny úloh;
2. pilotně otestovat obtížnost na více modelech;
3. doplnit testy proti náhodnému hádání a alternativním strategiím;
4. oddělit vývojové a neveřejné testovací sady;
5. reportovat úspěšnost po jednotlivých kartách, ne pouze jedno souhrnné číslo.

## Verze

- 0.1.0 – první funkční prototyp čtyř rodin úloh.
