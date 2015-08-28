//IIFE test -- invoke in or out of paren wrapper

(function(){
	console.log('hello');
}());

(function(){
	console.log('hello');
})();



//HOISTING TEST

foo();

var foo = 2;

function foo(){
	console.log('bar');
}

function foo(){
	console.log('foo');
}

// MUTUAL RECURSION -- CALLSTACK LOGIC
a(1); //??

//solution a(1) === 39

function a(foo) {
	if(foo > 20) {return foo;}
	return b(foo + 2);
}

function b (foo) {
	return c(foo) + 1;
}

function c (foo) {
	return a(foo * 2);
}


//RegEx study\\


//FROM MDN -- 
//Using the constructor function provides runtime compilation of the regular expression. Use the 
//constructor function when you know the regular expression pattern will be changing, or you don't 
//know the pattern and are getting it from another source, such as user input.

var constructedRegEx = new RegExp('ab + c');

console.log(constructedRegEx, ' constructedRegEx');

var regExLiteral = /ab + c/;

console.log(regExLiteral, ' regExLiteral');


//closure in loops

//because setTimeout is a live link back to the variables
//(rather than a snapshot)
//it will run the full loop and by the time it 
//is logging i, i will have the value of 5.
//this can be fixed by assigning a scope to each
//iteration, which I will show using the IIFE pattern
//and the let keyword
function muddyScope () {
	for(var i = 0 ; i < 5; i++) {
		setTimeout(function() {
			console.log(i, ': ', i);
		}, i*1000);
	}
}
muddyScope();

//if the inner iterations are wrapped in an IIFE that is passed
//in i, each iteration will create it's own protected block
//scope (because of JS's functional block scoping)
function iifeBlockScope () {
	for(var i = 0 ; i < 5; i++) {
		(function(i){
			setTimeout(function() {
				console.log(i, ': ', i);
			}, i*1000);
		}(i));
	}
}
iifeBlockScope();

//es6 is introducing the 'let' keyword, which allows the writer
//to create a block scope within any expression, including
//for loops.  each iteration creates and uses a scope, then
//throws the scope away for the following iterations.

function letBlockScope () {
	'use strict';
	for(let i = 0; i <5; i++) {
		setTimeout(function() {
			console.log(i, ': ', i);
		}, i*1000);
	}
}
letBlockScope();
