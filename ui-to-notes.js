// Sample UI to Worknotes Mapping Rules
//

var MAP_TO_TREE = {
  "INDUCTED": [
    { path: [ "{0}", "inducted" ], value: null }
  ],
  "SITECLOSED": [
    { path: [ "{0}", "leftsite", "reason" ], value: "site was closed" }
  ],
  "CUSTOMERBUSY": [
    { path: [ "{0}", "leftsite", "reason" ], value: "customer was too busy as advised by {1}" }
  ],
  "SITEBUSY": [
    { path: [ "{0}", "leftsite", "reason" ], value: "site was too busy" }
  ],
  "CUSTOMERPHONEUPDATE": [
    { path: [ "{0}", "advisedcustomer", "method" ], value: "over the phone" },
    { path: [ "{0}", "advisedcustomer", "name" ], value: "{1}" },
  ],
  "CUSTOMERINPERSONUPDATE": [
    { path: [ "{1}", "advisedcustomer", "method" ], value: "in person" },
    { path: [ "{0}", "advisedcustomer", "name" ], value: "{1}" },
  ],
  "CUSTOMERMESSAGEUPDATE": [
    { path: [ "{0}", "advisedcustomer", "method" ], value: "by leaving a message" },
    { path: [ "{0}", "advisedcustomer", "name" ], value: "{1}" },
  ]
};
