const Discord = require('discord.js');
const { prefix, } = require('./config.json');
const client = new Discord.Client();
const { accounts1, accounts2, accounts3, accounts4, accounts5, } = require('./accounts.json');
const fs = require('fs');

client.once('ready', () => {
    console.log(('READY'))
    stock1 = accounts1.length
    stock2 = accounts2.length
    stock3 = accounts3.length
    stock4 = accounts4.length
    stock5 = accounts5.length
})

client.on("message", message => {
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
    console.log(message.content);
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}Roblox`)) {
        if(message.channel.type == "text") {
            let result1 = Math.floor((Math.random() * accounts1.length))
            let acc1embed = new Discord.MessageEmbed()
            .setAuthor('Proto Generator | Free')
            .setColor('#1ccaed')
            .setTitle("Roblox Account Succesfully generated!")
            .setDescription(`[Click This Link](${accounts1[result1]})\n\n`)
            .setTimestamp()

        message.author.send(acc1embed);
        message.reply("Check your dms!")
        }
    }
    if(message.content.startsWith(`${prefix}TunnelBear`)) {
        if(message.channel.type == "text") {
            let result2 = Math.floor((Math.random() * accounts2.length))
            let acc2embed = new Discord.MessageEmbed()
            .setAuthor('Proto Generator | Free')
            .setColor('#1ccaed')
            .setTitle("TunnelBear Account Succesfully generated!")
            .setDescription(`[Click This Link](${accounts2[result2]})\n\n`)
            .setTimestamp()
        message.author.send(acc2embed);
        message.reply("Check your dms!")
        }
    }
    if(message.content.startsWith(`${prefix}Crunchyroll`)) {
        if(message.channel.type == "text") {
            let result3 = Math.floor((Math.random() * accounts3.length))
            let acc3embed = new Discord.MessageEmbed()
            .setAuthor('Proto Generator | Free')
            .setColor('#1ccaed')
            .setTitle("Crunchyroll Account Succesfully generated!")
            .setDescription(`[Click This Link](${accounts3[result3]})\n\n`)
            .setTimestamp()

        message.author.send(acc3embed);
        message.reply("Check your dms!")
        }
    }

    if(message.content.startsWith(`${prefix}Nordvpn`)) {
        if(message.channel.type == "text") {
            let result4 = Math.floor((Math.random() * accounts4.length))
            let acc4embed = new Discord.MessageEmbed()
            .setAuthor('Proto Generator | Free')
            .setColor('#1ccaed')
            .setTitle("Nordvpn Account Succesfully generated!")
            .setDescription(`[Click This Link](${accounts4[result4]})\n\n`)
            .setTimestamp()

        message.author.send(acc4embed);
        message.reply("Check your dms!")
        }
    }

    if(message.content.startsWith(`${prefix}Mail`)) {
        if(message.channel.type == "text") {
            let result5 = Math.floor((Math.random() * accounts5.length))
            let acc4embed = new Discord.MessageEmbed()
            .setAuthor('Proto Generator | Free')
            .setColor('#1ccaed')
            .setTitle("Mail Account Succesfully generated!")
            .setDescription(`${accounts5[result5]}`)
            .setTimestamp()

        message.author.send(acc4embed);
        message.reply("Check your dms!")
        }
    }



    if(message.content.startsWith(`${prefix}Stock`)) {
        let embedstock = new Discord.MessageEmbed()
        .setAuthor('Proto Generator | Free')
        .setTitle('Stock of the Accounts!')
        .addFields(
            { name: 'Roblox:', value: '80', inline: true},
            { name: 'Tunnel Bear:', value: (stock2), inline: true},
            { name: 'Crunchyroll:', value: (stock3), inline: true},
            { name: 'Nordvpn:', value: (stock4), inline: true},
            { name: 'Mail:', value: (stock5), inline: true},
        )
        .setTimestamp();
    message.channel.send(embedstock)
    }

    if(message.content.startsWith(`${prefix}Help`)) {
        let embedhelp = new Discord.MessageEmbed()
        .setAuthor('Proto Generator | Free')
        .setTitle('Help!')
        .addFields(
            { name: '+Roblox:', value: ("Generates an Roblox Account!"), inline: true},
            { name: '+TunnelBear:', value: ("Generates an TunnelBear Account!"), inline: true},
            { name: '+Crunchyroll:', value: ("Generates an Crunchyroll Account!"), inline: true},
            { name: '+Nordvpn:', value: ("Generates an Nordvpn Account!"), inline: true},
            { name: '+Mail:', value: ("Generates an Mail Account!"), inline: true},
            { name: '+Stock:', value: ("Shows the stock of every Account!"), inline: true},
            { name: '+Help:', value: ("Brings this menu up!"), inline: true},
        )
        .setTimestamp();
    message.channel.send(embedhelp).then(message => {
        message.delete({ timeout: 10000 })
    })
    message.delete({ timeout: 10000})
    }
})
    
client.login(process.env.TOKEN);
