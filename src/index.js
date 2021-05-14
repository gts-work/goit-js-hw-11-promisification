import "./styles.css";
import { delay } from "./js/delay";
import { toggleUserState } from "./js/toggle_user_state";
import { makeTransaction } from "./js/transaction";

// TASK 1

const loggerDelay = (time) => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(loggerDelay); // Resolved after 2000ms
delay(1000).then(loggerDelay); // Resolved after 1000ms
delay(1500).then(loggerDelay); // Resolved after 1500ms

// TASK 2

const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
];

const loggerToggle = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Должно работать так
//  */
toggleUserState(users, "Mango").then(loggerToggle);
toggleUserState(users, "Lux").then(loggerToggle);

// TASK 3
const logSuccess = (id, time) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
