require('dotenv').config()

const rxjs = require('rxjs')

const Converter = require('./source/models/converter')
const Schedule = require('./source/modes/schedule')
const Reader = require('./source/models/reader')
const Client = require('./source/models/client')

const client = new Client()
const reader = new Reader()
const converter = new Converter()
const schedule = new Schedule()

client.connect(process.env.CHANNEL_ID)
    .subscribe(
        () => main(),
        () => error())

function main() {

    client.login(process.env.TOKEN_BOT)

    // const events = reader.read().src()
    // const schedules = converter.convert(events)

    // algum merge com as messages

    // let instances = []

    // for (let s of schedules) {
    // 	instances.push(new Schedule(s.timing, s.message))
    // }

    // for (let i of instances) {
    // 	i.start(channel)
    // }

    // let res = 'CONNECTED (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ) CONNECTED'

    // console.log(res)


    return 0
}

function error() {

    // stop pm2 app

}