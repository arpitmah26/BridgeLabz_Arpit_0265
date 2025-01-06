// 8) Valid Parentheses with Multiple Types
// Given a string containing parentheses of multiple types (round, square, curly), check if the string has valid parentheses.


function validparentheses(s) {
    const stack = [];
    const parentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
  
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
  
        if (parentheses[currentChar]) {
            stack.push(currentChar);
        } else {
            const top = stack.pop();
            if (parentheses[top] !== currentChar) {
                return false;
            }
        }
    }
  
    return stack.length === 0;
  }
  
  console.log(validparentheses("()"));      
  console.log(validparentheses("()[]{}"));  
  console.log(validparentheses("(]"));       
  console.log(validparentheses("([)]"));     
  console.log(validparentheses("{[]}"));    