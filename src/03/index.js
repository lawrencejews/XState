import { createMachine, interpret } from "xstate";

const elBox = document.querySelector("#box");

const machine = createMachine({
    // Create your state machine here
    initial: "inactive",
    states: {
        inactive: {
            on: {
                mousedown: {
                    target: "active",
                },
            },
        },
        active: {
            on: {
                mouseup: {
                    target: "inactive",
                },
            },
        },
    },
});

// Create a service using interpret(...)
const service = interpret(machine);

// Listen to state transitions and set
service.onTransition((state) => {
    console.log(state.value);

    elBox.dataset.state = state.value;
});

// Start the service.
service.start();

elBox.addEventListener("mousedown", (event) => {
    // Send a mousedown event
    service.send(event);
});

elBox.addEventListener("mouseup", (event) => {
    // Send a mouseup event
    service.send(event);
});
