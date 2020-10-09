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
            value: "Exterior Actuation",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "S_SENSOR_NOTWORKING"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "S_SENSOR_NOTDETECTING"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "S_SENSOR_TOOSENSITIVE"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTFLASHING"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTNOTFLASHING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_SENSOR_CLICKING"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "S_SENSOR_MISSINGCOVER"
              }
            }
          },
          "intactuation": {
            label: "Interior Actuation Sensor",
            value: "Interior Actuation",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "S_SENSOR_NOTWORKING"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "S_SENSOR_NOTDETECTING"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "S_SENSOR_TOOSENSITIVE"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTFLASHING"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTNOTFLASHING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_SENSOR_CLICKING"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "S_SENSOR_MISSINGCOVER"
              }
            }
          },
          "extsafety": {
            label: "Exterior Safety Sensor",
            value: "Exterior Safety",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "S_SENSOR_NOTWORKING"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "S_SENSOR_NOTDETECTING"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "S_SENSOR_TOOSENSITIVE"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTFLASHING"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTNOTFLASHING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_SENSOR_CLICKING"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "S_SENSOR_MISSINGCOVER"
              }
            }
          },
          "intsafety": {
            label: "Interior Safety Sensor",
            value: "Interior Safety",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working",
                input: true,
                input_message: "When is this switch not working?",
                leafcode: "S_SENSOR_NOTWORKING"
              },
              "notdetecting": {
                label: "Not Detecting Enough",
                input: false,
                leafcode: "S_SENSOR_NOTDETECTING"
              },
              "toosensitive": {
                label: "Too Sensitive",
                input: false,
                leafcode: "S_SENSOR_TOOSENSITIVE"
              },
              "lightflashing": {
                label: "Light Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTFLASHING"
              },
              "lightnotflashing": {
                label: "Light Not Flashing",
                input: false,
                leafcode: "S_SENSOR_LIGHTNOTFLASHING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_SENSOR_CLICKING"
              },
              "missingcover": {
                label: "Missing Cover",
                input: false,
                leafcode: "S_SENSOR_MISSINGCOVER"
              }
            }
          },
          "remotebuttons": {
            label: "Remote Buttons",
            value: "Remote Button(s)",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "S_SWITCH_NOTWORKING"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_SWITCH_DAMAGED"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "S_SWITCH_BEEPING"
              }
            }
          },
          "toilet": {
            label: "Toliet Switch",
            value: "Privacy Switch",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "S_SWITCH_NOTWORKING"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_SWITCH_DAMAGED"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "S_SWITCH_BEEPING"
              }
            }
          },
          "paniclock": {
            label: "Panic Lock Switch",
            value: "Panic Lock",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "S_SWITCH_NOTWORKING"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_SWITCH_DAMAGED"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "S_SWITCH_BEEPING"
              }
            }
          },
          "mode": {
            label: "Mode Switch",
            value: "Mode Switch",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "S_SWITCH_NOTWORKING"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_SWITCH_DAMAGED"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "S_SWITCH_BEEPING"
              }
            }
          },
          "pushbutton": {
            label: "Push Button",
            value: "Push Button",
            input: false,
            nodes: {
              "notworking": {
                label: "Not Working Correctly",
                input: false,
                leafcode: "S_SWITCH_NOTWORKING"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_SWITCH_DAMAGED"
              },
              "beeping": {
                label: "Beeping",
                input: true,
                input_message: "When does it beep?",
                leafcode: "S_SWITCH_BEEPING"
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
            leafcode: "S_STUCKINMODE"
          },
          "modenotworking": {
            label: "Mode Not Working Properly",
            input: true,
            input_message: "Which mode?",
            leafcode: "S_MODENOTWORKING"
          },
          "alerts": {
            label: "Notifications/Alerts",
            input: false,
            nodes: {
              "safemode": {
                label: "Keypad Displays Safe Mode",
                input: true,
                input_message: "When?",
                leafcode: "S_SAFEMODEDISPLAY"
              },
              "powerfail": {
                label: "Keypad Displays AC Power Fail",
                input: false,
                leafcode: "S_POWERFAILDISPLAY"
              },
              "batteryfail": {
                label: "Keydad Displays Battery Fail",
                input: false,
                leafcode: "S_BATTERYFAILDISPLAY"
              },
              "beeping": {
                label: "Keypad Beeping",
                input: false,
                leafcode: "S_KEYPADBEEPING"
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
                    leafcode: "S_OPENINGFAST"
                  },
                  "close": {
                    label: "When Closing",
                    input: false,
                    leafcode: "S_CLOSINGFAST"
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
                    leafcode: "S_OPENINGSLOW"
                  },
                  "close": {
                    label: "When Closing",
                    input: false,
                    leafcode: "S_CLOSINGSLOW"
                  }
                }
              },
              "dwellshort": {
                label: "Dwell Too Short",
                input: false,
                leafcode: "S_SHORTDWELL"
              },
              "dwelllong": {
                label: "Dwell Too Long",
                input: false,
                leafcode: "S_LONGDWELL"
              }
            }
          },
          "notclosing": {
            label: "Doors Not Closing",
            input: false,
            leafcode: "S_NOTCLOSING"
          },
          "notautomatic": {
            label: "Doors Not Triggering Automatically",
            input: false,
            leafcode: "S_NOTAUTOMATIC"
          },
          "randomopening": {
            label: "Doors Randomly Openinging",
            input: false,
            leafcode: "S_RANDOMOPEN"
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
            leafcode: "S_GAPBETWEEN"
          },
          "notopenfully": {
            label: "Not Opening Fully",
            input: false,
            leafcode: "S_NOTOPENFULLY"
          },
          "rough": {
            label: "Rough Travel",
            input: false,
            nodes: {
              "open": {
                label: "Open Direction",
                input: false,
                leafcode: "S_ROUGHOPEN"
              },
              "close": {
                label: "Close Direction",
                input: false,
                leafcode: "S_ROUGHCLOSE"
              },
              "both": {
                label: "Both Directions",
                input: false,
                leafcode: "S_ROUGHBOTHDIRECTIONS"
              }
            }
          },
          "outoftrack": {
            label: "Door Panel Out of Track",
            input: false,
            leafcode: "S_DOORPANELOFFTRACK"
          },
          "rhspanel": {
            label: "RHS Door Panel",
            value: "RHS Door Panel",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "S_DOOR_BANG"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "S_DOOR_JAMMED"
              }
            }
          },
          "lhspanel": {
            label: "LHS Door Panel",
            value: "LHS Door Panel",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "S_DOOR_BANG"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "S_DOOR_JAMMED"
              }
            }
          },
          "bothpanels": {
            label: "Both Door Panels",
            value: "Both Door Panels",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "S_DOOR_BANG"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "S_DOOR_JAMMED"
              }
            }
          },
          "shopfront": {
            label: "Shopfront/Frame",
            value: "Shopfront/Frame",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
            }
          },
          "floorguide": {
            label: "Floor Guide",
            value: "Floor Guide",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "S_DOOR_JAMMED"
              },
              "loose": {
                label: "Loose",
                input: false,
                leafcode: "S_DOOR_LOOSE"
              }
            }
          },
          "beltchain": {
            label: "Belt/Chain",
            value: "Belt/Chain",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "S_DOOR_BANG"
              },
              "rubbing": {
                label: "Rubbing/Scraping",
                input: true,
                input_message: "Where does rubbing happen?",
                leafcode: "S_DOOR_RUBBING"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
              },
              "misaligned": {
                label: "Misaligned",
                input: false,
                leafcode: "S_DOOR_MISALIGNED"
              },
              "damaged": {
                label: "Visibly Damaged",
                input: false,
                leafcode: "S_DOOR_DAMAGED"
              },
              "jammed": {
                label: "Jammed",
                input: false,
                leafcode: "S_DOOR_JAMMED"
              }
            }
          },
          "operator": {
            label: "Operator",
            value: "Operator",
            input: false,
            nodes: {
              "squeak": {
                label: "Squeaking or Squealing",
                input: false,
                leafcode: "S_DOOR_SQUEAK"
              },
              "bang": {
                label: "Banging",
                input: true,
                input_message: "When does banging occur?",
                leafcode: "S_DOOR_BANG"
              },
              "shuddering": {
                label: "Shuddering",
                input: false,
                leafcode: "S_DOOR_SHUDDERING"
              },
              "clicking": {
                label: "Clicking",
                input: false,
                leafcode: "S_DOOR_CLICKING"
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
    nodes: {
      "sensors": {
        label: "Sensors",
        input: false,
        nodes: {
          "wrongnumber": {
            label: "Wrong Number of Sensors",
            input: false,
            leafcode: "F_WRONGNUMBEROFSENSORS"
          },
          "wrongtype": {
            label: "Wrong Type of Sensor",
            input: false,
            leafcode: "F_WRONGTYPEOFSENSORS"
          },
          "wrongposition": {
            label: "Incorrect Positioning",
            input: false,
            leafcode: "F_WRONGPOSITIONOFSENSORS"
          },
          "wrongsettings": {
            label: "Incorrect Settings",
            input: false,
            leafcode: "F_WRONGSETTINGSOFSENSORS"
          },
          "waterdamage": {
            label: "Corroded / Water Damage",
            input: false,
            leafcode: "F_WATERDAMAGEDSENSORS"
          },
          "fixings": {
            label: "Improper Fixings",
            input: false,
            leafcode: "F_BADFIXINGSFORSENSORS"
          }
        }
      },
      "fixings": {
        label: "Fixing / Floor Guides",
        input: false,
        nodes: {
          "misaligned": {
            label: "Floor Guide Misaligned",
            input: false,
            nodes: {
              "tight": {
                label: "Door Too Tight",
                input: false,
                leafcode: "F_FLOORGUIDE_TOOTIGHT"
              },
              "loose": {
                label: "Door Too Loose",
                input: false,
                leafcode: "F_FLOORGUIDE_TOOLOOSE"
              }
            }
          },
          "damaged": {
            label: "Floor Guide Damaged / Broken",
            input: false,
            leafcode: "F_FLOORGUIDE_DAMAGED"
          },
          "loose": {
            label: "Floor Guide Fixings Loose",
            input: false,
            leafcode: "F_FLOORGUIDE_FIXINGSLOOSE"
          },
          "doorloose": {
            label: "Door Panel Fixings Loose",
            input: false,
            leafcode: "F_DOOR_FIXINGS_LOOSE"
          },
          "doordamaged": {
            label: "Door Panel Damaged or Bent",
            input: false,
            leafcode: "F_DOOR_DAMAGED"
          },
          "fixings": {
            label: "Operator Improperly Fixed to Wall",
            input: false,
            leafcode: "F_OPERATOR_BADFIXINGS"
          }
        }
      },
      "frame": {
        label: "Shopfront / Fascia",
        input: false,
        nodes: {
          "pelmetdirty": {
            label: "Pelmet Dirty",
            input: false,
            leafcode: "F_PELMET_DIRTY"
          },
          "pelmetscratched": {
            label: "Pelmet Scratched",
            input: false,
            leafcode: "F_PELMET_SCRATCHED"
          },
          "cowl": {
            label: "Cowl Bent / Bowed",
            input: false,
            leafcode: "F_COWL_BENT"
          },
          "frame": {
            label: "Door Frame/Shopfront Damaged/Misaligned",
            input: false,
            leafcode: "F_FRAME_DAMAGED"
          },
        }
      },
      "wheels": {
        label: "Wheels / Hanger Bar",
        input: false,
        nodes: {
          "barbent": {
            label: "Hanger Bar Bent",
            input: false,
            leafcode: "F_HANGERBAR_BENT"
          },
          "barsize": {
            label: "Hanger Bar Incorrect Size",
            input: false,
            leafcode: "F_HANGERBAR_WRONGSIZE"
          },
          "bogie": {
            label: "Bogie(s)",
            input: false,
            nodes: {
              "seized": {
                label: "Seized",
                input: false,
                leafcode: "F_BOGIE_SEIZED"
              },
              "worn": {
                label: "Worn",
                input: false,
                leafcode: "F_BOGIE_WORN"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_BOGIE_DAMAGED"
              }
            }
          },
          "wheel": {
            label: "Wheels(s)",
            input: false,
            nodes: {
              "seized": {
                label: "Seized",
                input: false,
                leafcode: "F_WHEEL_SEIZED"
              },
              "worn": {
                label: "Worn",
                input: false,
                leafcode: "F_WHEEL_WORN"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_WHEEL_DAMAGED"
              }
            }
          },
          "trackdamaged": {
            label: "Track Damaged",
            input: false,
            leafcode: "F_TRACK_DAMAGED"
          },
          "trackfixings": {
            label: "Improper Fixings in Track",
            input: false,
            leafcode: "F_TRACK_FIXINGS"
          }
        }
      },
      "main": {
        label: "Main Components",
        input: false,
        nodes: {
          "controller": {
            label: "Controller",
            value: "Control Board",
            input: false,
            nodes: {
              "faulty": {
                label: "Faulty",
                input: false,
                leafcode: "F_COMPONENT_FAULTY"
              },
              "Damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "failed": {
                label: "Failed",
                input: false,
                leafcode: "F_COMPONENT_FAILED"
              },
            }
          },
          "motor": {
            label: "Motor",
            value: "Motor",
            input: false,
            nodes: {
              "faulty": {
                label: "Motor Faulty",
                input: false,
                leafcode: "F_COMPONENT_FAULTY"
              },
              "Damaged": {
                label: "Motor Damaged",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "failed": {
                label: "Motor Failed",
                input: false,
                leafcode: "F_COMPONENT_FAILED"
              },
              "seized": {
                label: "Motor Seized",
                input: false,
                leafcode: "F_COMPONENT_SEIZED"
              },
              "encoder": {
                label: "Encoder/Counter Failed",
                input: false,
                leafcode: "F_COMPONENT_ENCODERFAILED"
              },
            }
          },
          "transformer": {
            label: "Transformer",
            value: "Transformer",
            input: false,
            nodes: {
              "faulty": {
                label: "Faulty",
                input: false,
                leafcode: "F_COMPONENT_FAULTY"
              },
              "Damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "failed": {
                label: "Failed",
                input: false,
                leafcode: "F_COMPONENT_FAILED"
              },
            }
          },
          "lock": {
            label: "Electric Lock",
            value: "Electric Lock",
            input: false,
            nodes: {
              "faulty": {
                label: "Faulty",
                input: false,
                leafcode: "F_COMPONENT_FAULTY"
              },
              "Damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "failed": {
                label: "Failed",
                input: false,
                leafcode: "F_COMPONENT_FAILED"
              },
            }
          },
          "drivesystem": {
            label: "Drive Belt/Chain System",
            value: "Drive Belt/Chain",
            input: false,
            nodes: {
              "seized": {
                label: "Belt/Chain Seized",
                input: false,
                leafcode: "F_COMPONENT_SEIZED"
              },
              "broken": {
                label: "Belt/Chain Broken",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "misaligned": {
                label: "Belt/Chain Misaligned",
                input: false,
                leafcode: "F_COMPONENT_MISALIGNED"
              },
              "worn": {
                label: "Belt/Chain Worn/Wearing",
                input: false,
                leafcode: "F_COMPONENT_WORN"
              },
              "lube": {
                label: "Belt/Chain Improperly Lubricated",
                input: false,
                leafcode: "F_COMPONENT_LUBE"
              },
              "endpulley": {
                label: "End Pulley Damaged/Worn",
                input: false,
                leafcode: "F_COMPONENT_ENDPULLEYWORN"
              },
            }
          },
          "battery": {
            label: "Flat Batteries",
            input: false,
            leafcode: "F_FLATBATTERY"
          },
          "other": {
            label: "Other",
            input: true,
            input_message: "Which component?",
            nodes: {
              "faulty": {
                label: "Faulty",
                input: false,
                leafcode: "F_COMPONENT_FAULTY"
              },
              "Damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_COMPONENT_DAMAGED"
              },
              "failed": {
                label: "Failed",
                input: false,
                leafcode: "F_COMPONENT_FAILED"
              },
            }
          }
        }
      },
      "cables": {
        label: "Cables",
        input: false,
        nodes: {
          "sensor": {
            label: "Sensor Cables",
            value: "Sensor",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_JAMMED"
              }
            }
          },
          "mode": {
            label: "Mode Pad Cables",
            value: "Mode Pad",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              }
            }
          },
          "switch": {
            label: "Switch Cables",
            value: "Switch",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_JAMMED"
              }
            }
          },
          "motor": {
            label: "Motor Cables",
            value: "Motor",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_JAMMED"
              }
            }
          },
          "battery": {
            label: "Battery Cables",
            value: "Battery",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_JAMMED"
              }
            }
          },
          "power": {
            label: "Power Cables",
            value: "Power",
            input: false,
            nodes: {
              "unsecured": {
                label: "Unsecured",
                input: false,
                leafcode: "F_CABLE_UNSECURED"
              },
              "damaged": {
                label: "Damaged",
                input: false,
                leafcode: "F_CABLE_DAMAGED"
              },
              "loose": {
                label: "Loose in Terminal",
                input: false,
                leafcode: "F_CABLE_LOOSE"
              },
              "jammed":{
                label: "Jammed in Running Gear",
                input: false,
                leafcode: "F_CABLE_JAMMED"
              }
            }
          }
        }
      },
      "switches": {
        label: "Keypad / Switches",
        input: false,
        nodes: {
          "modeswitch": {
            label: "Mode Switch",
            value: "Mode Switch",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "entryswitch": {
            label: "Entry Key Switch",
            value: "Entry Key Switch",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "pushbutton": {
            label: "Push Button",
            value: "Push Button",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "paniclock": {
            label: "Panic Lock Switch",
            value: "Panic Lock",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "toilet": {
            label: "Toilet Switch",
            value: "Privacy Switch",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "modepad": {
            label: "Digital Mode Pad",
            value: "Digital Mode Pad",
            input: false,
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          },
          "other": {
            label: "Other",
            input: true,
            input_message: "Which Switch?",
            nodes: {
              "loose": {
                label: "Loose Fixings",
                input: false,
                leafcode: "F_SWITCH_LOOSEFIXINGS"
              },
              "wiring": {
                label: "Incorrectly Wired",
                input: false,
                leafcode: "F_SWITCH_WRONGWIRING"
              },
              "damaged": {
                label: "Corroded or Damaged",
                input: false,
                leafcode: "F_SWITCH_DAMAGED"
              },
              "faulty": {
                label: "Faulty / Failed",
                input: false,
                leafcode: "F_SWITCH_FAULTY"
              }
            }
          }
        }
      },
      "safety": {
        label: "Safety / Hazards",
        input: false,
        nodes: {
          "finger": {
            label: "Finger Trap",
            input: true,
            input_message: "Where?",
            leafcode: "F_FINGERTRAP"
          },
          "head": {
            label: "Head Trap",
            input: true,
            input_message: "Where?",
            leafcode: "F_HEADTRAP"
          },
          "body": {
            label: "Body Trap",
            input: true,
            input_message: "Where?",
            leafcode: "F_BODYTRAP"
          },
          "electrical": {
            label: "Electrical Hazard",
            input: true,
            input_message: "Where?",
            leafcode: "F_ELECTRICALHAZARD"
          },
        }
      },
      "swingdoor": {
        label: "Swing Door",
        input: false,
        nodes: {
          "armloose": {
            label: "Swing Arm Loose",
            input: false,
            leafcode: "F_SWINGARMLOOSE"
          },
          "armtight": {
            label: "Swing Arm Tight",
            input: false,
            leafcode: "F_SWINGARMTIGHT"
          },
          "armdamaged": {
            label: "Swing Arm Damaged",
            input: false,
            leafcode: "F_SWINGARMDAMAGED"
          },
          "armfixings": {
            label: "Incorrect Swing Arm Fixings",
            input: false,
            leafcode: "F_SWINGARM_BADFIXINGS"
          }
        }
      }
    }
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
            leafcode: "C_PREVTECH_MISTAKE"
          },
          "prevtechoversight": {
            label: "Previous Technician (Oversight)",
            input: false,
            leafcode: "C_PREVTECH_OVERSIGHT"
          },
          "faultypart": {
            label: "Part Was Manufactured Faulty",
            input: false,
            leafcode: "C_BADMANUFACTURE"
          },
          "incorrectpart": {
            label: "Incorrect Part was Used",
            input: false,
            leafcode: "C_INCORRECTPART"
          },
          "inappropriateconfig": {
            label: "Inappropriate Configuration",
            input: true,
            input_message: "How was it inappropriate?",
            leafcode: "C_INAPPROPRIATECONFIG"
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
                leafcode: "C_THIRDPARTY_OVERSIGHT"
              }
            }
          },
          "thirdpartyfault": {
            label: "Fault in Third Party System",
            input: true,
            input_message: "Which system?",
            leafcode: "C_THIRDPARTY_FAULT"
          },
          "incorrectusage": {
            label: "Incorrect Usage",
            input: true,
            input_message: "How was the door/entry incorrectly used?",
            leafcode: "C_INCORRECTUSAGE"
          },
          "incorrectwiring": {
            label: "Incorrect Wiring by Others",
            input: true,
            input_message: "Who?",
            leafcode: "C_THIRDPARTY_INCORRECTWIRING"
          }
        }
      },
      "weartearoldage": {
        label: "Wear/Tear (Old Age)",
        input: false,
        leafcode: "C_OLDAGE"
      },
      "weartearoveruse": {
        label: "Wear/Tear (Over-Use)",
        input: false,
        leafcode: "C_OVERUSE"
      },
      "changedusecase": {
        label: "Use-case Has Changed",
        input: true,
        input_message: "In what way has it changed?",
        leafcode: "C_DIFFERENTUSECASE"
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
                leafcode: "A_REVISIT_LADDER"
              },
              "2techs": {
                label: "Two Techs Required",
                input: false,
                leafcode: "A_REVISIT_2TECHS"
              },
              "induction": {
                label: "Induction Required",
                input: false,
                leafcode: "A_REVISIT_INDUCTION"
              },
              "partnotonboard": {
                label: "Part Not Available in Van",
                input: false,
                leafcode: "A_REVISIT_PARTMISSING"
              },
              "closed": {
                label: "Site Closed (just right now)",
                input: false,
                leafcode: "A_REVISIT_CLOSED"
              },
              "busy": {
                label: "Site Too Busy",
                input: false,
                leafcode: "A_REVISIT_BUSY"
              },
              "obsoletepart": {
                label: "Part No Longer Stocked",
                input: true,
                input_message: "What is to be used in it's place, or what action needs to happen now?",
                leafcode: "A_REVISIT_OLDPART"
              },
              "turnedaway": {
                label: "Turned Away by Customer",
                input: true,
                input_message: "Why were you turned away and by who?",
                leafcode: "A_REVISIT_TURNEDAWAY"
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
                leafcode: "A_NOREVISIT_NOTINUSE"
              },
              "nolongerthere": {
                label: "Door No Longer Exists",
                input: false,
                leafcode: "A_NOREVISIT_NOLONGEREXISTS"
              },
              "changedcustomer": {
                label: "Customer has Changed",
                input: true,
                input_message: "Enter new customer details:",
                leafcode: "A_NOREVISIT_CHANGEDCUSTOMER"
              },
              "closed": {
                label: "Site Closed (forever)",
                input: false,
                leafcode: "A_NOREVISIT_CLOSED"
              },
              "turnedaway": {
                label: "Turned Away by Customer",
                input: true,
                input_message: "Why were you turned away and by who?",
                leafcode: "A_NOREVISIT_TURNEDAWAY"
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
                leafcode: "A_BUILDERTORECTIFY"
              },
              "fabricator": {
                label: "Fabricator",
                input: true,
                input_message: "What needs to be rectified?",
                leafcode: "A_FABRICATORTORECTIFY"
              },
              "other": {
                label: "Other",
                input: true,
                input_message: "What needs to be rectified?",
                leafcode: "A_OTHERTORECTIFY"
              }
            }
          },
          "firesecurity": {
            label: "Fire/Security/Electrical Connections",
            input: false,
            nodes: {
              "fire": {
                label: "Fire",
                value: "Emergency Fire System",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "A_CONNECTION_NOTCONNECTED"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYUS"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYOTHERS"
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
                        leafcode: "A_CONNECTION_ASSISTEDONSITE"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "A_CONNECTION_OFFICETOASSIST"
                      }
                    }
                  }
                }
              },
              "security": {
                label: "Security/Access Control",
                value: "Security/ Access Control System",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "A_CONNECTION_NOTCONNECTED"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYUS"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYOTHERS"
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
                        leafcode: "A_CONNECTION_ASSISTEDONSITE"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "A_CONNECTION_OFFICETOASSIST"
                      }
                    }
                  }
                }
              },
              "power": {
                label: "Power/Electrician",
                value: "Mains Power/ GPO",
                input: false,
                nodes: {
                  "notconnected": {
                    label: "Not Yet Connected",
                    input: false,
                    leafcode: "A_CONNECTION_NOTCONNECTED"
                  },
                  "connected": {
                    label: "Connected",
                    input: false,
                    nodes: {
                      "us": {
                        label: "By Us",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYUS"
                      },
                      "others": {
                        label: "By Others",
                        input: false,
                        leafcode: "A_CONNECTION_CONNECTED_BYOTHERS"
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
                        leafcode: "A_CONNECTION_ASSISTEDONSITE"
                      },
                      "office": {
                        label: "Office to Provide",
                        input: true,
                        input_message: "What is needed?",
                        leafcode: "A_CONNECTION_OFFICETOASSIST"
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
            leafcode: "A_TESTEDWITHBUILDER"
          },
          "notifiedbuilder": {
            label: "Updated Builder",
            input: false,
            leafcode: "A_NOTIFIED_BUILDER"
          },
          "signs": {
            label: "Customer to Erect Signage",
            input: false,
            leafcode: "A_CUSTOMERTOERECTSIGNS"
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
              "noissue": {
                label: "No Issues Found",
                input: false,
                leafcode: "A_MAINT_COMPLETE_NOISSUES"
              },
              "issue": {
                label: "Issues Found",
                input: false,
                leafcode: "A_MAINT_COMPLETE_ISSUES"
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
                leafcode: "A_MAINT_ADNDOOR_ONCEOFF"
              },
              "tobeadded": {
                label: "To be Added to Contract",
                input: false,
                leafcode: "A_MAINT_ADNDOOR_ADDTOCONTRACT"
              }
            }
          },
          "notcompleted": {
            label: "Not Completed",
            input: false,
            leafcode: "A_MAINT_NOTCOMPLETED"
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
                leafcode: "A_COMM_INSTALL_ALL_SWITCHSENSOR"
              },
              "some": {
                label: "Did Not Install a Switch/Sensor",
                input: true,
                input_message: "Which one(s) and why?",
                leafcode: "A_COMM_INSTALL_SOME_SWITCHSENSOR"
              },
              "extra": {
                label: "Installed Additional Switch/Sensor",
                input: true,
                input_message: "Which one(s) and why?",
                leafcode: "A_COMM_INSTALL_EXTRA_SWITCHSENSOR"
              },
              "leftonsite": {
                label: "Left Switches/Sensors Onsite",
                input: true,
                input_message: "Which one(s) and where?",
                leafcode: "A_COMM_LEFTONSITE_SWITCHSENSOR"
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
                    leafcode: "A_TRAP_RECTIFIED_BYUS"
                  },
                  "them": {
                    label: "By Others",
                    input: true,
                    input_message: "Who and how was the issue rectified?",
                    leafcode: "A_TRAP_RECTIFIED_BYOTHERS"
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
                    leafcode: "A_TRAP_NOTRECTIFIED_BYUS"
                  },
                  "them": {
                    label: "By Others",
                    input: true,
                    input_message: "By who and how will the issue be rectified?",
                    leafcode: "A_TRAP_NOTRECTIFIED_BYOTHERS"
                  }
                }
              }
            }
          },
          "installissue": {
            label: "Fixed Install Issue",
            input: false,
            leafcode: "A_FIX_INSTALLISSUE"
          },
          "training": {
            label: "Trained Onsite Contact",
            input: false,
            leafcode: "A_TRAINED_CONTACT"
          },
          "prewire": {
            label: "Pre-wire Completed",
            input: false,
            leafcode: "A_PREWIRE_COMPLETE"
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
            leafcode: "A_INDUCTION_COMPLETE"
          },
          "instructed": {
            label: "Instructed Customer Over Phone",
            input: true,
            input_message: "Who did you instruct?",
            leafcode: "A_INSTRUCTED_CUSTOMER"
          },
          "observe": {
            label: "Customer to Observe & Report",
            input: false,
            leafcode: "A_CUSTOMEROBSERVATION"
          },
          "replaced": {
            label: "Replaced Component",
            input: false,
            parts: true,
            input_message: "What did you replace?",
            leafcode: "A_REPLACEDPART"
          },
          "adjusteddoor": {
            label: "Adjusted Door Panel",
            input: false,
            leafcode: "A_ADJUSTEDDOOR"
          },
          "sensors": {
            label: "Tweaked Sensor Settings",
            input: false,
            leafcode: "A_ADJUSTEDSENSOR"
          },
          "modepad": {
            label: "Modified Mode Pad Settings",
            input: false,
            leafcode: "A_ADJUSTEDMODEPAD"
          },
          "speeds": {
            label: "Modified Spped Settings",
            input: false,
            leafcode: "A_ADJUSTEDSPEEDS"
          },
          "installed": {
            label: "Installed New Part",
            input: false,
            parts: true,
            input_message: "Which part(s) did you install?",
            leafcode: "A_INSTALLEDPART"
          },
          "alignment": {
            label: "Fixed Alignment Issue",
            input: false,
            leafcode: "A_FIXALIGNMENT"
          },
          "shopfront": {
            label: "Moved/Adjusted Shopfront/Frame",
            input: false,
            leafcode: "A_FIXSHOPFRONT"
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
            parts: true,
            leafcode: "A_QUOTEPART"
          },
          "operator": {
            label: "Send Quote for Operator",
            input: false,
            leafcode: "A_QUOTEOPERATOR"
          },
          "maintenance": {
            label: "Send Quote for Service Program",
            input: false,
            leafcode: "A_QUOTEMAINTENANCE"
          },
          "works": {
            label: "Send Quote for Additional Works",
            input: false,
            leafcode: "A_QUOTEWORKS"
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
            leafcode: "A_OPERATEDIFFERENTLY"
          },
          "trainedstaff": {
            label: "Trained Staff Onsite",
            input: false,
            nodes: {
              "useswitch": {
                label: "How to Use Switches",
                input: false,
                leafcode: "A_TRAIN_SWITCHES"
              },
              "usemodepad": {
                label: "How to Use Mode Pad",
                input: false,
                leafcode: "A_TRAIN_MODEPAD"
              },
              "sensors": {
                label: "How the Sensors Function",
                input: false,
                leafcode: "A_TRAIN_SENSORS"
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
  nodes: worknotes_submap
};
