module.exports = function toReadable(number) {
    let numberString = number.toString();
    let numberStringTemp = numberString;
    let readableNumber = '';

    let ones = ['', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine'
    ];

    let ten = ['', 'ten'];

    let tens = ['','eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen' , 'nineteen'
    ];

    let tensMore = ['','', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let hundreds = ['', 'one hundred', 'two hundred', 'three hundred',
        'four hundred', 'five hundred', 'six hundred',
        'seven hundred', 'eight hundred', 'nine hundred'
    ];

    if (number === 0) return readableNumber = 'zero';

    if (numberStringTemp.length === 3) {        
        readableNumber += hundreds[numberStringTemp[0]];
        numberStringTemp = numberStringTemp.slice(1)
        if(numberStringTemp[0] == 0) numberStringTemp = numberStringTemp.slice(1);
    }

    if (numberStringTemp.length === 2 && numberStringTemp == 10) {        
        readableNumber = readableNumber + ' ' + ten[numberStringTemp[0]];
        numberStringTemp = '';
    }

    if (numberStringTemp.length === 2 && numberStringTemp >= 11 && numberStringTemp < 20) {
        readableNumber = readableNumber + ' ' + tens[numberStringTemp[1]];
        numberStringTemp = '';
    }

    if (numberStringTemp.length === 2 && numberStringTemp >= 20 && numberStringTemp < 100) {
        readableNumber = readableNumber + ' ' + tensMore[numberStringTemp[0]];
        numberStringTemp = numberStringTemp.slice(1);
    }

    if (numberStringTemp.length === 1 && numberStringTemp >= 1 && numberStringTemp < 10) {
        readableNumber = readableNumber + ' ' + ones[numberStringTemp[0]];
        numberStringTemp = '';
    }

    return readableNumber.trim();
}
