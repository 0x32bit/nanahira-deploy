module.exports = {
    name: 'random',
    aliases: [],
    utilisation: '{prefix}random1',

    execute(client, message) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min + 1;

    /* in bot code */
    message.channel.send(`https://nhentai.net/g/${getRandomNumber(00001, 99999)}`);

    },
};