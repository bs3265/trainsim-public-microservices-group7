package edu.drexel.trainsim.order.db;
import com.google.inject.Inject;

import org.sql2o.Sql2o;

import edu.drexel.trainsim.order.models.OrderDetail;
import java.util.Date;

public class CreateOrderImpl implements CreateOrder{
    private final Sql2o db;

    @Inject
    public CreateOrderImpl(Sql2o db) {
        this.db = db;
    }   

    public OrderDetail call(OrderDetail order) {
        var sql = "INSERT INTO orders (id, email, ticketNumber, depart, arrive, tripType, amount, phone, passenger, creationDate) "
                + "VALUES (:id, :email, :ticketNumber, :depart, :arrive, :tripType, :amount, :phone, :passenger, :creationDate);";
        order.setId(String.valueOf(System.currentTimeMillis()));
        order.setTicketNumber(123);
        order.setCreationDate(new Date(System.currentTimeMillis()));
        try (var con = this.db.open()) {
            var query = con.createQuery(sql);
            query.addParameter("id", order.getId())
                    .addParameter("email", order.getEmail())
                    .addParameter("ticketNumber", order.getTicketNumber())
                    .addParameter("depart", order.getDepart())
                    .addParameter("arrive", order.getArrive())
                    .addParameter("tripType", order.getTripType())
                    .addParameter("amount", order.getAmount())
                    .addParameter("phone", order.getPhone())
                    .addParameter("passenger", order.getPassenger())
                    .addParameter("creationDate", order.getCreationDate())
                    .addToBatch();

            query.executeBatch();
        } catch(Exception e) {
            System.out.println(e.toString());
        }

        return order;
    }

}