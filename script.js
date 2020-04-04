// array of objects containing data
const data = [
	{
		Principal: 2500,
		time: 1.8
	},
	{
		Principal: 1000,
		time: 5
	},
	{
		Principal: 3000,
		time: 1
	},
	{
		Principal: 2000,
		time: 3
	}
];

// empty array to contain new data
const interestData = [];

// function to set rate, calculate interest and push & log new data in 'interestData' array
function interestCalculator(array) {

	// setting applicable rate
	for (let i = 0; i < array.length; i++) {
		if (
			array[i].Principal >= 2500 &&
			array[i].time > 1 &&
			array[i].time < 3
		) {
			rate = 3;
		}
		else if (array[i].Principal >= 2500 && array[i].time >= 3) {
			rate = 4;
		} 
		else if (array[i].Principal < 2500 || array[i].time <= 1) {
			rate = 2;
		} 
		else {
			rate = 1;
		}

		// calculating interest
		interest = (array[i].Principal * rate * array[i].time) / 100;

		// pushing new data into 'interestData' array
		interestData.push({
			principal: array[i].Principal,
			rate: rate,
			time: array[i].time,
			interest: interest
		});
	}
	
	// logging and returning 'interestData'
	console.log(interestData);
	return interestData;
}

// calling function on array 'data'
interestCalculator(data);
