// 3. useRef

// 🔹 Definition:
// useRef stores a mutable value that persists across renders without causing re-renders.

// 🔹 Use cases:
// Access DOM elements (focus input, scroll div).
// Store mutable values (like timer ID, previous state value).
// Avoid re-render (unlike useState).

// 🔹 Syntax:
// const inputRef = useRef(null);
// useEffect(() => {
//   inputRef.current.focus(); // Access DOM node
// }, []);


// 🔹 Interview Keywords:
// Doesn’t trigger re-renders
// DOM manipulation (focus, scroll)
// Store values across renders

// ⚡ Interview-Friendly Summary:

// useMemo → Memoizes values (expensive calculations).

// useCallback → Memoizes functions (prevents child re-renders).

// useRef → Stores mutable values/DOM refs without re-render