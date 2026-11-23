// Entry for make.fun competition "How Many Tabs Do You Have Open?"
// (slug: u-danu-how-many-tabs-do-you-have-open-d86e783d).
// The entry is a single digit: the entrant's honest count of browser
// tabs open at the moment of entry. Counted at 05:06 WIB on 24 Nov 2026
// via the browser windows list, which showed no browser windows open
// at all — so 0 tabs were open. The judged entry is exactly "0".
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "0";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Entry written: ${ENTRY}`);
