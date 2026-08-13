import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve website files
app.use(express.static(__dirname));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "SPM TOP AGENCY",
    status: "online",
    time: new Date().toISOString()
  });
});

// Temporary API structure
app.get("/api/packages", (req, res) => {

  const packages = [
    { price: 100, coins: 1260 },
    { price: 200, coins: 2520 },
    { price: 300, coins: 3780 },
    { price: 500, coins: 6300 },
    { price: 1000, coins: 12600 },
    { price: 3000, coins: 37800 },
    { price: 5000, coins: 63000 },
    { price: 10000, coins: 126000 },
    { price: 20000, coins: 252000 }
  ];

  res.json({
    success: true,
    packages
  });
});

// Paid Sending rates
app.get("/api/paid-sending", (req, res) => {

  const rates = [
    {
      coins: 10000,
      price: 600
    },
    {
      coins: 100000,
      price: 6000
    }
  ];

  res.json({
    success: true,
    rates
  });
});

// Future order API
app.post("/api/orders", (req, res) => {

  const {
    type,
    yoyoId,
    receiverId,
    name,
    whatsapp,
    packageName,
    price
  } = req.body;

  if (!type || !yoyoId || !name || !whatsapp) {
    return res.status(400).json({
      success: false,
      message: "Required order details are missing."
    });
  }

  // Database will be connected in the next backend phase.

  res.status(201).json({
    success: true,
    message: "Order received.",
    order: {
      type,
      yoyoId,
      receiverId: receiverId || null,
      name,
      whatsapp,
      packageName: packageName || null,
      price: price || null
    }
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    website: "SPM TOP AGENCY",
    agencyCode: "100857",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(
    `SPM TOP AGENCY running on port ${PORT}`
  );
});
