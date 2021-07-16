"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("site-bucket", {
	acl: "public-read",
	versioning: {
		enabled: true,
	},
	
	website: {
            indexDocument: "site/src/pages/index.js",
            errorDocument: "site/src/pages/404.js",
        },
});

let siteDir = "site";

// Export the name of the bucket
//exports.bucketName = bucket.id;
exports.bucketName = bucket.bucket;
