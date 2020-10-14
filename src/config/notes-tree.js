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

module.exports = {
  format: "{opening}{symptoms}{faults}{causes}{actions}",
  nodes: {
    "opening": {
      format: "\n",
      nodes: {
      }
    },
    "symptoms": {
      format: "Symptoms:{alerts}{sensorissues:f\n-> }{switchissues:f\n-> }{speedissues:f\n-> }{mechanicalissues:f\n-> }{listed:f\n-> }\n",
      nodes: {
        "alerts": {
          format: "\n-> Digital keypad displays: {listed:, }.",
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
      format: "Faults:{listed:f\n->}\n",
      nodes: {
        "listed": [],
      }
    },
    "causes": {
      format: "Suspected Causes:{listed:f\n->}\n",
      nodes: {
        "listed": [],
      }
    },
    "actions": {
      format: "Actions Taken:{listed:f\n->}\n",
      nodes: {
        "listed": [],
      }
    },
  }
}
