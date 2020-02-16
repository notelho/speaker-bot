const schedule = require('node-schedule')

module.exports = class ScheduleDestroyer {

    constructor() { }

    run(events) {

        for (let i = 0; i < events.length; i++)
            for (let j = 0; j < events[i].length; j++)
                schedule.scheduledJobs[`job-${i}${j}`].cancel()

    }

}