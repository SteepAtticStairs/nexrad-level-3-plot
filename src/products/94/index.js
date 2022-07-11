const code = 94;
const abbreviation = 'N0Q';
const description = 'Digital Base Reflectivity';

const palette = {
	colors: [
		204, 255, 255,
		204, 153, 204,
        153, 102, 153,
        102, 51, 102,
        52, 235, 229,
        52, 235, 229,
        100, 100, 100,
        4, 233, 231,
        1, 159, 244,
        3, 0, 244,
        2, 253, 2,
        1, 197, 1,
        0, 142, 0,
        253, 248, 2,
        253, 248, 2,
        253, 149, 0,
        253, 0, 0,
        212, 0, 0,
        188, 0, 0,
        248, 0, 253,
        152, 84, 198,
        253, 253, 253,
	],
	thresholds: [-30, -25, -20, -15, 10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
};

module.exports = {
	code,
	abbreviation,
	description,
	palette,
};
