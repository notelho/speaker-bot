const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const Schedule = require('./source/schedule');

client.on('ready', () => {

	const channel = client.channels.find(channel => channel.id === '674401444740202542')

	const schedules = [
		{ timing: { minute: 0, hour: [12, 14, 16, 18, 20, 22, 00, 02] }, message: 'evento do reino' },
		{ timing: { minute: 30, hour: [13, 17, 23], }, message: 'World Boss' },
		{ timing: { minute: 00, hour: 22, dayOfWeek: [2, 4] }, message: 'gvg' },
		{ timing: { minute: 30, hour: [17, 23], dayOfWeek: [2, 4, 6] }, message: 'duelo das ruinas' },
		{ timing: { minute: 30, hour: 21, dayOfWeek: [1, 3, 5, 7], }, message: 'baile da guild' },
		{ timing: { minute: 37, hour: 21, }, message: 'teste de tempo 1' },
		{ timing: { minute: 38, hour: 21, }, message: 'teste de tempo 2' },
		{ timing: { minute: 39, hour: 21, }, message: 'teste de tempo 3' },
	];

	let instances = []

	for (let s of schedules) {
		instances.push(new Schedule(s.timing, s.message))
	}

	for (let i of instances) {
		i.start(channel)
	}

	let res = 'connected 💙💙💙💙'

	channel.send(res);
	console.log(res);

});

client.login(config.token);