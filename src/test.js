import taskcluster from "taskcluster-client";

// Create queue client object with temporary credentials
let queue = new taskcluster.Queue({
  baseUrl: "http://localhost:60024/queue/v1/"
});

// Query for number of pending tutorial tasks
let result = await queue.pendingTasks('aws-provisioner-v1', 'tutorial');

// Print result
console.log(result);
