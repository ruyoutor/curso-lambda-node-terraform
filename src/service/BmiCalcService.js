const logger = require('../logger/Logger').Logger;

class BmiCalcService {
    constructor(){
        this.performBmiCalculation = (w, h) => {
            logger.info(`BmiCalcService@perfomBmiCalculation: w=${w}, h=${h}`);
            if (h == 0){
                throw Error("Height must be > 0")
            }

            let weight = parseFloat(w);
            let height = parseFloat(h);
            logger.info(`BmiCalcService@perfomBmiCalculation: weight=${weight}, height=${height}`);
            return (weight / height / height * 10000).toFixed(2)
        }
    }
}

exports.BmiCalcService = BmiCalcService