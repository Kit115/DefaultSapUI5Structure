sap.ui.define([
    "sap/ui/core/ComponentContainer" 
], (ComponentContainer) => {
    "use strict"; 
    
    new ComponentContainer({
        name: "sap.ui.APP RESOURCE",
        settings: {
            id: "APP TITLE"
        },
        async : true
    }).placeAt("content");
});