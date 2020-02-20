module.exports = function createDreamTeam (arr) {
	if (!Array.isArray(arr) || arr.length === 0) return false;
	let str = [];
	arr.forEach((val) => {
		let char;
		if (typeof val === 'string') {
			char = val.trim()[0].toUpperCase();
		}
		str.push(char);
	});
	return str.sort().join('');
};
