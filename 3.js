/* 
===============
Number Triangle
===============

Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.

Contoh 1 (height = 5):
Output:
12345
2345
345
45
5

Contoh 2 (height = 3):
Output:
123
23
3

Contoh 3 (height = 1):
Output:
1
 */



var height = 5
var pattern = ''

for(var i = 0; i <= height; i++){
    for(var j = i+1; j <= height; j++){
        // console.log(j)
        pattern += j
    }

    console.log(pattern)
    pattern = ''
}


function jmlHeigth(height){

    // var height = 5
    var pattern = ''
    
    for(var i = 0; i <= height; i++){
        for(var j = i+1; j <= height; j++){
            // console.log(j)
            pattern += j
        }
    
        console.log(pattern)
        pattern = ''
        
    }
    return pattern
}




console.log(jmlHeigth(5))
console.log(jmlHeigth(3))
console.log(jmlHeigth(1))
