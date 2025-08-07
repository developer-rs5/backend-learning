const Event = require("events");
const fs = require("fs");
const event = new Event();

function writefile(filename, data) {
    const stringData = JSON.stringify(data, null, 2); // make it readable

    try {
        if (fs.existsSync(filename)) {
            fs.appendFileSync(filename, `\n${stringData}`);
            console.log(`Appended to file:\n file: ${filename} \n data: ${stringData}`);
        } else {
            fs.writeFileSync(filename, stringData);
            console.log(`File created:\n file: ${filename} \n data: ${stringData}`);
        }
    } catch (error) {
        console.log(`Error while writing file: ${error.message}`);
    }
}

event.on("LOGIN", (details) => {
    console.log("User logged in");
    writefile("data.json", details);
});

event.emit("LOGIN", {
    name: "Rishabh",
    email: "rs@zenuxs.xyz",
    password: "helloworld"
});
