// Sample Worknote Format Tree
//

var FORMAT_TREE = {
  format: "{ARRIVAL_NOTES}\n{ALL_DOORS}\n{SPECIFIC_DOORS}\n{REMAINING_DOORS}\n{DEPARTURE_NOTES}",
  nodes: {
    "ARRIVAL_NOTES": {
      format: "{opening}",
      nodes: {
        "opening": "Opening notes.",
      }
    },
    "DEPARTURE_NOTES": {
      format: "{advisecustomer} {leftsite}",
      nodes: {
        "advisedcustomer": {
          format: "Provided update to customer {name} {method}.",
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
