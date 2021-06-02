const elBox = document.querySelector("#box");

// Pure function that returns the next state,
// given the current state and sent event

const machine = {
    initial: "inactive",
    states: {
        inactive: {
            on: {
                CLICK: "active",
            },
        },
        active: {
            on: {
                CLICK: "inactive",
            },
        },
    },
};

let currentState = machine.initial;

function transition(state, event) {
    const nextState = machine.states[state].on?.[event] || state;

    return nextState;
}

function send(event) {
    currentState = transition(currentState, event);

    console.log(currentState);

    elBox.dataset.state = currentState;
}

elBox.addEventListener("click", () => {
    send("CLICK");
});
