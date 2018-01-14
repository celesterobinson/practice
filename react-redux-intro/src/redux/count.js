const count = (prevCount = 0, action) => {
    switch(action.type) {
        case "HANDLE_COUNT":
            let total = prevCount + action.amount;
            return total < 0? prevCount : prevCount + action.amount;
        default: 
            return prevCount;
    }
}

export const handleCount = (amount) => {
    return {
        type: "HANDLE_COUNT",
        amount: amount
    }
}
export default count;