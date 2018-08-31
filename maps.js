let mapW = {};
let mapH = {};

let gameMap = {};

mapW[0] = 7;
mapH[0] = 7;

gameMap[0] = [
	23, 16, 16, 16, 16, 16, 24,
	35, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 33,
	26, 18, 18, 18, 18, 18, 25,
];


mapW[1] = 43;
mapH[1] = 25;

gameMap[1] = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1,
	1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1,
	1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1,
	1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 9, 9, 9, 1, 9, 9, 9, 9, 9, 1, 9, 9, 9, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1,
	1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1,
	1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1,
	1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 99, 99, 99, 99, 99, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 99, 99, 99, 99, 99, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 99, 99, 99, 99, 99, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9,
	9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9,
	9, 0, 9, 9, 9, 9, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 9, 9, 9, 9, 0, 9,
	9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9,
];


mapW[2] = 31;
mapH[2] = 44;

gameMap[2] = [
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 97, 97, 97, 97, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 97, 97, 97, 97, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 28, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 27, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 21, 16, 16, 16, 16, 16, 36, 36, 36, 36, 36, 36, 36, 36, 36, 16, 16, 16, 16, 16, 20, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17,
    15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17,
    26, 18, 18, 18, 19, 10, 10, 10, 10, 22, 18, 42, 42, 18, 18, 18, 18, 18, 42, 42, 18, 19, 10, 10, 10, 10, 22, 18, 18, 18, 25,
    00, 00, 00, 00, 15, 10, 10, 10, 10, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 10, 10, 10, 10, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 41, 11, 11, 11, 11, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 11, 11, 11, 11, 43, 00, 00, 00, 00,
    00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00,
    00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00,
    00, 00, 00, 00, 41, 11, 11, 11, 11, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 11, 11, 11, 11, 43, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 31, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 32, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 43, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 41, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 11, 11, 11, 11, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 11, 11, 11, 11, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 10, 10, 10, 10, 17, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 10, 10, 10, 10, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 10, 10, 10, 10, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 20, 10, 10, 10, 10, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 17, 00, 00, 00, 00,
    00, 00, 00, 00, 26, 18, 38, 38, 38, 38, 38, 18, 10, 10, 10, 10, 10, 10, 10, 18, 38, 38, 38, 38, 38, 18, 25, 00, 00, 00, 00,
    00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 10, 10, 10, 10, 10, 10, 10, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
];


mapW[3] = 12;
mapH[3] = 15;

gameMap[3] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[4] = 12;
mapH[4] = 15;

gameMap[4] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[5] = 12;
mapH[5] = 15;

gameMap[5] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[6] = 12;
mapH[6] = 15;

gameMap[6] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[7] = 14;
mapH[7] = 19;

gameMap[7] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	40, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	40, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[8] = 14;
mapH[8] = 21;

gameMap[8] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 33,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	35, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];

mapW[9] = 14;
mapH[9] = 21;

gameMap[9] = [
	23, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	34, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37,
	15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
	26, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 25,
];
