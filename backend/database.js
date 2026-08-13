// SPM TOP AGENCY
// Persistent database interface
//
// IMPORTANT:
// This file currently uses a JSON-compatible
// storage interface. For production, connect
// this interface to a real hosted database.

const orders = [];
const visitors = [];


/* ================= ORDERS ================= */

function createOrder(order){

  const savedOrder = {
    ...order,

    createdAt:
      order.createdAt ||
      new Date().toISOString()
  };

  orders.push(savedOrder);

  return savedOrder;
}


function getOrders(){

  return [...orders];

}


function findOrder(orderId){

  return orders.find(
    order =>
      order.orderId === orderId
  );

}


function updateOrderStatus(
  orderId,
  status
){

  const order =
    orders.find(
      item =>
        item.orderId === orderId
    );

  if(!order){
    return null;
  }

  order.status = status;

  order.updatedAt =
    new Date().toISOString();

  return order;
}


/* ================= VISITORS ================= */

function createVisitor(visitor){

  const record = {

    ...visitor,

    createdAt:
      visitor.createdAt ||
      new Date().toISOString()

  };

  visitors.push(record);

  return record;
}


function getVisitors(){

  return [...visitors];

}


function getVisitorCount(){

  return visitors.length;

}


/* ================= STATS ================= */

function getStats(){

  const coinOrders =
    orders.filter(
      order =>
        order.type === "Coin Recharge"
    ).length;


  const paidOrders =
    orders.filter(
      order =>
        order.type === "Paid Sending"
    ).length;


  return {

    totalOrders:
      orders.length,

    coinOrders,

    paidOrders,

    visitors:
      visitors.length

  };

}


module.exports = {

  createOrder,

  getOrders,

  findOrder,

  updateOrderStatus,

  createVisitor,

  getVisitors,

  getVisitorCount,

  getStats

};
