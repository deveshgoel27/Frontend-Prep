// debouncing -> debouncing is a technique used to limit the rate at which a function is executed.

//  It ensures that a function is not called too frequently, especially in response to events like scrolling, resizing, or typing. 
// 
// The function will only execute after a specified delay has passed since the last time it was invoked.

// It is commonly used to improve performance and prevent excessive function calls in scenarios where rapid events occur.
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Example usage:
function logMessage(message) {
    console.log(message);
}
const debouncedLog = debounce(logMessage, 1000);
debouncedLog("Hello, World!"); // This will log "Hello, World!" after 1 second if no other calls are made within that time.
// If you call debouncedLog multiple times within 1 second, it will only log the message once after the last call.

// You can test it by calling debouncedLog multiple times in quick succession.

debouncedLog("Hello again!"); // This will reset the timer and log "Hello again!" after 1 second if no other calls are made.

debouncedLog("And again!"); // This will reset the timer again.
debouncedLog("Final message!"); // This will log "Final message!" after 1 second if no other calls are made.

//debouncing is useful in scenarios like search input, where you want to wait for the user to stop typing before making an API call or updating the UI.

// It helps reduce unnecessary function calls and improves performance by ensuring that the function is executed only after a certain period of inactivity.

// In this example, the logMessage function will only be called once after 1 second of inactivity, even if debouncedLog is called multiple times within that period.

// This is particularly useful in scenarios like search input, where you want to wait for the user to stop typing before making an API call or updating the UI.

// It helps reduce unnecessary function calls and improves performance by ensuring that the function is executed only after a certain period of inactivity
