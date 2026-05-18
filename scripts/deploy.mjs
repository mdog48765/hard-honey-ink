import { execSync } from "node:child_process";

const message = process.argv.slice(2).join(" ") || "Update site";

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
}

try {
  run("npm run build");

  run("git add .");

  const status = execSync("git status --porcelain").toString().trim();

  if (status) {
    run(`git commit -m "${message.replace(/"/g, '\\"')}"`);
    run("git push");
  } else {
    console.log("\nNo Git changes to commit.");
  }

  run("vercel --prod");

  console.log("\nDeploy complete.");
} catch (error) {
  console.error("\nDeploy failed.");
  process.exit(1);
}