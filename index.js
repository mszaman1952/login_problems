const {app, port} = require('./app');

app.listen(port, () => {
    console.log(`Server is Running Successfully at http:localhost:${port}`)
})