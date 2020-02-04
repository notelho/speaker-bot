const schedule = require('node-schedule');

module.exports = class Schedule {

    constructor(timing, message) {
        this._ref = null
        this._timing = timing
        this._message = message
    }

    start(channel) {

        var sh = new schedule.RecurrenceRule();

        for (let attr in this._timing) {
            sh[attr] = this._timing[attr];
        }

        this._ref = schedule.scheduleJob(sh,
            () => channel.send(this._message));

    }

}