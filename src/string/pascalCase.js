define(['./camelCase', './upperCase'], function(camelCase, upperCase){
    /**
     * camelCase + uppercase first char
     */
    function pascalCase(str){
        return camelCase(str).replace(/^[a-z]/, upperCase);
    }
    return pascalCase;
});
