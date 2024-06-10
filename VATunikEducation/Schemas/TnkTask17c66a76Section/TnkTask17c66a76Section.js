define("TnkTask17c66a76Section", [], function() {
	return {
		entitySchemaName: "TnkTask",
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
				"name": "ApprovedEventButton",
				"values": {
					"itemType": BPMSoft.ViewItemType.BUTTON,
					"style": BPMSoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "Resources.Strings.ApprovedEventButtonCaption" },
					"click": { "bindTo": "publishMessageToChangePage" },
					"visible": { "bindTo": "isEventApproved" },
					"tag": "ApprovedEventClick"
				},
			},
			{	
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "InProgressEventButton",
				"values": {
					"itemType": BPMSoft.ViewItemType.BUTTON,
					"style": BPMSoft.controls.ButtonEnums.style.GREEN,
					"caption": { "bindTo": "Resources.Strings.ProgressEventButtonCaption" },
					"click": { "bindTo": "publishMessageToChangePage" },
					"visible": { "bindTo": "isEventInProgress" },
					"tag": "ProgressEventClick"
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
			"isEventApproved": {
				dataValueType: this.BPMSoft.DataValueType.BOOLEAN,
				value: false
			},
			"isEventInProgress": {
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
			"ApprovedEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
			"ProgressEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
			"EndEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.PUBLISH
			},
		},
		methods: {
			/**
   		   	*  Публикация сообщений при нажатии кнопок в совмещенном режиме
     		*/
			publishMessageToChangePage: function(arg1, arg2, arg3, tag) {
				this.sandbox.publish(tag, {}, [this.sandbox.id + "_CardModuleV2"]);
			},
		}
	};
});
