package edu.drexel.trainsim;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.inject.Guice;
import com.google.inject.Injector;

import edu.drexel.trainsim.web.PaymentController;
import edu.drexel.trainsim.web.PriceController;

import io.javalin.Javalin;
import io.javalin.plugin.json.JavalinJson;

public class App {
    public static void main(String[] args) throws Exception {
        // Dependency injection
        Injector injector = Guice.createInjector();

        // Web server
        Gson gson = new GsonBuilder().create();
        JavalinJson.setFromJsonMapper(gson::fromJson);
        JavalinJson.setToJsonMapper(gson::toJson);
        Javalin app = Javalin.create(config -> {
            config.enableDevLogging();
            config.enableCorsForAllOrigins();
        });

        // Setup controllers
        injector.getInstance(PriceController.class).bindRoutes(app);
        injector.getInstance(PaymentController.class).bindRoutes(app);

        // Start the web server
        app.start(80);
    }
}
