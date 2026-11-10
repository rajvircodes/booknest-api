console.log("Database Pool Statistics:");


console.log("Database Pool Statistics:");

console.log({
    totalConnections: pool.totalCount,
    idleConnections: pool.idleCount,
    waitingRequests: pool.waitingCount,
});