function wordifier(number) {

    var transforms = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety"
        }
        //     var words = [],
        //     stringNumber = number.toString();
        //
        //     for (var i = 0, len = stringNumber.length; i < len; i += 1) {
        //         words.push(+stringNumber.charAt(i));
        //     }
        //
        //     if (transforms[number]) {
        //         return transforms[number]
        //     } else if (words.length === 3) {
        //         return transforms[words[0]] + " hundred"
        //     } else {
        //         return transforms[words[0] * 10] + " " + transforms[words[1]];
        //     }
        //
        //
    var words = [],
          stringNumber = number.toString();

     
    for (var i = 0, len = stringNumber.length; i < len; i += 1) {   
        words.push(+stringNumber.charAt(i)); 
    }

     
    String.prototype.replaceAll = function(search, replacement) {  
        var target = this;  
        return target.replace(new RegExp(search, 'g'), replacement); 
    };

     
    if (transforms[number]) {  
        return transforms[number]; 
    } else if (words.length === 6) {  
        var thousands = parseInt(words.splice(0, 3).join().replaceAll(",", ""));  
        var rest = parseInt(words.join().replaceAll(",", ""));  
        if (rest === 000) {   
            return wordifier(thousands) + " thousand";  
        } else {   
            return wordifier(thousands) + " thousand " + wordifier(rest);  
        } 
    } else if (words.length === 5) {  
        var thousands = parseInt(words.splice(0, 2).join().replaceAll(",", ""));  
        var rest = parseInt(words.join().replaceAll(",", ""));  
        if (rest === 000) {   
            return transforms[thousands] + " thousand";  
        } else {   
            return transforms[thousands] + " thousand " + wordifier(rest);  
        } 
    } 
    else if (words.length === 4) {  
        var thousands = words.splice(0, 1);  
        var rest = parseInt(words.join().replaceAll(",", ""));  
        if (rest === 000) {   
            return transforms[thousands] + " thousand";  
        } else {   
            return transforms[thousands] + " thousand " + wordifier(rest);  
        } 
    } 
    else if (words.length === 3) {

          
        var hundreds = words.splice(0, 1);

          
        var rest = parseInt(words.join().replaceAll(",", ""));  
        if (rest === 00) {   
            return transforms[hundreds] + " hundred";  
        } else {   
            return transforms[hundreds] + " hundred " + wordifier(rest);

              
        } 
    } 
    else {  
        return transforms[words[0] * 10] + " " + transforms[words[1]]; 
    }

}

module.exports = wordifier;
