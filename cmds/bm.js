const fortnite = require('fortnite-api');
const UserStats = require('./../modules/UserStats');
let fortniteApi = new fortnite([
    "email",
    "password",
    "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y",
    "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ"

],
{
    debug: true
}
);
module.exports.run = async (bot, message, args) => {
    fortniteApi.login().then(() => {
        fortniteApi.getStatsBR('Not Tfue', 'pc','alltime')
        .then(stats => {
            let pre_dea = new UserStats(stats.group.squad.wins,stats.group.squad.top3,stats.group.squad.top5,stats.group.squad.kills,stats.group.squad.matches);
            message.channel.send(`BEFORE: \n_____\nwins: ${pre_dea.dWin()} \ntop3: ${pre_dea.dTop3()} \ntop5: ${pre_dea.dTop5()} \nkills: ${pre_dea.dKills()} \nmatches: ${pre_dea.dMatches()}`);
        }).catch((err) =>{
            console.log(err);
        });

        setInterval(()=> {
            fortniteApi.getStatsBR('Not Tfue', 'pc','alltime').then((stats) => {
                let after_dae = new UserStats(stats.group.squad.wins,stats.group.squad.top3,stats.group.squad.top5,stats.group.squad.kills,stats.group.squad.matches);
                message.channel.send(`AFTER: \n_____\nwins: ${after_dae.dWin()} \ntop3: ${after_dae.dTop3()} \ntop5: ${after_dae.dTop5()} \nkills: ${after_dae.dKills()} \nmatches: ${after_dae.dMatches()}`);
            })

        },2*60000);
    });

}



module.exports.help = {
    name: "bm"
}