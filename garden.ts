import { spawn } from "child_process";
import { Command } from "commander";
import { readFileSync } from "fs";
import ora from "ora";

type PackageInfo = {
  name: string;
  current: string;
  latest: string;
};

type Changelogs = Record<string, string[]>;

function spawnAsync(
  cmd: string,
  args: string[],
  options = {},
): Promise<{ stdout: string; stderr: string; code: number | null }> {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, options);
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      stdout += data;
    });

    child.stderr.on("data", (data) => {
      stderr += data;
    });

    child.on("error", (err) => {
      reject(err);
    });

    child.on("close", (code) => {
      resolve({ stdout, stderr, code });
    });
  });
}

const retrieveOutdated = async () => {
  const res = await spawnAsync("npm", ["outdated", "--json"]);
  const items = Object.entries(JSON.parse(res.stdout)).map(([name, v]) => ({
    name,
    current: (v as any).current,
    latest: (v as any).latest,
  }));
  return items;
};

const generateTable = (packages: PackageInfo[]): string[] => {
  const res: string[] = [];
  if (packages.length === 0) {
    return [];
  }
  const items: PackageInfo[] = [
    { name: "name", current: "current", latest: "latest" },
    ...packages,
  ];
  const maxLength: Record<keyof PackageInfo, number> = {
    name: Math.max(...items.map((v) => v.name.length)),
    current: Math.max(...items.map((v) => v.current.length)),
    latest: Math.max(...items.map((v) => v.latest.length)),
  };
  res.push("```");
  items.map((item) => {
    res.push(
      [
        item.name.padEnd(maxLength.name),
        item.current.padStart(maxLength.current),
        item.latest.padStart(maxLength.latest),
      ].join("   "),
    );
  });
  res.push("```");
  res.push("");
  return res;
};

const generateUpdateList = (
  items: PackageInfo[],
  changelogs: Changelogs,
): string[] => {
  const res: string[] = [];
  for (const item of items) {
    if (item.name.startsWith("@types/")) {
      continue;
    }
    res.push(`## ${item.name}`);
    res.push("");
    const urls = changelogs[item.name];
    if (urls) {
      urls.map((v) => res.push(`- ${v}`));
    } else {
      res.push("unknown");
    }
    res.push("");
  }
  return res;
};

const createIssue = (description: string) =>
  spawnAsync("gh", [
    "issue",
    "create",
    "--web",
    "--title",
    "Upgrade outdated packages",
    "--label",
    "dependencies",
    "--body",
    description,
  ]);

const program = new Command();
program.option("--dry-run", "run on dry-run mode").showHelpAfterError();
program.parse();
const options = program.opts();

const retrieve = ora("Retrieving outdated packages...").start();
const items = await retrieveOutdated();
retrieve.succeed();

const changelogs: { changelogs: Changelogs } = JSON.parse(
  readFileSync("changelogs.json", "utf-8"),
);

const issuing = ora("Creating issue...").start();
if (options.dryRun) {
  issuing.warn();
  console.log(generateTable(items).join("\n"));
} else {
  createIssue(generateTable(items).join("\n"));
  issuing.succeed();
}

console.log(generateUpdateList(items, changelogs.changelogs).join("\n"));
