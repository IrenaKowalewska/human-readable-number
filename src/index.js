module.exports = function toReadable (number) {
    let smallNum = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tensNum = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let text = "";
    
    if(number == 0) return smallNum[0];  
    
    let hundreds = Math.floor(number / 100), 
         tenUnit = number % 100;
    
    if(hundreds >= 1) {
                 text += smallNum[hundreds] + " hundred ";
         }
    
    let tens = Math.floor(tenUnit / 10),
         units = tenUnit % 10; 
    
    if(tens >= 2) {
             text += tensNum[tens];
             if(units != 0){
                 text += " " + smallNum[units];
             }
         }
    else if (tenUnit != 0) {
            text += smallNum[tenUnit];
        }	
    return text;
}
