# Datový slovník

Každý záznam obsahuje tato pole:

| Pole | Význam |
|---|---|
| id | Jedinečný identifikátor záznamu. |
| title | Název jevu. |
| category | Základní skupina. |
| source_tool | Nástroj games_gen, jehož princip byl inspirací. |
| premise | Stručný popis výchozí situace. |
| trigger | Co spustí jev. |
| world_change | Co se změní ve světě nebo postavě. |
| player_actions | Příklady činností hráče. |
| consequences | Možné následky. |
| rule | Pravidlo, které drží situaci pohromadě. |
| game_uses | Typy herních situací, pro které se jev může hodit. |
| intensity | Orientační síla zásahu na stupnici 1 až 5. |

## Jak číst záznam

U jevu „Voda, která si přivlastní píseň“ je spouštěčem zvuk ryby. Voda nejprve zvuk zopakuje, potom vytvoří vlastní odpověď a může začít měnit proud. Hráč tak neřeší pouze dialog, ale změnu prostředí.

Pole rule je nejdůležitější část: říká, jaký princip má zůstat zachován, i když vzniknou další varianty.

## Doporučené použití

Záznam lze rozšířit o konkrétní prostředí hry, obtížnost, podmínky úspěchu, selhání, návaznost na další úkol a technické parametry cílového herního enginu. Tyto údaje zatím nejsou součástí prototypu.
