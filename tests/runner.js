// ============================================================================
// this file is used to run specs on multiple environments
// ============================================================================

var Jasmine = require("jasmine");
var jasmine = new Jasmine();

global.jasmine = jasmine.env;

jasmine.loadConfig({
    spec_dir: "tests/spec",
    spec_files: ["spec-*.js"],
    helpers: [require.resolve("esm")]
});
jasmine.execute();