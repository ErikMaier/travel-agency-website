exports.handler = function(event, conext, callback) {
    callback(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}