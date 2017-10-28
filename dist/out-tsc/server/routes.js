System.register(["express", "./controllers/user", "./controllers/cat", "./controllers/address", "./controllers/orders", "./controllers/user-orders", "./controllers/items"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function setRoutes(app) {
        var router = express.Router();
        var catCtrl = new cat_1.default();
        var userCtrl = new user_1.default();
        var itemsCtrl = new items_1.default();
        var addressCtrl = new address_1.default();
        var orderCtrl = new orders_1.default();
        var userOrdersCtrl = new user_orders_1.default();
        // Cats
        router.route('/cats').get(catCtrl.getAll);
        router.route('/cats/count').get(catCtrl.count);
        router.route('/cat').post(catCtrl.insert);
        router.route('/cat/:id').get(catCtrl.get);
        router.route('/cat/:id').put(catCtrl.update);
        router.route('/cat/:id').delete(catCtrl.delete);
        // Items
        // itemsCtrl.getByType('');
        router.route('/items').get(itemsCtrl.getAll);
        router.route('/items/count').get(itemsCtrl.count);
        router.route('/items').post(itemsCtrl.insert);
        router.route('/items/:id').get(itemsCtrl.get);
        router.route('/items/:id').put(itemsCtrl.update);
        router.route('/items/:id').delete(itemsCtrl.delete);
        router.route('/items/isCartValid').post(itemsCtrl.isCartValid);
        //Address
        router.route('/address').get(addressCtrl.getAll);
        router.route('/address').post(addressCtrl.insert);
        router.route('/address/:id').get(addressCtrl.get);
        router.route('/address/:id').put(addressCtrl.update);
        router.route('/address/:id').delete(addressCtrl.delete);
        //All Orders
        router.route('/order').get(orderCtrl.getAll);
        router.route('/order').post(orderCtrl.insert);
        router.route('/order/count').get(orderCtrl.count);
        router.route('/order/:id').get(orderCtrl.get);
        router.route('/order/:id').put(orderCtrl.update);
        router.route('/order/:id').delete(orderCtrl.delete);
        //User Orders
        router.route('/user-orders').get(userOrdersCtrl.getAll);
        router.route('/user-orders').post(userOrdersCtrl.insert);
        router.route('/user-orders/count').get(userOrdersCtrl.count);
        router.route('/user-orders/:id').get(userOrdersCtrl.get);
        router.route('/user-orders/:id').put(userOrdersCtrl.update);
        router.route('/user-orders/:id').delete(userOrdersCtrl.delete);
        // Users
        router.route('/login').post(userCtrl.login);
        router.route('/users').get(userCtrl.getAll);
        router.route('/users/count').get(userCtrl.count);
        router.route('/user').post(userCtrl.insert);
        router.route('/user/:id').get(userCtrl.get);
        router.route('/user/:id').put(userCtrl.update);
        router.route('/user/:id').delete(userCtrl.delete);
        router.route('/createHash').post(userCtrl.createHash);
        router.route('/PaymentStatus').post(userCtrl.PaymentStatus);
        // Apply the routes to our application with the prefix /api
        app.use('/api', router);
    }
    exports_1("default", setRoutes);
    var express, user_1, cat_1, address_1, orders_1, user_orders_1, items_1;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (cat_1_1) {
                cat_1 = cat_1_1;
            },
            function (address_1_1) {
                address_1 = address_1_1;
            },
            function (orders_1_1) {
                orders_1 = orders_1_1;
            },
            function (user_orders_1_1) {
                user_orders_1 = user_orders_1_1;
            },
            function (items_1_1) {
                items_1 = items_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=routes.js.map