const sumAll = function(num1, num2) {
    if(num1<num2){
        let start=num1;
        let end = num2;
        return calculate(start, end);
    }else{
        let start =num2;
        let end = num1;
        return calculate(start, end);
    }
    };
    function calculate(start, end){
        let total = 0;
        if(start>=0 && Number.isInteger(start) && Number.isInteger(end)){
            for(let i=start; i<= end; i++){
                total += i;
            } return total;
        }else
        
        return "ERROR";
    }

// Do not edit below this line
module.exports = sumAll;
