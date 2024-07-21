const array = {
    category: "Moderación",
    subTitle: "Nuestros comandos de moderación",
    categoryId: "moderation",
    hideAlias: true,
    hideDescription: true, 
    hideSidebarItem: false,
    list: [
        {
            commandName: "/add-role",
            commandUsage: "Añade un rol a un miembro."
        },
        {
            commandName: "/clear",
            commandUsage: "Borrar los mensajes de un canal"
        },
        {
            commandName: "/lock",
            commandUsage: "Bloquea un canal"
        },
        {
            commandName: "/membercount",
            commandUsage: "Muestra el número de miembros del servidor."
        },
        {
            commandName: "/send-msg-webhook",
            commandUsage: "Crear un webhook"
        },
        {
            commandName: "/steal",
            commandUsage: "Añade un emoji determinado al servidor"
        },
        {
            commandName: "/unban",
            commandUsage: "Desbanea a un usuario"
        },
        {
            commandName: "/unlock",
            commandUsage: "Desbloquea a un usuario"
        },
        {
            commandName: "/reactionrole",
            commandUsage: "Cree reactionroles en su servidor"
        }
    ]
};

module.exports = array;