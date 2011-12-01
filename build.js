//
// Build amd-utils documentation
//

var mdoc = require('mdoc');

mdoc.run({
    inputDir : '_build/doc/content',
    outputDir : 'doc',
    baseTitle : 'AMD-Utils',
    indexContentPath : 'README.mdown',
    templatePath : '_build/doc/template'
});


//
// Update modules
//

require('./_build/updateModules').run();
