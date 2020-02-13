require('dotenv').config()

const Schedule = require('./source/models/schedule')
const Reader = require('./source/models/reader')
// const Client = require('./source/models/client')

// const client = new Client()
const reader = new Reader()
const schedule = new Schedule()

// client.connect(process.env.CHANNEL_ID)
//     .subscribe(
//         () => main(),
//         () => error())

function main() {

    // client.login(process.env.TOKEN_BOT)

    const events = reader.read('events.xlsx')

    // console.log(events);
    

    // algum merge com as messages

    // schedule.whenRun().subscribe( data => run (params)) 

    // for (let s of schedules) {
    // schedule.create(s.timing, s.message)
    // }

    // let res = 'CONNECTED (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ) CONNECTED'

    // console.log(res)

    // client.send ( res )


    return 0
}

function run(params) {

    // client.send ( message )

}

function error() {

    // stop pm2 app

}

main() // TEMP