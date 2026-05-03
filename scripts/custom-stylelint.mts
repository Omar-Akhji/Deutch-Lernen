/* eslint-disable no-console */
import stylelint from "stylelint";

// Our custom Node.js script using the Stylelint API
async function runCustomLint(): Promise<void> {
  const isFixMode: boolean = process.argv.includes("--fix");
  console.log(
    `\n🚀 Starting custom Stylelint pipeline... (Auto-fix: ${isFixMode})`,
  );

  try {
    const options: stylelint.LinterOptions = {
      // 1. We specify the files to lint programmatically
      files: "**/*.css",

      // 2. We can pass the fix flag dynamically
      fix: isFixMode,

      // 3. We use the standard string formatter to get human-readable output
      formatter: "string",
    };

    const result: stylelint.LinterResult = await stylelint.lint(options);

    // 4. Custom processing of the raw JSON results
    const totalFilesLinted: number = result.results.length;
    const errorFiles: stylelint.LintResult[] = result.results.filter(
      (file: stylelint.LintResult) => file.errored,
    );

    // Count total warnings/errors manually
    const totalIssues: number = result.results.reduce(
      (sum: number, file: stylelint.LintResult) => sum + file.warnings.length,
      0,
    );

    console.log(`📊 Linted ${totalFilesLinted} CSS files.`);

    if (result.errored) {
      console.log(
        `❌ Found ${totalIssues} issues across ${errorFiles.length} files.\n`,
      );

      // Print the formatted stylelint report
      console.log(result.report);

      // Fail the script (important for CI/CD)
      process.exit(1);
    } else {
      console.log(`✅ Success! All CSS files look perfect.\n`);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(
        "💥 An unexpected error occurred during linting:",
        err.stack,
      );
    } else {
      console.error("💥 An unexpected error occurred during linting:", err);
    }
    process.exit(1);
  }
}

runCustomLint();
