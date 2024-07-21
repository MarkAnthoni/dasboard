const LogsDB = require('../database/logs');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
    categoryId: 'logs',
    categoryName: "Logs System",
    categoryDescription: "Setup the Logs System!",
    categoryImageURL: 'https://i.imgur.com/jay42DW.png',
    getActualSet: async ({guild}) => {
        return [
            { optionId: "logsch", data: LogsDB[guild.id] || null }
        ]
    },
    setNew: async ({guild,data,newData}) => {
        for(const option of data) {
            if(option.optionId === "logsch") LogsDB[guild.id] = option.data.Channel;
        }
        return;
    },
    categoryOptionsList: [
        {
            optionId: 'logsch',
            optionName: "Logs Channel",
            optionDescription: "Setup the Logs Channel",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText])
        },
    ]
}

module.exports = arrays