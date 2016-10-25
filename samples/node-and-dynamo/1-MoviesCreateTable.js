var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Movies",
    KeySchema: [       
        { AttributeName: "year", KeyType: "HASH"},  // Partition key
        { AttributeName: "title", KeyType: "RANGE" }  // Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" }, // "N" for number
        { AttributeName: "title", AttributeType: "S" } // "S" for string
    ],
    // Required; however, the downloadable version of DynamoDB ignores it.
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

// If all goes well, the response should appear similar to:
/*
    Created table. Table description JSON: {
      "TableDescription": {
        "AttributeDefinitions": [
          {
            "AttributeName": "year",
            "AttributeType": "N"
          },
          {
            "AttributeName": "title",
            "AttributeType": "S"
          }
        ],
        "TableName": "Movies",
        "KeySchema": [
          {
            "AttributeName": "year",
            "KeyType": "HASH"
          },
          {
            "AttributeName": "title",
            "KeyType": "RANGE"
          }
        ],
        "TableStatus": "ACTIVE",
        "CreationDateTime": "2016-10-24T19:28:21.935Z",
        "ProvisionedThroughput": {
          "LastIncreaseDateTime": "1970-01-01T00:00:00.000Z",
          "LastDecreaseDateTime": "1970-01-01T00:00:00.000Z",
          "NumberOfDecreasesToday": 0,
          "ReadCapacityUnits": 10,
          "WriteCapacityUnits": 10
        },
        "TableSizeBytes": 0,
        "ItemCount": 0,
        "TableArn": "arn:aws:dynamodb:ddblocal:000000000000:table/Movies"
      }
    }
*/

// Verify in the browser shell that it worked with:
/*
    dynamodb.listTables(params, function(err, data) {
        if (err) ppJson(err); // an error occurred
        else ppJson(data); // successful response
    });
*/
