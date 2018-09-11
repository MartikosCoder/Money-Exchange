// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        let result = {'H': 0, 'Q': 0, 'D': 0, 'N': 0, 'P': 0};

        while (true) {
            if (currency <= 0){
                break;
            }

            if (currency >= 50){
                currency -= 50;
                result.H += 1;
            } else if (currency >= 25){
                currency -= 25;
                result.Q += 1;
            } else if (currency >= 10){
                currency -= 10;
                result.D += 1;
            } else if (currency >= 5){
                currency -= 5;
                result.N += 1;
            } else if (currency >= 1){
                currency -= 1;
                result.P += 1;
            }
        }

        let checker = ['H', 'Q', 'D', 'N', 'P'];

        checker.forEach(function(element){
            if(result[element] === 0){
                delete result[element];
            }
        });

        return result;
    }
}
