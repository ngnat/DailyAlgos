// Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result. 

// Ex: Given the following strings...

// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"

function remove(s){
    let stack = []
    let hash = {}
    for (let i = 0; i < s.length; i++){
      if(!hash[s[i]]){
          stack.push(s[i])
          hash[s[i]] = true
      } else {
        stack.pop()
      }
    }
    return stack.join("")
  }