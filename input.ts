import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";



async function db_maneger() {
    const rl = readline.createInterface({ input, output, terminal: false });
    
    let action: string ;

    action = await rl.question("Hello and welcome, what would you like to do (add || search || exit || delete)? ");

    switch (action) {
        case "add":
            console.log("Have a good pppp");
            db_maneger()
            break;

        case "search":
            console.log("Have a good ");
            db_maneger()
            break;

        case "delete":
            console.log(" a good day");
            db_maneger()
            break;

        case "exit":
            console.log("Have a good day");
            process.exit()

        default:
            console.error("Must choose or 'add' or 'search' or 'exit'!\n");
            db_maneger()
            break;
    }
    
}

db_maneger()
