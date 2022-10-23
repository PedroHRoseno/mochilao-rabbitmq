var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'NEW_RENTAL';
        var queue2 = 'RENTAL_FOUND';

        channel.assertQueue(queue, {
            durable: true,
        });

        channel.assertQueue(queue2, {
            durable: true,
        });

        console.log("RabbitMQ running...")

    });
});