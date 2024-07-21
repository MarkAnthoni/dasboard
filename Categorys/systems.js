const system = {
    category: "Comandos del Sistema",
    subTitle: "Nuestros comandos del sistema",
    categoryId: "sys",
    hideAlias: false,
    hideDescription: false,
    hideSidebarItem: false,
    list: [
        {
            commandName: "/anti-flagged-words",
            commandUsage: "Sistema anti palabras marcadas"
        },
        {
            commandName: "/anti-ghostping",
            commandAlias: "setup",
            commandDescription: "subcommand",
            commandUsage: "Configurar el sistema anti ghost ping"
        },
        {
            commandName: "/anti-ghostping",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "Desactiva el sistema anti ghost ping en tu servidor"
        },
        {
            commandName: "/anti-ghostping",
            commandDescription: "subcommand",
            commandAlias: "number-reset",
            commandUsage: "Restablecer los ghost ping de un usuario"
        },
        {
            commandName: "/anti-link",
            commandDescription: "subcommand",
            commandAlias: "setup",
            commandUsage: "Configura el sistema anti-link para eliminar todos los enlaces!"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "check",
            commandDescription: "subcommand",
            commandUsage: "Comprueba el estado del sistema /anti-link"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "Desactiva el sistema Anti-Link"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "edit",
            commandDescription: "subcommand",
            commandUsage: "Editar los permisos Anti-Link"
        },
        {
            commandName: "/anti-mention-spam",
            commandUsage: "No Spam Menciones"
        },
        {
            comandName: "/anti-spam",
            commandUsage: "número máximo de mensajes por intervalo",
        },
        {
            commandName: "/anti-word",
            commandUsage: "eliminar mensajes con una palabra clave específica",
        },
        {
            commandName: "/autoreply-setup",
            commandUsage: "Configure la respuesta automática en su servidor",
        },
        {
            commandName: "/autoreply-delete",
            commandUsage: "Elimine la respuesta automática de su servidor",
        },
        {
            commandName: "/giveaway",
            commandUsage: "Edita un regalo especificado",
            commandDescription: "subcommand",
            commandAlias: "edit"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Finaliza el sorteo especificado",
            commandDescription: "subcommand",
            commandAlias: "end"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Recarga un sorteo en especifico",
            commandDescription: "subcommand",
            commandAlias: "reroll"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Starts a giveaway with the specified fields",
            commandDescription: "subcommand",
            commandAlias: "start"
        },
        {
            commandName: "/ticket-setup",
            commandUsage: "Sets up the ticket system for the server",
        },
        {
            commandName: "/ticket-disable",
            commandUsage: "Disables the ticket system for the server"
        }
    ]
}

module.exports = system