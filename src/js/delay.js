export const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);
