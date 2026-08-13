const express = require("express");
const crypto = require("crypto");

const {
  createOrder,
  getOrders,
  findOrder,
  updateOrderStatus
} = require("./database");

const {
  verifyAdminCredentials,
  requireAdmin
} = require("./auth");

const app = express();

const PORT =
  process.env.PORT || 3000;

app.use(express.json());


// ================= HEALTH =================

app.get("/api/health", (req, res) => {

  res.json({
    success: true,
    service: "SPM TOP AGENCY API",
    status: "online",
    agencyCode: "100857"
  });

});


// ================= ORDER ID =================

function generateOrderId(prefix){

  const date =
    new Date()
      .toISOString()
      .slice(0,10)
      .replace(/-/g,"");

  const random =
    crypto
      .randomBytes(3)
      .toString("hex")
      .toUpperCase();

  return `${prefix}-${date}-${random}`;

}


// ================= ADMIN LOGIN =================

app.post(
  "/api/admin/login",
  (req, res) => {

    const {
      username,
      password
    } = req.body;


    if(
      !username ||
      !password
    ){

      return res.status(400).json({

        success:false,

        message:
          "Username and password are required."

      });

    }


    const valid =
      verifyAdminCredentials(
        username,
        password
      );


    if(!valid){

      return res.status(401).json({

        success:false,

        message:
          "Invalid admin credentials."

      });

    }


    const sessionToken =
      process.env.ADMIN_SESSION_TOKEN;


    if(!sessionToken){

      return res.status(500).json({

        success:false,

        message:
          "Admin session is not configured."

      });

    }


    res.json({

      success:true,

      message:
        "Admin login successful.",

      token:
        sessionToken

    });

  }
);


// ================= COIN ORDER =================

app.post(
  "/api/orders/coins",
  (req, res) => {

    const {
      packageName,
      price,
      yoyoId,
      name,
      whatsapp,
      note
    } = req.body;


    if(
      !packageName ||
      !price ||
      !yoyoId ||
      !name ||
      !whatsapp
    ){

      return res.status(400).json({

        success:false,

        message:
          "Required order details are missing."

      });

    }


    const order =
      createOrder({

        orderId:
          generateOrderId("SPM"),

        type:
          "Coin Recharge",

        packageName,

        price,

        yoyoId,

        name,

        whatsapp,

        note:
          note || "",

        status:
          "pending"

      });


    res.status(201).json({

      success:true,

      message:
        "Coin order received.",

      order

    });

  }
);


// ================= PAID SENDING =================

app.post(
  "/api/orders/paid-sending",
  (req, res) => {

    const {
      packageName,
      price,
      senderYoyo,
      receiverYoyo,
      name,
      whatsapp,
      note
    } = req.body;


    if(
      !packageName ||
      !price ||
      !senderYoyo ||
      !receiverYoyo ||
      !name ||
      !whatsapp
    ){

      return res.status(400).json({

        success:false,

        message:
          "Required order details are missing."

      });

    }


    const order =
      createOrder({

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

        note:
          note || "",

        status:
          "pending"

      });


    res.status(201).json({

      success:true,

      message:
        "Paid Sending order received.",

      order

    });

  }
);


// ================= FIND ORDER =================

app.get(
  "/api/orders/:orderId",
  (req, res) => {

    const order =
      findOrder(
        req.params.orderId
      );


    if(!order){

      return res.status(404).json({

        success:false,

        message:
          "Order not found."

      });

    }


    res.json({

      success:true,

      order

    });

  }
);


// ================= ADMIN ORDERS =================

app.get(
  "/api/admin/orders",
  requireAdmin,
  (req, res) => {

    res.json({

      success:true,

      orders:
        getOrders()

    });

  }
);


// ================= UPDATE ORDER =================

app.patch(
  "/api/admin/orders/:orderId",
  requireAdmin,
  (req, res) => {

    const {
      status
    } = req.body;


    const allowedStatuses = [

      "pending",
      "processing",
      "completed",
      "cancelled"

    ];


    if(
      !allowedStatuses.includes(status)
    ){

      return res.status(400).json({

        success:false,

        message:
          "Invalid order status."

      });

    }


    const order =
      updateOrderStatus(
        req.params.orderId,
        status
      );


    if(!order){

      return res.status(404).json({

        success:false,

        message:
          "Order not found."

      });

    }


    res.json({

      success:true,

      order

    });

  }
);


// ================= ADMIN STATS =================

app.get(
  "/api/admin/stats",
  requireAdmin,
  (req, res) => {

    const orders =
      getOrders();


    const coinOrders =
      orders.filter(
        order =>
          order.type ===
          "Coin Recharge"
      ).length;


    const paidOrders =
      orders.filter(
        order =>
          order.type ===
          "Paid Sending"
      ).length;


    res.json({

      success:true,

      stats:{

        totalOrders:
          orders.length,

        coinOrders,

        paidOrders

      }

    });

  }
);


// ================= START SERVER =================

app.listen(
  PORT,
  () => {

    console.log(
      `SPM TOP AGENCY API running on port ${PORT}`
    );

  }
);
