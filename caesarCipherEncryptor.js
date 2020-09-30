
function ceaserCipherEncryptor(string, key = 0) {
      let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      let newStr = ''
      for (let i = 0; i < string.length; i++){
          let alphaSkipIndex = alpha.indexOf(string[i]) + key
          alphaSkipIndex > 25 ? alphaSkipIndex = alphaSkipIndex % 26 : alphaSkipIndex
          newStr += alpha[alphaSkipIndex]
      }
      return newStr
  }

ceaserCipherEncryptor("xyz", 2) 

