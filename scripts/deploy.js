var ghpages = require('gh-pages');

ghpages.publish('out', function(err) {
    if (err) {
        console.error(err);
    }
    console.log("Successfully deployed to github pages");
});