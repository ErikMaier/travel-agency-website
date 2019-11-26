exports.handler = function(event, conext, callback) {
const secretContent = `
<h3>Welcome To The Secret WebsiteRebels Area</h3>
<p>Here we will make <strong>your</strong> Network dreams come true</p>
`

    let body

if (event.body) {
    body = JSON.parse(event.body)
} else {
    body = {}
}

if (body.password == "websiterebels") {
    callback(null, {
        statusCode: 200,
        body: secretContent
    })
} else {
    callback(null, {
        statusCode: 401
    })
}

    
}