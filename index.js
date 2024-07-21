// Define Packages
const { Client, GatewayIntentBits } = require('discord.js');
const SoftUI = require('dbd-soft-ui');
const config = require('./config.json');
const os = require('os');
let DBD = require('discord-dashboard');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(config.discord.token);

//category for commands
const moderation = require("./Categorys/moderation");
const community = require("./Categorys/community");
//const leveling = require("./Categorys/leveling");
const warnsys = require("./Categorys/warnsys");
const ecosys = require("./Categorys/economy");
//const mail = require("./Categorys/modmail");
//const nsfw = require("./Categorys/nsfw");
const other = require("./Categorys/other");
const sys = require("./Categorys/systems");

//Setups
const welcomeSetup = require('./Systems/welcome');
const logsSetup = require('./Systems/logs');
const modmailSetup = require('./Systems/modmail');
const jtcSetup = require('./Systems/jtc');
const ticketSetup = require('./Systems/ticket');
const giveawaySetup = require('./Systems/giveaway');

//some imports
const Maintenance = require("./Data/underMaintenance");

//Export modules
module.exports = { client }

//handler
const Handler = new DBD.Handler();

//Locales
const LOCALES = require("./Locales/locales");

//Dashboard
(async ()=>{
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        acceptPrivacyPolicy: true,
        useCategorySet: true,
        //Support Server
        supportServer: {
            slash: '/support-server',
            inviteUrl: 'https://discord.gg/CTEZM2hR'
        },
        //Port
        port: config.dbd.port,
        //client
        client: config.discord.client,
        //redirect
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        //domain
        domain: config.dbd.domain,
        //owners
        ownerIDs: config.dbd.ownerIDs,
        //Maintenance
        useThemeMaintenance: true,
        useTheme404: true,
        //Join server
        guildAfterAuthorization: {
            use: true,
            guildId: "1222369939017568337"
        },
        //Invite
        invite: {
            clientId: config.discord.client.id,
            scopes:["bot", "applications.commands"],
            permissions: '10982195068151',
        },
        //underMaintenance
        underMaintenance: Maintenance,
        //Permissions
        requiredPermissions: DBD.DISCORD_FLAGS.Permissions.ADMINISTRATOR, 
        //Logs
        minimizedConsoleLogs: true,
        //client
        bot: client,
        //Theme
        theme: SoftUI({
            locales: LOCALES,
            dbdriver: config.database.mongose,
            storage: Handler,
            colorScheme: "blue",
            /*themeColors: {
                secondaryColor: "#000000",
                primaryColor: "#ff0000"
            },*/
            customThemeOptions: {
                index: async ({ req, res, config }) => {
                    let username = req.session?.user?.username || "Invitado"

                    const cards = [
                        {
                            title: "Current User",
                            icon: "single-02",
                            getValue: username,
                            progressBar: {
                                enabled: false,
                                getProgress: client.guilds.cache.size
                            }
                        },
                        {
                            title: "CPU",
                            icon: "settings",
                            getValue: os.cpus()[0].model.replace('(R) Core(TM) ', ' ').replace(' CPU ', '').split('@')[0],
                            progressBar: {
                                enabled: false,
                                getProgress: 50
                            }
                        },
                        {
                            title: "System Platform",
                            icon: "single-02",
                            getValue: os.platform(),
                            progressBar: {
                                enabled: false,
                                getProgress: 50
                            }
                        },
                        {
                            title: "Server count",
                            icon: "single-02",
                            getValue: `${client.guilds.cache.size} Guilds`,
                            progressBar: {
                                enabled: true,
                                getProgress: (client.guilds.cache.size / 100) * 100
                            }
                        }
                    ]

                    const graph = {
                        values: [690, 524, 345, 645, 478, 592, 468, 783, 459, 230, 621, 345],
                        labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"]
                    }

                    return {
                        cards,
                        graph,
                        values: [],
                        premium: []
                    }
                },
            },
            websiteName: "Exodus",
            websiteTitle: "EXODUS - imagina un bot de discordia gratuito",
            dashboardURL: config.dbd.domain,
            supporteMail: "toowake@proton.me",
            createdBy: "EXODUS Development",
            icons: {
                favicon: "https://cdn.discordapp.com/avatars/1260398891061215344/3c43218d86221a20333dd504c34d4af5.webp?size=1024",
                noGuildIcon: "https://unlimitedworld.de/attachments/discord-mark-blue-png.64362/",
                sidebar: {
                    darkUrl: 'https://cdn.discordapp.com/avatars/1260398891061215344/3c43218d86221a20333dd504c34d4af5.webp?size=1024',
                    lightUrl: 'https://cdn.discordapp.com/avatars/1260398891061215344/3c43218d86221a20333dd504c34d4af5.webp?size=1024',
                    hideName: false,
                    borderRadius: true,
                    alignCenter: true
                },
            },
            index: {
                card: {
                    category: "Exodus",
                    title: "EXODUS - imagina un bot de discordia gratuito",
                    description: "EXODUS Panel",
                    image: "https://cdn.discordapp.com/attachments/1147892533855260823/1147934381491634346/20230903_183644.png",
                    link: {
                        enabled: true,
                        url: config.dbd.domain + "/commands"
                    },
                },
                 premium: {
                    enabled: true,
                    card: {
                        title: "Quiero apoyar este proyecto?",
                        description: "Puede convertirse en premium!",
                        bgImage: "https://cdn.discordapp.com/attachments/1112743789782638602/1147933261843157013/20230903_183622.png",
                        button: {
                            text: "Hágase Premium",
                            url: "https://patreon.com/nexusdevelopment"
                        }
                    }
                },
                feeds: {
                    category: "feeds",
                    title: "Feed",
                    description: "El Panel NEXUS aún está en curso. Si tiene preguntas o sugerencias, únase a nuestro servidor discord!",
                    footer: "EXODUS"
                },
                information: {
                    category: "information",
                    title: "Information",
                    description: "Exodus es el bot más potente en discord. Es 100% gratis, sin anuncios, etc. Vamos a hacer bots pagados inútil.",
                    footer: "EXODUS"
                },
                graph: {
                    enabled: true,
                    lineGraph: false,
                    title: 'Memory Usage',
                    tag: 'Memory (MB)',
                    max: 100
                },
                
            },
            footer: {
                replaceDefault: true,
                text: "Hecho por EXODUS Development"
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "ha iniciado sesión!",
                }
            },
            preloader: {
                image: "https://cdn.discordapp.com/attachments/1112743789782638602/1147938332307898418/discord-avatar-512-E9R4D.gif",
                spinner: false,
                text: "Cargando página...",
            },
            admin: {
                pterodactyl: {
                    enabled: false,
                    apiKey: "apiKey",
                    panelLink: "https://panel.website.com",
                    serverUUIDs: []
                },
            },
            commands: [
                moderation,
                community,
               // leveling,
                warnsys,
                ecosys,
               //mail, 
                sys,
               // nsfw,
                other,
            ]}),
            settings: [
                welcomeSetup,
                logsSetup,
                modmailSetup,
                jtcSetup,
                ticketSetup,
                giveawaySetup
            ],
    });
    Dashboard.init();
})();