define("TnkTask1Page", [], function() {
	return {
		entitySchemaName: "TnkTask",
		attributes: {
			"TnkStatus": {
           	  	lookupListConfig: {
                // Дополнительные колонки.
                	columns: ["TnkEnd"]
				}
			},
			"TnkService": {
				"dataValueType": BPMSoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					"filters": [
						function() {
							debugger;
							let filterGroup = Ext.create("BPMSoft.FilterGroup");
							filterGroup.add("TnkSpecialist", BPMSoft.createColumnFilterWithParameter(
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
				"entitySchemaName": "TnkTaskFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "TnkTask"
				}
			},
			"TnkSchemae024e4ffDetail9c24b80c": {
				"schemaName": "TnkSchemae024e4ffDetail",
				"entitySchemaName": "TnkTask",
				"filter": {
					"detailColumn": "TnkParentTask",
					"masterColumn": "Id"
				}
			},
			"TnkSchemabac6ce84Detailb15abef7": {
				"schemaName": "TnkSchemabac6ce84Detail",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "TnkTask",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"TnkSpecialist": {
				"4d898dc4-ef4e-42f0-b47f-1025bfcc3a30": {
					"uId": "4d898dc4-ef4e-42f0-b47f-1025bfcc3a30",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
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
								"value": "90ddbf39-049d-4655-9e95-195e15389ade",
								"dataValueType": 10
							}
						}
					]
				},
				"b5538826-5bb4-4fbb-934b-ef5b49296667": {
					"uId": "b5538826-5bb4-4fbb-934b-ef5b49296667",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "919be583-4e47-4025-a52c-a96ff9715535",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "90ddbf39-049d-4655-9e95-195e15389ade",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkProject": {
				"53036666-5c32-4503-aadb-9073f0542e56": {
					"uId": "53036666-5c32-4503-aadb-9073f0542e56",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "919be583-4e47-4025-a52c-a96ff9715535",
								"dataValueType": 10
							}
						}
					]
				},
				"5a979e7d-ad7f-4711-9836-d591b1f21cc9": {
					"uId": "5a979e7d-ad7f-4711-9836-d591b1f21cc9",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkParentTask",
							"attributePath": "TnkProject"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkParentTask"
							}
						}
					]
				},
				"93cdb388-191e-4559-866e-309267688f0f": {
					"uId": "93cdb388-191e-4559-866e-309267688f0f",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkProject"
							}
						}
					]
				}
			},
			"TnkPlannedStartDate": {
				"8cffc61d-092d-481c-b10e-6104e36babf8": {
					"uId": "8cffc61d-092d-481c-b10e-6104e36babf8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "919be583-4e47-4025-a52c-a96ff9715535",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkPlannedDueDate": {
				"e93c2c85-cd1e-4c58-ae9c-d96372d9df76": {
					"uId": "e93c2c85-cd1e-4c58-ae9c-d96372d9df76",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "919be583-4e47-4025-a52c-a96ff9715535",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkFactStartDate": {
				"18297f2d-c94a-48af-8a2c-c3174dd0f6f6": {
					"uId": "18297f2d-c94a-48af-8a2c-c3174dd0f6f6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "90ddbf39-049d-4655-9e95-195e15389ade",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkFactDueDate": {
				"9f07aa29-e845-451e-8887-e5316ef44d25": {
					"uId": "9f07aa29-e845-451e-8887-e5316ef44d25",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "90ddbf39-049d-4655-9e95-195e15389ade",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkApproved": {
				"f3dbd7e0-59d4-4e19-8967-b363b0afb910": {
					"uId": "f3dbd7e0-59d4-4e19-8967-b363b0afb910",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkApproved"
						}
					},
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
								"value": "90ddbf39-049d-4655-9e95-195e15389ade",
								"dataValueType": 10
							}
						}
					]
				},
				"f30fdda9-6108-45de-90a3-edc6ca7a811a": {
					"uId": "f30fdda9-6108-45de-90a3-edc6ca7a811a",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkApproved"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"TnkAccount": {
				"bac67bb7-58b8-4cba-b8be-b1cad081d156": {
					"uId": "bac67bb7-58b8-4cba-b8be-b1cad081d156",
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
				}
			},
			"TnkCost": {
				"4d4f18a1-9245-4e27-934d-85dd98084ed5": {
					"uId": "4d4f18a1-9245-4e27-934d-85dd98084ed5",
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
								"attribute": "TnkProject"
							}
						}
					]
				},
				"9f005aff-41c0-4355-927a-ab974b54f967": {
					"uId": "9f005aff-41c0-4355-927a-ab974b54f967",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "919be583-4e47-4025-a52c-a96ff9715535",
								"dataValueType": 10
							}
						}
					]
				},
				"e857f4e7-baae-476a-bfa3-e8da732a5af1": {
					"uId": "e857f4e7-baae-476a-bfa3-e8da732a5af1",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkCost"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkCost"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 6
							}
						}
					]
				},
				"fcc3aaa0-bd60-40ed-9556-f5e9593b7fb2": {
					"uId": "fcc3aaa0-bd60-40ed-9556-f5e9593b7fb2",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkCost"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 5,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkCost"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 6
							}
						}
					]
				}
			},
			"TnkDecision": {
				"f787d040-3862-4633-b21b-82af5500cd00": {
					"uId": "f787d040-3862-4633-b21b-82af5500cd00",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
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
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				},
				"87fb5935-a8e8-402d-9c9b-c73cda1eeca3": {
					"uId": "87fb5935-a8e8-402d-9c9b-c73cda1eeca3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkRating": {
				"d0253601-7f08-4c49-897d-521c82e52f23": {
					"uId": "d0253601-7f08-4c49-897d-521c82e52f23",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
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
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				},
				"ae6e3fb1-c075-4abf-98fb-ac83da3b6d16": {
					"uId": "ae6e3fb1-c075-4abf-98fb-ac83da3b6d16",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
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
								"value": "0d993ff1-054d-40c9-9d88-6e709b08c665",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"TnkService": {
				"b30473c0-e9ab-4cb4-a0f0-278d74c0024d": {
					"uId": "b30473c0-e9ab-4cb4-a0f0-278d74c0024d",
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
								"attribute": "TnkProject"
							}
						}
					]
				},
				"2c9671bc-fd44-4da7-becb-d77e258e5242": {
					"uId": "2c9671bc-fd44-4da7-becb-d77e258e5242",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "TnkProject",
							"attributePath": "TnkService"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "TnkProject"
							}
						}
					]
				},
				"91e73b47-5aee-428e-8e39-c886fa9733f3": {
					"uId": "91e73b47-5aee-428e-8e39-c886fa9733f3",
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
			},
			subscribeSandboxEvents: function() {
				this.callParent(arguments);
				
				this.sandbox.subscribe("CancelEventClick", function() {
					this.onCancelEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("ApprovingEventClick", function() {
					this.onApprovingEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("ApprovedEventClick", function() {
					this.onApprovedEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("ProgressEventClick", function() {
					this.onProgressEventClick();
				}, this, [this.sandbox.id]);
				this.sandbox.subscribe("EndEventClick", function() {
					this.onEndEventClick();
				}, this, [this.sandbox.id]);
     		},
			
			isEventNotCanceled: function() {
				var status = this.get("TnkStatus");
				if (status)
				{
					let value = status.TnkEnd !=true;
					this.publishPropertyValueToSection("isEventNotCanceled", value);
					return value;
				}
				else {return false;}
			},
			
			isEventNew: function() {
				var status = this.get("TnkStatus");
				if (status)
				{
					let value = (status.value=='919be583-4e47-4025-a52c-a96ff9715535')
					this.publishPropertyValueToSection("isEventNew", value);
					return value;
				}
				else {return false;}
			},
			
			isEventApproved: function() {
				var status = this.get("TnkStatus");
				if (status)
				{
					let value = (status.value=='f14678dc-ab3e-4f9f-a26f-f9d4669bb8a8')
					this.publishPropertyValueToSection("isEventApproved", value);
					return value;
				}
				else {return false;}
			},
			
			isEventInProgress: function() {
				var status = this.get("TnkStatus");
				if (status)
				{
					let value = (status.value=='062d876e-cf4e-45d9-835e-2c989dad918a')
					this.publishPropertyValueToSection("isEventInProgress", value);
					return value;
				}
				else {return false;}
			},
			isEventEnd: function() {
				var status = this.get("TnkStatus");
				if (status)
				{
					let value = (status.value=='90ddbf39-049d-4655-9e95-195e15389ade')
					this.publishPropertyValueToSection("isEventEnd", value);
					return value;
				}
				else {return false;}
			},
			
			onCancelEventClick: function() {
				let cancelTask = confirm("Вы уверены, что хотите отменить задачу?");
				if (cancelTask)
				{
					var status = this.get("TnkStatus");
					status.value = '0648eb91-f2a4-481c-a525-a3b46d364d54';
					status.displayValue = 'Отменена';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
				
			},
			
			onApprovingEventClick: function() {
				let approvingTask = confirm("Перевести задачу в согласование?");
				if (approvingTask)
				{
					var status = this.get("TnkStatus");
					status.value = 'f14678dc-ab3e-4f9f-a26f-f9d4669bb8a8';
					status.displayValue = 'Согласование';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
				
			},
			
			onApprovedEventClick: function() {
				let approveTask = confirm("Перевести задачу в согласовано?");
				if (approveTask)
				{
					var status = this.get("TnkStatus");
					status.value = '062d876e-cf4e-45d9-835e-2c989dad918a';
					status.displayValue = 'Согласовано';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
				
			},
			
			onProgressEventClick: function() {
				let progressTask = confirm("Перевести задачу в работу?");
				if (progressTask)
				{
					var status = this.get("TnkStatus");
					status.value = '90ddbf39-049d-4655-9e95-195e15389ade';
					status.displayValue = 'В работе';
					this.set("TnkStatus", 
							{
						value: status.value,
						displayValue: status.displayValue,
					});
					this.save();
				}
			},
			
			onEndEventClick: function() {
				let endTask = confirm("Завершить задачу?");
				if (endTask)
				{
					var status = this.get("TnkStatus");
					status.value = '0d993ff1-054d-40c9-9d88-6e709b08c665';
					status.displayValue = 'Завершена';
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
				this.addColumnValidator("TnkPlannedDueDate", this.DueDateValidator);
				this.addColumnValidator("TnkPlannedStartDate", this.StartDateValidator);
				this.addColumnValidator("TnkCost", this.CostValidator);
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
			},
			
			DueDateValidator: function(value) {
				let invalidMessage = "";
				let now = new Date();
				const DueDate = value || this.get("TnkPlannedDueDate");
				const StartDate = this.get("TnkPlannedStartDate");
				const CreateDate = this.get("TnkCreatedOn");
				if (!Ext.isEmpty(DueDate) && !Ext.isEmpty(StartDate) && DueDate < StartDate) {
					invalidMessage = this.get("Resources.Strings.TnkInvalidDueDateMessage");
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			StartDateValidator: function(value) {
				let invalidMessage = "";
				let now = new Date();
				const CreateDate = this.get("TnkCreatedOn");
				const StartDate = value || this.get("TnkPlannedStartDate");
				if (StartDate < CreateDate)
				{
					invalidMessage = this.get("Resources.Strings.TnkCheckStartDateMessage");	
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
			"ApprovedEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			"ProgressEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			"EndEventClick": {
				mode: this.BPMSoft.MessageMode.PTP,
				direction: this.BPMSoft.MessageDirectionType.SUBSCRIBE
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
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
				"name": "ApprovedEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkApprovedEventButton"
					},
					"click": {
						"bindTo": "onApprovedEventClick"
					},
					"enabled": {
						"bindTo": "isEventApproved"
					},
					"visible": {
						"bindTo": "isEventApproved"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "InProgressEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkInProgressEventButton"
					},
					"click": {
						"bindTo": "onProgressEventClick"
					},
					"enabled": {
						"bindTo": "isEventInProgress"
					},
					"visible": {
						"bindTo": "isEventInProgress"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "InEndEventButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.TnkEndEventButton"
					},
					"click": {
						"bindTo": "onEndEventClick"
					},
					"enabled": {
						"bindTo": "isEventEnd"
					},
					"visible": {
						"bindTo": "isEventEnd"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TnkSpecialistf4b4e7e1-6a52-4012-9e19-670f6333ce71",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkSpecialist"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkStatusa5c68d5f-6e79-43b8-99d0-55705f300f73",
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
				"name": "TnkPlannedStartDate4008f5e7-7644-4fe4-b1d9-98e62b32cedd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkPlannedStartDate",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TnkPlannedDueDatec6510280-1748-4109-892c-96711050e459",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkPlannedDueDate",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TnkApprovede8e28577-d90a-4fcb-a9ea-460715690eae",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkApproved",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TnkParentTaskd1f0ae49-256a-4d17-811a-513da4757791",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "TnkParentTask",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Taba1c9ce7bTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba1c9ce7bTabLabelTabCaption"
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
				"name": "Taba1c9ce7bTabLabelGroup98d80c30",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba1c9ce7bTabLabelGroup98d80c30GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba1c9ce7bTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba1c9ce7bTabLabelGroup98d80c30",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkFactStartDateadbd4cb3-b77f-4a41-a84f-f789039e7a35",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkFactStartDate",
					"enabled": false
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkFactDueDatebebf4efa-6ce2-4ec6-a9d5-43f58054462b",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 0,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkFactDueDate",
					"enabled": false
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TnkCost649a95b8-f79f-4cb2-a944-50e4e82b21db",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkCost"
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TnkProjectb857da5e-17b2-4694-a60a-458bd2a678dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkProject",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TnkServicedf099e27-9d22-499b-83b7-567e9acbce1c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkService"
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TnkAccount89796844-df5a-4496-a335-1617bd184b94",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkAccount"
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TnkAuthor4601fb91-7e79-4892-ba3a-045a8a94f9ba",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkAuthor"
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TnkDescription5f6253d4-b3a1-4a0d-a3f1-f4ce41a17dba",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 3,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TnkPriority8436a9fa-a520-4e70-9cd3-66391f5cb83b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkPriority",
					"tip": {
						"content": {
							"bindTo": "Resources.Strings.TnkPriority8436a9faa5204e709cd366391f5cb83bTip"
						}
					},
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TnkRating6649e264-27ec-466a-a11f-65b231f0c44c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkRating"
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TnkDecision27e82ff5-9d7d-4faf-a58d-3030ed69ec57",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 6,
						"layoutName": "Taba1c9ce7bTabLabelGridLayout11c258f7"
					},
					"bindTo": "TnkDecision",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Taba1c9ce7bTabLabelGridLayout11c258f7",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tabc46afbadTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc46afbadTabLabelTabCaption"
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
				"name": "TnkSchemae024e4ffDetail9c24b80c",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabc46afbadTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TnkSchemabac6ce84Detailb15abef7",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabc46afbadTabLabel",
				"propertyName": "items",
				"index": 1
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
			}
		]/**SCHEMA_DIFF*/
	};
});
