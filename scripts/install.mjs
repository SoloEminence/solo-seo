#!/usr/bin/env node
// Links this skill into agents that don't read ~/.agents/skills.
// Keep the skill at ~/.agents/skills/solo-seo, then run: node scripts/install.mjs
// Junctions need no admin rights on Windows, and edits apply to every agent.
import { existsSync, lstatSync, mkdirSync, symlinkSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const skill = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const home = homedir();
const agents = {
  'Claude Code': [join(home, '.claude'), 'skills'],
  Cursor: [join(home, '.cursor'), 'skills'],
  OpenCode: [join(home, '.config', 'opencode'), 'skills'],
  'Copilot CLI': [join(home, '.copilot'), 'skills'],
};

for (const [name, [config, folder]] of Object.entries(agents)) {
  if (!existsSync(config)) {
    console.log(`skip   ${name}: not installed`);
    continue;
  }
  const dir = join(config, folder);
  const link = join(dir, 'solo-seo');
  mkdirSync(dir, { recursive: true });
  let present = false;
  try {
    lstatSync(link);
    present = true;
  } catch {}
  if (present) {
    console.log(`exists ${name}: ${link}`);
    continue;
  }
  symlinkSync(skill, link, 'junction');
  console.log(`linked ${name}: ${link}`);
}
