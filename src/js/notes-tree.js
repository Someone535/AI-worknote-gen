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
  format: "{ARRIVAL_NOTES}{ALL_DOORS}{SPECIFIC_DOORS}{REMAINING_DOORS}{DEPARTURE_NOTES}",
  nodes: {
    "ARRIVAL_NOTES": {
      format: "{opening:\n}\n",
      nodes: {
        "opening": "Opening notes.",
      }
    },
    "DEPARTURE_NOTES": {
      format: "{advisecustomer}{leftsite}",
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
      format: "",
      nodes: {
      }
    },
    "SPECIFIC_DOORS": {
      format: "",
      nodes: {
      }
    },
    "REMAINING_DOORS": {
      format: "",
      nodes: {
      }
    }
  }
};
