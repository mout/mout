define(['./sort', './every'], function(sort, every) {

	/**
	 * Determines if the supplied array is already sorted,
	 * by um, sorting it!  Genius!
	 */
	function isSorted(arr, compareFn) {
		return compare(arr, sort(arr, compareFn));
	}

	function compare(arr1, arr2) {
		return every(arr1, function(a, i) {
			return a === arr2[i];
		});
	}

	return isSorted;

});