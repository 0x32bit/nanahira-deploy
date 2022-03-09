module.exports = {
    app: {
        px: 'n!',
        token: 'ODIwODU5MDUwMzA4NTM0Mjky.YE7SkA.ypaE3nguy4N-kwdy7tCIIU4qqbs',
        playing: 'Do n!help for more command'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '450W KERE PRO MAX',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
