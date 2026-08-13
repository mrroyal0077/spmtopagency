// SPM TOP AGENCY
// Database layer placeholder
//
// IMPORTANT:
// Real database credentials must be stored
// as environment variables on the backend server.

const orders = [];


/* ================= CREATE ORDER ================= */

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


/* ================= GET ORDERS ================= */

function getOrders(){

  return [...orders];

}


/* ================= FIND ORDER ================= */

function findOrder(orderId){

  return orders.find(
    order => order.orderId === orderId
  );

}


/* ================= UPDATE STATUS ================= */

function updateOrderStatus(
  orderId,
  status
){

  const order =
    orders.find(
      item => item.orderId === orderId
    );

  if(!order){
    return null;
  }

  order.status = status;

  order.updatedAt =
    new Date().toISOString();

  return order;

}


module.exports = {

  createOrder,

  getOrders,

  findOrder,

  updateOrderStatus

};
