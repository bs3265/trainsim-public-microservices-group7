package edu.drexel.trainsim.order.db;

import edu.drexel.trainsim.order.models.OrderDetail;

@FunctionalInterface
public interface CreateOrder {
    OrderDetail call(OrderDetail order);
}