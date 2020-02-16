const schedule = require('node-schedule')

module.exports = class Event {

    constructor(timing, name) {
        this._timing = timing
        this._name = name
    }

    get schedule(gap) {
        throw new Error('get schedule() must be implemented')
    }

    get message() {
        throw new Error('get message() must be implemented')
    }

    get timing() {
        return this._timing
    }

    get name() {
        return this._name
    }

}