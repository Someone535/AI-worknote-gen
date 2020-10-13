# Auto Ingress Work Note Generator

This tool is designed for use by auto ingress field technicians in order to assist in the generation of work notes at the completion of a job. 

The user navigates a simple menu system, pressing buttons and only typing information where absolutely needed. In this way work notes can be created very quickly and with reduced spelling or grammatical errors. 

The disconnect between the UI that the technician sees and the work notes generated at the other end facilitates careful control of the wording used to report more sensitive situations onsite back to the customer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

Your Netsuite administrator should be able to provide you a token key &amp; secret for a netsuite account/role combo. They should also be able to provide you the consumer key &amp; secret for the integration record the token was generated against.

Example `/src/server/CREDENTIALS` file:
```
var CREDENTIALS;
export default CREDENTIALS = {
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

When ready, build the system project and run the server script. Connect to localhost:3000 to view the app (port number may be different if your PORT environment variable was set).

```
$ npm run build
$ npm start
```

## Development

During development you may want to use the watch script to have the src re-compiled as you make changes. This will watch for server side changes as well as client side and recompile accordingly. This will not automatically re-load the page for any clients connected.

```
$ npm run watch
```

### Running the tests

Config can be modified via the three files saved to the `/src/config/` directory.

Once changes have been made you will want to verify that the config is valid.

```
$ npm run test-config
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
