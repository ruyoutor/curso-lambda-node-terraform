const Result = requere("./Result")


class Handler {
    constructor(bmiCalcService){
        this.handleCalculation = async (event, context, callback) => {
            try{
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if (isNaN(weight) || isNaN(height)){
                    return Result.BadRequest_400("weight or height is not a number")
                }
                let bmiResult = await this.bmiCalcService.performBmiCalculation(weight, height);
                return Result.OK_200(bmiResult)
            } catch (e){
                return Result.InternalServerError_500(e)
            }
        };
        this.bmiCalcService = bmiCalcService;
    }
}

exports.Handler = Handler;