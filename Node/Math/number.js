'use strict';

/**
*Check whether value is a number
*@param {*} value
*@return {boolean} isNumber
*/


exports.isInteger = function(value){
	return isFinite(value)
		? (value == Math.round(value))
		: false;
};

/*
*Calculate the sign of a number
*@param {number} x
*@returns {*}
*/
exports.sign = Math.sign || function(x){
	if(x > 0){
		return 1;
	}
	else if (x < 0){
		return -1;
	}
	else{
		return 0;
	}
};