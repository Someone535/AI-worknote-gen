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

var MAP_TO_TREE;
export default MAP_TO_TREE = {
  "ARRIVEDONTIME": [
    { path: [ "ARRIVAL_NOTES", "opening" ], value: "Arrived onsite at predetermined time." }
  ],
  "ARRIVEDLATE": [
    { path: [ "ARRIVAL_NOTES", "opening" ], value: "Arrived {1} hours late." }
  ],
  "INDUCTED": [
    { path: [ "ARRIVAL_NOTES", "opening" ], value: "Obtained induction onsite." }
  ],
  "SITECLOSED": [
    { path: [ "DEPARTURE_NOTES", "leftsite", "reason" ], value: "site was closed" }
  ],
  "CUSTOMERBUSY": [
    { path: [ "DEPARTURE_NOTES", "leftsite", "reason" ], value: "customer was too busy (advised by {1})" }
  ],
  "SITEBUSY": [
    { path: [ "DEPARTURE_NOTES", "leftsite", "reason" ], value: "site was too busy" }
  ],
  "CUSTOMERPHONEUPDATE": [
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "method" ], value: "over the phone" },
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "name" ], value: "{1}" },
  ],
  "CUSTOMERINPERSONUPDATE": [
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "method" ], value: "in person" },
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "name" ], value: "{1}" },
  ],
  "CUSTOMERMESSAGEUPDATE": [
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "method" ], value: "by leaving a message" },
    { path: [ "DEPARTURE_NOTES", "advisedcustomer", "name" ], value: "{1}" },
  ],
  "SQUEAKINGDOOR": [
    { path: [ "SPECIFIC_DOORS", "doornotes", "symptoms", "squeaking" ], value: "Door was squeaking.\n" },
  ],
};
