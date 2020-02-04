const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const Schedule = require('./source/schedule');

client.on('ready', () => {

	const channel = client.channels.find(channel => channel.id === '672551565151830022');

	const schedules = [
		{ timing: { minute: 0, hour: [12, 14, 16, 18, 20, 22, 00, 02], }, message: 'Eu sou gay' },
		{ timing: { minute: 34, hour: [12, 14, 16, 18, 20, 22, 00, 02, 21], }, message: 'Eu sou gay 2' },
		{ timing: { minute: 35, hour: [12, 14, 16, 18, 20, 22, 00, 02, 21], }, message: 'Eu sou gay 2' },
	];

	let instances = [];

	for (let s of schedules) {
		instances.push(new Schedule(s.timing, s.message));
	}

	for (let i of instances) {
		i.start(channel);
	}

	let res = 'connected 💙💙💙💙'

	channel.send(res);
	console.log(res);

});
client.login(config.token);