module.exports = function repeater(str, options) {
    let arr;
	if(options.addition || options.addition === false ||  options.addition === null) {
		if(options.additionRepeatTimes > 1) {
			addArr = Array(options.additionRepeatTimes).fill(`${String(options.addition)}`);
			addStr = addArr.join(options.additionSeparator);
		} else {
			addStr = String(options.addition);
		}
		arr = Array(options.repeatTimes).fill(`${String(str)}${addStr}`)
	} else {
		arr = Array(options.repeatTimes).fill(`${String(str)}`);
	}
    return options.separator ? arr.join(`${options.separator}`) : arr.join('+');
};
  