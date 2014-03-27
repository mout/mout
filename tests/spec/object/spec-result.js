define(['mout/object/result'], function(result) {

  describe('object/result', function() {

    var object = {
      attribute: 'attribute',
      anotherAttribute: 'anotherAttribute',
      falsey: '',
      method: function() {
        return this.anotherAttribute;
      }
    };

    it('should return nothing for undefined object properties.', function() {
      expect(result(object, 'non-existant')).toBeUndefined();
    });

    it('should evaluate a method with object context and return its result.', function() {
      expect(result(object, 'method')).toBe('anotherAttribute');
    });

    it('should evaluate an attribute and return its result.', function() {
      expect(result(object, 'attribute')).toBe('attribute');
      expect(result(object, 'falsey')).toBe('');
    });
  });
});
