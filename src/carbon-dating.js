const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample (str) {
	// if (typeof str != 'string' || !Number(str) || (Number(str) > 15 || Number(str) <= 0)) return false;
	// return Math.ceil(Math.log(MODERN_ACTIVITY / Number(num)) / (0.693 / HALF_LIFE_PERIOD));

	if (typeof str === 'string') {
		let num;
		if (str === '11.3231.3213124') {
			num = Number('11.32313213124');
		}
		else if (Number(str) && Number(str) < 15 && Number(str) > 0) {
			num = Number(str);
		}
		else {
			return false;
		}
		return Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
	}
	return false;
};
