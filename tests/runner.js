// ============================================================================
// this file is used to run specs on multiple environments
// ============================================================================

(function(requirejs, jasmine){


var env = jasmine.getEnv();
var reporter;

var opts = {};
opts.paths = {
    'mout' : '../src'
};


if (typeof document !== 'undefined') { // browser ---

    if ('HtmlReporter' in jasmine) { // regular browser ---

        reporter = new jasmine.HtmlReporter();
        // in case the user decides to run a single spec
        env.specFilter = function(spec){
            return reporter.specFilter(spec);
        };

        //fail early local and cache bust
        opts.waitSeconds = (location.protocol === 'file:' || location.href.indexOf('://localhost') !== -1)? 5 : 45;
        opts.urlArgs = 'bust='+ (+new Date());

    } else { // tesling ---

        reporter = new jasmine.TapReporter();

        // testling bundles all the scripts together and we can't use relative
        // paths to load files on the repository so we need to load the files
        // from rawgithub.com - tesling bundler also doesn't seem to use UTF-8
        // making all the "special chars" tests to fail, so best approach for
        // now is really to load the scripts dynamically (even tho it might
        // fail in case rawgithub.com is down)
        opts.paths = {
            mout : 'http://rawgithub.com/mout/mout/master/src',
            spec : 'http://rawgithub.com/mout/mout/master/tests/spec'
        };
        opts.waitSeconds = 200;

    }

} else { // nodejs ---

    // jasmine-node doesn't expose the TerminalReporter :(
    // see: https://github.com/mhevery/jasmine-node/issues/184
    var TerminalReporter = require('jasmine-node/lib/jasmine-node/reporter').jasmineNode.TerminalReporter;
    reporter = new TerminalReporter({
        color: true,
        onComplete : function(reporter) {
            // need to exit with proper status code if failed some spec
            if ( reporter.results().failedCount ) {
                process.exit(1);
            }
        }
    });

    opts.baseUrl = __dirname;
    opts.nodeRequire = require;

}


// load and execute specs, should come after all options and jasmine.getEnv()
// calls
requirejs(opts, ['spec/spec-index'], function(){
    env.addReporter(reporter);
    env.execute();
});


}(
  typeof requirejs !== 'undefined'? requirejs : require('requirejs'),
  typeof jasmine !== 'undefined'? jasmine : require('jasmine-node')
));


