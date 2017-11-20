sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/hello/lib/MessageManager"
], function(Controller, Device, MessageManager) {
	"use strict";

	return Controller.extend("sap.hello.main", {
		onInit: function() {
			this.getView().addStyleClass(
				Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},
		
		  onShowHello: function () {
            // show a native JavaScript alert
            alert("Hello World");
        },
        
        onPressBtn: function () {
					MessageManager.reportSuccess("привет центр sap!", "приветствие");
				}
        
	});
});