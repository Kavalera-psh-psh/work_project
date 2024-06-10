define("Tnkc3806fe3Page", [], function() {
	return {
		entitySchemaName: "TnkQuota",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("TnkDueDate", this.DueDateValidator);
				this.addColumnValidator("TnkValue", this.ValueQuotaValidator);
				/*this.addColumnValidator("TnkStartDate", this.StartDateValidator);*/
			},
			ValueQuotaValidator: function(value) {
				let invalidMessage = "";
				const valueQuota = value || this.get("TnkValue");
				if (!Ext.isEmpty(valueQuota) && (valueQuota < 0 || valueQuota>100)) {
					invalidMessage = this.get("Resources.Strings.TnkQuotaErrorMessage");
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			DueDateValidator: function(value) {
				let invalidMessage = "";
				let now = new Date();
				const DueDate = value || this.get("TnkDueDate");
				const StartDate = this.get("TnkStartDate");
				const CreateDate = this.get("TnkCreatedOn");
				if (!Ext.isEmpty(DueDate) && !Ext.isEmpty(StartDate) && DueDate < StartDate/* && CreateDate == now*/) {
					invalidMessage = this.get("Resources.Strings.TnkInvalidDueDateMessage");
				}
				/*if (DueDate < now && CreateDate == now)
				{
					invalidMessage = this.get("Resources.Strings.TnkCheckDueDateMessage");	
				}*/
				return {
					invalidMessage: invalidMessage
				};
			}
			/*StartDateValidator: function(value) {
				let invalidMessage = "";
				let now = new Date();
				const CreateDate = this.get("TnkCreatedOn");
				const StartDate = value || this.get("TnkStartDate");
				if (StartDate < now && CreateDate == now)
				{
					invalidMessage = this.get("Resources.Strings.TnkCheckStartDateMessage");	
				} 
				return {
					invalidMessage: invalidMessage
				};
			}*/
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP87aa795f-1bcc-45b9-aa57-b84f9034bdca",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkSpecialist",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP44538371-aa41-4cf9-a6a0-81a67d663888",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkProject",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN246d3768-a92e-431d-85c9-6449f41ad7a5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkApproved",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER91b60299-be2c-452c-aa7b-a71d7a6bedef",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkValue",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TnkStartDateb3e54532-3612-42b0-b07e-0dcb2709e580",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "TnkStartDate",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkDueDate020daea3-0a96-4d7b-b1ab-178ac1b558a2",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "TnkDueDate",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING3800595d-2839-48ec-943b-788fee58a16e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "TnkDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
