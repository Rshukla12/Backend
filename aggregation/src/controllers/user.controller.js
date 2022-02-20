const Tweet = require("../models/tweet.model");

// top 10 users who have highest average number of likes, 
// and their average size of tags, average characters


const getTopTenByLikes = async (req, res) => {
    try {
        const result = await Tweet.aggregate([
            { 
                $group: { 
                    _id: '$author_id',
                    avg_likes: {
                        $avg: '$no_of_likes'
                    },
                    avg_tag_size: {
                        $avg: {
                            $size: 'tags'
                        }
                    },
                    avg_likes: { 
                        $avg: '$no_of_likes' 
                    },
                    avg_tag_size: { 
                        $avg: { 
                            $size: '$tags' 
                        } 
                    }, 
                    avg_text_size: { 
                        $avg: { 
                            $strLenCP: '$text'  
                        }
                    }
                }
            },
            { 
                $addFields: { 
                    searchId: { 
                        $toObjectId: "$_id" 
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
                $sort: {
                    avg_likes: -1
                }
            },
            {
                $unwind: '$users'
            },
            {
                $addFields: {
                    name: '$users.name'
                }
            },
            {
                $project: {
                    name: 1,
                    avg_likes:1,
                    avg_tag_size: 1,
                    avg_text_size: 1
                }
            }
        ]).limit(10).exec();

        if ( !result || !result.length ) return res.status(404).json({ status: "success", msg: "No tweets by any users found!", data: [] });
        
        res.status(200).json({ status: "success", data: result });
    } catch (err) {
        console.log(err);
        res.status(500).json( { status: "failure", msg: "Something went wrong!" } );
    }
};

module.exports = {
    getTopTenByLikes
}