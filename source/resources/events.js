module.exports = [

    { timing: { minute: 0, hour: [12, 14, 16, 18, 20, 22, 00, 02], }, name: 'event 1' },

    { timing: { minute: [52, 54], hour: [12, 14, 15, 18, 20, 21, 22, 00, 02], }, name: 'event 2' },

]

const week = {
    "SUNDAY": 0,
    "MONDAY": 1,
    "TUESDAY": 2,
    "WEDNESDAY": 3,
    "THURSDAY": 4,
    "FRIDAY": 5,
    "SATURDAY": 6,
}

// const days = {

//     ""

// }

/* run the job at 18:55:30 on Dec. 14 2018*/
// var date = new Date(2018, 11, 14, 18, 56, 30);

/* run the job at 18:55:30 on Dec. 14 2018*/
// var date = new Date(YYYY, MM, DD, HH, mm, ss);