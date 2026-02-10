// Throttling -> Throttling is a technique used to limit the number of times a function can be called over time.

// It is particularly useful in scenarios where you want to control the rate at which a function is executed, such as handling scroll events, resizing windows, or making API calls.

// It ensures that a function is executed at most once in a specified time interval, regardless of how many times it is triggered.
function throttle(func, limit) {
    let lastCallTime = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastCallTime >= limit) {
            lastCallTime = now;
            func.apply(this, args);
        }
    };
}
// Example usage:
function logMessage(message) {
    console.log(message);
}

const throttledLog = throttle(logMessage, 1000);
throttledLog("Hello, World!"); // This will log "Hello, World!" immediately.

// If you call throttledLog multiple times within 1 second, it will only log the message once after the last call.

throttledLog("Hello again!"); // This will not log anything if called within 1 second of the previous call.

throttledLog("And again!"); // This will not log anything if called within 1 second of the previous call.

throttledLog("Final message!"); // This will not log anything if called within 1 second of the previous call.

// Throttling is useful in scenarios like scroll events, where you want to limit the number of times a function is executed while the user is scrolling.

// It helps improve performance by ensuring that the function is executed at a controlled rate, preventing excessive function calls and potential performance issues.