const { createCanvas } = require('canvas');

const draw = (data, product) => {
	// canvas size
	const dim = {
		x: 1800,
		y: 1800,
	};

	// create the canvas and context
	const canvas = createCanvas(dim.x, dim.y);
	const ctx = canvas.getContext('2d');

	// fill background with black
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, dim.x, dim.y);

	// canvas settings
	ctx.imageSmoothingEnabled = true;
	ctx.lineWidth = 1;
	ctx.translate(dim.x / 2, dim.y / 2);
	ctx.rotate(-Math.PI / 2);

	data.radialPackets[0].radials.forEach((radial) => {
		const startAngle = radial.startAngle * Math.PI / 180;
		const endAngle = startAngle + radial.angleDelta * Math.PI / 180;
		// for each bin
		radial.bins.forEach((bin, idx) => {
			ctx.beginPath();
			ctx.strokeStyle = product.palette[bin];
			ctx.arc(0, 0, idx + data.radialPackets[0].firstBin, startAngle, endAngle);
			ctx.stroke();
		});
	});

	console.log(data);
};

module.exports = draw;