const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    unique: [true, 'Name must be unique'],
    lowercase: true,
    minLength: [3, 'Name must be at least 3 characters'],
    maxLength: [100, 'Name is too large']
  },

  description: {
    type: String,
    required: true
  },

  unit: {
    type: String,
    required: true,
    enum: {
      values: ['kg', 'litre', 'pcs', 'bag'],
      message: '{VALUE} must be kg/litre/pcs/bag'
    }
  },

  imageURLs: [{
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        if(!Array.isArray(value)){
          return false;
        }
        let isValid = true;
        value.forEach(url => {
          if(!validator.isURL(url)){
            isValid = false;
          }
        });
        return isValid;
      },
      message: 'Please provide valid image urls'
    }
  }],

  category: {
    type: String,
    required: true
  },

  brand: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: 'Brand',
      required: true,
    }
  }

}, {
  timestamps: true,
})

productSchema.pre('save', function(next){
  console.log('Before saving data');

  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;