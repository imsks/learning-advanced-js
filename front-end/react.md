-   What is the Virtual DOM? How does React use it for performance?

The Virtual DOM (V-DOM) is a lightweight in-memory copy of the real DOM.
Instead of updating the DOM directly, React updates the Virtual DOM first, and then finds the minimum number of real DOM changes using a diffing algorithm.
This makes updates faster and more efficient.

⚙️ How React Uses the Virtual DOM 1. ➕ You update your React state 2. 📄 React re-renders the Virtual DOM 3. 🧠 React compares the new V-DOM with the previous one → (diffing) 4. 🎯 React finds only the changed parts 5. 🛠 It updates only those parts in the real DOM using reconciliation

-   What is Reconciliation in React?
    🔧 What Happens During Reconciliation: 1. React re-renders the new virtual DOM 2. It diffs this with the previous virtual DOM 3. It finds the minimal set of changes 4. Then applies those changes to the real DOM
    \*\* React uses keys on list elements to track identity during reconciliation.
    Without keys, React may unnecessarily re-render everything in a list.

-   What is Diffing in React?
    Diffing is the algorithm React uses during reconciliation to efficiently detect changes between two Virtual DOM trees.
    React’s diffing algorithm is O(n) (linear time) — much faster than the brute-force O(n³) comparison.

✅ How React’s Diffing Works (Heuristics): 1. Different element types → Replace

<div> → <span> = full replacement
	2.	Same type → Update props + children
<button disabled> → <button> = just remove disabled
	3.	Children with keys → Match by key
	•	Helps reorder or reuse DOM elements
	•	Prevents re-rendering entire lists

-   Why is using index as a key in React a bad practice?
    Using the index as a key can cause unintended re-renders or state bugs when the list changes (like insertions, deletions, or reordering).
    React uses the key to track which items changed, and if keys change unnecessarily, React misidentifies elements, leading to visual or state bugs.
    \*\*Using the index as a key can cause unintended re-renders or state bugs when the list changes (like insertions, deletions, or reordering).
    React uses the key to track which items changed, and if keys change unnecessarily, React misidentifies elements, leading to visual or state bugs.
