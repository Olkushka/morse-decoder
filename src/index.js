const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };
  
  function decode(expr) {
    // write your solution here
    let str = expr.match (/.{1,10}/g);
    let newStr = [];
    let point = /10/g;
    let dash = /11/g;
    let zero = /00/g;
    
    for (let i = 0; i < str.length; i++) {
      let symbol = str[i].split("**********").join("  ");
    
      symbol = symbol.replace(point, ".");
      symbol = symbol.replace(dash, "-");
      symbol = symbol.replace(zero, "");
    
      newStr.push(symbol);
    }
      newStr = newStr.join(" ");
    
      return newStr
      .split("   ") // get word code 3 spaces apart
             .map(word => word
                           .split(" ") // get character code 1 spaces apart
                           .map(character => MORSE_TABLE[character]) // decode Morse code character
                           .join('')
              )
              .join(' ') // add spaces between words 
              .trim()
}
  module.exports = {
    decode
  }