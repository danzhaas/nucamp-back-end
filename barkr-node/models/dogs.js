const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commandSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const routineSchema = new Schema({
    detail: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const suppliesSchema = new Schema({
    detail: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const notesSchema = new Schema({
    content: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
}, {
    timestamps:true
});

// Dog code starts here

const dogSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    bio: {
        type:String,
        required:false
    },
    sex: {
        type:String,
        required:true
    },
    breed: {
        type:String,
        required:true
    },
    yearBorn: {
        type:Number,
        required:false
    },
    from: {
        type:String,
        required:false
    },
    siblings: [siblingSchema],
    owner: {
        type:String,
        required:true
    },
    thumbnailPic: {
        type:String,
        required:true
    },
    profilePic: {
        type:String,
        required:true
    },
    commands: [commandSchema],
    zip: {
        type:Number,
        required:false
    },
    supplies: [suppliesSchema],
    notes: [notesSchema],
}, {
    timestamps:true
});

//  Dog data
//     "id":1,              Not input - hidden
//     "ownerId"            Not input - hidden
//     "name":""            Input type text
//     "bio":"",            Input type textarea
//     "sex": "",           Input type select
//     "breed": "",         Input type select (note: use autosuggest)
//     "yearBorn": "",      Input type text
//     "thumbnailPic":""    Input file 
//     "profilePic":""      Input file 
//     "commands": [
//         {
//             "id":"",             Not input - hidden
//             "name":"",           Input type text    
//             "image":"",          Input file
//             "description":""     Input type text
//         },
//     ],    
//     "routine": [
//         {
//             "id":0,              Not input - hidden
//             "detail": ""         Input type text
//         },
//     ],
//     "supplies": [
//         {
//             "id":0,              Not input - hidden
//             "detail": ""         Input type text
//         },
//     ],
//     "notes": [
//         {
//             "id":0,              Not input - hidden
//             "content": ""         Input type text
//         },
//     ]
// }

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;