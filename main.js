/* The Luhn Algorithm is an algorithm used for encrypting credit card numbers
Esentially, if the process ends up with a zero its a valid credit card number
But if the output does not have a zero at the end, it is not a valid credit card number

First step:
    Reverse the digits
Second step:
    Add all the odd numbers inside this number and store that into the variable A
Third step:
    Double each of the remaining variables
Fourth step:
    Take the digits of each of these variables, ex: 11 would be 1+1
Fifth step:
    Add all of these together
Sixth Step:
    C = A + B
Seventh step: 
    Does it end with zero?

*/
let credit_number





function getNumber(){
    //Define the variable that will store your credit card number hahahahahahhaahahahah
        credit_number = prompt("Please insert the number you would like to test!")
    if(typeof credit_number ==! 'number'){
        credit_number = prompt("Please.... Insert a number!")
    }
    //Call the function
    luhnAlgorithm()
}

//The actual luhn Algoritihm
function luhnAlgorithm(){

    // Turn credit card number to array and reverse it
    // Keep credit card number for end
    credit_number = Array.from(credit_number)
    credit_number.reverse()
    

    // Take each odd number, remove it, and push to another array
    let oddNumbers = credit_number.filter(function(value, index, args){
        return index % 2 !== 0;
    });
    //Take each even number and store into array
    let evenNumbers = credit_number.filter(function(value, index, args){
        return index % 2 == 0;
    });
    //Turn string of numbers into actual numbers
    evenNumbers = evenNumbers.map(function (x){
        return(parseInt(x, 10))
    });
    oddNumbers = oddNumbers.map(function (x){
        return(parseInt(x, 10))
    });

    //Add all odd numbers together and store in variable B

    let B = oddNumbers.reduce(function(a, b){
        return a + b;
    }, 0)

    //Double every element in even numbers

    evenNumbers = evenNumbers.map(function (x){
        return(x * 2)
    });

    //Add up the digit of every number 

    evenNumbers = evenNumbers.map(function(x){
        return(x.toString(10))
    });
    evenNumbers = evenNumbers.map(function(x){
        return(Array.from(x))
    });
    evenNumbers = evenNumbers.map(function(x){
        return(x.map(function(x){
            return(parseInt(x,10))
        }))
    })
    evenNumbers = evenNumbers.map(function(x){
        return(x.reduce(function(a, b){
            return a + b
        }))
    })
    A = evenNumbers.reduce(function(a, b){
        return a+ b
    })
    
    //I did it!!!!!!!!! Anyway, add all the two numbers together (a and b) and check if C ends in a zero
    let C = A + B
    C = C.toString(10)
    C = Array.from(C)
    if(C[C.length - 1] == 0){
        //Create h2 for credit card
        let display = document.createElement('h2')
        display.classList.add('credit_card_correct')

        let text = document.createTextNode("Your credit card number, " + credit_number.reverse() + " fits the luhn algorithm!")
        display.appendChild(text)
        document.getElementById('container').appendChild(display)
        
    }
    else{
        //Create Text saying that credit number is not real number
        let false_display = document.createElement('h2')
        false_display.classList.add('credit_card_false')

        let false_text = document.createTextNode("Your credit card number, " + credit_number.reverse() + " does not fit the luhn algorithm...")
        false_display.appendChild(false_text)
        document.getElementById('container').appendChild(false_display)
    }

}
