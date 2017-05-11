module.exports = {
    //split string by commas
    separateStringComma: function(allDeals) {
        var newString = allDeals.split(',');
        console.log(newString);
        return newString;
    },
    //split string by for
    separateStringFor: function(separateStringComma) {
        var actualArr = [];
        for (var i = 0; i < separateStringComma.length; i++) {
            var myString = separateStringComma[i].split('for');
            //array of object
            actualArr.push({
                Qty: myString[0],
                Price: (Number(myString[1].replace('R', ''))).toFixed(2)
            });
        }
        console.log(actualArr);
        return actualArr;
    },
    calculateDealPerAvo: function(separateStringFor) {
        var deals = [];
        for (var i = 0; i < separateStringFor.length; i++) {
            var pricePerAvo = separateStringFor[i];
            deals.push((pricePerAvo.Price / pricePerAvo.Qty).toFixed(2));
        }
        console.log(deals);
        return deals;
    },
  findCheapestDeal: function(calculateDealPerAvo) {
    var cheapestDeal = Math.min.apply(null, calculateDealPerAvo).toFixed(2);
    console.log(cheapestDeal);
    return cheapestDeal;
  },
    findExpensiveDeal: function(calculateDealPerAvo) {
        var expensiveDeal = Math.max.apply(null, calculateDealPerAvo).toFixed(2);
        console.log(expensiveDeal);
        return expensiveDeal;
      },
      findAveragePrice : function(calculateDealPerAvo) {
        var average = 0;
        var total = 0;
        for (var i = 0; i < calculateDealPerAvo.length; i++) {
          var price = parseInt(calculateDealPerAvo[i]);
          total+= price;
        }
        average = total / calculateDealPerAvo.length;
        console.log(average);
        return average;
      }


};
