sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel" 
], (UIComponent, JSONModel) => {
    "use strict"; 

    return UIComponent.extend("sap.ui.APP RESOURCE.Component", {
        metadata : {
            manifest : "json" 
        },
        init : function () {
            UIComponent.prototype.init.apply(this, arguments); 

            
            this.getRouter().initialize(); 
        }
    });
});