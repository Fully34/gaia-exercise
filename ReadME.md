# Gaia coding demo

### Steps to run the application
> git clone https://github.com/Fully34/gaia-exercise.git
> cd gaia-exercise
> npm install
> npm start
> navigate to localhost:8080

### Application Structure

* Server:
	* npm start initiates both an express server (port 8000) and a webpack-dev-server (port 8080)
	* the webpack-dev-server serves the React application
	* the express server is a data API that has only one route ('/landing')
		* when we make an http request to that route, the route's controller invokes a repository method
		* the repository method starts a promise chain using the request-promise npm module
			1. the repository makes a data request to https://d6api.gaia.com/videos/term/119931
			2. when the data request promise resolves, the repository uses helper methods to map the data returned from Gaia into consumable domain objects for the UI
			3. once the repository promise resolves, we resolve the promise chain in the controller and res.send the data (or error) back to the UI

* React:
	* src/js/main.js is the entry point for the UI application
		* it is responsible for:
			* setting up the redux store
			* initializing redux-saga
			* rendering the application in an index.html template
			* require'ing application level stylesheets
	* main.js renders the redux-connected class component \<App /\>
	* \<App /\> is the workhorse of the UI
		* it orchestrates a variety of functional components
			* renders them and passes them the props they need
			* stores event handlers and non-externally derived state
		* initiates the initial data request
	* inside the componentWillMount() method of \<App /\>, a redux action is fired
		* this action is picked up by redux-saga, which in turn makes an http request to the express server on port 8000
		* the data API then follows the flow outlined above and returns domain objects back to the UI
		* redux state is populated by this data
		* the connected \<App /\> passes props from redux (and, in some cases, its own component state) down to the functional components that consume them
	* the react application does not interact with the data returned from the API in any way other than to render (with one small exception)
		* \<App /\> reads the full array of 'videoTile' domain objects in redux state and returns a subset of them to facilitate lazily loading <VideoTile /> components
		* instead of just passing state.data.videoTiles directly through to <Content />, \<App /\> tracks how many <VideoTile /> components are currently supposed to display.  It then creates a new array from the full array in redux state (starting with the first element and going to n).  It then passes the new array to <Content />
		* the <LazyLoader /> component is passed a handler which increases the number of 'videoTile' domain objects passed to <Content /> on each click
	* redux state is used exclusively to store  data returned from the API and flag properties associated with making a data request
		* ie: the fetching flag is true when the data request is pending, so we render the <Spinner />
		* when the data is returned, fetching gets set to false, so <Spinner /> will go away
	* component state is used on \<App /\> to store a small amount of UI specific data, as well as the data needed to accomplish the lazy loading described above

* Styles
	* the styles in the application were set up in a way that each component has its own specific SASS file
	* that file is then require'd in the component and should remain tightly coupled to that component
		* this allows us to have many small, tightly coupled stylesheets
	* there are several style sheets that contain application level styles
		* they are require'd in main.js
		* this allows us to potentially remove rules from the tightly coupled stylesheets if we start seeing a lot of duplicated rules in those component-level stylesheets and add them to the application-level stylesheets
	* to accomplish responsiveness, bootstrap grid classes were incorporated
		* as well as other miscellaneous bootstrap utility classes

### Other
* the application uses webpack 3 to bundle static assets into a consumeable state
* es6 syntax is used throughout the application and transpiled with babel
* redux-saga incorporates generator functions to run as mock 'processes' in the background
	* we have one main process (watcher) and it listens for any redux action that gets emitted with a type property ending in '_API'
* the application was configured mostly from scratch
	* modelled after https://stanko.github.io/webpack-babel-react-revisited/
* other sources of inspiration/assistance:
	* https://github.com/micha3ldavid/gaia-poc
	* the almighty oracle, Google
	* Stack Overflow
