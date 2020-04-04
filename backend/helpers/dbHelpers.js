module.exports = knex => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };

  return {
    getUsers
  };
};
