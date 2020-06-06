const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type:Number,
        min:1,
        max:5,
        required:true
    },
    text: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
}, {
    timestamps:true
})

const campsiteSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    elevation: {
        type:Number,
        required:true
    },
    cost: {
        type:Currency,
        required:true,
        min:0
    },
    featured: {
        type:Boolean,
        default:false
    },
    comments: [commentSchema]
}, {
    timestamps:true
});

// Dog code starts here

const dogSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    elevation: {
        type:Number,
        required:true
    },
    cost: {
        type:Currency,
        required:true,
        min:0
    },
    featured: {
        type:Boolean,
        default:false
    },
    comments: [commentSchema]
}, {
    timestamps:true
});

// {
//     "id":1,
//     "name":""
//     "bio":"",
//     "sex": "",
//     "breed": "",
//     "yearBorn": "",
//     "from": "",
//     "siblings": [
//         {
//             "name":"",
//             "id":""
//         }
//     ],
//     "owner": "",
//     "pic": [
//         {
//             "type":"thumbnail",
//             "img": ""
//         },
//         {
//             "type":"profilePic",
//             "img":""
//         }
//     ],
//     "commands": [
//         {
//             "id":0,
//             "name":"",
//             "image":"",
//             "description":""
//         },
//     ],    
//     "ZIP":"21202",
//     "routine": [
//         {
//             "id":0,
//             "detail": ""
//         },
//     ],
//     "supplies": [
//         {
//             "id":0,
//             "detail": ""
//         },
//     ],
//     "notes": [
//         {
//             "id":0,
//             "content":""
//         }
//     ],    
//     "contacts": [
//         {
//             "id":0,
//             "tabName":"Owner",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": false
//         },
//         {
//             "id":1,
//             "tabName":"Primary Vet",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": false
//         },
//         {
//             "id":2,
//             "tabName":"Emergency Vet",
//             "tabContent":"",
//             "tabPhone":"",
//             "emergencyVet": true
//         }
//     ]
// }

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;