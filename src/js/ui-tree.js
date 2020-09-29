/** ui-tree.js - Config file for the UI building system
 *
 * This file is part of the Auto Ingress Work Note Generator.
 *
 *  Copyright 2020 by Auto Ingress Pty Ltd
 *  Written by Aidan Jessen <aidan.jessen@gmail.com>
 *  Released under the GNU General Public License
 *
 * The Auto Ingress Work Note Generator is free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public License as 
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * The Auto Ingress Work Note Generator is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the Auto Ingress Work Note Generator.
 * If not, see <https://www.gnu.org/licenses/>.
 */

var arrive_depart_submap = {
  "arrived": {
    label: "Arrived onsite",
    input: false,
    nodes: {
      "ontime": {
        label: "On time",
        input: false,
        leafcode: "ARRIVEDONTIME"
      },
      "late": {
        label: "Late",
        input: true,
        input_message: 'How late?',
        input_placeholder: '[hours]',
        leafcode: "ARRIVEDLATE"
      }
    }
  },
  "inducted": {
    label: "Got Inducted",
    input: false,
    leafcode: "INDUCTED"
  },
  "turnedaway": {
    label: "Was turned away.",
    input: false,
    nodes: {
      "closed": {
        label: "Site Closed",
        input: false,
        leafcode: "SITECLOSED"
      },
      "busy": {
        label: "Site too Busy",
        input: false,
        nodes: {
          "customer": {
            label: "Advised by Customer",
            input: true,
            input_message: 'Enter Customer Name',
            leafcode: "CUSTOMERBUSY"
          },
          "tech": {
            label: "Decided by Tech",
            input: false,
            leafcode: "SITEBUSY"
          }
        }
      }
    }
  },
  "updatecustomer": {
    label: "Updated Customer",
    input: true,
    input_message: 'Enter Customer Name',
    nodes: {
      "byphone": {
        label: "Over Phone",
        input: false,
        leafcode: "CUSTOMERPHONEUPDATE"
      },
      "inperson": {
        label: "In Person",
        input: false,
        leafcode: "CUSTOMERINPERSONUPDATE"
      },
      "bymessage": {
        label: "Left Message",
        input: false,
        leafcode: "CUSTOMERMESSAGEUPDATE"
      }
    }
  }
};

var worknotes_submap = {
  "symptoms": {
    label: "Symptoms",
    input: false,
    nodes: {
      "sensorswitch": {
        label: "Sensors & Switches",
        input: false,
        nodes: {
          "extactuation": {
            label: "Exterior Actuation Sensor",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "NULL"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "NULL"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "NULL"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "NULL"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "intactuation": {
            label: "Interior Actuation Sensor",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "NULL"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "NULL"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "NULL"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "NULL"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "extsafety": {
            label: "Exterior Safety Sensor",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "NULL"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "NULL"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "NULL"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "NULL"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "intsafety": {
            label: "Interior Safety Sensor",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "NULL"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "NULL"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "NULL"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "NULL"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "remotebuttons": {
            label: "Remote Buttons",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "NULL"
              }
            }
          },
          "toilet": {
            label: "Toliet Switch",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "NULL"
              }
            }
          },
          "paniclock": {
            label: "Panic Lock Switch",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "NULL"
              }
            }
          },
          "mode": {
            label: "Mode Switch",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "NULL"
              }
            }
          },
          "pushbutton": {
            label: "Push Button",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "NULL"
              }
            }
          }
        }
      },
      "modepadcontroller": {
        label: "Mode Pad & Controller",
        input: false,
        nodes: {
          "stuckinmode": {
            label: "Stuck in mode",
            input: true,
            input_message: "Which mode?",
            leafcode: "NULL"
          },
          "modenotworking": {
            label: "Mode Not Working Properly",
            input: true,
            input_message: "Which mode?",
            leafcode: "NULL"
          },
          "alerts": {
            label: "Notifications/Alerts",
            input: false,
            nodes: {
              "safemode": {
                label: "Keypad Displays Safe Mode",
                input: true,
                input_message: "When?",
                leafcode: "NULL"
              },
              "powerfail": {
                label: "Keypad Displays AC Power Fail",
                input: false,
                leafcode: "NULL"
              },
              "batteryfail": {
                label: "Keydad Displays Battery Fail",
                input: false,
                leafcode: "NULL"
              },
              "beeping": {
                label: "Keypad Beeping",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "settings": {
            label: "Speeds/Settings",
            input: false,
            nodes: {
              "fast": {
                label: "Too Fast",
                input: false,
                nodes: {
                  "open": {
                    label: "When Opening",
                    input: false,
                    leafcode: "NULL"
                  },
                  "close": {
                    label: "When Closing",
                    input: false,
                    leafcode: "NULL"
                  }
                }
              },
              "slow": {
                label: "Too Slow",
                input: false,
                nodes: {
                  "open": {
                    label: "When Opening",
                    input: false,
                    leafcode: "NULL"
                  },
                  "close": {
                    label: "When Closing",
                    input: false,
                    leafcode: "NULL"
                  }
                }
              },
              "dwellshort": {
                label: "Dwell Too Short",
                input: false,
                leafcode: "NULL"
              },
              "dwelllong": {
                label: "Dwell Too Long",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "notclosing": {
            label: "Doors Not Closing",
            input: false,
            leafcode: "NULL"
          },
          "notautomatic": {
            label: "Doors Not Triggering Automatically",
            input: false,
            leafcode: "NULL"
          },
          "randomopening": {
            label: "Doors Randomly Openinging",
            input: false,
            leafcode: "NULL"
          }
        }
      },
      "cables": {
        label: "Cables",
        input: false,
        nodes: {
          "sensor": {
            label: "Sensor Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "mode": {
            label: "Mode Pad Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "switch": {
            label: "Switch Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "motor": {
            label: "Motor Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "battery": {
            label: "Battery Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "power": {
            label: "Power Cables",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "NULL"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "NULL"
              }
            }
          }
        }
      },
      "mechanical": {
        label: "Structural/Mechanical",
        input: false,
        nodes: {
          "gap": {
            label: "Gap Between Door Panels",
            input: false,
            leafcode: "NULL"
          },
          "notopenfully": {
            label: "Not Opening Fully",
            input: false,
            leafcode: "NULL"
          },
          "rough": {
            label: "Rough Travel",
            input: false,
            nodes: {
              "open": {
                label: "Open Direction",
                input: false,
                leafcode: "NULL"
              },
              "close": {
                label: "Close Direction",
                input: false,
                leafcode: "NULL"
              },
              "both": {
                label: "Both Directions",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "outoftrack": {
            label: "Door Panel Out of Track",
            input: false,
            leafcode: "NULL"
          },
          "rhspanel": {
            label: "RHS Door Panel",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "lhspanel": {
            label: "LHS Door Panel",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "bothpanels": {
            label: "Both Door Panels",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "shopfront": {
            label: "Shopfront/Frame",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
            }
          },
          "floorguide": {
            label: "Floor Guide",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "NULL"
              },
              "loose": {
                label: "Loose",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "beltchain": {
            label: "Belt/Chain",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "NULL"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "NULL"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "NULL"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "operator": {
            label: "Operator",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "NULL"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "NULL"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "NULL"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "NULL"
              },
            }
          }
        }
      }
    }
  },
  "faults": {
    label: "Faults",
    input: false,
    nodes: {}
  },
  "causes": {
    label: "Possible Root Causes",
    input: false,
    nodes: {
      "wedidit": {
        label: "We Did It",
        input: false,
        nodes: {
          "prevtechmistake": {
            label: "Previous Technician (Mistake)",
            input: false,
            leafcode: "NULL"
          },
          "prevtechoversight": {
            label: "Previous Technician (Oversight)",
            input: false,
            leafcode: "NULL"
          },
          "faultypart": {
            label: "Part Was Manufactured Faulty",
            input: false,
            leafcode: "NULL"
          },
          "incorrectpart": {
            label: "Incorrect Part was Used",
            input: false,
            leafcode: "NULL"
          },
          "inappropriateconfig": {
            label: "Inappropriate Configuration",
            input: true,
            input_message: "How was it inappropriate?",
            leafcode: "NULL"
          }
        }
      },
      "theydidit": {
        label: "They Did It",
        input: false,
        nodes: {
          "thirdpartyoversight": {
            label: "Oversight by Third Party",
            input: true,
            input_message: "Who?",
            nodes: {
              "reason": {
                label: "What Did/Didn't They Do?",
                input: true,
                input_message: "What did they overlook?",
                leafcode: "NULL"
              }
            }
          },
          "thirdpartyfault": {
            label: "Fault in Third Party System",
            input: true,
            input_message: "Which system?",
            leafcode: "NULL"
          },
          "incorrectusage": {
            label: "Incorrect Usage",
            input: true,
            input_message: "How was the door/entry incorrectly used?",
            leafcode: "NULL"
          },
          "incorrectwiring": {
            label: "Incorrect Wiring by Others",
            input: true,
            input_message: "Who?",
            leafcode: "NULL"
          }
        }
      },
      "weartearoldage": {
        label: "Wear/Tear (Old Age)",
        input: false,
        leafcode: "NULL"
      },
      "weartearoveruse": {
        label: "Wear/Tear (Over-Use)",
        input: false,
        leafcode: "NULL"
      },
      "changedusecase": {
        label: "Use-case Has Changed",
        input: true,
        input_message: "In what way has it changed?",
        leafcode: "NULL"
      }
    }
  },
  "actions": {
    label: "Actions",
    input: false,
    //nodes: arrive_depart_submap
    nodes: {
      "siteissues": {
        label: "Cannot Complete Work",
        input: false,
        nodes: {
          "revisit": {
            label: "Revisit Required",
            input: false,
            nodes: {
              "ladder": {
                label: "Required Tall Ladder",
                input: false,
                leafcode: "NULL"
              },
              "2techs": {
                label: "Two Techs Required",
                input: false,
                leafcode: "NULL"
              },
              "induction": {
                label: "Induction Required",
                input: false,
                leafcode: "NULL"
              },
              "partnotonboard": {
                label: "Part Not Available in Van",
                input: false,
                leafcode: "NULL"
              },
              "closed": {
                label: "Site Closed (just right now)",
                input: false,
                leafcode: "NULL"
              },
              "busy": {
                label: "Site Too Busy",
                input: false,
                leafcode: "NULL"
              },
              "obsoletepart": {
                label: "Part No Longer Stocked",
                input: true,
                input_message: "What is to be used in it's place, or what action needs to happen now?",
                leafcode: "NULL"
              },
              "turnedaway": {
                label: "Turned Away by Customer",
                input: true,
                input_message: "Why were you turned away and by who?",
                leafcode: "NULL"
              },
            }
          },
          "norevisit": {
            label: "Cannot Return",
            input: false,
            nodes: {
              "notinuse": {
                label: "Door Not In Use",
                input: false,
                leafcode: "NULL"
              },
              "nolongerthere": {
                label: "Door No Longer Exists",
                input: false,
                leafcode: "NULL"
              },
              "changedcustomer": {
                label: "Customer has Changed",
                input: true,
                input_message: "Enter new customer details:",
                leafcode: "NULL"
              },
              "closed": {
                label: "Site Closed (forever)",
                input: false,
                leafcode: "NULL"
              },
              "turnedaway": {
                label: "Turned Away by Customer",
                input: true,
                input_message: "Why were you turned away and by who?",
                leafcode: "NULL"
              },
            }
          }
        }
      },
      "thirdparty": {
        label: "Third Party",
        input: false,
        nodes: {
          "3rdpartytoresolve": {
            label: "Third Party to Resolve Issue",
            input: false,
            nodes: {
              "builder": {
                label: "Builder",
                input: true,
                input_message: "What needs to be rectified?",
                leafcode: "NULL"
              },
              "fabricator": {
                label: "Fabricator",
                input: true,
                input_message: "What needs to be rectified?",
                leafcode: "NULL"
              },
              "other": {
                label: "Other",
                input: true,
                input_message: "What needs to be rectified?",
                leafcode: "NULL"
              }
            }
          },
          "firesecurity": {
            label: "Fire/Security/Electrical Connections",
            input: false,
            nodes: {
              "fire": {
                label: "Fire",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "NULL"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "NULL"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "NULL"
                      }
                    }
                  },
                  "assistance": {
                    label: "Needed Assistance",
                    input: false,
                    nodes: {
                      "onsite": {
                        label: "Assistance Provided Onsite",
                        input: false,
                        leafcode: "NULL"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "NULL"
                      }
                    }
                  }
                }
              },
              "security": {
                label: "Security/Access Control",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "NULL"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "NULL"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "NULL"
                      }
                    }
                  },
                  "assistance": {
                    label: "Needed Assistance",
                    input: false,
                    nodes: {
                      "onsite": {
                        label: "Assistance Provided Onsite",
                        input: false,
                        leafcode: "NULL"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "NULL"
                      }
                    }
                  }
                }
              },
              "power": {
                label: "Power/Electrician",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "NULL"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "NULL"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "NULL"
                      }
                    }
                  },
                  "assistance": {
                    label: "Needed Assistance",
                    input: false,
                    nodes: {
                      "onsite": {
                        label: "Assistance Provided Onsite",
                        input: false,
                        leafcode: "NULL"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "NULL"
                      }
                    }
                  }
                }
              }
            }
          },
          "testedbuilder": {
            label: "Tested Setup with Builder",
            input: false,
            leafcode: "NULL"
          },
          "notifiedbuilder": {
            label: "Updated Builder",
            input: false,
            leafcode: "NULL"
          },
          "signs": {
            label: "Customer to Erect Signage",
            input: false,
            leafcode: "NULL"
          }
        }
      },
      "maintenance": {
        label: "Maintenance",
        input: false,
        nodes: {
          "completed": {
            label: "Completed",
            input: false,
            nodes: {
              "alldoors": {
                label: "All Doors",
                input: false,
                nodes: {
                  "noissue": {
                    label: "No Issues Found",
                    input: false,
                    leafcode: "NULL"
                  },
                  "issue": {
                    label: "Issues Found",
                    input: false,
                    leafcode: "NULL"
                  }
                }
              },
              "somedoors": {
                label: "Some Doors",
                input: false,
                nodes: {
                  "noissue": {
                    label: "No Issues Found",
                    input: false,
                    leafcode: "NULL"
                  },
                  "issue": {
                    label: "Issues Found",
                    input: false,
                    leafcode: "NULL"
                  }
                }
              }
            }
          },
          "additionaldoor": {
            label: "Additional Door Maintained",
            input: false,
            nodes: {
              "onceoff": {
                label: "One Time Only",
                input: false,
                leafcode: "NULL"
              },
              "tobeadded": {
                label: "To be Added to Contract",
                input: false,
                leafcode: "NULL"
              }
            }
          },
          "notcompleted": {
            label: "Not Completed",
            input: false,
            leafcode: "NULL"
          },
        }
      },
      "commission": {
        label: "Install / Commission",
        input: false,
        nodes: {
          "switchsensor": {
            label: "Switches & Sensors",
            input: false,
            nodes: {
              "all": {
                label: "Installed all Switches/Sensors",
                input: false,
                leafcode: "NULL"
              },
              "some": {
                label: "Did Not Install a Switch/Sensor",
                input: true,
                input_message: "Which one(s) and why?",
                leafcode: "NULL"
              },
              "extra": {
                label: "Installed Additional Switch/Sensor",
                input: true,
                input_message: "Which one(s) and why?",
                leafcode: "NULL"
              },
              "leftonsite": {
                label: "Left Switches/Sensors Onsite",
                input: true,
                input_message: "Which one(s) and where?",
                leafcode: "NULL"
              }
            }
          },
          "entrapment": {
            label: "Entrapment Issues",
            input: false,
            nodes: {
              "rectified": {
                label: "Rectified Onsite",
                input: false,
                nodes: {
                  "us": {
                    label: "By Us",
                    input: true,
                    input_message: "How was the issue rectified?",
                    leafcode: "NULL"
                  },
                  "them": {
                    label: "By Others",
                    input: true,
                    input_message: "Who and how was the issue rectified?",
                    leafcode: "NULL"
                  }
                }
              },
              "notrectified": {
                label: "To be Rectified",
                input: false,
                nodes: {
                  "us": {
                    label: "By Us",
                    input: true,
                    input_message: "How is the issue to be rectified?",
                    leafcode: "NULL"
                  },
                  "them": {
                    label: "By Others",
                    input: true,
                    input_message: "By who and how will the issue be rectified?",
                    leafcode: "NULL"
                  }
                }
              }
            }
          },
          "installissue": {
            label: "Fixed Install Issue",
            input: false,
            leafcode: "NULL"
          },
          "training": {
            label: "Trained Onsite Contact",
            input: false,
            leafcode: "NULL"
          },
          "prewire": {
            label: "Pre-wire Completed",
            input: false,
            leafcode: "NULL"
          }
        }
      },
      "actionstaken": {
        label: "Actions Taken Onsite",
        input: false,
        nodes: {
          "induction": {
            label: "Induction Completed",
            input: false,
            leafcode: "NULL"
          },
          "instructed": {
            label: "Instructed Customer Over Phone",
            input: true,
            input_message: "Who did you instruct?",
            leafcode: "NULL"
          },
          "observe": {
            label: "Customer to Observe & Report",
            input: false,
            leafcode: "NULL"
          },
          "replaced": {
            label: "Replaced Component",
            input: true,
            input_message: "What did you replace?",
            leafcode: "NULL"
          },
          "adjusteddoor": {
            label: "Adjusted Door Panel",
            input: false,
            leafcode: "NULL"
          },
          "sensors": {
            label: "Tweaked Sensor Settings",
            input: false,
            leafcode: "NULL"
          },
          "modepad": {
            label: "Modified Mode Pad Settings",
            input: false,
            leafcode: "NULL"
          },
          "speeds": {
            label: "Modified Spped Settings",
            input: false,
            leafcode: "NULL"
          },
          "installed": {
            label: "Installed New Part",
            input: true,
            input_message: "Which part(s) did you install?",
            leafcode: "NULL"
          },
          "alignment": {
            label: "Fixed Alignment Issue",
            input: false,
            leafcode: "NULL"
          },
          "shopfront": {
            label: "Moved/Adjusted Shopfront/Frame",
            input: false,
            leafcode: "NULL"
          },
        }
      },
      "additionalworks": {
        label: "Quote Additional Works",
        input: false,
        nodes: {
          "parts": {
            label: "Send Quote for Parts",
            input: false,
            leafcode: "NULL"
          },
          "operator": {
            label: "Send Quote for Operator",
            input: false,
            leafcode: "NULL"
          },
          "maintenance": {
            label: "Send Quote for Service Program",
            input: false,
            leafcode: "NULL"
          },
          "works": {
            label: "Send Quote for Additional Works",
            input: false,
            leafcode: "NULL"
          },
        }
      },
      "training": {
        label: "Customer Training",
        input: false,
        nodes: {
          "operatordoordifferently": {
            label: "Must Operate Door Differently",
            input: true,
            input_message: "Who was this explained/demonstrated to?",
            leafcode: "NULL"
          },
          "trainedstaff": {
            label: "Trained Staff Onsite",
            input: false,
            nodes: {
              "useswitch": {
                label: "How to Use Switches",
                input: false,
                leafcode: "NULL"
              },
              "usemodepad": {
                label: "How to Use Mode Pad",
                input: false,
                leafcode: "NULL"
              },
              "sensors": {
                label: "How the Sensors Function",
                input: false,
                leafcode: "NULL"
              }
            }
          }
        }
      }
    }
  }
};

var UI_MAP;
export default UI_MAP = {
  label: "Select a Section",
  input: false,
  nodes: {
    "alldoors": {
      label: "All Doors Onsite",
      value: "ALL_DOORS",
      input: false,
      nodes: worknotes_submap
    },
    "remainingdoors": {
      label: "Remaining Doors",
      value: "REMAINING_DOORS",
      input: false,
      nodes: worknotes_submap
    },
    "specificdoors": {
      label: "Specific Doors",
      value: "SPECIFIC_DOORS",
      input: true,
      nodes: worknotes_submap
    }
  }
};
