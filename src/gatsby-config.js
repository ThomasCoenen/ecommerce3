// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
//   })

require('dotenv').config();


require('dotenv').config({path: __dirname + "/.env"})

module.exports = {   plugins: [`gatsby-plugin-material-ui`], };


// dotenv.config(); 
// const list_id = process.env.LIST_ID

plugins: [
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: process.env.MAILCHIMP_ENDPOINT, 
            timeout: 3500,
        },
    }
];