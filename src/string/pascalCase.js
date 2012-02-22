define(['./camelCase', './upperCase'], function(camelCase, upperCase){
    /**
     * camelCase + uppercase first char
     * @version 0.1.0 (2011/10/26)
     */
    function pascalCase(str){
        return camelCase(str).replace(/^[a-z]/, upperCase);
    }
    return pascalCase;
});
