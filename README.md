# athlete-profile

Working demo is deployed [here](http://104.236.97.183:8080).

This project can be run locally:
* Install dependencies with `npm install` and `bower install`
* Set database configuration in `/config/db.js` using a `url` property
* Run the server with `node server.js` (defaults to port 8080)

### Major Issues

* List of all profiles not properly formatted (raw JSON is displayed instead)
* Users may navigate to form pages by url, starting the form in the middle
* PUT not implemented

### Minor Issues
* Design not quite up to par
* Modules define their functions in global space (should encase each module in a singly-run function)
* Link to create a new profile from `/list` should reload the page instead of just changing the view
* Deleting interests/charities on `/details` does not work -- e.g.
`$scope.data.splice(i, 1)`
should instead be
`$scope.data.interests.splice(i, 1);`
The same function is properly implemented in `/sports`.
