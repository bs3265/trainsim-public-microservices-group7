package edu.drexel.trainsim.web;

import com.google.inject.Inject;
import edu.drexel.trainsim.models.PriceRequest;
import edu.drexel.trainsim.models.PriceResponse;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class PriceController implements Controller {
    @Inject
    public PriceController() {
    }

    public void bindRoutes(Javalin app) {
        app.post("/api/stripe/price", this::checkPrice);
    }

    private void checkPrice(Context ctx) {
        try {
            PriceRequest request = ctx.bodyAsClass(PriceRequest.class);
            ctx.json(new PriceResponse(5 * request.getRouteIDs().size()));
        } catch (Exception e) {
            ctx.status(400);
        }
    }
}
