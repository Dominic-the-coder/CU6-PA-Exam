/* 
    INSTRUCTION: setup authentication middleware here
    - isStaff: check if the user is a valid staff or admin
    - isAdmin: check if the user is an admin
*/

// to check if the user is a valid staff or admin
const isStaff = async (req, res, next) => {};

// to check if the user is an admin
const isAdmin = async (req, res, next) => {};

module.exports = {
  isStaff,
  isAdmin,
};
