const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "96",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "Win11",
        }
    }
})