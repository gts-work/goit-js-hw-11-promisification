const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                resolve({ id: transaction.id, time: delay });
            }

            reject({ id: transaction.id });
        }, delay);
    });
};
