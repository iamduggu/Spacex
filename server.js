//Install express server
const express = require('express');
const path = require('path');

const ngApp = express();

// Serve only the static files form the dist directory
ngApp.use(express.static(__dirname + '/dist/spacex'));

ngApp.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/spacex/index.html'));
});

// Start the ngApp by listening on the default Heroku port
// START THE SERVER
// =============================================================================

var port = process.env.PORT || 8080; // set our port
ngApp.listen(port || 8080, () => {
    console.log("server is running on  " + port);
  });

