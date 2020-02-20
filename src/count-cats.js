module.exports = function countCats (arr) {
	let total = 0;
	arr.map((subArr) =>
		subArr.forEach(
			(val) =>

					val === '^^' ? total++ :
					(total += 0)
		)
	);
	return total;
};
