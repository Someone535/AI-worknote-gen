module.exports = {
	"label": "Select a Section",
	"input": false,
	"nodes": {
		"symptoms": {
			"label": "Symptoms",
			"input": false,
			"nodes": {
				"modepadcontroller": {
					"label": "Mode Pad & Controller",
					"input": false,
					"nodes": {
						"notclosing": {
							"label": "Doors Not Closing",
							"input": false,
							"leafcode": "S_NOTCLOSING"
						},
						"notautomatic": {
							"label": "Doors Not Triggering Automatically",
							"input": false,
							"leafcode": "S_NOTAUTOMATIC"
						},
						"randomopening": {
							"label": "Doors Randomly Openinging",
							"input": false,
							"leafcode": "S_RANDOMOPEN"
						},
						"modenotworking": {
							"label": "Mode Not Working Properly",
							"input": true,
							"input_message": "Which mode?",
							"leafcode": "S_MODENOTWORKING"
						},
						"alerts": {
							"label": "Notifications/Alerts",
							"input": false,
							"nodes": {
								"batteryfail": {
									"label": "Keydad Displays Battery Fail",
									"input": false,
									"leafcode": "S_BATTERYFAILDISPLAY"
								},
								"beeping": {
									"label": "Keypad Beeping",
									"input": false,
									"leafcode": "S_KEYPADBEEPING"
								},
								"powerfail": {
									"label": "Keypad Displays AC Power Fail",
									"input": false,
									"leafcode": "S_POWERFAILDISPLAY"
								},
								"safemode": {
									"label": "Keypad Displays Safe Mode",
									"input": true,
									"input_message": "When?",
									"leafcode": "S_SAFEMODEDISPLAY"
								}
							}
						},
						"settings": {
							"label": "Speeds/Settings",
							"input": false,
							"nodes": {
								"dwelllong": {
									"label": "Dwell Too Long",
									"input": false,
									"leafcode": "S_LONGDWELL"
								},
								"dwellshort": {
									"label": "Dwell Too Short",
									"input": false,
									"leafcode": "S_SHORTDWELL"
								},
								"fast": {
									"label": "Too Fast",
									"input": false,
									"nodes": {
										"close": {
											"label": "When Closing",
											"input": false,
											"leafcode": "S_CLOSINGFAST"
										},
										"open": {
											"label": "When Opening",
											"input": false,
											"leafcode": "S_OPENINGFAST"
										}
									}
								},
								"slow": {
									"label": "Too Slow",
									"input": false,
									"nodes": {
										"close": {
											"label": "When Closing",
											"input": false,
											"leafcode": "S_CLOSINGSLOW"
										},
										"open": {
											"label": "When Opening",
											"input": false,
											"leafcode": "S_OPENINGSLOW"
										}
									}
								}
							}
						},
						"stuckinmode": {
							"label": "Stuck in mode",
							"input": true,
							"input_message": "Which mode?",
							"leafcode": "S_STUCKINMODE"
						}
					}
				},
				"sensorswitch": {
					"label": "Sensors & Switches",
					"input": false,
					"nodes": {
						"extactuation": {
							"label": "Exterior Actuation Sensor",
							"value": "Exterior Actuation",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_SENSOR_CLICKING"
								},
								"lightflashing": {
									"label": "Light Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTFLASHING"
								},
								"lightnotflashing": {
									"label": "Light Not Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTNOTFLASHING"
								},
								"missingcover": {
									"label": "Missing Cover",
									"input": false,
									"leafcode": "S_SENSOR_MISSINGCOVER"
								},
								"notdetecting": {
									"label": "Not Detecting Enough",
									"input": false,
									"leafcode": "S_SENSOR_NOTDETECTING"
								},
								"notworking": {
									"label": "Not Working",
									"input": true,
									"input_message": "When is this switch not working?",
									"leafcode": "S_SENSOR_NOTWORKING"
								},
								"toosensitive": {
									"label": "Too Sensitive",
									"input": false,
									"leafcode": "S_SENSOR_TOOSENSITIVE"
								}
							}
						},
						"extsafety": {
							"label": "Exterior Safety Sensor",
							"value": "Exterior Safety",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_SENSOR_CLICKING"
								},
								"lightflashing": {
									"label": "Light Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTFLASHING"
								},
								"lightnotflashing": {
									"label": "Light Not Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTNOTFLASHING"
								},
								"missingcover": {
									"label": "Missing Cover",
									"input": false,
									"leafcode": "S_SENSOR_MISSINGCOVER"
								},
								"notdetecting": {
									"label": "Not Detecting Enough",
									"input": false,
									"leafcode": "S_SENSOR_NOTDETECTING"
								},
								"notworking": {
									"label": "Not Working",
									"input": true,
									"input_message": "When is this switch not working?",
									"leafcode": "S_SENSOR_NOTWORKING"
								},
								"toosensitive": {
									"label": "Too Sensitive",
									"input": false,
									"leafcode": "S_SENSOR_TOOSENSITIVE"
								}
							}
						},
						"intactuation": {
							"label": "Interior Actuation Sensor",
							"value": "Interior Actuation",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_SENSOR_CLICKING"
								},
								"lightflashing": {
									"label": "Light Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTFLASHING"
								},
								"lightnotflashing": {
									"label": "Light Not Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTNOTFLASHING"
								},
								"missingcover": {
									"label": "Missing Cover",
									"input": false,
									"leafcode": "S_SENSOR_MISSINGCOVER"
								},
								"notdetecting": {
									"label": "Not Detecting Enough",
									"input": false,
									"leafcode": "S_SENSOR_NOTDETECTING"
								},
								"notworking": {
									"label": "Not Working",
									"input": true,
									"input_message": "When is this switch not working?",
									"leafcode": "S_SENSOR_NOTWORKING"
								},
								"toosensitive": {
									"label": "Too Sensitive",
									"input": false,
									"leafcode": "S_SENSOR_TOOSENSITIVE"
								}
							}
						},
						"intsafety": {
							"label": "Interior Safety Sensor",
							"value": "Interior Safety",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_SENSOR_CLICKING"
								},
								"lightflashing": {
									"label": "Light Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTFLASHING"
								},
								"lightnotflashing": {
									"label": "Light Not Flashing",
									"input": false,
									"leafcode": "S_SENSOR_LIGHTNOTFLASHING"
								},
								"missingcover": {
									"label": "Missing Cover",
									"input": false,
									"leafcode": "S_SENSOR_MISSINGCOVER"
								},
								"notdetecting": {
									"label": "Not Detecting Enough",
									"input": false,
									"leafcode": "S_SENSOR_NOTDETECTING"
								},
								"notworking": {
									"label": "Not Working",
									"input": true,
									"input_message": "When is this switch not working?",
									"leafcode": "S_SENSOR_NOTWORKING"
								},
								"toosensitive": {
									"label": "Too Sensitive",
									"input": false,
									"leafcode": "S_SENSOR_TOOSENSITIVE"
								}
							}
						},
						"mode": {
							"label": "Mode Switch",
							"value": "Mode Switch",
							"input": false,
							"nodes": {
								"beeping": {
									"label": "Beeping",
									"input": true,
									"input_message": "When does it beep?",
									"leafcode": "S_SWITCH_BEEPING"
								},
								"notworking": {
									"label": "Not Working Correctly",
									"input": false,
									"leafcode": "S_SWITCH_NOTWORKING"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_SWITCH_DAMAGED"
								}
							}
						},
						"paniclock": {
							"label": "Panic Lock Switch",
							"value": "Panic Lock",
							"input": false,
							"nodes": {
								"beeping": {
									"label": "Beeping",
									"input": true,
									"input_message": "When does it beep?",
									"leafcode": "S_SWITCH_BEEPING"
								},
								"notworking": {
									"label": "Not Working Correctly",
									"input": false,
									"leafcode": "S_SWITCH_NOTWORKING"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_SWITCH_DAMAGED"
								}
							}
						},
						"pushbutton": {
							"label": "Push Button",
							"value": "Push Button",
							"input": false,
							"nodes": {
								"beeping": {
									"label": "Beeping",
									"input": true,
									"input_message": "When does it beep?",
									"leafcode": "S_SWITCH_BEEPING"
								},
								"notworking": {
									"label": "Not Working Correctly",
									"input": false,
									"leafcode": "S_SWITCH_NOTWORKING"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_SWITCH_DAMAGED"
								}
							}
						},
						"remotebuttons": {
							"label": "Remote Buttons",
							"value": "Remote Button(s)",
							"input": false,
							"nodes": {
								"beeping": {
									"label": "Beeping",
									"input": true,
									"input_message": "When does it beep?",
									"leafcode": "S_SWITCH_BEEPING"
								},
								"notworking": {
									"label": "Not Working Correctly",
									"input": false,
									"leafcode": "S_SWITCH_NOTWORKING"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_SWITCH_DAMAGED"
								}
							}
						},
						"toilet": {
							"label": "Toliet Switch",
							"value": "Privacy Switch",
							"input": false,
							"nodes": {
								"beeping": {
									"label": "Beeping",
									"input": true,
									"input_message": "When does it beep?",
									"leafcode": "S_SWITCH_BEEPING"
								},
								"notworking": {
									"label": "Not Working Correctly",
									"input": false,
									"leafcode": "S_SWITCH_NOTWORKING"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_SWITCH_DAMAGED"
								}
							}
						}
					}
				},
				"mechanical": {
					"label": "Structural/Mechanical",
					"input": false,
					"nodes": {
						"beltchain": {
							"label": "Belt/Chain",
							"value": "Belt/Chain",
							"input": false,
							"nodes": {
								"bang": {
									"label": "Banging",
									"input": true,
									"input_message": "When does banging occur?",
									"leafcode": "S_DOOR_BANG"
								},
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"jammed": {
									"label": "Jammed",
									"input": false,
									"leafcode": "S_DOOR_JAMMED"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						},
						"bothpanels": {
							"label": "Both Door Panels",
							"value": "Both Door Panels",
							"input": false,
							"nodes": {
								"bang": {
									"label": "Banging",
									"input": true,
									"input_message": "When does banging occur?",
									"leafcode": "S_DOOR_BANG"
								},
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"jammed": {
									"label": "Jammed",
									"input": false,
									"leafcode": "S_DOOR_JAMMED"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						},
						"outoftrack": {
							"label": "Door Panel Out of Track",
							"input": false,
							"leafcode": "S_DOORPANELOFFTRACK"
						},
						"floorguide": {
							"label": "Floor Guide",
							"value": "Floor Guide",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"jammed": {
									"label": "Jammed",
									"input": false,
									"leafcode": "S_DOOR_JAMMED"
								},
								"loose": {
									"label": "Loose",
									"input": false,
									"leafcode": "S_DOOR_LOOSE"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						},
						"gap": {
							"label": "Gap Between Door Panels",
							"input": false,
							"leafcode": "S_GAPBETWEEN"
						},
						"lhspanel": {
							"label": "LHS Door Panel",
							"value": "LHS Door Panel",
							"input": false,
							"nodes": {
								"bang": {
									"label": "Banging",
									"input": true,
									"input_message": "When does banging occur?",
									"leafcode": "S_DOOR_BANG"
								},
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"jammed": {
									"label": "Jammed",
									"input": false,
									"leafcode": "S_DOOR_JAMMED"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						},
						"notopenfully": {
							"label": "Not Opening Fully",
							"input": false,
							"leafcode": "S_NOTOPENFULLY"
						},
						"operator": {
							"label": "Operator",
							"value": "Operator",
							"input": false,
							"nodes": {
								"bang": {
									"label": "Banging",
									"input": true,
									"input_message": "When does banging occur?",
									"leafcode": "S_DOOR_BANG"
								},
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								}
							}
						},
						"rhspanel": {
							"label": "RHS Door Panel",
							"value": "RHS Door Panel",
							"input": false,
							"nodes": {
								"bang": {
									"label": "Banging",
									"input": true,
									"input_message": "When does banging occur?",
									"leafcode": "S_DOOR_BANG"
								},
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"jammed": {
									"label": "Jammed",
									"input": false,
									"leafcode": "S_DOOR_JAMMED"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						},
						"rough": {
							"label": "Rough Travel",
							"input": false,
							"nodes": {
								"both": {
									"label": "Both Directions",
									"input": false,
									"leafcode": "S_ROUGHBOTHDIRECTIONS"
								},
								"close": {
									"label": "Close Direction",
									"input": false,
									"leafcode": "S_ROUGHCLOSE"
								},
								"open": {
									"label": "Open Direction",
									"input": false,
									"leafcode": "S_ROUGHOPEN"
								}
							}
						},
						"shopfront": {
							"label": "Shopfront/Frame",
							"value": "Shopfront/Frame",
							"input": false,
							"nodes": {
								"clicking": {
									"label": "Clicking",
									"input": false,
									"leafcode": "S_DOOR_CLICKING"
								},
								"misaligned": {
									"label": "Misaligned",
									"input": false,
									"leafcode": "S_DOOR_MISALIGNED"
								},
								"rubbing": {
									"label": "Rubbing/Scraping",
									"input": true,
									"input_message": "Where does rubbing happen?",
									"leafcode": "S_DOOR_RUBBING"
								},
								"shuddering": {
									"label": "Shuddering",
									"input": false,
									"leafcode": "S_DOOR_SHUDDERING"
								},
								"squeak": {
									"label": "Squeaking or Squealing",
									"input": false,
									"leafcode": "S_DOOR_SQUEAK"
								},
								"damaged": {
									"label": "Visibly Damaged",
									"input": false,
									"leafcode": "S_DOOR_DAMAGED"
								}
							}
						}
					}
				}
			}
		},
		"faults": {
			"label": "Faults",
			"input": false,
			"nodes": {
				"cables": {
					"label": "Cables",
					"input": false,
					"nodes": {
						"battery": {
							"label": "Battery Cables",
							"value": "Battery",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_JAMMED"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						},
						"mode": {
							"label": "Mode Pad Cables",
							"value": "Mode Pad",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						},
						"motor": {
							"label": "Motor Cables",
							"value": "Motor",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_JAMMED"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						},
						"power": {
							"label": "Power Cables",
							"value": "Power",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_JAMMED"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						},
						"sensor": {
							"label": "Sensor Cables",
							"value": "Sensor",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_JAMMED"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						},
						"switch": {
							"label": "Switch Cables",
							"value": "Switch",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_CABLE_DAMAGED"
								},
								"jammed": {
									"label": "Jammed in Running Gear",
									"input": false,
									"leafcode": "F_CABLE_JAMMED"
								},
								"loose": {
									"label": "Loose in Terminal",
									"input": false,
									"leafcode": "F_CABLE_LOOSE"
								},
								"unsecured": {
									"label": "Unsecured",
									"input": false,
									"leafcode": "F_CABLE_UNSECURED"
								},
								"wiring": {
									"label": "Wired Incorrectly",
									"input": false,
									"leafcode": "F_CABLE_WIREDWRONG"
								}
							}
						}
					}
				},
				"fixings": {
					"label": "Fixing / Floor Guides",
					"input": false,
					"nodes": {
						"doordamaged": {
							"label": "Door Panel Damaged or Bent",
							"input": false,
							"leafcode": "F_DOOR_DAMAGED"
						},
						"doorloose": {
							"label": "Door Panel Fixings Loose",
							"input": false,
							"leafcode": "F_DOOR_FIXINGS_LOOSE"
						},
						"damaged": {
							"label": "Floor Guide Damaged / Broken",
							"input": false,
							"leafcode": "F_FLOORGUIDE_DAMAGED"
						},
						"loose": {
							"label": "Floor Guide Fixings Loose",
							"input": false,
							"leafcode": "F_FLOORGUIDE_FIXINGSLOOSE"
						},
						"misaligned": {
							"label": "Floor Guide Misaligned",
							"input": false,
							"nodes": {
								"loose": {
									"label": "Door Too Loose",
									"input": false,
									"leafcode": "F_FLOORGUIDE_TOOLOOSE"
								},
								"tight": {
									"label": "Door Too Tight",
									"input": false,
									"leafcode": "F_FLOORGUIDE_TOOTIGHT"
								}
							}
						},
						"fixings": {
							"label": "Operator Improperly Fixed to Wall",
							"input": false,
							"leafcode": "F_OPERATOR_BADFIXINGS"
						}
					}
				},
				"switches": {
					"label": "Keypad / Switches",
					"input": false,
					"nodes": {
						"modepad": {
							"label": "Digital Mode Pad",
							"value": "Digital Mode Pad",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"entryswitch": {
							"label": "Entry Key Switch",
							"value": "Entry Key Switch",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"modeswitch": {
							"label": "Mode Switch",
							"value": "Mode Switch",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"other": {
							"label": "Other",
							"input": true,
							"input_message": "Which Switch?",
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"paniclock": {
							"label": "Panic Lock Switch",
							"value": "Panic Lock",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"pushbutton": {
							"label": "Push Button",
							"value": "Push Button",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						},
						"toilet": {
							"label": "Toilet Switch",
							"value": "Privacy Switch",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Corroded or Damaged",
									"input": false,
									"leafcode": "F_SWITCH_DAMAGED"
								},
								"faulty": {
									"label": "Faulty / Failed",
									"input": false,
									"leafcode": "F_SWITCH_FAULTY"
								},
								"wiring": {
									"label": "Incorrectly Wired",
									"input": false,
									"leafcode": "F_SWITCH_WRONGWIRING"
								},
								"loose": {
									"label": "Loose Fixings",
									"input": false,
									"leafcode": "F_SWITCH_LOOSEFIXINGS"
								}
							}
						}
					}
				},
				"main": {
					"label": "Main Components",
					"input": false,
					"nodes": {
						"controller": {
							"label": "Controller",
							"value": "Control Board",
							"input": false,
							"nodes": {
								"Damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"failed": {
									"label": "Failed",
									"input": false,
									"leafcode": "F_COMPONENT_FAILED"
								},
								"faulty": {
									"label": "Faulty",
									"input": false,
									"leafcode": "F_COMPONENT_FAULTY"
								}
							}
						},
						"drivesystem": {
							"label": "Drive Belt/Chain System",
							"value": "Drive Belt/Chain",
							"input": false,
							"nodes": {
								"broken": {
									"label": "Belt/Chain Broken",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"lube": {
									"label": "Belt/Chain Improperly Lubricated",
									"input": false,
									"leafcode": "F_COMPONENT_LUBE"
								},
								"misaligned": {
									"label": "Belt/Chain Misaligned",
									"input": false,
									"leafcode": "F_COMPONENT_MISALIGNED"
								},
								"seized": {
									"label": "Belt/Chain Seized",
									"input": false,
									"leafcode": "F_COMPONENT_SEIZED"
								},
								"worn": {
									"label": "Belt/Chain Worn/Wearing",
									"input": false,
									"leafcode": "F_COMPONENT_WORN"
								},
								"endpulley": {
									"label": "End Pulley Damaged/Worn",
									"input": false,
									"leafcode": "F_COMPONENT_ENDPULLEYWORN"
								}
							}
						},
						"lock": {
							"label": "Electric Lock",
							"value": "Electric Lock",
							"input": false,
							"nodes": {
								"Damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"failed": {
									"label": "Failed",
									"input": false,
									"leafcode": "F_COMPONENT_FAILED"
								},
								"faulty": {
									"label": "Faulty",
									"input": false,
									"leafcode": "F_COMPONENT_FAULTY"
								}
							}
						},
						"battery": {
							"label": "Flat Batteries",
							"input": false,
							"leafcode": "F_FLATBATTERY"
						},
						"motor": {
							"label": "Motor",
							"value": "Motor",
							"input": false,
							"nodes": {
								"encoder": {
									"label": "Encoder/Counter Failed",
									"input": false,
									"leafcode": "F_COMPONENT_ENCODERFAILED"
								},
								"Damaged": {
									"label": "Motor Damaged",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"failed": {
									"label": "Motor Failed",
									"input": false,
									"leafcode": "F_COMPONENT_FAILED"
								},
								"faulty": {
									"label": "Motor Faulty",
									"input": false,
									"leafcode": "F_COMPONENT_FAULTY"
								},
								"seized": {
									"label": "Motor Seized",
									"input": false,
									"leafcode": "F_COMPONENT_SEIZED"
								}
							}
						},
						"other": {
							"label": "Other",
							"input": true,
							"input_message": "Which component?",
							"nodes": {
								"Damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"failed": {
									"label": "Failed",
									"input": false,
									"leafcode": "F_COMPONENT_FAILED"
								},
								"faulty": {
									"label": "Faulty",
									"input": false,
									"leafcode": "F_COMPONENT_FAULTY"
								}
							}
						},
						"transformer": {
							"label": "Transformer",
							"value": "Transformer",
							"input": false,
							"nodes": {
								"Damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_COMPONENT_DAMAGED"
								},
								"failed": {
									"label": "Failed",
									"input": false,
									"leafcode": "F_COMPONENT_FAILED"
								},
								"faulty": {
									"label": "Faulty",
									"input": false,
									"leafcode": "F_COMPONENT_FAULTY"
								}
							}
						}
					}
				},
				"safety": {
					"label": "Safety / Hazards",
					"input": false,
					"nodes": {
						"body": {
							"label": "Body Trap",
							"input": true,
							"input_message": "Where?",
							"leafcode": "F_BODYTRAP"
						},
						"electrical": {
							"label": "Electrical Hazard",
							"input": true,
							"input_message": "Where?",
							"leafcode": "F_ELECTRICALHAZARD"
						},
						"finger": {
							"label": "Finger Trap",
							"input": true,
							"input_message": "Where?",
							"leafcode": "F_FINGERTRAP"
						},
						"head": {
							"label": "Head Trap",
							"input": true,
							"input_message": "Where?",
							"leafcode": "F_HEADTRAP"
						}
					}
				},
				"sensors": {
					"label": "Sensors",
					"input": false,
					"nodes": {
						"waterdamage": {
							"label": "Corroded / Water Damage",
							"input": false,
							"leafcode": "F_WATERDAMAGEDSENSORS"
						},
						"fixings": {
							"label": "Improper Fixings",
							"input": false,
							"leafcode": "F_BADFIXINGSFORSENSORS"
						},
						"wrongposition": {
							"label": "Incorrect Positioning",
							"input": false,
							"leafcode": "F_WRONGPOSITIONOFSENSORS"
						},
						"wrongsettings": {
							"label": "Incorrect Settings",
							"input": false,
							"leafcode": "F_WRONGSETTINGSOFSENSORS"
						},
						"wrongnumber": {
							"label": "Wrong Number of Sensors",
							"input": false,
							"leafcode": "F_WRONGNUMBEROFSENSORS"
						},
						"wrongtype": {
							"label": "Wrong Type of Sensor",
							"input": false,
							"leafcode": "F_WRONGTYPEOFSENSORS"
						}
					}
				},
				"frame": {
					"label": "Shopfront / Fascia",
					"input": false,
					"nodes": {
						"cowl": {
							"label": "Cowl Bent / Bowed",
							"input": false,
							"leafcode": "F_COWL_BENT"
						},
						"frame": {
							"label": "Door Frame/Shopfront Damaged/Misaligned",
							"input": false,
							"leafcode": "F_FRAME_DAMAGED"
						},
						"pelmetdirty": {
							"label": "Pelmet Dirty",
							"input": false,
							"leafcode": "F_PELMET_DIRTY"
						},
						"pelmetscratched": {
							"label": "Pelmet Scratched",
							"input": false,
							"leafcode": "F_PELMET_SCRATCHED"
						}
					}
				},
				"swingdoor": {
					"label": "Swing Door",
					"input": false,
					"nodes": {
						"armfixings": {
							"label": "Incorrect Swing Arm Fixings",
							"input": false,
							"leafcode": "F_SWINGARM_BADFIXINGS"
						},
						"armdamaged": {
							"label": "Swing Arm Damaged",
							"input": false,
							"leafcode": "F_SWINGARMDAMAGED"
						},
						"armloose": {
							"label": "Swing Arm Loose",
							"input": false,
							"leafcode": "F_SWINGARMLOOSE"
						},
						"armtight": {
							"label": "Swing Arm Tight",
							"input": false,
							"leafcode": "F_SWINGARMTIGHT"
						}
					}
				},
				"wheels": {
					"label": "Wheels / Hanger Bar",
					"input": false,
					"nodes": {
						"bogie": {
							"label": "Bogie(s)",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_BOGIE_DAMAGED"
								},
								"seized": {
									"label": "Seized",
									"input": false,
									"leafcode": "F_BOGIE_SEIZED"
								},
								"worn": {
									"label": "Worn",
									"input": false,
									"leafcode": "F_BOGIE_WORN"
								}
							}
						},
						"barbent": {
							"label": "Hanger Bar Bent",
							"input": false,
							"leafcode": "F_HANGERBAR_BENT"
						},
						"barsize": {
							"label": "Hanger Bar Incorrect Size",
							"input": false,
							"leafcode": "F_HANGERBAR_WRONGSIZE"
						},
						"trackfixings": {
							"label": "Improper Fixings in Track",
							"input": false,
							"leafcode": "F_TRACK_FIXINGS"
						},
						"trackdamaged": {
							"label": "Track Damaged",
							"input": false,
							"leafcode": "F_TRACK_DAMAGED"
						},
						"wheel": {
							"label": "Wheels(s)",
							"input": false,
							"nodes": {
								"damaged": {
									"label": "Damaged",
									"input": false,
									"leafcode": "F_WHEEL_DAMAGED"
								},
								"seized": {
									"label": "Seized",
									"input": false,
									"leafcode": "F_WHEEL_SEIZED"
								},
								"worn": {
									"label": "Worn",
									"input": false,
									"leafcode": "F_WHEEL_WORN"
								}
							}
						}
					}
				}
			}
		},
		"causes": {
			"label": "Possible Root Causes",
			"input": false,
			"nodes": {
				"theydidit": {
					"label": "They Did It",
					"input": false,
					"nodes": {
						"thirdpartyfault": {
							"label": "Fault in Third Party System",
							"input": true,
							"input_message": "Which system?",
							"leafcode": "C_THIRDPARTY_FAULT"
						},
						"incorrectusage": {
							"label": "Incorrect Usage",
							"input": true,
							"input_message": "How was the door/entry incorrectly used?",
							"leafcode": "C_INCORRECTUSAGE"
						},
						"incorrectwiring": {
							"label": "Incorrect Wiring by Others",
							"input": true,
							"input_message": "Who?",
							"leafcode": "C_THIRDPARTY_INCORRECTWIRING"
						},
						"thirdpartyoversight": {
							"label": "Oversight by Third Party",
							"input": true,
							"input_message": "Who?",
							"nodes": {
								"reason": {
									"label": "What Did/Didn't They Do?",
									"input": true,
									"input_message": "What did they overlook?",
									"leafcode": "C_THIRDPARTY_OVERSIGHT"
								}
							}
						}
					}
				},
				"changedusecase": {
					"label": "Use-case Has Changed",
					"input": true,
					"input_message": "In what way has it changed?",
					"leafcode": "C_DIFFERENTUSECASE"
				},
				"wedidit": {
					"label": "We Did It",
					"input": false,
					"nodes": {
						"inappropriateconfig": {
							"label": "Inappropriate Configuration",
							"input": true,
							"input_message": "How was it inappropriate?",
							"leafcode": "C_INAPPROPRIATECONFIG"
						},
						"incorrectpart": {
							"label": "Incorrect Part was Used",
							"input": false,
							"leafcode": "C_INCORRECTPART"
						},
						"faultypart": {
							"label": "Part Was Manufactured Faulty",
							"input": false,
							"leafcode": "C_BADMANUFACTURE"
						},
						"prevtechmistake": {
							"label": "Previous Technician (Mistake)",
							"input": false,
							"leafcode": "C_PREVTECH_MISTAKE"
						},
						"prevtechoversight": {
							"label": "Previous Technician (Oversight)",
							"input": false,
							"leafcode": "C_PREVTECH_OVERSIGHT"
						}
					}
				},
				"weartearoldage": {
					"label": "Wear/Tear (Old Age)",
					"input": false,
					"leafcode": "C_OLDAGE"
				},
				"weartearoveruse": {
					"label": "Wear/Tear (Over-Use)",
					"input": false,
					"leafcode": "C_OVERUSE"
				}
			}
		},
		"actions": {
			"label": "Actions",
			"input": false,
			"nodes": {
				"actionstaken": {
					"label": "Actions Taken Onsite",
					"input": false,
					"nodes": {
						"adjusteddoor": {
							"label": "Adjusted Door Panel",
							"input": false,
							"leafcode": "A_ADJUSTEDDOOR"
						},
						"observe": {
							"label": "Customer to Observe & Report",
							"input": false,
							"leafcode": "A_CUSTOMEROBSERVATION"
						},
						"alignment": {
							"label": "Fixed Alignment Issue",
							"input": false,
							"leafcode": "A_FIXALIGNMENT"
						},
						"induction": {
							"label": "Induction Completed",
							"input": false,
							"leafcode": "A_INDUCTION_COMPLETE"
						},
						"installed": {
							"label": "Installed New Part",
							"input": false,
							"parts": true,
							"input_message": "Which part(s) did you install?",
							"leafcode": "A_INSTALLEDPART"
						},
						"instructed": {
							"label": "Instructed Customer Over Phone",
							"input": true,
							"input_message": "Who did you instruct?",
							"leafcode": "A_INSTRUCTED_CUSTOMER"
						},
						"modepad": {
							"label": "Modified Mode Pad Settings",
							"input": false,
							"leafcode": "A_ADJUSTEDMODEPAD"
						},
						"speeds": {
							"label": "Modified Speed Settings",
							"input": false,
							"leafcode": "A_ADJUSTEDSPEEDS"
						},
						"shopfront": {
							"label": "Moved/Adjusted Shopfront/Frame",
							"input": false,
							"leafcode": "A_FIXSHOPFRONT"
						},
						"replaced": {
							"label": "Replaced Component",
							"input": false,
							"parts": true,
							"input_message": "What did you replace?",
							"leafcode": "A_REPLACEDPART"
						},
						"rewired": {
							"label": "Rewired",
							"input": false,
							"nodes": {
								"batteries": {
									"label": "Batteries",
									"value": "Batteries",
									"input": false,
									"leafcode": "A_REWIRED"
								},
								"modepad": {
									"label": "Mode Pad",
									"value": "Mode Pad",
									"input": false,
									"leafcode": "A_REWIRED"
								},
								"motor": {
									"label": "Motor",
									"value": "Motor",
									"input": false,
									"leafcode": "A_REWIRED"
								},
								"sensor": {
									"label": "Sensor",
									"value": "Sensor",
									"input": false,
									"leafcode": "A_REWIRED"
								},
								"switch": {
									"label": "Switch",
									"value": "Switch",
									"input": false,
									"leafcode": "A_REWIRED"
								},
								"transformer": {
									"label": "Transformer",
									"value": "Transformer",
									"input": false,
									"leafcode": "A_REWIRED"
								}
							}
						},
						"sensors": {
							"label": "Tweaked Sensor Settings",
							"input": false,
							"leafcode": "A_ADJUSTEDSENSOR"
						}
					}
				},
				"siteissues": {
					"label": "Cannot Complete Work",
					"input": false,
					"nodes": {
						"norevisit": {
							"label": "Cannot Return",
							"input": false,
							"nodes": {
								"changedcustomer": {
									"label": "Customer has Changed",
									"input": true,
									"input_message": "Enter new customer details:",
									"leafcode": "A_NOREVISIT_CHANGEDCUSTOMER"
								},
								"nolongerthere": {
									"label": "Door No Longer Exists",
									"input": false,
									"leafcode": "A_NOREVISIT_NOLONGEREXISTS"
								},
								"notinuse": {
									"label": "Door Not In Use",
									"input": false,
									"leafcode": "A_NOREVISIT_NOTINUSE"
								},
								"closed": {
									"label": "Site Closed (forever)",
									"input": false,
									"leafcode": "A_NOREVISIT_CLOSED"
								},
								"turnedaway": {
									"label": "Turned Away by Customer",
									"input": true,
									"input_message": "Why were you turned away and by who?",
									"leafcode": "A_NOREVISIT_TURNEDAWAY"
								}
							}
						},
						"revisit": {
							"label": "Revisit Required",
							"input": false,
							"nodes": {
								"induction": {
									"label": "Induction Required",
									"input": false,
									"leafcode": "A_REVISIT_INDUCTION"
								},
								"obsoletepart": {
									"label": "Part No Longer Stocked",
									"input": true,
									"input_message": "What is to be used in it's place, or what action needs to happen now?",
									"leafcode": "A_REVISIT_OLDPART"
								},
								"partnotonboard": {
									"label": "Part Not Available in Van",
									"input": false,
									"leafcode": "A_REVISIT_PARTMISSING"
								},
								"ladder": {
									"label": "Required Tall Ladder",
									"input": false,
									"leafcode": "A_REVISIT_LADDER"
								},
								"closed": {
									"label": "Site Closed (just right now)",
									"input": false,
									"leafcode": "A_REVISIT_CLOSED"
								},
								"busy": {
									"label": "Site Too Busy",
									"input": false,
									"leafcode": "A_REVISIT_BUSY"
								},
								"turnedaway": {
									"label": "Turned Away by Customer",
									"input": true,
									"input_message": "Why were you turned away and by who?",
									"leafcode": "A_REVISIT_TURNEDAWAY"
								},
								"2techs": {
									"label": "Two Techs Required",
									"input": false,
									"leafcode": "A_REVISIT_2TECHS"
								}
							}
						}
					}
				},
				"training": {
					"label": "Customer Training",
					"input": false,
					"nodes": {
						"operatordoordifferently": {
							"label": "Must Operate Door Differently",
							"input": true,
							"input_message": "Who was this explained/demonstrated to?",
							"leafcode": "A_OPERATEDIFFERENTLY"
						},
						"trainedstaff": {
							"label": "Trained Staff Onsite",
							"input": false,
							"nodes": {
								"sensors": {
									"label": "How the Sensors Function",
									"input": false,
									"leafcode": "A_TRAIN_SENSORS"
								},
								"usemodepad": {
									"label": "How to Use Mode Pad",
									"input": false,
									"leafcode": "A_TRAIN_MODEPAD"
								},
								"useswitch": {
									"label": "How to Use Switches",
									"input": false,
									"leafcode": "A_TRAIN_SWITCHES"
								}
							}
						}
					}
				},
				"commission": {
					"label": "Install / Commission",
					"input": false,
					"nodes": {
						"entrapment": {
							"label": "Entrapment Issues",
							"input": false,
							"nodes": {
								"rectified": {
									"label": "Rectified Onsite",
									"input": false,
									"nodes": {
										"them": {
											"label": "By Others",
											"input": true,
											"input_message": "Who and how was the issue rectified?",
											"leafcode": "A_TRAP_RECTIFIED_BYOTHERS"
										},
										"us": {
											"label": "By Us",
											"input": true,
											"input_message": "How was the issue rectified?",
											"leafcode": "A_TRAP_RECTIFIED_BYUS"
										}
									}
								},
								"notrectified": {
									"label": "To be Rectified",
									"input": false,
									"nodes": {
										"them": {
											"label": "By Others",
											"input": true,
											"input_message": "By who and how will the issue be rectified?",
											"leafcode": "A_TRAP_NOTRECTIFIED_BYOTHERS"
										},
										"us": {
											"label": "By Us",
											"input": true,
											"input_message": "How is the issue to be rectified?",
											"leafcode": "A_TRAP_NOTRECTIFIED_BYUS"
										}
									}
								}
							}
						},
						"installissue": {
							"label": "Fixed Install Issue",
							"input": false,
							"leafcode": "A_FIX_INSTALLISSUE"
						},
						"prewire": {
							"label": "Pre-wire Completed",
							"input": false,
							"leafcode": "A_PREWIRE_COMPLETE"
						},
						"switchsensor": {
							"label": "Switches & Sensors",
							"input": false,
							"nodes": {
								"some": {
									"label": "Did Not Install a Switch/Sensor",
									"input": true,
									"input_message": "Which one(s) and why?",
									"leafcode": "A_COMM_INSTALL_SOME_SWITCHSENSOR"
								},
								"extra": {
									"label": "Installed Additional Switch/Sensor",
									"input": true,
									"input_message": "Which one(s) and why?",
									"leafcode": "A_COMM_INSTALL_EXTRA_SWITCHSENSOR"
								},
								"all": {
									"label": "Installed all Switches/Sensors",
									"input": false,
									"leafcode": "A_COMM_INSTALL_ALL_SWITCHSENSOR"
								},
								"leftonsite": {
									"label": "Left Switches/Sensors Onsite",
									"input": true,
									"input_message": "Which one(s) and where?",
									"leafcode": "A_COMM_LEFTONSITE_SWITCHSENSOR"
								}
							}
						},
						"training": {
							"label": "Trained Onsite Contact",
							"input": false,
							"leafcode": "A_TRAINED_CONTACT"
						}
					}
				},
				"maintenance": {
					"label": "Maintenance",
					"input": false,
					"nodes": {
						"additionaldoor": {
							"label": "Additional Door Maintained",
							"input": false,
							"nodes": {
								"onceoff": {
									"label": "One Time Only",
									"input": false,
									"leafcode": "A_MAINT_ADNDOOR_ONCEOFF"
								},
								"tobeadded": {
									"label": "To be Added to Contract",
									"input": false,
									"leafcode": "A_MAINT_ADNDOOR_ADDTOCONTRACT"
								}
							}
						},
						"completed": {
							"label": "Completed",
							"input": false,
							"nodes": {
								"issue": {
									"label": "Issues Found",
									"input": false,
									"leafcode": "A_MAINT_COMPLETE_ISSUES"
								},
								"noissue": {
									"label": "No Issues Found",
									"input": false,
									"leafcode": "A_MAINT_COMPLETE_NOISSUES"
								}
							}
						},
						"notcompleted": {
							"label": "Not Completed",
							"input": false,
							"leafcode": "A_MAINT_NOTCOMPLETED"
						}
					}
				},
				"additionalworks": {
					"label": "Quote Additional Works",
					"input": false,
					"nodes": {
						"works": {
							"label": "Send Quote for Additional Works",
							"input": false,
							"leafcode": "A_QUOTEWORKS"
						},
						"operator": {
							"label": "Send Quote for Operator",
							"input": false,
							"leafcode": "A_QUOTEOPERATOR"
						},
						"parts": {
							"label": "Send Quote for Parts",
							"input": false,
							"parts": true,
							"leafcode": "A_QUOTEPART"
						},
						"maintenance": {
							"label": "Send Quote for Service Program",
							"input": false,
							"leafcode": "A_QUOTEMAINTENANCE"
						}
					}
				},
				"thirdparty": {
					"label": "Third Party",
					"input": false,
					"nodes": {
						"signs": {
							"label": "Customer to Erect Signage",
							"input": false,
							"leafcode": "A_CUSTOMERTOERECTSIGNS"
						},
						"firesecurity": {
							"label": "Fire/Security/Electrical Connections",
							"input": false,
							"nodes": {
								"fire": {
									"label": "Fire",
									"value": "Emergency Fire System",
									"input": false,
									"nodes": {
										"connected": {
											"label": "Connected",
											"input": false,
											"nodes": {
												"others": {
													"label": "By Others",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYOTHERS"
												},
												"us": {
													"label": "By Us",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYUS"
												}
											}
										},
										"assistance": {
											"label": "Needed Assistance",
											"input": false,
											"nodes": {
												"onsite": {
													"label": "Assistance Provided Onsite",
													"input": false,
													"leafcode": "A_CONNECTION_ASSISTEDONSITE"
												},
												"office": {
													"label": "Office to Provide",
													"input": true,
													"input_message": "What is needed?",
													"leafcode": "A_CONNECTION_OFFICETOASSIST"
												}
											}
										},
										"notconnected": {
											"label": "Not Yet Connected",
											"input": false,
											"leafcode": "A_CONNECTION_NOTCONNECTED"
										}
									}
								},
								"power": {
									"label": "Power/Electrician",
									"value": "Mains Power/ GPO",
									"input": false,
									"nodes": {
										"connected": {
											"label": "Connected",
											"input": false,
											"nodes": {
												"others": {
													"label": "By Others",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYOTHERS"
												},
												"us": {
													"label": "By Us",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYUS"
												}
											}
										},
										"assistance": {
											"label": "Needed Assistance",
											"input": false,
											"nodes": {
												"onsite": {
													"label": "Assistance Provided Onsite",
													"input": false,
													"leafcode": "A_CONNECTION_ASSISTEDONSITE"
												},
												"office": {
													"label": "Office to Provide",
													"input": true,
													"input_message": "What is needed?",
													"leafcode": "A_CONNECTION_OFFICETOASSIST"
												}
											}
										},
										"notconnected": {
											"label": "Not Yet Connected",
											"input": false,
											"leafcode": "A_CONNECTION_NOTCONNECTED"
										}
									}
								},
								"security": {
									"label": "Security/Access Control",
									"value": "Security/ Access Control System",
									"input": false,
									"nodes": {
										"connected": {
											"label": "Connected",
											"input": false,
											"nodes": {
												"others": {
													"label": "By Others",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYOTHERS"
												},
												"us": {
													"label": "By Us",
													"input": false,
													"leafcode": "A_CONNECTION_CONNECTED_BYUS"
												}
											}
										},
										"assistance": {
											"label": "Needed Assistance",
											"input": false,
											"nodes": {
												"onsite": {
													"label": "Assistance Provided Onsite",
													"input": false,
													"leafcode": "A_CONNECTION_ASSISTEDONSITE"
												},
												"office": {
													"label": "Office to Provide",
													"input": true,
													"input_message": "What is needed?",
													"leafcode": "A_CONNECTION_OFFICETOASSIST"
												}
											}
										},
										"notconnected": {
											"label": "Not Yet Connected",
											"input": false,
											"leafcode": "A_CONNECTION_NOTCONNECTED"
										}
									}
								}
							}
						},
						"testedbuilder": {
							"label": "Tested Setup with Builder",
							"input": false,
							"leafcode": "A_TESTEDWITHBUILDER"
						},
						"3rdpartytoresolve": {
							"label": "Third Party to Resolve Issue",
							"input": false,
							"nodes": {
								"builder": {
									"label": "Builder",
									"input": true,
									"input_message": "What needs to be rectified?",
									"leafcode": "A_BUILDERTORECTIFY"
								},
								"fabricator": {
									"label": "Fabricator",
									"input": true,
									"input_message": "What needs to be rectified?",
									"leafcode": "A_FABRICATORTORECTIFY"
								},
								"other": {
									"label": "Other",
									"input": true,
									"input_message": "What needs to be rectified?",
									"leafcode": "A_OTHERTORECTIFY"
								}
							}
						},
						"notifiedbuilder": {
							"label": "Updated Builder",
							"input": false,
							"leafcode": "A_NOTIFIED_BUILDER"
						}
					}
				}
			}
		}
	}
}