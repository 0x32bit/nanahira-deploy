module.exports = {
    app: {
        px: 'n!',
        token: 'ODIwODU5MDUwMzA4NTM0Mjky.YE7SkA.TrlntqessRnrHCgh4_B73zVLd44',
        playing: 'Do n!help for more commands!'
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
