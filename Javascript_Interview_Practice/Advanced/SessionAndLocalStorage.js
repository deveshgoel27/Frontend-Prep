//Sessiion Storage -> stores data for one session (tab or window) and is cleared when the tab or window is closed.

// Local Storage -> stores data with no expiration time, data persists even after the browser is closed and reopened.

// Both Session Storage and Local Storage are part of the Web Storage API, which allows web applications to store data in the browser.
// They are used to store key-value pairs in a web browser, providing a way to save data on the client side.
// Session Storage and Local Storage are similar in many ways, but they have some key differences:
// 1. Scope:
//    - Session Storage is limited to the current tab or window, meaning data stored in one tab cannot be accessed in another tab or window.
//    - Local Storage is accessible across all tabs and windows of the same origin, allowing data to be shared between them.
// 2. Lifetime:
//    - Session Storage data is cleared when the tab or window is closed, making it suitable for temporary data storage.
//    - Local Storage data persists even after the browser is closed and reopened, making it suitable for long-term data storage.
// 3. Security: 
//    - Session Storage is not encrypted, making it vulnerable to cross-site scripting attacks. 
//    - Local Storage is also not encrypted, but it is generally considered more secure than Session Storage because it is not cleared when the tab or window is closed.
// 4. Storage Limit:
//    - Both Session Storage and Local Storage have a storage limit, which varies by browser but is typically around 5-10 MB.
//    - Local Storage has a larger storage limit than Session Storage, making it suitable for storing larger amounts of data.
// Example of using Session Storage
function setSessionData(key, value) {
    sessionStorage.setItem(key, value);
}

function getSessionData(key) {
    return sessionStorage.getItem(key); 
}
function removeSessionData(key) {
    sessionStorage.removeItem(key);
}
function clearSessionData() {
    sessionStorage.clear();
}
// Example usage
setSessionData('username', 'JohnDoe');
console.log(getSessionData('username')); // Output: JohnDoe
removeSessionData('username');
console.log(getSessionData('username')); // Output: null
clearSessionData(); // Clears all session storage data
// Example of using Local Storage
function setLocalData(key, value) {
    localStorage.setItem(key, value);
}

function getLocalData(key) {
    return localStorage.getItem(key); 
}    
function removeLocalData(key) {
    localStorage.removeItem(key);
}
function clearLocalData() {
    localStorage.clear();   
}
// Example usage
setLocalData('username', 'JohnDoe');
console.log(getLocalData('username')); // Output: JohnDoe
removeLocalData('username');
console.log(getLocalData('username')); // Output: null
clearLocalData(); // Clears all local storage data
// Note: Both Session Storage and Local Storage can only store strings. If you need to store objects or arrays, you can use JSON.stringify() to convert them to a string before storing and JSON.parse() to convert them back to an object or array when retrieving.