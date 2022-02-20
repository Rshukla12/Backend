const Tweet = require("../models/tweet.model");

// group by tags, and average likes of posts with these tags,
//  and list of users who belong to this tag
const getByTags = async ( req, res ) => {
    try {
        const result = await Tweet.aggregate([
            { 
                $addFields: { 
                    searchId: { 
                        $toObjectId: "$author_id" 
                    } 
                } 
            }, 
            { 
                $lookup: { 
                    from: 'users', 
                    localField: 'searchId', 
                    foreignField: '_id', 
                    as: 'users' 
                } 
            }, 
            {
                $unwind: '$tags' 
            }, 
            {
                $unwind: '$users' 
            },
            { 
                $group: { 
                    _id: '$tags', 
                    avg_likes: { 
                        $avg: '$no_of_likes' 
                    }, 
                    users: { 
                        $addToSet: "$users.name"
                    } 
                }
            } 
        ]).exec();
        if ( !result || !result.length ) return res.status(404).json({ status: "success", msg: "No tweets by any users found!", data: [] })
        
        res.status(200).json({ status: "success", data: result });
    } catch (err) {
        console.log(err);
        res.status(500).json( { status: "failure", msg: "Something went wrong!" } );
    }
};

// !!!!!!!!!!!!This should work but it does not convert string id into object id properly
// db.tweets.aggregate([ { $lookup: { from: 'users', 'let': { "searchId": { $toObjectId: "$author_id" } }, pipeline: [{ "$match": { "$expr": [{ "_id": "$$searchId" }] } }], as: 'users' } }, { $unwind: '$tags' }, 
// { $unwind: '$users' }, { $group: { _id: '$tags' , avg_likes: { $avg: '$no_of_likes' }, 
// users: {$addToSet: '$users.name'  }}  }])    
// !!!!!!!!The above query doesn't works 

// This works
// db.tweets.aggregate([ { $addFields: { searchId: { $toObjectId: "$author_id" } } }, { $lookup: { from: 'users', localField: 'searchId', foreignField: '_id', as: 'users' } }, {$unwind: '$tags' }, {$unwind: '$users' } ,{ $group: { _id: '$tags', avg_likes: { $avg: '$no_of_likes' }, users: { $addToSet: "$users.name"} }} ] )
module.exports = {
    getByTags
};