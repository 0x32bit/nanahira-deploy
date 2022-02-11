module.exports = {
    name: 'pixrandom',
    aliases: [],
    utilisation: '{prefix}pixrandom',

    execute(client, message) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min + 1;

    /* in bot code */
    message.channel.send(`https://www.pixiv.net/en/artworks/${getRandomNumber(0000001, 99999999)}`);

    },
};