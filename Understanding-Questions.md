# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick handler tells dispatches with a parameter of the addOne function in the actions tab. 
* The addOne function returns 'type: ADD_ONE', which is passed in as the parameter for the dispatch callback.
* the dispatch passes ADD_ONE as the case id to use in the reducer from the reducers index.js file
* When the correct switch method is encountered ("ADD_ONE") the return statement executes creating a copy of state with an updated value of total in that copied state object that is equal to the previous total value plus 1 
...

* TotalDisplay shows the total plus 1.
