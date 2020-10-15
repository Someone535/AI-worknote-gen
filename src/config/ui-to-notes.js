/** ui-to-notes.js - Config file for mapping rules between the UI and the
 *                    work note format tree
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
module.exports = {

  /* Symptoms */
  "S_BATTERYFAILDISPLAY": [
    { path: [ "symptoms", "alerts", "listed" ], value: "Battery Failure" }
  ],
  "S_CLOSINGFAST": [
    { path: [ "symptoms", "speedissues" ], value: "Doors traveling closed too quickly." }
  ],
  "S_CLOSINGSLOW": [
    { path: [ "symptoms", "speedissues" ], value: "Doors traveling closed too slowly." }
  ],
  "S_DOOR_BANG": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} banging {1}." }
  ],
  "S_DOOR_CLICKING": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} clicking." }
  ],
  "S_DOOR_DAMAGED": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} damaged." }
  ],
  "S_DOOR_JAMMED": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} jammed." }
  ],
  "S_DOOR_MISALIGNED": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} misaligned." }
  ],
  "S_DOOR_RUBBING": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} rubbing/scraping {1}." }
  ],
  "S_DOOR_SHUDDERING": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} shuddering." }
  ],
  "S_DOOR_SQUEAK": [
    { path: [ "symptoms", "mechanicalissues" ], value: "{0} squeaking." }
  ],
  "S_DOOR_LOOSE": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door is too loose in the floor guide." }
  ],
  "S_DOORPANELOFFTRACK": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door panel knocked/fallen out of it's track." }
  ],
  "S_GAPBETWEEN": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door panels leaving a gap when closed." }
  ],
  "S_KEYPADBEEPING": [
    { path: [ "symptoms", "listed" ], value: "Digital keypad making a beeping sound." }
  ],
  "S_LONGDWELL": [
    { path: [ "symptoms", "speedissues" ], value: "Door dwells in the open position too long." }
  ],
  "S_MODENOTWORKING": [
    { path: [ "symptoms", "listed" ], value: "Door not working as expected when placed in {0}." }
  ],
  "S_NOTAUTOMATIC": [
    { path: [ "symptoms", "listed" ], value: "Door not operating automatically." }
  ],
  "S_NOTCLOSING": [
    { path: [ "symptoms", "listed" ], value: "Door not closing." }
  ],
  "S_NOTOPENFULLY": [
    { path: [ "symptoms", "listed" ], value: "Door not opening fully." }
  ],
  "S_OPENINGFAST": [
    { path: [ "symptoms", "speedissues" ], value: "Doors traveling open too quickly." }
  ],
  "S_OPENINGSLOW": [
    { path: [ "symptoms", "speedissues" ], value: "Doors traveling open too slowly." }
  ],
  "S_POWERFAILDISPLAY": [
    { path: [ "symptoms", "alerts", "listed" ], value: "AC Power Failure" }
  ],
  "S_RANDOMOPEN": [
    { path: [ "symptoms", "listed" ], value: "Door opening seemingly at random." }
  ],
  "S_ROUGHBOTHDIRECTIONS": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door runs roughly in both directions." }
  ],
  "S_ROUGHCLOSE": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door runs roughly when traveling closed." }
  ],
  "S_ROUGHOPEN": [
    { path: [ "symptoms", "mechanicalissues" ], value: "Door runs roughly when taveling open." }
  ],
  "S_SAFEMODEDISPLAY": [
    { path: [ "symptoms", "alerts", "listed" ], value: "Safe Mode" }
  ],
  "S_SENSOR_CLICKING": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor is clicking." }
  ],
  "S_SENSOR_LIGHTFLASHING": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor's light is flashing." }
  ],
  "S_SENSOR_LIGHTNOTFLASHING": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor's light does not flash." }
  ],
  "S_SENSOR_MISSINGCOVER": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor is missing it's cover." }
  ],
  "S_SENSOR_NOTDETECTING": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor is not detecting properly." }
  ],
  "S_SENSOR_NOTWORKING": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor is is not working at all." }
  ],
  "S_SENSOR_TOOSENSITIVE": [
    { path: [ "symptoms", "sensorissues" ], value: "{0} sensor is too sensitive." }
  ],
  "S_SHORTDWELL": [
    { path: [ "symptoms", "speedissues" ], value: "Door does not dwell in the open position long enough." }
  ],
  "S_STUCKINMODE": [
    { path: [ "symptoms", "listed" ], value: "Door is stuck in mode: {0}." }
  ],
  "S_SWITCH_BEEPING": [
    { path: [ "symptoms", "switchissues" ], value: "{0} is beeping." }
  ],
  "S_SWITCH_DAMAGED": [
    { path: [ "symptoms", "switchissues" ], value: "{0} is visibly damaged." }
  ],
  "S_SWITCH_NOTWORKING": [
    { path: [ "symptoms", "switchissues" ], value: "{0} is not working." }
  ],

  /* Faults */
  "F_BADFIXINGSFORSENSORS": [
    { path: [ "faults", "listed" ], value: "Inappropriate fixings were used to mount the sensors." }
  ],
  "F_BODYTRAP": [
    { path: [ "faults", "listed" ], value: "Body trap identified {0}." }
  ],
  "F_BOGIE_DAMAGED": [
    { path: [ "faults", "listed" ], value: "Bogie has become damaged." }
  ],
  "F_BOGIE_SEIZED": [
    { path: [ "faults", "listed" ], value: "Bogie has become seized." }
  ],
  "F_BOGIE_WORN": [
    { path: [ "faults", "listed" ], value: "Bogie is worn down." }
  ],
  "F_CABLE_WIREDWRONG": [
    { path: [ "faults", "listed" ], value: "{0} cable has been wired incorrectly." }
  ],
  "F_CABLE_DAMAGED": [
    { path: [ "faults", "listed" ], value: "{0} cable has become damaged." }
  ],
  "F_CABLE_JAMMED": [
    { path: [ "faults", "listed" ], value: "{0} cable has become jammed in the running gear." }
  ],
  "F_CABLE_LOOSE": [
    { path: [ "faults", "listed" ], value: "{0} cable was loose in it's terminal." }
  ],
  "F_CABLE_UNSECURED": [
    { path: [ "faults", "listed" ], value: "{0} cable was not secured appropriately." }
  ],
  "F_COMPONENT_DAMAGED": [
    { path: [ "faults", "listed" ], value: "{0} is damaged." }
  ],
  "F_COMPONENT_ENCODERFAILED": [
    { path: [ "faults", "listed" ], value: "{0} encoder has failed." }
  ],
  "F_COMPONENT_FAILED": [
    { path: [ "faults", "listed" ], value: "{0} has failed." }
  ],
  "F_COMPONENT_FAULTY": [
    { path: [ "faults", "listed" ], value: "{0} is faulty." }
  ],
  "F_COMPONENT_LUBE": [
    { path: [ "faults", "listed" ], value: "{0} has been inappropriately lubricated." }
  ],
  "F_COMPONENT_MISALIGNED": [
    { path: [ "faults", "listed" ], value: "{0} has become misaligned." }
  ],
  "F_COMPONENT_SEIZED": [
    { path: [ "faults", "listed" ], value: "{0} has seized." }
  ],
  "F_COMPONENT_WORN": [
    { path: [ "faults", "listed" ], value: "{0} is worn." }
  ],
  "F_COMPONENT_ENDPULLEYWORN": [
    { path: [ "faults", "listed" ], value: "End pulley is damaged/worn." }
  ],
  "F_COWL_BENT": [
    { path: [ "faults", "listed" ], value: "Cowl has been bent or has bowed." }
  ],
  "F_DOOR_DAMAGED": [
    { path: [ "faults", "listed" ], value: "Door panel has been damaged or bent." }
  ],
  "F_DOOR_FIXINGS_LOOSE": [
    { path: [ "faults", "listed" ], value: "Door panel fixings have come loose." }
  ],
  "F_ELECTRICALHAZARD": [
    { path: [ "faults", "listed" ], value: "An electrical hazard has been identified." }
  ],
  "F_FINGERTRAP": [
    { path: [ "faults", "listed" ], value: "Finger trap has been identified {0}." }
  ],
  "F_FLATBATTERY": [
    { path: [ "faults", "listed" ], value: "Batteries are flat." }
  ],
  "F_FLOORGUIDE_FIXINGSLOOSE": [
    { path: [ "faults", "listed" ], value: "Floor guide fixings have come loose." }
  ],
  "F_FLOORGUIDE_DAMAGED": [
    { path: [ "faults", "listed" ], value: "Floor guide has been damaged." }
  ],
  "F_FLOORGUIDE_TOOLOOSE": [
    { path: [ "faults", "listed" ], value: "Floor guide was adjusted to be too loose." }
  ],
  "F_FLOORGUIDE_TOOTIGHT": [
    { path: [ "faults", "listed" ], value: "Floor guide was adjusted to be too tight." }
  ],
  "F_FRAME_DAMAGED": [
    { path: [ "faults", "listed" ], value: "The shopfront/frame has been bent/damaged." }
  ],
  "F_HANGERBAR_BENT": [
    { path: [ "faults", "listed" ], value: "The hanger bar has become bent." }
  ],
  "F_HANGERBAR_WRONGSIZE": [
    { path: [ "faults", "listed" ], value: "The hanger bar is the incorrect size." }
  ],
  "F_HEADTRAP": [
    { path: [ "faults", "listed" ], value: "Head trap identified {0}." }
  ],
  "F_OPERATOR_BADFIXINGS": [
    { path: [ "faults", "listed" ], value: "The operator has been inappropriately fixed to the wall." }
  ],
  "F_PELMET_DIRTY": [
    { path: [ "faults", "listed" ], value: "The pelmet is dirty." }
  ],
  "F_PELMET_SCRATCHED": [
    { path: [ "faults", "listed" ], value: "The pelmet has become scratched." }
  ],
  "F_SWINGARM_BADFIXINGS": [
    { path: [ "faults", "listed" ], value: "The swing arm was not fixed to the door panel appropriately." }
  ],
  "F_SWINGARMDAMAGED": [
    { path: [ "faults", "listed" ], value: "The swing arm has become damaged." }
  ],
  "F_SWINGARMLOOSE": [
    { path: [ "faults", "listed" ], value: "The swing arm is too loose." }
  ],
  "F_SWINGARMTIGHT": [
    { path: [ "faults", "listed" ], value: "The swing arm is too tight." }
  ],
  "F_SWITCH_DAMAGED": [
    { path: [ "faults", "listed" ], value: "{0} has been damaged." }
  ],
  "F_SWITCH_FAULTY": [
    { path: [ "faults", "listed" ], value: "{0} is faulty." }
  ],
  "F_SWITCH_LOOSEFIXINGS": [
    { path: [ "faults", "listed" ], value: "{0} has loose fixings." }
  ],
  "F_SWITCH_WRONGWIRING": [
    { path: [ "faults", "listed" ], value: "{0} is wired incorrectly." }
  ],
  "F_TRACK_DAMAGED": [
    { path: [ "faults", "listed" ], value: "The track has become damaged." }
  ],
  "F_TRACK_FIXINGS": [
    { path: [ "faults", "listed" ], value: "There are inappropriate fixings within the track area." }
  ],
  "F_WATERDAMAGEDSENSORS": [
    { path: [ "faults", "listed" ], value: "The sensors have become water damaged." }
  ],
  "F_WHEEL_DAMAGED": [
    { path: [ "faults", "listed" ], value: "The track wheels are damaged." }
  ],
  "F_WHEEL_SEIZED": [
    { path: [ "faults", "listed" ], value: "The track wheels have seized." }
  ],
  "F_WHEEL_WORN": [
    { path: [ "faults", "listed" ], value: "The track wheels have become worn." }
  ],
  "F_WRONGNUMBEROFSENSORS": [
    { path: [ "faults", "listed" ], value: "The entry does not have an appropriate number of sensors." }
  ],
  "F_WRONGPOSITIONOFSENSORS": [
    { path: [ "faults", "listed" ], value: "The sensors have not been position/aimed appropriately." }
  ],
  "F_WRONGSETTINGSOFSENSORS": [
    { path: [ "faults", "listed" ], value: "The sensor settings have not been set correctly." }
  ],
  "F_WRONGTYPEOFSENSORS": [
    { path: [ "faults", "listed" ], value: "Inappropriate sensors have been used." }
  ],

  /* Possible Causes */
  "C_BADMANUFACTURE": [
    { path: [ "causes", "listed" ], value: "A manufacturing fault." }
  ],
  "C_DIFFERENTUSECASE": [
    { path: [ "causes", "listed" ], value: "The use-case has changed since the entry was last configured." }
  ],
  "C_INAPPROPRIATECONFIG": [
    { path: [ "causes", "listed" ], value: "The configuration was inappropriate for the use-case." }
  ],
  "C_INCORRECTPART": [
    { path: [ "causes", "listed" ], value: "An inappropriate part was installed." }
  ],
  "C_INCORRECTUSAGE": [
    { path: [ "causes", "listed" ], value: "The entry has been used incorrectly." }
  ],
  "C_OLDAGE": [
    { path: [ "causes", "listed" ], value: "General wear/tear." }
  ],
  "C_OVERUSE": [
    { path: [ "causes", "listed" ], value: "Wear/tear due to overuse." }
  ],
  "C_PREVTECH_MISTAKE": [
    { path: [ "causes", "listed" ], value: "The previous technician made an error." }
  ],
  "C_PREVTECH_OVERSIGHT": [
    { path: [ "causes", "listed" ], value: "Simple oversight by a previous technician." }
  ],
  "C_THIRDPARTY_FAULT": [
    { path: [ "causes", "listed" ], value: "Fault in a third party system." }
  ],
  "C_THIRDPARTY_OVERSIGHT": [
    { path: [ "causes", "listed" ], value: "Simple oversight by a third party contractor." }
  ],
  "C_THIRDPARTY_INCORRECTWIRING": [
    { path: [ "causes", "listed" ], value: "Incorrect wiring from a third party contractor." }
  ],

  /* Actions */
  "A_REWIRED": [
    { path: [ "actions", "listed" ], value: "Rewired {0}." }
  ],
  "A_ADJUSTEDDOOR": [
    { path: [ "actions", "listed" ], value: "Adjusted the alignment of the door panel." }
  ],
  "A_ADJUSTEDMODEPAD": [
    { path: [ "actions", "listed" ], value: "Adjusted the settings within the digital key pad." }
  ],
  "A_ADJUSTEDSENSOR": [
    { path: [ "actions", "listed" ], value: "Adjusted the sensor settings." }
  ],
  "A_ADJUSTEDSPEEDS": [
    { path: [ "actions", "listed" ], value: "Adjusted the speed settings." }
  ],
  "A_BUILDERTORECTIFY": [
    { path: [ "actions", "listed" ], value: "Builder to rectify: {0}." }
  ],
  "A_COMM_INSTALL_ALL_SWITCHSENSOR": [
    { path: [ "actions", "listed" ], value: "Installed all switches/sensors." }
  ],
  "A_COMM_INSTALL_EXTRA_SWITCHSENSOR": [
    { path: [ "actions", "listed" ], value: "Installed an extra switch/sensor: {0}." }
  ],
  "A_COMM_INSTALL_SOME_SWITCHSENSOR": [
    { path: [ "actions", "listed" ], value: "Did not install all sensors/switches: {0}." }
  ],
  "A_COMM_LEFTONSITE_SWITCHSENSOR": [
    { path: [ "actions", "listed" ], value: "Left switches/sensors onsite: {0}." }
  ],
  "A_CONNECTION_ASSISTEDONSITE": [
    { path: [ "actions", "listed" ], value: "Assisted with {0} connection while onsite." }
  ],
  "A_CONNECTION_CONNECTED_BYOTHERS": [
    { path: [ "actions", "listed" ], value: "{0} has been connected by others." }
  ],
  "A_CONNECTION_CONNECTED_BYUS": [
    { path: [ "actions", "listed" ], value: "connected {0} while onsite." }
  ],
  "A_CONNECTION_NOTCONNECTED": [
    { path: [ "actions", "listed" ], value: "{0} not yet connected." }
  ],
  "A_CONNECTION_OFFICETOASSIST": [
    { path: [ "actions", "listed" ], value: "The contractor responsible for the {0} requires {1} before a connection can be completed." }
  ],
  "A_CUSTOMEROBSERVATION": [
    { path: [ "actions", "listed" ], value: "Instructed contact onsite to observe and report." }
  ],
  "A_CUSTOMERTOERECTSIGNS": [
    { path: [ "actions", "listed" ], value: "Customer to erect additional signage around the entryway." }
  ],
  "A_FABRICATORTORECTIFY": [
    { path: [ "actions", "listed" ], value: "Fabricator to rectify: {0}." }
  ],
  "A_FIXALIGNMENT": [
    { path: [ "actions", "listed" ], value: "Fixed the alignment issue." }
  ],
  "A_FIX_INSTALLISSUE": [
    { path: [ "actions", "listed" ], value: "Fixed installation issues." }
  ],
  "A_FIXSHOPFRONT": [
    { path: [ "actions", "listed" ], value: "Fixed/repaired issues with the shopfront/framework." }
  ],
  "A_INDUCTION_COMPLETE": [
    { path: [ "actions", "listed" ], value: "Completed the onsite induction." }
  ],
  "A_INSTALLEDPART": [
    { path: [ "actions", "listed" ], value: "Installed a new part(s): {0}." }
  ],
  "A_INSTRUCTED_CUSTOMER": [
    { path: [ "actions", "listed" ], value: "Instructed customer on use of door over the phone." }
  ],
  "A_MAINT_ADNDOOR_ADDTOCONTRACT": [
    { path: [ "actions", "listed" ], value: "Additional door maintained that needs to be added to the ongoing service agreement." }
  ],
  "A_MAINT_ADNDOOR_ONCEOFF": [
    { path: [ "actions", "listed" ], value: "Additional door maintained as a once-off." }
  ],
  "A_MAINT_COMPLETE_ISSUES": [
    { path: [ "actions", "listed" ], value: "Maintenance completed, issues found." }
  ],
  "A_MAINT_COMPLETE_NOISSUES": [
    { path: [ "actions", "listed" ], value: "Maintenance completed, no problems found." }
  ],
  "A_MAINT_NOTCOMPLETED": [
    { path: [ "actions", "listed" ], value: "Maintenance not completed." }
  ],
  "A_NOREVISIT_CHANGEDCUSTOMER": [
    { path: [ "actions", "listed" ], value: "Onsite customer has changed, cannoct return to complete service. New customer details: {0}." }
  ],
  "A_NOREVISIT_CLOSED": [
    { path: [ "actions", "listed" ], value: "Site appears to have closed down for good." }
  ],
  "A_NOREVISIT_NOLONGEREXISTS": [
    { path: [ "actions", "listed" ], value: "Cannot return to complete works, this door no longer exists." }
  ],
  "A_NOREVISIT_NOTINUSE": [
    { path: [ "actions", "listed" ], value: "Cannot return to complete work, this door is no longer in use." }
  ],
  "A_NOREVISIT_TURNEDAWAY": [
    { path: [ "actions", "listed" ], value: "Turned away by contact onsite ({0}) and instructed not to return." }
  ],
  "A_NOTIFIED_BUILDER": [
    { path: [ "actions", "listed" ], value: "Updated the builder as to the outcome of this visit." }
  ],
  "A_OPERATEDIFFERENTLY": [
    { path: [ "actions", "listed" ], value: "Instructed the customer ({0}) to operate the door differently." }
  ],
  "A_OTHERTORECTIFY": [
    { path: [ "actions", "listed" ], value: "Rectification work required by others: {0}." }
  ],
  "A_PREWIRE_COMPLETE": [
    { path: [ "actions", "listed" ], value: "Prewire completed." }
  ],
  "A_QUOTEMAINTENANCE": [
    { path: [ "actions", "listed" ], value: "Provided a quote for an ongoing maintenance agreement." }
  ],
  "A_QUOTEOPERATOR": [
    { path: [ "actions", "listed" ], value: "Provided a quote for a new operator." }
  ],
  "A_QUOTEPART": [
    { path: [ "actions", "listed" ], value: "Provided a quote for new parts required/recommended." }
  ],
  "A_QUOTEWORKS": [
    { path: [ "actions", "listed" ], value: "Provided a quote for additional works required/recommended." }
  ],
  "A_REPLACEDPART": [
    { path: [ "actions", "listed" ], value: "Replaced a part(s): {0}." }
  ],
  "A_REVISIT_2TECHS": [
    { path: [ "actions", "listed" ], value: "Must return with 2 technicians to complete works safely." }
  ],
  "A_REVISIT_BUSY": [
    { path: [ "actions", "listed" ], value: "Must return when site is not so busy." }
  ],
  "A_REVISIT_CLOSED": [
    { path: [ "actions", "listed" ], value: "Must return when site is open." }
  ],
  "A_REVISIT_INDUCTION": [
    { path: [ "actions", "listed" ], value: "Must return after completing induction." }
  ],
  "A_REVISIT_LADDER": [
    { path: [ "actions", "listed" ], value: "Must return with tall ladder in order to complete works safely." }
  ],
  "A_REVISIT_OLDPART": [
    { path: [ "actions", "listed" ], value: "Must return with an alternative part to replace one that is no longer stocked." }
  ],
  "A_REVISIT_PARTMISSING": [
    { path: [ "actions", "listed" ], value: "Part required is not currently available onboard, must return when re-stocked." }
  ],
  "A_REVISIT_TURNEDAWAY": [
    { path: [ "actions", "listed" ], value: "Must return another time: {0}." }
  ],
  "A_TESTEDWITHBUILDER": [
    { path: [ "actions", "listed" ], value: "Tested current setup with builder onsite." }
  ],
  "A_TRAINED_CONTACT": [
    { path: [ "actions", "listed" ], value: "Trained onsite contact in use of the door." }
  ],
  "A_TRAIN_MODEPAD": [
    { path: [ "actions", "listed" ], value: "Provided training to the onsite contact in the use of the digital mode pad." }
  ],
  "A_TRAIN_SENSORS": [
    { path: [ "actions", "listed" ], value: "Provided training to the onsite contact as to the operation of the sensors." }
  ],
  "A_TRAIN_SWITCHES": [
    { path: [ "actions", "listed" ], value: "Provided training to the onsite contact in the use of the switches." }
  ],
  "A_TRAP_NOTRECTIFIED_BYOTHERS": [
    { path: [ "actions", "listed" ], value: "Entrapment issues to be rectified by others: {0}." }
  ],
  "A_TRAP_NOTRECTIFIED_BYUS": [
    { path: [ "actions", "listed" ], value: "Entrapment issue to be rectified by Auto Ingress: {0}." }
  ],
  "A_TRAP_RECTIFIED_BYOTHERS": [
    { path: [ "actions", "listed" ], value: "Entrapment issue was rectified onsite by others: {0}." }
  ],
  "A_TRAP_RECTIFIED_BYUS": [
    { path: [ "actions", "listed" ], value: "Entrapment issue was rectified onsite by Auto Ingress: {0}." }
  ],

};
