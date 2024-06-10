define("TnkProject139dc37bSection", [], function() {
	return {
		entitySchemaName: "TnkProject",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{	
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "CancelEventButton",
				"values": {
					"itemType": BPMSoft.ViewItemType.BUTTON,
					"style": BPMSoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "Resources.Strings.CancelEventButtonCaption" },
					"click": { "bindTo": "publishMessageToChangePage" },
					"visible": { "bindTo": "isEventNotCanceled" },
					"tag": "CancelEventClick"
				},
			},
			{	
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "ApprovingEventButton",
				"values": {
					"itemType": BPMSoft.ViewItemType.BUTTON,
					"style": BPMSoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "Resources.Strings.ApprovingEventButtonCaption" },
					"click": { "bindTo": "publishMessageToChangePage" },
					"visible": { "bindTo": "isEventNew" },
					"tag": "ApprovingEventClick"
				},
			},
			{	
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "EndEventButton",
				"values": {
					"itemType": BPMSoft.ViewItemType.BUTTON,
					"style": BPMSoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "Resources.Strings.EndEventButtonCaption" },
					"click": { "bindTo": "publishMessageToChangePage" },
					"visible": { "bindTo": "isEventEnd" },
					"tag": "EndEventClick"
				},
			},
		]/**SCHEMA_DIFF*/,
		attributes: {
			"isEventNotCanceled": {
				dataValueType: this.BPMSoft.DataValueType.BOOLEAN,
				value: false
			},
			"isEventNew": {
				dataValueType: this.BPMSoft.DataValueType.BOOLEAN,
				value: false
			},
			"isEventEnd": {
				dataValueType: this.BPMSoft.DataValueType.BOOLEAN,
				value: false
			},
		},
		messages: {
			"CancelEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
			"ApprovingEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
			"EndEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
		},
		methods: {
			publishMessageToChangePage: function(arg1, arg2, arg3, tag) {
				this.sandbox.publish(tag, {}, [this.sandbox.id + "_CardModuleV2"]);
			},
		}
	};
});
