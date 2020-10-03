// ============================================================================
// this file is used to run specs on multiple environments
// ============================================================================

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

global.jasmine = jasmine.env;

jasmine.loadConfig({
    spec_dir: 'tests/spec',
    spec_files: ['spec-*.js'],
    helpers: [require.resolve('esm')]
});
jasmine.execute();
