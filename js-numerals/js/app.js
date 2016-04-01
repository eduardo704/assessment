/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function stringifyDecimal(dec) {

    if (dec === 1) {
        return "one";
    }
    if (dec === 2) {
        return "two";
    }
    if (dec === 3) {
        return "tree";
    }
    if (dec === 4) {
        return "four";
    }
    if (dec === 5) {
        return "five";
    }
    if (dec === 6) {
        return "six";
    }
    if (dec === 7) {
        return "seven";
    }
    if (dec === 8) {
        return "eight";
    }
    if (dec === 9) {
        return "nine";
    }
    if (dec === 10) {
        return "ten";
    }
    if (dec === 11) {
        return "eleven";
    }
    if (dec === 12) {
        return "twelve";
    }
    if (dec === 3) {
        return "thirteen";
    }
    if (dec === 4) {
        return "fourteen";
    }
    if (dec === 5) {
        return "fiveteen";
    }
    if (dec === 6) {
        return "sixteen";
    }
    if (dec === 7) {
        return "seventeen";
    }
    if (dec === 8) {
        return "eightenn";
    }
    if (dec === 9) {
        return "nineteen";
    }

    return "";
}

function stringfyTens(ten) {
    if (ten === 2) {
        return "twenty";
    }
    if (ten === 3) {
        return "thirty";
    }
    if (ten === 4) {
        return "forty";
    }
    if (ten === 5) {
        return "fifty";
    }
    if (ten === 6) {
        return "sixty";
    }
    if (ten === 7) {
        return "seventy";
    }
    if (ten === 8) {
        return "eighty";
    }
    if (ten === 9) {
        return "ninety";
    }
}

function stringfyTensOverTwenty(input) {
    return stringfyTens(parseInt(input.charAt(0))) + " " + stringifyDecimal(parseInt(input.charAt(1)));
}

function mainConverterForTreeNumbers(numberString) {
    var output = "";
    var lastTwoNumbers = parseInt(numberString.substring(numberString.length - 2, numberString.length));
    if (lastTwoNumbers < 20) {
        output = stringifyDecimal(lastTwoNumbers);
    } else {
        output = stringfyTens(parseInt(numberString.charAt(numberString.length - 2))) + " "
                + stringifyDecimal(parseInt(numberString.charAt(numberString.length - 1)));
    }
    if (numberString.length === 3) {
        if (output === '') {
            output = stringifyDecimal(parseInt(numberString.charAt(0))) + " hundred ";
        } else {
            output = stringifyDecimal(parseInt(numberString.charAt(0))) + " hundred and " + output;
        }
    }

    return output;


}

function controller() {
    var number = parseInt($("#numInputed").val());
    var response = mainConverter(number);
    $("#resultado").html(response);

}

function mainConverter(number) {
    var output = '';
    var numberString = number.toString();

    if (number === 0) {
        return "zero";
    }

    if (numberString.length === 1) {
        output = stringifyDecimal(number);
    }

    if (numberString.length >= 2) {
        //output = mainConverterForTwenty(numberString.substring(numberString.length - 2, numberString.length));        
    }

    if (numberString.length <= 3) {
        //  output = mainConverterForTreeNumbers(numberString);
    }
    output = mainConverterForTreeNumbers(numberString.substring(numberString.length, numberString.length - 3));

    if (numberString.length >= 4) {
        output = mainConverterForTreeNumbers(numberString.substring(numberString.length - 6, numberString.length - 3)) + " thousand " + output;
    }

    if (numberString.length >= 7) {
        output = mainConverterForTreeNumbers(numberString.substring(numberString.length - 9, numberString.length - 6)) + " million " + output;
    }

    if (numberString.length >= 10) {
        output = mainConverterForTreeNumbers(numberString.substring(numberString.length - 12, numberString.length - 9)) + " billion " + output;
    }
    
     if (numberString.length >= 13) {
        output = mainConverterForTreeNumbers(numberString.substring(numberString.length - 15, numberString.length - 12)) + " trillion " + output;
    }


    return output;

}