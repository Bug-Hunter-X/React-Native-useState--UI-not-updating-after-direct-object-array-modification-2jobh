# React Native useState: UI not updating after direct object/array modification

This repository demonstrates a common React Native error where the UI fails to update after directly modifying an object or array within the `useState` hook.  Direct modification doesn't trigger a re-render because React uses shallow comparison.

The `bug.js` file shows the incorrect approach, resulting in the UI not reflecting the state changes. The `bugSolution.js` file provides the corrected implementation using spread syntax or functional updates.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or the equivalent for your platform).
4. Observe that clicking the button doesn't update the displayed array in `bug.js`, while it works correctly in `bugSolution.js`.