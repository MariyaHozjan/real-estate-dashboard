const bcrypt = require("bcrypt");

const users = [{ username: "", password: "" }];

async function hashPasswords() {
  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
    console.log(
      `Username: ${user.username}, Hashed Password: ${user.password}`
    );
  }
}

hashPasswords();
