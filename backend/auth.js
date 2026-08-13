const crypto = require("crypto");


/*
  SPM TOP AGENCY
  Secure Admin Authentication

  Required server environment variables:

  ADMIN_USERNAME
  ADMIN_PASSWORD_HASH
  SESSION_SECRET
*/


function hashPassword(password){

  return crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

}


function verifyAdminCredentials(
  username,
  password
){

  const adminUsername =
    process.env.ADMIN_USERNAME;

  const passwordHash =
    process.env.ADMIN_PASSWORD_HASH;


  if(
    !adminUsername ||
    !passwordHash
  ){

    return false;

  }


  if(
    username !==
    adminUsername
  ){

    return false;

  }


  const suppliedHash =
    hashPassword(password);


  return suppliedHash ===
    passwordHash;

}


/* ================= ADMIN MIDDLEWARE ================= */

function requireAdmin(
  req,
  res,
  next
){

  const token =
    req.headers.authorization;


  if(
    !token ||
    !token.startsWith("Bearer ")
  ){

    return res.status(401).json({

      success:false,

      message:
        "Admin authentication required."

    });

  }


  const sessionToken =
    token.substring(7);


  const expectedToken =
    process.env.ADMIN_SESSION_TOKEN;


  if(
    !expectedToken ||
    sessionToken !== expectedToken
  ){

    return res.status(403).json({

      success:false,

      message:
        "Invalid admin session."

    });

  }


  next();

}


module.exports = {

  hashPassword,

  verifyAdminCredentials,

  requireAdmin

};
