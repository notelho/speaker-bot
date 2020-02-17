const Event = require('./event')
const events = require('../resources/events')

module.exports = class ScheduleReader {

    constructor() { }

    run() {

        let
            weekDay = new Date().getDay(),
            dailyEvents = []

        for (let event of events) {
            if (event.days.indexOf(weekDay) !== -1) {

                const eventsInstances = []

                for (let time of event.times) {

                    let dates = [
                        new Event(event.name, time, 'now', 0),
                        new Event(event.name, time, '5before', -5)
                    ]

                    for (let date of dates)
                        if (date.isAfter)
                            eventsInstances.push(date)
                }

                dailyEvents.push(eventsInstances)
            }
        }

        return dailyEvents
    }
}