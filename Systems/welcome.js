const WelcomeDB = require('../database/welcome');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
        categoryId: 'welcome',
        categoryName: "Welcome System",
        categoryDescription: "Setup the Welcome System!",
        categoryImageURL: 'https://i.imgur.com/jay42DW.png',
        getActualSet: async ({guild}) => {
            return [
                { optionId: "welch", data: WelcomeDB[guild.id] || null },
                { optionId: "welembed", data: WelcomeDB[guild.id] || null }
            ]
        },
        setNew: async ({guild,data}) => {
            for(const option of data) {
                if(option.optionId === "welch") WelcomeDB[guild.id] = option.data.Channel;
                if(option.optionId === "welembed") WelcomeDB[guild.id] = option.data.Emmbed;
            }
            return;
        },
        categoryOptionsList: [
            {
                optionId: 'welch',
                optionName: "Welcome Channel",
                optionDescription: "Setup the Welcome Channel",
                optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText])
            },{
                optionId: 'welembed',
                optionName: 'Welcome Embed',
                optionDescription: 'Configure the embed that will be sent once someone joins.',
                optionType: DBD.formTypes.embedBuilder({
                    username: 'NEXUS',
                    avatarURL: 'https://cdn.discordapp.com/attachments/1112743789782638602/1147933262321291384/20230903_183644.png',
                    defaultJson: {
                        embed: {
                            description: 'Welcome, {user.username}!\nHave fun!',
                            footer: {
                                text: 'This is a sample message. Change it to your liking.',
                            },
                    },
                },
            })
        }
    ]
}

module.exports = arrays