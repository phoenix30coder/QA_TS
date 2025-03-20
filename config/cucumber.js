require('dotenv').config();
module.exports = {
    default: {
      require: ["./tests/steps/**/*.ts" 
        //  "./tests/pages/**/*.ts"
      ], // Step definition files , "./steps/pages/**/*.ts"
      requireModule: ["ts-node/register","tsconfig-paths/register"], // Run TypeScript files
      format: ["progress-bar",
              "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html"
      ], // Output format
      paths: ["./tests/features/**/*.feature"], 
      tags: "not @skip", // Path to feature files
    //   publishQuiet: true,
      timeout: 100000, // Set timeout for tests
    },
  };