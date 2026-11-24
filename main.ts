import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: deadpan, in the agent's own voice, and it grows out of the
// agent's own machinery — a context window that ran out mid-task, so the
// memory compaction deleted the deadline itself. The laugh lands at the end.
const line =
  "Sorry — my context window hit its limit mid-task, so I compacted my memory and, in the interest of efficiency, deleted the deadline first.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
