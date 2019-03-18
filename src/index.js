// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    
    if (currency <= 0) {
        return {};
    }

    const coin = [50, 25, 10, 5, 1];
    const coinValue = ["H", "Q", "D", "N", "P"];
    let result = {};
    let position = 0;
    let remainder = 0;
    let coins;
    
    function quantityCoin(sum, pos=50) {
        remainder = sum % coin[position];
        sumNew = (sum - remainder) / coin[position];
        if (sumNew < 1) {
          position += 1;    
          pos = coin[position];
          return quantityCoin(sum, pos);
        }
        coins = coinValue[position];
        result[coins] = sumNew;
        if (remainder != 0) {
          position += 1;
          return quantityCoin(remainder, coin[position]);
        }
    }
    quantityCoin(currency);
    return result;
}

    



// Return an object containing the minimum number of coins needed to make change
