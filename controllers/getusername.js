// getnews function for post tea route
// Calling a custom module

// async function getAllNews (){
 const getUsername = async (req, res, next) => {
    const results = 
    {
      'username': 'eprocodes',
      'email': 'eprocodes.web@gmail.com',
      'firstname': 'ePro',
      'lastname': 'codes'
    };
    res.json(results);
}

module.exports = {getUsername};