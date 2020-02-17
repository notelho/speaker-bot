const Schedule = require('./models/schedule')
const Client = require('./models/client')

class App {

    constructor() {
        this._client = new Client()
        this._schedule = new Schedule()
    }

    connect() {

        this._client.connect(process.env.CHANNEL_ID)
            .subscribe(
                () => this.begin(),
                () => this.error())

        this._client.login(process.env.TOKEN_BOT)
            .catch(() => error())

    }

    start() {
        this._schedule.event.subscribe(event => this.send(event))
        this._schedule.create()
    }

    error() {
        console.log('error');
    }

    send(event) {
        console.log(event.message)
        this._client.send('```' + event.message + '```')
    }

    begin() {

        console.log('starting...')

        let res = [

            '```',
            // 'This bot was created by lsabela & ×AZ× Xuliana',
            // 'and will alert about game events sending messages at time',
            // `and 5 minutes before of registered events.`,
            // 'To change the time or add events, speak to one of the managers.',
            '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)',
            '```',

        ].join('\n')

        this._client.send(res)

        this.start()
    }

}

module.exports = new App()