// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

const isValid = (s) => {
	let opening = {'(': ')', '{': '}', '[': ']'}, stack = []
	for(const char of s){
		if(char in opening)stack.push(char)
		else if(opening[stack.pop()] !== char)return false
	}
	return stack.length === 0
};