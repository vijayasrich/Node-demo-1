const orders = [
    { id: 1, userId: 101, product: 'Laptop', amount: 999, delivered: true },
    { id: 2, userId: 102, product: 'Phone', amount: 699, delivered: false },
    { id: 3, userId: 101, product: 'Tablet', amount: 499, delivered: true },
    { id: 4, userId: 103, product: 'Monitor', amount: 199, delivered: true },
    { id: 5, userId: 104, product: 'Keyboard', amount: 49, delivered: false },
    { id: 6, userId: 102, product: 'Mouse', amount: 25, delivered: true },
    { id: 7, userId: 105, product: 'Printer', amount: 150, delivered: true },
    { id: 8, userId: 106, product: 'Webcam', amount: 75, delivered: false },
    { id: 9, userId: 107, product: 'Speakers', amount: 85, delivered: true },
    { id: 10, userId: 108, product: 'Router', amount: 120, delivered: true },
  ];
  
  // 1) List the orders that are delivered
  const deliveredOrders = orders.filter(order => order.delivered);
  console.log("Delivered Orders:", deliveredOrders);
  
  // 2) Filtered orders to an array of objects with only userId and amount
  const userIdAndAmount = deliveredOrders.map(order => ({
    userId: order.userId,
    amount: order.amount,
  }));
  console.log("UserId and Amount:", userIdAndAmount);
  
  // 3) Find the first order placed by the user with userId 102
  const firstOrderByUser102 = orders.find(order => order.userId === 102);
  console.log("First Order by User 102:", firstOrderByUser102);
  
  // 4) Filtered orders to calculate the total revenue
  const totalRevenue = deliveredOrders.reduce((sum, order) => sum + order.amount, 0);
  console.log("Total Revenue:", totalRevenue);
  