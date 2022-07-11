const code = 94;
const abbreviation = 'N0Q';
const description = 'Digital Base Reflectivity';

const palette = {
	colors: [
		255, 255, 255,
        0, 128, 128,
        1, 80, 128,
        0, 0, 128,
        0, 255, 0,
        0, 200, 0,
        0, 144, 0,
        255, 255, 0,
        231, 192, 0,
        255, 144, 0,
        255, 0, 0,
        214, 0, 0,
        192, 0, 0,
        255, 0, 255,
        153, 85, 201,

        // additional halfway to black values for cleaner picture
        0, 64, 64,
        1, 40, 64,
        0, 0, 64,
        0, 128, 0,
        0, 100, 0,
        0, 72, 0,
        128, 128, 0,
        116, 96, 0,
        128, 72, 0,
        128, 0, 0,
        107, 0, 0,
        96, 0, 0,
        128, 0, 128,
        77, 43, 101,
	],
	thresholds: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
};

module.exports = {
	code,
	abbreviation,
	description,
	palette,
};
