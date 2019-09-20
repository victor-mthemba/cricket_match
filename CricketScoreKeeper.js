module.exports = function CricketScoreKeeper() {

    let currentScore = 0;
    let numberOfWickets = 10;
    let totalScore = 0;


    function score(str) {
        let scoreList = str.split(",");

        if(numberOfWickets > 0) {

            for (let i = 0; i < scoreList.length; i++) {
                const type = scoreList[i];
                if (type == "-") {
                    currentScore += 0;
                } else if (type <= "6" && type >= "0") {
                    currentScore += Number(type);
                } else if (type == "w") {
                    numberOfWickets -= 1;
                }
            }
        }
        

    }

    function getCurrentScore() {
        return currentScore;
    }

    function getWickets() {
        return numberOfWickets;
    }

    function finalScore() {
        return totalScore + currentScore;
    }

    return {
        score,
        getWickets,
        finalScore,
        getCurrentScore
    }
}