# athlete-profile

Working demo is deployed [here](104.236.97.183:8080).

This project can be run locally:
* Install dependencies with `npm install` and `bower install`
* Set database configuration in `/config/db.js` using a `url` property
* Run the server with `node server.js` (defaults to port 8080)

### Major Issues

* List of all profiles not properly formatted (raw JSON is displayed instead)
* Users may navigate to form pages by url, starting the form in the middle

### Minor Issues
* Design not quite up to par
* Modules define their functions in global space (should encase each module in a singly-run function)
