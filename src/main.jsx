import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "./api/server";
import store from "./store";


console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => console.log("state after dispatch: ", store.getState()));

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions.' });
store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });
store.dispatch({ type: 'filters/colorFilterChanged', payload: { color: 'red', changeType: 'added' } });
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });
console.log('Dispatching action');
store.dispatch({ type: 'todos/todoAdded', payload: 'Action check after the enhancer.' });
console.log('Dispatch complete');
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
console.log('State after dispatch: ', store.getState());
unsubscribe();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);