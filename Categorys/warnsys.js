const array = {
    category: "Sistema de Advertencias",
    subTitle: "Nuestros comandos de Advertencia",
    categoryId: "warn",
    hideAlias: true,
    hideDescription: true, 
    hideSidebarItem: false,
    list: [
    
        {
            commandName: "/clear-warn",
            commandUsage: "Esto borra las advertencias de los miembros",
        },
        
        {
            commandName: "/warn",
            commandUsage: "Esto advierte a un miembro del servidor",
        },
        
        {
            commandName: "/warnings",
            commandUsage: "Mira las advertencias de los usuarios",
        },
    ]
};

module.exports = array;