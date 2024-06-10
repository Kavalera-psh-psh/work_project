define("TnkUsersOfTheService1Page", [], function() {
	return {
		entitySchemaName: "TnkUsersOfTheService",
		attributes: {
			"checkingEsq": {
				"dataValueType": this.BPMSoft.DataValueType.BOOLEAN,
			},
			"TnkContact": {
				"isRequired": true,
				dependencies: [{
					// Зависит от колонки [TnkContact].
					columns:["TnkContact"],
					// Имя метода-обработчика изменения колонки [TnkContact].
					// Метод checkEsq() определен в свойстве methods
					methodName: "checkEsq"
				}]
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "TnkUsersOfTheServiceFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "TnkUsersOfTheService"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			asyncValidate: function(callback, scope) {
				this.callParent([function() {
					let contact = this.get("TnkContact");
					let service = this.get("TnkService");
					if (contact)
					{
						let esq = this.Ext.create("BPMSoft.EntitySchemaQuery", {
							rootSchemaName: "TnkUsersOfTheService"
						});
						
						esq.addColumn("TnkContact");
						esq.addColumn("TnkService");
						
						const countryFirstFilter = esq.createColumnFilterWithParameter(
							BPMSoft.ComparisonType.EQUAL, "TnkContact", contact.value);
						const countrySecondFilter = esq.createColumnFilterWithParameter(
							BPMSoft.ComparisonType.EQUAL, "TnkService", service.value);
						esq.filters.logicalOperation = BPMSoft.LogicalOperatorType.AND;
						esq.filters.addItem(countryFirstFilter);
						esq.filters.addItem(countrySecondFilter);
						
						esq.getEntityCollection(function (result) {
							let validationResult = {
								success: true
							};
							if (result.collection.getItems().length > 0) {
								validationResult.message = this.get("Resources.Strings.TnkInvalidContactMessage");
								validationResult.success = false;
							}
							callback.call(scope || this, validationResult);
						}, this);
					}
				}, this]);
			},
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "TnkContact58bd2fa7-3e18-4e76-a039-7d14f6431445",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkContact"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkService3750921e-c8ef-4604-b334-7930adb9bbe9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkService",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "TnkNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
