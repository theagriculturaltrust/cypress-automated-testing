const { exec } = require('node:child_process')

// run the `ls` command using exec
exec('cypress run --key 7bed1257-f64f-4ebc-8c57-d6300d1b686f', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})

var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo! Yo! Yo!');
    res.end();
}).listen(process.env.PORT || 3000);

