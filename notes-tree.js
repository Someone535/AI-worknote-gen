// Sample Worknote Format Tree
//

var FORMAT_TREE = {
  format: "{ARRIVAL_NOTES}\n\n{ALL_DOORS}\n\n{SPECIFIC_DOORS}\n\n{REMAINING_DOORS}\n\n{DEPARTURE_NOTES}",
  nodes: {
    "ARRIVAL_NOTES": {
      format: "{inducted} {leftsite}",
      nodes: {
        "inducted": "Obtained induction onsite.",
        "leftsite": {
          format: "Had to leave site as, {reason}.",
          nodes: { "reason": "REASON" }
        }
      }
    },
    "DEPARTURE_NOTES": {
      format: "{advisecustomer}",
      nodes: {
        "advisedcustomer": {
          format: "Provided update to customer {name} {method}.",
          nodes: { "method": "METHOD", "name": "NAME" }
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
