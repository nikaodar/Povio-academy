//You are given a function getUser that you cannot change. Promisify it and then call it using both then and async / await.

// don't change me

function getUser(userId, callback) {
  setTimeout(() => {
    if (userId === 1) {
      callback(null, { id: 1, name: "John Doe" });
    } else {
      callback(new Error("User not found"), null);
    }
  }, 1000);
}

function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (e, user) => {
      if (e) {
        reject(e);
      } else {
        resolve(user);
      }
    });
  });
}

//using .then
getUserPromise(1)
  .then(user => console.log("success (.then): ", user))
  .catch(e => console.error("error (.then): ", e.message));

// using async & await
async function getUserAsync(userId) {
  try {
    const user = await getUserPromise(userId);
    console.log("success (async): ", user);
  } catch (e) {
    console.error("error (async): ", e.message);
  }
}

getUserAsync(1);
getUserAsync(2);
