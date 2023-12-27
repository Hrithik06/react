// const GITHUB_API = "https://api.github.com/users/hrithik06"

// const user = fetch(GITHUB_API)
// console.log(user)

// user.then((data)=>console.log(data))

const cart = ["sneakers", "trousers", "shirts"];
createOrder(cart)
    .then(function (orderId) {
        // console.log(orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (orderDetails) {
        console.log(orderDetails.message);

        return showOrderSummary(orderDetails);
    })
    // .then(function (paymentInfo) {
    //     console.log(paymentInfo);
    // })
    .then(function () {
        console.log(updateWallet())


    })
    .catch(function (err) {
        console.log(err.message);
        // alert("Your cart is invalid, add something in it so we can server better")
    })
    .then(function (orderId) {
        console.log("No matter what happens, I will definitely be called");
    });

function createOrder(cart) {
    const pr = new Promise(function (r1, r2) {
        //createOrder
        //validateCart
        //orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            r2(err);
        }
        //logic for createOrder
        const order = { orderId: 123456, cart: cart };

        if (order) {
            setTimeout(function () {
                r1(order);
            }, 5000);
        }
    });
    return pr;
}

function validateCart(cart) {
    return true;
}


function proceedToPayment(order) {
    return (
        {
            'message': "Payment processed for order " + order.orderId + " containg " + order.cart,
            'order': order
        }
    );
}

function showOrderSummary(paymentInfo) {
    return paymentInfo.order;
}

function updateWallet() {
    return '10% of order purchase value added to your wallet'
}
