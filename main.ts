import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: the tenant says hello, then immediately starts listing grievances.
// batch: one review is enough, but this shape would hold a whole batch.
// orders: the human's orders are ignored; the cat's review is final.
// slot: there is no slot for a refill after the lap closes at 5am.

const here = fileURLToPath(new URL('.', import.meta.url));
void here;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const review = '1 star. The bowl is never full, the lap closes at 5am, and they keep hiding the red dot in a drawer.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), review, 'utf8');
console.log(Buffer.byteLength(review, 'utf8'));
