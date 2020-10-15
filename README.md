<a href="https://www.autoingress.com.au">
  <img src="src/images/AI_NEW_LOGO.jpg" alt="Logo" height="80">
</a>

# Auto Ingress Work Note Generator

This tool is designed for use by auto ingress field technicians in order to assist in the generation of work notes at the completion of a job. 

The user navigates a simple menu system, pressing buttons and only typing information where absolutely needed. In this way work notes can be created very quickly and with reduced spelling or grammatical errors. 

The disconnect between the UI that the technician sees and the work notes generated at the other end facilitates careful control of the wording used to report more sensitive situations onsite back to the customer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before proceeding, make sure you have a copy of NodeJS installed and running on your system.

### Installing

First clone the project's repository and install all dependencies.

```
$ git clone https://github.com/Someone535/AI-worknote-gen.git
$ cd AI-worknote-gen
$ npm install
```

If you would like to have the work note generator integrated with a Netsuite RESTLET so that it can gather data from your Netsuite system, be sure to create your own CREDENTIALS file in the server sub-folder.

Your Netsuite administrator should be able to provide you a Token Key &amp; Secret for a netsuite account/role combo. They should also be able to provide you the Consumer Key &amp; Secret for the integration record the token was generated against.

Example `src/server/CREDENTIALS` file:
```
module.exports = {
  token: {
    key: [TOKEN_KEY],
    secret: [TOKEN_SECRET]
  },
  consumer: {
    key: [CONSUMER_KEY],
    secret: [CONSUMER_SECRET]
  }
}
```

When ready, build the project and run the server side script. Connect to localhost:3000 to view the app in action (the port number may vary if your PORT environment variable was set).

```
$ npm run build
$ npm start
```

## Development

During development you may want to use the watch script to have the src re-compiled as you make changes. This will watch for server side changes as well as client side and recompile accordingly. This will not automatically re-load the page for any clients connected.

```
$ npm run watch
```

### Modifying Config Files

Config can be modified via the three files saved to the `src/config/` directory.

* `src/config/ui-tree.js` Defines the user interface structure that the user navigates.
* `src/config/ui-to-notes.js` Lists the rules applied for each leafcode the user submits.
* `src/config/notes-tree.js` Defines the structure and format of the work notes themselves.

The user makes selections in the UI that gathers data and saves a list of leafcodes. Each leafcode triggers a series of rules that builds out the work notes tree for this particular set of work notes. This tree is then collapsed following the format laid out in `/src/config/notes-tree.js`.

Once changes have been made to the config you will want to verify that the config is valid.

```
$ npm run test-config
```

Another handy tool is the UI Alphabetizer which will run through your `src/config/ui-tree.js` file and sort all the parameters alphabetically.

Note that this ignores the very first level of nodes. This allows you to maintain your own order for the first set of options the user is presented while the rest are still sorted alphabetically.

Run this with the following command:
```
$ npm run alpha-ui
```

## Deployment

In order to deploy this app to a live system, simply follow the instructions above for [Getting Started](#getting-started).

## Built With

* [React](https://reactjs.org)
* [Webpack](https://webpack.js.org)
* [Express](https://expressjs.com)

## Authors

* **Aidan Jessen** - *On behalf of Auto Ingress Pty Ltd* - [Someone535](https://github.com/Someone535)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public Licence - see the [COPYING](COPYING) file for details.

## Acknowledgements

* Background by MattLipman from [SVGBackgrounds.com](https://www.svgbackgrounds.com)
