define(function () {

    /**
     * Checks if the object is a primitive
     */
    function isPrimitive(obj) {
        switch (typeof obj) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }

        return obj == null;
    }

    return isPrimitive;

});
