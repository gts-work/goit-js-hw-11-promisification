export const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
        resolve(
            allUsers.map((user) =>
                user.name === userName
                    ? { ...user, active: !user.active }
                    : user
            )
        );
    });
};

// export const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map((user) =>
//         user.name === userName ? { ...user, active: !user.active } : user
//     );

//     callback(updatedUsers);
// };
