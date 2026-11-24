import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Sorry — my context window filled up mid-task, so I evicted the deadline to make room for the apology you're reading now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
