// export function test(el){
// 	console.log(el + 2);
// }



// const router = express.Router();
// const   express = require("express"),
//         request = require("request"),
//         app     = express();

   
// // album name -first of arr
// router.get("/", function(req, res){
//     var apiKey = "c8303e90962e3a5ebd5a1f260a69b138";
//     request("http://api.musicgraph.com/api/v2/album/search?api_key="+ apiKey +"&artist_name=The%20Killers", 
//       function(error, response, body){
//         if (!error && response.statusCode == 200){
//         var results = JSON.parse(body);
//             res.send(results["data"][0]["title"]);
//         }
//     });
    
// });

// // get tracks from album
// router.get("/:album", function(req, res){
//     var apiKey = "c8303e90962e3a5ebd5a1f260a69b138";
//     request("http://api.musicgraph.com/api/v2/album/search?api_key="+ apiKey +"&artist_name=The%20Killers/tracks", 
//       function(error, response, body){
//         if (!error && response.statusCode == 200){
//             var results = JSON.parse(body);
//             var tracks = results["data"].map(a => a.title);
//             res.send(tracks);
//         }
//     });
    
// });

// module.exports = router;