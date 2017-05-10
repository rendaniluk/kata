//split string by commas
module.exports = {
    firstString: function(allDeals) {
        var newString = allDeals.split(',');
        console.log(newString);
        var actualArr = [];

        for (var i = 0; i < newString.length; i++) {
            var myString = newString[i].split('for');
            actualArr.push({
                Qty: myString[0],
                Price: ((Number(myString[1].replace('R', ''))) / (Number(myString[0]))).toFixed(2)
            });
        }
        console.log(actualArr);
        return newString;
    }
};
