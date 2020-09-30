/** notes-tree.js - Config file for the format of the finished work notes
 *
 * This file is part of the Auto Ingress Work Note Generator.
 *
 *  Copyright 2020 by Auto Ingress Pty Ltd.
 *  Written by Aidan Jessen <aidan.jessen@gmail.com>.
 *  Released under the GNU General Public License.
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

var FORMAT_TREE;
export default FORMAT_TREE = {
  format: "{opening}{symptoms}{faults}{causes}{actions}",
  nodes: {
    "opening": {
      format: "\n",
      nodes: {
      }
    },
    "symptoms": {
      format: "Symptoms displayed:\n{alerts}{sensorissues:\n}{switchissues:\n}{speedissues:\n}{mechanicalissues:\n}{listed:\n}",
      nodes: {
        "alerts": {
          format: "Digtal kepad displays: {listed:, }.",
          nodes: { "listed": [], }
        },
        "sensorissues": [],
        "switchissues": [],
        "speedissues": [],
        "mechanicalissues": [],
        "listed": [],
      }
    },
    "faults": {
            format: "Faults Found:\n{listed:\n}",
      nodes: {
        "listed": [],
      }
    },
    "causes": {
            format: "Suspected Contributing Factors:\n{listed:\n}",
      nodes: {
        "listed": [],
      }
    },
    "actions": {
      format: "Actions Taken:\n{listed:\n}",
      nodes: {
        "listed": [],
      }
    },
  }
}

var door_notes = FORMAT_TREE;
var OLD_FORMAT_TREE = {
  format: "{ARRIVAL_NOTES}{ALL_DOORS}{SPECIFIC_DOORS}{REMAINING_DOORS}{DEPARTURE_NOTES}",
  nodes: {
    "ARRIVAL_NOTES": {
      format: "{opening:\n}\n",
      nodes: {
        "opening": "Opening notes.",
      }
    },
    "DEPARTURE_NOTES": {
      format: "{advisedcustomer}{leftsite}",
      nodes: {
        "advisedcustomer": {
          format: "Provided update to customer {name} {method}. ",
          nodes: { "method": "METHOD", "name": "NAME" }
        },
        "leftsite": {
          format: "Had to leave site as, {reason}.",
          nodes: { "reason": "REASON" }
        }
      }
    },
    "ALL_DOORS": {
      format: "All Doors:\n{doornotes}",
      nodes: {
        "doornotes": door_notes,
      }
    },
    "SPECIFIC_DOORS": {
      format: "{identifier}:\n{doornotes}",
      nodes: {
        "identifier": "SPECIFICDOORS",
        "doornotes": door_notes,
      }
    },
    "REMAINING_DOORS": {
      format: "Remaining Doors:\n{doornotes}",
      nodes: {
        "doornotes": door_notes,
      }
    }
  }
};
