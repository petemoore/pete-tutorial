'use strict';

let tc = require('taskcluster-client');

let slugid = require('slugid');

let taskId = slugid.v4();
let task = {
  "provisionerId": "test-provisioner",
  "workerType": "BTGGFGG6T3epBR74KyGawQ",
  "schedulerId": "test-scheduler",
  "taskGroupId": "AkshjdbtRYi3R1SeX_gPJg",
  "dependencies": [],
  "requires": "all-completed",
  "routes": [],
  "priority": "normal",
  "retries": 1,
  "created": "2016-10-25T09:53:55.000Z",
  "deadline": "2017-10-25T10:08:55.000Z",
  "expires": "2017-10-26T09:53:55.000Z",
  "scopes": [],
  "payload": {
    "artifacts": [
      {
        "expires": "2017-10-25T10:23:55.959Z",
        "path": "SampleArtifacts/_/X.txt",
        "type": "file"
      }
    ],
    "command": [
      "echo hello world!",
      "echo goodbye world!"
    ],
    "features": {
      "chainOfTrust": true
    },
    "maxRunTime": 7200
  },
  "metadata": {
    "description": "Test task",
    "name": "[TC] TestUpload",
    "owner": "pmoore@mozilla.com",
    "source": "https://github.com/taskcluster/generic-worker/blob/master/artifacts_test.go"
  },
  "tags": {
    "createdForUser": "pmoore@mozilla.com"
  },
  "extra": {}
}

async function main() {
  let q = new tc.Queue({
    baseUrl: "http://localhost:60024/queue/v1/"
  });

  return await q.createTask(taskId, task);
}

main().then(console.log, err => {
  console.log(err.stack || err);
});

