// https://github.com/Nazrul-Islam-Hasib/basic-js-assignment

function kilometerToMeter(kilometer){
    //Input Validation
    if(typeof kilometer != 'number' || kilometer <= 0){
        return 'Please enter a valid number'
    }
    else{
        var meter = kilometer*1000;
        return meter;
    }
   
}


function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop){
    //Input Validation
    if (typeof noOfWatch != 'number' || typeof noOfPhone != 'number' || typeof noOfLaptop != 'number') {
        return "Please enter a valid number"
    }
    //Input Validation
    else if(noOfWatch < 0 || noOfPhone < 0 || noOfLaptop < 0 ){
        return 'Please enter a positive number'
    }
    //Input Validation
    else if(noOfWatch %1 != 0 || noOfPhone %1 != 0 || noOfLaptop %1 != 0 ){
        return 'Please enter a Integer number'
    }
    //Calculating budget
    else {
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var totalPrice = (watchPrice*noOfWatch) + (phonePrice*noOfPhone) + (laptopPrice*noOfLaptop);
        return totalPrice;
    }
}


function hotelCost(noOfDays){
    var cost = 100;
    var costWithMiniDiscount = 80;
    var costWithMegaDiscount = 50;
    //Input Validation
    if (typeof noOfDays != 'number' || noOfDays <= 0) {
        return "Please enter a valid number of  days"
    }
    //Input Validation
    else if(noOfDays %1 != 0 ){
        return 'Please enter an Integer number'
    }
    else {
        //hostelCost when the days is less than 20
        if (noOfDays>0 && noOfDays<=10) {
            return noOfDays*cost;
        } 
        //hostelCost when the days is between 11-20
        else if(noOfDays>10 && noOfDays<=20){
            var first10DaysPrice = noOfDays - 10;
            var totalCost = (first10DaysPrice*costWithMiniDiscount) + (10*cost);
            return totalCost;
        }
        //hostelCost when the days is greater than 20
        else{
            var first10DaysPrice = 10*cost;
            var second10DaysPrice = 10*costWithMiniDiscount;
            var remainingDaysPrice = (noOfDays-20)*costWithMegaDiscount;
            var totalCost = first10DaysPrice+second10DaysPrice+remainingDaysPrice;
            return totalCost;
        }
    }
}


function megaFriend(nameList){
    var biggestName = '';
    //Checking if the input paramaeter is an Array or empty
    if(Array.isArray(nameList) == false || nameList.length == 0){
        return 'Please enter an array of names as input';
    }
    else{
        for (let index = 0; index < nameList.length; index++) {
            //Checking if the Array contains only string
            if(typeof nameList[index] != "string") {
                return 'Please enter only string of array as an Input';
              }
            //Calculating biggest name
            else{
                if (biggestName.length >= nameList[index].length) {
                    biggestName = biggestName;
                } else {
                    biggestName = nameList[index];
                }
            }
        }
    return biggestName;
   }
}