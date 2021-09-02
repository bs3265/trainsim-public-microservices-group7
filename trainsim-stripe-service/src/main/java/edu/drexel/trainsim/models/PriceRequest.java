package edu.drexel.trainsim.models;

import java.util.List;

public class PriceRequest {
    private List<String> routeIDs;

    public List<String> getRouteIDs() {
        return routeIDs;
    }


    public PriceRequest(List<String> routeIDs, CreditCardInfo creditCardInfo) {
        this.routeIDs = routeIDs;
    }
}
