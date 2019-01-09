module.exports = {
    findByMid: function(mid, option = {}){
        return this.findOne({
            ...options,
            where: {mid}
        })
    },
    findByPid: function (pid, options = {}){
        return this.findOne({
            ...options, 
            where: {pid}
        });
    }
}