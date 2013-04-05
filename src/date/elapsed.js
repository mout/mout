define(['./totalDaysInMonth'], function (totalDaysInMonth) {

	/**
     * returns the total years, months and days since the given Date
     */
	function elapsed(since) {
		var now 	= new Date();
		var years	= now.getFullYear() - since.getFullYear();
		var months	= now.getMonth() - since.getMonth();
		var days	= now.getDate() - since.getDate();
		var hours	= now.getHours() - since.getHours();

		if (months < 0) {
			years -= 1;
			months += 12;
		}

		if (days < 0) {
			months -= 1;
			days += totalDaysInMonth(now.getFullYear(), now.getMonth());
		}

		if (hours < 0) {
			days -= 1;
			hours += 24;
		}

		return {
			years: years,
			months: months,
			days: days
		};
	}

	return elapsed;
});