function toReadable (number) {
    let numberString = number.toString();
    let numberStringArrayReversed = numberString.split('').reverse().join('');
    let hundreds = ['','one hundred', 'two hundred', 'three hundred',
                    'fout hundred', 'five hundred', 'six hundred',
                    'seven hundred', 'eight hundred' , 'nine hundred'];
    let tens = ['', 'ten','eleven','twelve','thirteen','fourteen',
                'fifteen','sixteen','seventeen','nineteen']
    let tensMore = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
                    'sixty', 'seventy', 'eighty', 'ninety']
    let ones = ['zero', 'one', 'two','three', 'four', 'five',
                'six', 'seven', 'eight', 'nine']
    
    let readableNumber = '';
    let firstDigit = 0;
    let secondDigit = 0;
    let thirdDigit = 0;
    

    console.log(numberStringArrayReversed)

    //go home

    
  
}

toReadable(123)