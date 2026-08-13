const express = require("express");
const crypto = require("crypto");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

/*
  SPM TOP AGENCY Backend
  Agency Code: 100857

  IMPORTANT:
  Real admin authentication,
  database credentials and API keys
  must be stored in environment variables.
*/


// ================= HEALTH CHECK =================

app.get("/api/health", (req, res) => {

  res.json({
    success: true,
    service: "SPM TOP AGENCY API",
    status: "online",
    agencyCode: "100857"
  });

});


// ================= ORDER ID =================

function generateOrderId(prefix = "SPM") {

  const date = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  const random =
    crypto.randomBytes(3).toString("hex").toUpperCase();

  return `${prefix}-${date}-${random}`;

}


// ================= COIN ORDER =================

app.post("/api/orders/coins", (req, res) => {

  const {
    packageName,
    price,
    yoyoId,
    name,
    whatsapp,
    note
  } = req.body;


  if (
    !packageName ||
    !price ||
    !yoyoId ||
    !name ||
    !whatsapp
  ) {

    return res.status(400).json({
      success: false,
      message: "Required order details are missing."
    });

  }


  const order = {

    orderId: generateOrderId("SPM"),

    type: "Coin Recharge",

    packageName,

    price,

    yoyoId,

    name,

    whatsapp,

    note: note || "",

    status: "pending",

    createdAt:
      new Date().toISOString()

  };


  /*
    NEXT STEP:
    Save this order to the database.
  */


  res.status(201).json({

    success: true,

    message: "Coin order received.",

    order

  });

});


// ================= PAID SENDING =================

app.post("/api/orders/paid-sending", (req, res) => {

  const {
    packageName,
    price,
    senderYoyo,
    receiverYoyo,
    name,
    whatsapp,
    note
  } = req.body;


  if (
    !packageName ||
    !price ||
    !senderYoyo ||
    !receiverYoyo ||
    !name ||
    !whatsapp
  ) {

    return res.status(400).json({

      success: false,

      message:
        "Required order details are missing."

    });

  }


  const order = {

    orderId:
      generateOrderId("SPM-PS"),

    type:
      "Paid Sending",

    packageName,

    price,

    senderYoyo,

    receiverYoyo,

    name,

    whatsapp,

    note: note || "",

    status:
      "pending",

    createdAt:
      new Date().toISOString()

  };


  /*
    NEXT STEP:
    Save this order to the database.
  */


  res.status(201).json({

    success: true,

    message:
      "Paid Sending order received.",

    order

  });

});


// ================= ADMIN API PLACEHOLDER =================

app.get("/api/admin/stats", (req, res) => {

  /*
    Authentication will be added before
    exposing real admin statistics.

    NEVER expose this endpoint publicly
    without authentication.
  */

  res.status(401).json({

    success: false,

    message:
      "Admin authentication required."

  });

});


// ================= START SERVER =================

app.listen(PORT, () => {

  console.log(
    `SPM API running on port ${PORT}`
  );

});
