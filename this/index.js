let printName = function () {
    console.log(this.name);
}

let familyTree = {
    me: {
        name: "Celeste",
        printName,
        dad: {
            name: "Kendall",
            printName,
            mom: {
                name: "Leone",
                printName
            },
            dad: {
                name: "Neville",
                printName
            }
        },
        mom: {
            name: "Carole",
            printName,
            mom: {
                name: "Jean",
                printName
            },
            dad: {
                name: "Jacques",
                printName
            }
        }
    }
}

familyTree.me.mom.mom.printName();