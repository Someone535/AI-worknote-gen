// Sample UI Tree/Map
//

var arrive_depart_submap = {
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

var UI_MAP = {
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

