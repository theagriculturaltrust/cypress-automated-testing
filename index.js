
const { exec } = require("child_process");

exec("npx cypress run --key 7bed1257-f64f-4ebc-8c57-d6300d1b686f --record", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        alert("A")
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        alert("B")
        return;
    }
    console.log(`stdout: ${stdout}`);
    alert("C")
});