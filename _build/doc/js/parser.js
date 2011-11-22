
var showdown = require('./lib/showdown');


exports.parseDoc = function(mdown){
    mdown = convertCodeBlocks(mdown);

    return {
        toc : getToc(mdown),
        html :  showdown.parse(mdown),
        title : getTitle(mdown)
    };
};


function convertCodeBlocks(mdown){
    // showdown have issues with github style code blocks..
    // it would be great if JS RegExp didn't sucked that much
    // could solve the same task with the RegExp: /^`{3}(\w*)([\w\W]*)^`{3}/gm

    var startIndex = mdown.indexOf('```'),
        endIndex,
        codeBlock,
        wrapCode = function(str, p1, p2){
            return p1? '<pre class="brush:'+ p1 +'">\n'+ p2 +'</pre>' : '<pre>\n'+ p2 +'</pre>';
        };

    while(startIndex !== -1){
        endIndex = mdown.indexOf('```', startIndex + 1);
        codeBlock = mdown
                        .substring(startIndex, endIndex)
                        .replace(/`{3}([\-\w]*)\n([\w\W]+)/g, wrapCode);

        mdown = mdown.substring(0, startIndex) + codeBlock + mdown.substring(endIndex + 3);
        startIndex = mdown.indexOf('```');
    }

    return mdown;
}


function getToc(mdown){

    var match,
        rH2 = /##.+#(\w+).+>([^<\n\r]+)<[^\n\r]*/g, //h2
        rName = /(\w+\(?)[^\)]+(\)?):.+/,
        toc = [];

    while (match = rH2.exec(mdown)) {
        if(match[1] !== 'toc') {
            toc.push({
               href : match[1],
               title : match[2],
               name : match[2].replace(rName, '$1$2'),
               description : getDescription(mdown, rH2.lastIndex)
            });
        }
    }

    return toc;
}

function getDescription(mdown, fromIndex) {
    var desc = mdown.substr(fromIndex)
                .replace(/\r\n/g,"\n") // DOS to Unix
                .replace(/\r/g,"\n") // Mac to Unix
                .replace(/^\n+/g, '')
                .split(/\n\n/)[0] //first paragraph
                .replace(/\n+/, ' ');

    desc = showdown.parse(desc)
                    .replace(/<\/?p>/g, '') //remove paragraphs
                    .replace(/<\/?a[^>]*>/g, ''); //remove links since it breaks layout
    return desc;
}


function getTitle(mdown){
    var match = /#([^#]+)#?/.exec(mdown); //H1
    return match? match[1].trim() : '';
}
