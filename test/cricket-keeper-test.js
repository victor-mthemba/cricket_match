const assert = require('assert');

const CricketScoreKeeper = require('../CricketScoreKeeper');

describe('CricketScoreKeeper', function(){

    const cricketScoreKeeper = CricketScoreKeeper();

    it('should be able to return the score of the current over', function(){
        cricketScoreKeeper.score("-,2,-,6,-,2");
        cricketScoreKeeper.getWickets();
        assert.deepEqual(10, cricketScoreKeeper.getCurrentScore());
    });

   
});