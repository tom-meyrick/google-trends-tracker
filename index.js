const googleTrends = require('google-trends-api');

googleTrends.interestOverTime({keyword: 'Travel'})
.then(function(results){
  console.log('These results are awesome', results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});