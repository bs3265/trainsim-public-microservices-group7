package edu.drexel.trainsim.order.models;
import edu.drexel.trainsim.itinerary.models.Stop;
import java.util.Date;

public class OrderDetail {
    protected String id;
    protected String email;
    protected int ticketNumber;
    //depart and arrive should be stop or place
    protected String depart;
    protected String arrive;
    //passenger should have it's own object
    protected String passenger;
    protected String tripType;
    protected Double amount;
    protected String phone;
    protected Date creationDate;

    public OrderDetail() {

    }
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getTicketNumber() {
		return ticketNumber;
	}
	public void setTicketNumber(int ticketNumber) {
		this.ticketNumber = ticketNumber;
	}
	public String getDepart() {
		return depart;
	}
	public void setDepart(String depart) {
		this.depart = depart;
	}
	public String getArrive() {
		return arrive;
	}
	public void setArrive(String arrive) {
		this.arrive = arrive;
	}
	public String getPassenger() {
		return passenger;
	}
	public void setPassenger(String passenger) {
		this.passenger = passenger;
	}
	public String getTripType() {
		return tripType;
	}
	public void setTripType(String tripType) {
		this.tripType = tripType;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public OrderDetail(String id, String email, int ticketNumber, String depart, String arrive, String tripType, Double amount, String phone, Date creationDate){
        this.id = id;
        this.email = email;
        this.ticketNumber = ticketNumber;
        this.depart = depart;
        this.arrive = arrive;
        this.tripType = tripType;
        this.amount = amount;
        this.phone = phone;
        this.creationDate = creationDate;
    }
    
}