# MOUSE shared modules

Tyto soubory jsou přenosná infrastruktura pro další statické HTML nástroje v repozitáři.

## Připojení

\`\`\`html
<script src="../shared/mouse-core.js"></script>
<script src="../shared/nav.js" defer></script>
\`\`\`

Relativní cesta se upraví podle umístění nástroje.

## API

- \`MOUSE.read(key, fallback)\` načte JSON z místního úložiště.
- \`MOUSE.write(key, value)\` uloží JSON pod společný prefix \`mouse:\`.
- \`MOUSE.remove(key)\` odstraní jeden záznam.
- \`MOUSE.all()\` vypíše data MOUSE a známé starší klíče.
- \`MOUSE.getCards()\` načte společný zdroj karet \`doma/mouse_lab/data/karty.json\`.
- \`MOUSE.encodeState(object)\` a \`MOUSE.decodeState()\` kódují a obnovují URL stav.
- \`MOUSE.stateUrl(object)\` vytvoří adresu s vloženým stavem.
- \`MOUSE.download(filename, data)\` stáhne JSON nebo text.

## Princip karty jako API

Karta má stabilní \`id\`, zdrojový text, URL zdroje a jednu nebo více entit. Každá entita má vlastní identifikátor, popis a případnou konfiguraci. Nástroj si načte jen potřebná pole. Dvě entity mohou sdílet jeden zdrojový text, jako Panda a Vlk.

## Ukládání a přenos

LocalStorage je lokální pro konkrétní prohlížeč. URL stav je serializovaný snímek, vhodný pro menší a střední konfigurace. Pro větší data použij JSON export. Žádná z těchto metod sama o sobě nezajišťuje synchronizaci mezi zařízeními.
