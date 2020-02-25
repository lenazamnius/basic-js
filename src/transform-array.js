module.exports = function transform (arr) {
	if (!Array.isArray(arr)) throw new TypeError();
	if (!arr.some((val) => typeof val === 'string' && val.slice(0, 3) === '--d') || arr.length === 0) {
		return arr;
	} else {
		const newArr = [];
		for(let i = 0; i < arr.length; i++) {
			if(typeof arr[i] === 'string' && arr[i].slice(0, 3) === '--d') {
				if(arr[i] === '--discard-next') {
					i++;
				} else if(arr[i] === '--discard-prev') {
					newArr.splice(-1);
				} else if(arr[i] === '--double-next') {
					if((i+1) < arr.length) newArr.push(arr[i + 1]);
				} else if(arr[i] === '--double-prev') {
					if(i > 0) newArr.push(arr[i - 1]);
				}
			} else {
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}
};
