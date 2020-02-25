module.exports = function transform (arr) {
	// if (!Array.isArray(arr)) throw new TypeError();
	// if (!arr.some((val) => typeof val === 'string' && val.slice(0, 3) === '--d') || arr.length === 0) {
	// 	return arr;
	// }
	// else {
	// 	console.log(arr);
	// 	const newArr = [];
	// 	for (let i = 0; i > arr.length; i++) {
	// 		if (typeof arr[i] === 'string' && arr[i].slice(0, 3) === '--d') {
	// 			switch (arr[i]) {
	// 				case '--discard-next':
	// 					arr.splice(i + 1, 1);
	// 					break;
	// 				case '--discard-prev':
	// 					newArr.splice(i - 1, 1);
	// 					break;
	// 				case '--double-next':
	// 					if (arr[i + 1]) newArr.push(arr[i + 1]);
	// 					break;
	// 				case '--double-prev':
	// 					if (arr[i - 1]) newArr.push(arr[i - 1]);
	// 					break;
	// 			}
	// 		}
	// 		else {
	// 			newArr.push(arr[i]);
	// 		}
	// 	}
	// 	console.log(newArr);
	// 	return newArr;
	// }
	throw 'Not implemented';
};
