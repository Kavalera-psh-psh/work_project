define("TnkProject1Page", [], function() {
	return {
		entitySchemaName: "TnkProject",
		attributes: {
			"TnkStatus": {
           	  	lookupListConfig: {
                // Дополнительные колонки.
                	columns: ["TnkEnd","Description"]
				},
			},
			
			"IsModelItemsEnabled": {
				"dataValueType": this.BPMSoft.DataValueType.BOOLEAN,
				"value": true
			},
			
			"visibilityBtnEnd": {
				"dataValueType": this.BPMSoft.DataValueType.BOOLEAN,
			},
			
			"TnkService": {
				"dataValueType": BPMSoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					"filters": [
						function() {
							debugger;
							let filterGroup = Ext.create("BPMSoft.FilterGroup");
							filterGroup.add("TnkOwner", BPMSoft.createColumnFilterWithParameter(
								BPMSoft.ComparisonType.EQUAL,
									"TnkUsersOfTheService",
									this.get("TnkContact")));
							return filterGroup;
						}
					]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "TnkProjectFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "TnkProject"
				}
			},
			"TnkSchema8201073cDetailc91a6178": {
				"schemaName": "TnkSchema8201073cDetail",
				"entitySchemaName": "TnkQuota",
				"filter": {
					"detailColumn": "TnkProject",
					"masterColumn": "Id"
				}
			},
			"TnkSchemabac6ce84Detail06e66190": {
				"schemaName": "TnkSchemabac6ce84Detail",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "TnkProject",
					"masterColumn": "Id"
				}
			},
			"TnkSchema7fa36b60Detail233134af": {
				"schemaName": "TnkSchema7fa36b60Detail",
				"entitySchemaName": "TnkTask",
				"filter": {
					"detailColumn": "TnkProject",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV2cdb1b418": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "TnkProjectVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "TnkProject"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"TnkManager": {
				"ee73ac2a-7f19-4a7c-bdfe-83457808aa0e": {
					"uId": "ee73ac2a-7f19-4a7c-bdfe-83457808aa0e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkAccount",
							"attributePath": "Owner"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkAccount"
							}
						}
					]
				}
			},
			"TnkDescription": {
				"5d16746d-f70c-4861-a6d7-ba3bd18b557f": {
					"uId": "5d16746d-f70c-4861-a6d7-ba3bd18b557f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkService"
							}
						}
					]
				},
				"0a90f6b9-bcd5-4171-9c69-b13be736b4b1": {
					"uId": "0a90f6b9-bcd5-4171-9c69-b13be736b4b1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkService"
							}
						}
					]
				}
			},
			"TnkOwner": {
				"7eb1e0d6-eb80-4720-abee-0ce719576cb8": {
					"uId": "7eb1e0d6-eb80-4720-abee-0ce719576cb8",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkService",
							"attributePath": "TnkOwner"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkService"
							}
						}
					]
				},
				"59d90ecd-7c85-43c5-b11e-4b5974514901": {
					"uId": "59d90ecd-7c85-43c5-b11e-4b5974514901",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkService"
							}
						}
					]
				}
			},
			"Tab4f470e7cTabLabel": {
				"71050037-6511-4750-9bbc-8a73e09186a9": {
					"uId": "71050037-6511-4750-9bbc-8a73e09186a9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "e919e06e-e233-47d0-b28d-0854d65ca6d2",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkService": {
				"1ada950c-46ff-474d-9ad7-95b80952020b": {
					"uId": "1ada950c-46ff-474d-9ad7-95b80952020b",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "TnkStatus",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "735b90f8-893f-4d87-8b48-55855aac306e",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			/* 
			* Переопределение базового метода, который срабатывает после окончания инициализации схемы объекта страницы записи. 
			*/
			onEntityInitialized: function() {
				/* Вызывается родительская реализация метода. */
				this.callParent(arguments);
				/* Код проставляется в поле, если создается новый элемент или копия существующего. */
				if (this.isAddMode() || this.isCopyMode()) {
					/* Вызов базового метода, который генерирует номер по ранее заданной маске. */
					this.getIncrementCode(function(response) {
						/* Сгенерированный номер присваивается в колонку [BpmCode]. */
						this.set("TnkNumber", response);
					});
				}
				//this.setCardLockoutStatus();
				this.onTypeChange();
				this.isEventEnd();
			},
			
			/*setCardLockoutStatus: function() {
				let status = this.get("TnkStatus");
				this.set("IsModelItemsEnabled", status.TnkEnd !=true);
				
			},*/
						
			onTypeChange: function() {
				var status = this.get("TnkStatus");
				if(status){
					if (status.TnkEnd !=true) {
						this.set("IsModelItemsEnabled", true);
					}
					else {
						this.set("IsModelItemsEnabled", false);
					}
				}
			},
			
			subscribeSandboxEvents: function() {
				this.callParent(arguments);
				
				this.sandbox.subscribe("CancelEventClick", function() {
					this.onCancelEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("ApprovingEventClick", function() {
					this.onApprovingEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("EndEventClick", function() {
					this.onEndEventClick();
				}, this, [this.sandbox.id]);
     		},
			
			isEventNotCanceled: function() {
				const status = this.get("TnkStatus");
				if (status)
				{
					let value = status.TnkEnd !=true;
					this.publishPropertyValueToSection("isEventNotCanceled", value);
					return value;
				}
				else {return false;}
			},
			
			isEventNew: function() {
				const status = this.get("TnkStatus");
				if (status)
				{
					let value = (status.value =='a9d99122-6fc7-44b2-9590-dfb1e7150190');
					this.publishPropertyValueToSection("isEventNew", value);
					return value;
				}
				else {return false;}
			},
			
			isEventEnd: function() {
				var projectId = this.get("Id");
				
				let esq = this.Ext.create("BPMSoft.EntitySchemaQuery", {
					rootSchemaName: "TnkTask"
				});
				
				esq.addColumn("TnkProject");
				esq.addColumn("TnkStatus");
				const FirstFilter = esq.createColumnFilterWithParameter(BPMSoft.ComparisonType.EQUAL, "TnkProject", projectId);
				esq.filters.addItem(FirstFilter);
				
				esq.getEntityCollection(function (result) {
					let endTask=0;
					if (result.success) {
						let results = result.collection.getItems();
						if(results.length==0){
							this.set("visibilityBtnEnd",true);
						}
						for (let i = 0; i < results.length; i++) {
							let entity = results[i];
							if (entity.values.TnkStatus.value!="0d993ff1-054d-40c9-9d88-6e709b08c665"){
								//return false;
								this.set("visibilityBtnEnd",false);
								break;
							}
							else{
								endTask+=1;
							}
						}
						if (endTask==results.length)
						{
							const status = this.get("TnkStatus");
								if (status)
								{
									debugger;
									let value = (status.value =='e919e06e-e233-47d0-b28d-0854d65ca6d2');
									this.publishPropertyValueToSection("isEventEnd", value);
									//return value;
									this.set("visibilityBtnEnd",value);
								}
								else {return false;}
						}
					}
				}, this);
			},
			
			onCancelEventClick: function() {
				let cancelProject = confirm(this.get("Resources.Strings.TnkQuestionCancelTask"));
				if (cancelProject)
				{
					let status = this.get("TnkStatus");
					status.value = '1405853e-c878-4a98-97e0-7cf8f7ddee9c';
					status.displayValue = 'Отменен';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
			},

			onApprovingEventClick: function() {
				let approveProject = confirm(this.get("Resources.Strings.TnkQuestionApproveProject"));
				if (approveProject)
				{
					let status = this.get("TnkStatus");
					status.value = 'd3fcdb35-d9fc-4bf7-b9d7-8988c0cd43d6';
					status.displayValue = 'Согласование';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
			},
			
			onEndEventClick: function() {
				let endProject = confirm(this.get("Resources.Strings.TnkQuestionEndProject"));
				if (endProject)
				{
					let status = this.get("TnkStatus");
					status.value = 'a6788267-a6d3-47a0-8c58-46fcd31c1f20';
					status.displayValue = 'Завершен';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
			},
			
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("TnkDueDate", this.DueDateValidator);
				this.addColumnValidator("TnkStartDate", this.StartDateValidator);
				this.addColumnValidator("TnkLaborcost", this.LaborcostValidator);
				this.addColumnValidator("TnkCost", this.CostValidator);
			},
			DueDateValidator: function(value) {
				let invalidMessage = "";
				let now = new Date();
				const DueDate = value || this.get("TnkDueDate");
				const StartDate = this.get("TnkStartDate");
				if (!Ext.isEmpty(DueDate) && !Ext.isEmpty(StartDate) && DueDate < StartDate) {
					invalidMessage = this.get("Resources.Strings.TnkInvalidDueDateMessage");
				}
				return {
					invalidMessage: invalidMessage
				};				
			},
			
			StartDateValidator: function(value) {
				let invalidMessage = "";
				const StartDate =  this.get("TnkStartDate");
				const CreateDate = this.get("TnkCreatedOn");
				if (StartDate < CreateDate)
				{
					invalidMessage = this.get("Resources.Strings.TnkCheckStartDateMessage");	
				}
				return {
					invalidMessage: invalidMessage
				};
				
			},
			LaborcostValidator: function(value) {
				let invalidMessage = "";
				const Laborcost = value || this.get("TnkLaborcost");
				if (!Ext.isEmpty(Laborcost) && Laborcost < 0) {
					invalidMessage = this.get("Resources.Strings.TnkLaborcostValueError");
				}
				return {
					invalidMessage: invalidMessage
				};				
			},
			CostValidator: function(value) {
				let invalidMessage = "";
				const Cost = value || this.get("TnkCost");
				if (!Ext.isEmpty(Cost) && Cost < 0) {
					invalidMessage = this.get("Resources.Strings.TnkCostValueError");
				}
				return {
					invalidMessage: invalidMessage
				};				
			}
			
		},
		
		messages: {
			"CancelEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			"ApprovingEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			"EndEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"generator": "DisableControlsGenerator.generatePartial"
				}
			},
			{
				"operation": "insert",
				"name": "CancelEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkCancelEventButton"
					},
					"click": {
						"bindTo": "onCancelEventClick"
					},
					"enabled": {
						"bindTo": "isEventNotCanceled"
					},
					"visible": {
						"bindTo": "isEventNotCanceled"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ApprovingEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkApprovingEventButton"
					},
					"click": {
						"bindTo": "onApprovingEventClick"
					},
					"enabled": {
						"bindTo": "isEventNew"
					},
					"visible": {
						"bindTo": "isEventNew"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "EndEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkEndEventButton"
					},
					"click": {
						"bindTo": "onEndEventClick"
					},
					"enabled": {
						"bindTo": "visibilityBtnEnd"
					},
					"visible": {
						"bindTo": "visibilityBtnEnd"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TnkName22cfb599-c625-4163-be93-1aa1f4a45cd2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkStatus",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkStatus",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TnkOwner5b1aa4c3-4b2a-4fc8-92b3-f100cb97a9a1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkOwner",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TnkAccount665964a2-29a2-4ed7-87e7-9a51ad63012a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkAccount"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TnkManager0dfc9c1a-f4e1-4759-8025-716371c0635e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkManager",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TnkService6163b747-b698-4189-87ce-b8357aaec746",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "TnkService"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkDescription3b443b70-e023-4821-97d1-a440277172b6",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4f470e7cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4f470e7cTabLabelTabCaption"
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
				"name": "TnkSchema8201073cDetailc91a6178",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4f470e7cTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkSchemabac6ce84Detail06e66190",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4f470e7cTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TnkSchema7fa36b60Detail233134af",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4f470e7cTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabfd910f2cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfd910f2cTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfd910f2cTabLabelGroup1c5129ae",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfd910f2cTabLabelGroup1c5129aeGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabfd910f2cTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabfd910f2cTabLabelGroup1c5129ae",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkStartDateae4f2af3-7e1d-4039-bb4c-47de904e2097",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkStartDate",
					"enabled": true
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkDueDate33646d86-7f97-4d04-9c4d-5981a98b2fd5",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 0,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkDueDate",
					"enabled": true
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TnkCostd39aaba0-d869-40b2-bf80-9c075749e938",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkCost"
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TnkFactStartDate943dd891-034d-4de9-b142-228cfe548606",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkFactStartDate",
					"enabled": false
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TnkFactDueDatebbf98838-d77b-4044-aa09-67b6c04132c3",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 1,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkFactDueDate",
					"enabled": false
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TnkFactCost110a2a8d-c997-4ddf-bfc6-761b21b6105d",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 1,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkFactCost",
					"enabled": false,
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.TnkFactCost110a2a8dc9974ddfbfc6761b21b6105dTip"
						}
					}
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TnkLaborcostaa02e479-79cd-4420-b41a-84a9121b7eaa",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabfd910f2cTabLabelGridLayout2c6e0291"
					},
					"bindTo": "TnkLaborcost",
					"enabled": true
				},
				"parentName": "Tabfd910f2cTabLabelGridLayout2c6e0291",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
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
				"operation": "insert",
				"name": "Tabd3fdeaccTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "VisaDetailV2cdb1b418",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabd3fdeaccTabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
