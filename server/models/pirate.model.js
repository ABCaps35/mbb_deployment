const mongoose = require('mongoose');

const positions = ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey']
const LINK_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required"],
        minlength: [3, "Pirate name must be at least 3 characters long"],
        maxlength: [50, "Pirate name must be shorter than 50 characters"]
    },
    image_url: {
        type: String,
        required: [true, "Image URL is required"],
        validate: {
            validator: ((val) => {
                if(val.match(LINK_REGEX)){
                    return true;
                }
                return false;
            })
        }
    },
    number_of_chests: {
        type: Number,
        required: [true, "Number of chests is required"],
        min: [0, "Pirate cannot have less than 0 chests"]
    },
    catchphrase: {
        type: String,
        required: [true, "Pirate catchphrase is required"],
        minlength: [3, "Pirate name must be at least 3 characters long"],
        maxlength: [80, "Pirate name must be shorter than 80 characters"]
    },
    position: {
        type: String,
        required: [true, "Pirate position is required"], 
        validate: {
            validator: ((val) => {
                if(positions.includes(val)){
                    return true;
                }
                return false;
            })
        }
    },
    attributes: {
        type: [Number],
        validate: {
            validator: ((val) => {
                if(val.length===3){
                    for(let i=0;i<val.length;i++){
                        if(val[i]>1 || val[i]<0){
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            })
        }
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);