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
        label: "Late (hours)",
        input: true,
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
            label: "Advised by Customer (name)",
            input: true,
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
    label: "Updated Customer (name)",
    input: true,
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

var worknotes_submap = {};

var UI_MAP;
export default UI_MAP = {
  label: "Select a Section",
  input: false,
  nodes: {
    "arrival": {
      label: "Arrival Notes",
      value: "ARRIVAL_NOTES",
      input: false,
      nodes: arrive_depart_submap
    },
    "departure": {
      label: "Departure Notes",
      value: "DEPARTURE_NOTES",
      input: false,
      nodes: arrive_depart_submap
    },
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
