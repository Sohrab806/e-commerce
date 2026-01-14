const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const middleware=[morgan('dev'),express.json(),cors()]

module.exports=middleware