module.exports = {
    name: 'pp',
    aliases: [],
    utilisation: '{prefix}pp',

    execute(client, message) {
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min + 1;
    
        /* in bot code */
        message.channel.send(`your pp size is ${getRandomNumber(1, 25)}cm`);
    
        },
    };