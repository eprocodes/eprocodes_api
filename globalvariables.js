const global = {
    databaseName : "eprocodes",
    databaseCollection : "eprocodescollection",
    datasource : "Cluster0",
    insertOneAPI: "https://data.mongodb-api.com/app/data-iejre/endpoint/data/beta/action/insertOne",
    findAllAPI: "https://data.mongodb-api.com/app/data-iejre/endpoint/data/beta/action/find",
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'V13RtN9s6g6tUij3AEIesvSZ9SF2SzxzoGxYMIqg6P0Kw2qM5QIADlG6PSQzyBIn',
    },
    postMethod: "post",
    getMethod: "get"
}

module.exports = {
    global
}