var pullOutDrawer = function(drawer, index) {
    return this[drawer][index];
}

var dresser = {
    topDrawer: ["passport", "keys", "flashlight", "batteries", "pistol", "disembodied head"],
    midDrawer: ["socks", "undies", "slips", "pantyhose"],
    bottomDrawer: ["jeans", "sweats", "shorts", "leggings", "jeggings", "otherstuf"],
    pullOutDrawer: pullOutDrawer
}

var kidsBedroomDresser = {
    topDrawer: ["star wars socks", "footie pajamas"],
    midDrawer: ["t shirt", "pet rock"],
    bottomDrawer: ["jeans", "sweats", "shorts"],
    pullOutDrawer: pullOutDrawer
}

console.log(kidsBedroomDresser.pullOutDrawer("topDrawer", 1));