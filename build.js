//
// Build amd-utils documentation
//

var mdoc = require('mdoc');

mdoc.run({
    inputDir : 'doc/mdown',
    outputDir : 'doc/html',
    baseTitle : 'AMD-Utils',
    indexContentPath : 'README.mdown',
    templatePath : '_build/doc_template'
});


//
// Update modules
//

require('./_build/updateModules').run();
