// Sample UI to Worknotes Mapping Rules
//

var MAP_TO_TREE = {
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
  ]
};
