
class UserStats {
    constructor(win_s,top3_s,top5_s,kills_s,matches_s){
        this.win_s = win_s;
        this.top3_s = top3_s;
        this.top5_5 = top5_s;
        this.kills_s = kills_s;
        this.matches_s = matches_s;
    }

    dWin(){
        return this.win_s;
    }

    dTop3(){
        return this.top3_s;
    }

    dTop5(){
        return this.top5_5;
    }

    dKills(){
        return this.kills_s;
    }

    dMatches(){
        return this.matches_s;
    }

}


module.exports = UserStats;