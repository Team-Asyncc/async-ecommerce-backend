const fs = require('fs');

const getRandomNo = (min = 2, max = 5) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const getData = () => {
	const data = fs.readFileSync('./data.json').toString();
	let newData = JSON.parse(data);
	newData = newData.map((val, idx) => {
		return { ...val, id: idx + 1, rating: getRandomNo() };
	});
	return newData;
};

module.exports = {
	getData,
};
