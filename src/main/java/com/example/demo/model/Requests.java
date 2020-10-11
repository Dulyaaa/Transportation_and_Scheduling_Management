package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Requests")
public class Requests {

    @Id
    private String id;

    private String customerName;
    private String customerAddress;
    private int quantity;
    private String assignedVehicle;
    private String requestedDate;
    private String transportedDate;
    private boolean status;

    public Requests() {
    }

    public Requests(String customerName, String customerAddress, int quantity, String assignedVehicle, String requestedDate, String transportedDate, boolean status) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.quantity = quantity;
        this.assignedVehicle = assignedVehicle;
        this.requestedDate = requestedDate;
        this.transportedDate = transportedDate;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAssignedVehicle() {
        return assignedVehicle;
    }

    public void setAssignedVehicle(String assignedVehicle) {
        this.assignedVehicle = assignedVehicle;
    }

    public String getRequestedDate() {
        return requestedDate;
    }

    public void setRequestedDate(String requestedDate) {
        this.requestedDate = requestedDate;
    }

    public String getTransportedDate() {
        return transportedDate;
    }

    public void setTransportedDate(String transportedDate) {
        this.transportedDate = transportedDate;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString(){
        return "Request [id="+id+", customerName=" + customerName+"customerAddress="+customerAddress+"status="+status+"quantity="+quantity+" requestedDate=" + requestedDate +"transportedDate=" + transportedDate+ "]";
    }
}
