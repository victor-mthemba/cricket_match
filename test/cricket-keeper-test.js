const assert = require('assert');

const CricketScoreKeeper = require('../CricketScoreKeeper');

describe('CricketScoreKeeper', function(){

    const cricketScoreKeeper = CricketScoreKeeper();

    it('should be able to return the score of the current over', function(){
        cricketScoreKeeper.score("-,2,-,6,-,2");
        cricketScoreKeeper.getWickets();
        assert.deepEqual(10, cricketScoreKeeper.getCurrentScore());
    });

    it('should be able to return the correct number of wickets available if one wicket is down', function(){
        cricketScoreKeeper.score("-,w,-,6,-,2");
        assert.deepEqual(9, cricketScoreKeeper.getWickets());
    });

    it('should be able to return the correct final total after 2 overs', function(){
        cricketScoreKeeper.score("-,w,-,6,-,2");
        cricketScoreKeeper.score("-,w,-,5,-,2");
        assert.deepEqual(33, cricketScoreKeeper.finalScore());
    });


});