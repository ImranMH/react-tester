const {createServer} = require('http')
const express = require('express')
const mongoose = require('mongoose')
const compression = require('compression')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const normalizePort = port => parseInt(port,10)
const PORT = normalizePort(process.env.PORT || 5000);

const app = express()
const dev = app.get('dev') !== 'production';

if(!dev) {
	console.log('production');
	app.disable('x-powered-by')
	app.use(compression())
	app.use(morgan('common'))

	app.use(express.static(path.resolve(__dirname, 'build')))

	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
	})
}

if(dev) {
		app.use(morgan('dev'))
}





app.get('apis/user', (req,res)=> {
	res.json({msg: 'message from server'})
})

const server = createServer(app)

server.listen(PORT, err=> {
	if (err) throw err;
	console.log('server started at' + PORT);
})