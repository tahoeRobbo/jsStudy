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

function a(foo) {
	if(foo > 20) return foo;
	return b(foo + 2);
}

function b (foo) {
	return c(foo) + 1;
}

function c (foo) {
	return a(foo * 2);
}




