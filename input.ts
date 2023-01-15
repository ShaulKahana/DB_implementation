import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import {fill_array, array_meneger } from "./array"; 
import {fill_LinkedList, LinkedList_meneger } from "./linkList"; 
import {queue_linklist_meneger, queue_array_meneger, fill_queue } from "./Queue";
import {stack_linklist_meneger, stack_array_meneger, fill_stack } from "./Stack";  

async function array(): Promise<void>{

    const rl = readline.createInterface({ input, output, terminal: false });

    fill_array()
    let action: string ;

    action = await rl.question("What do you wont to do? (search before sort || search after sort)? ");

    if (action !== "search before sort" && action !== "search after sort" )
        console.log("Wrong input\n");

    let num = await rl.question("What is the number you wont to search?");

    array_meneger(action, Number(num))
}

async function linklist(): Promise<void>{

    const rl = readline.createInterface({ input, output, terminal: false });

    fill_LinkedList()
    let action: string ;

    action = await rl.question("What do you wont to do? (search before sort || search after sort || insert after sort || exit)? ");


    if (action != "search before sort" && action !== "search after sort"  && action !== "insert after sort" ){
        console.log("Have a good day");
        process.exit()
    }
    else{
        let num = await rl.question("What is the number?");
        LinkedList_meneger(action, Number(num))
        linklist()
    }

}

async function queue(flag: boolean, action1:string = ""): Promise<void>{

    const rl = readline.createInterface({ input, output, terminal: false });
    let action2: string;

    if (flag) {
        fill_queue()
        action1 = await rl.question("Which queue do you want to use? (linklist queue || array queue || exit)? ");

        if (action1 !== "linklist queue" && action1 !== "array queue"){
            console.log("Have a good day");
            process.exit()
        }
        queue(false, action1)
    }
    else{
        switch (action1) {
            case "linklist queue":
                action2 = await rl.question("What do you wont to do? (push || top || pop || exit)? ");
                if (action2 !== "push" && action2 !== "top" && action2 !== "pop") {
                    console.log("Have a good day");
                    process.exit()
                }
                else{
                    if(action2 === "push"){
                        let num = await rl.question("What is the number?");
                        queue_linklist_meneger(action2, Number(num))
                        queue(false, action1)
                    }
                    else{
                        queue_linklist_meneger(action2)
                        queue(false, action1)
                    }

                    break;
                }
    
            case "array queue":
                action2 = await rl.question("What do you wont to do? (push || top || pop || exit)? ");
                if (action2 !== "push" && action2 !== "top" && action2 !== "pop") {
                    console.log("Have a good day");
                    process.exit()
                }
                else{
                    if(action2 === "push"){
                        let num = await rl.question("What is the number?");
                        queue_array_meneger(action2, Number(num))
                        queue(false, action1)
                    }
                    else{
                        queue_array_meneger(action2)
                        queue(false, action1)
                    }

                    break;
                }
        }
    }

}

async function stack(flag: boolean, action1:string = ""): Promise<void>{

    const rl = readline.createInterface({ input, output, terminal: false });
    let action2: string;

    if (flag) {
        fill_stack()
        action1 = await rl.question("Which queue do you want to use? (linklist stack || array stack || exit)? ");

        if (action1 !== "linklist stack" && action1 !== "array stack"){
            console.log("Have a good day");
            process.exit()
        }
        stack(false, action1)
    }
    else{
        switch (action1) {
            case "linklist stack":
                action2 = await rl.question("What do you wont to do? (push || top || pop || exit)? ");
                if (action2 !== "push" && action2 !== "top" && action2 !== "pop") {
                    console.log("Have a good day");
                    process.exit()
                }
                else{
                    if(action2 === "push"){
                        let num = await rl.question("What is the number?");
                        stack_linklist_meneger(action2, Number(num))
                        stack(false, action1)
                    }
                    else{
                        stack_linklist_meneger(action2)
                        stack(false, action1)
                    }

                    break;
                }
    
            case "array stack":
                action2 = await rl.question("What do you wont to do? (push || top || pop || exit)? ");
                if (action2 !== "push" && action2 !== "top" && action2 !== "pop") {
                    console.log("Have a good day");
                    process.exit()
                }
                else{
                    if(action2 === "push"){
                        let num = await rl.question("What is the number?");
                        stack_array_meneger(action2, Number(num))
                        stack(false, action1)
                    }
                    else{
                        stack_array_meneger(action2)
                        stack(false, action1)
                    }

                    break;
                }
        }
    }

}

async function maneger() {
    const rl = readline.createInterface({ input, output, terminal: false });
    
    let action: string ;

    action = await rl.question("Hello and welcome, Which DB do you want to use? (array || linklist || stack || queue)? ");

    switch (action) {
        case "array":
            array();
            break;

        case "linklist":
            linklist();
            break;

        case "stack":
            stack(true)
            break;

        case "queue":
            queue(true)
            break;

        default:
            console.log("Wrong input\n");
            process.exit()
    }
    
}

maneger()
