package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Vehicless")
public class Vehicless {

    @Id
    private String id;

    private String vehicleNumber;
    private int registeredYear;
    private String type;
    private boolean status;
    private int capacity;

    public Vehicless() {
    }

    public Vehicless(String vehicleNumber, int registeredYear, String type, boolean status, int capacity) {
        this.vehicleNumber = vehicleNumber;
        this.registeredYear = registeredYear;
        this.type = type;
        this.status = status;
        this.capacity = capacity;
    }

    public String getId() {
        return id;
    }

//    public void setId(String Id) {
//        this.id = Id;
//    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getRegisteredYear() {
        return registeredYear;
    }

    public void setRegisteredYear(int registeredYear) {
        this.registeredYear = registeredYear;
    }

    @Override
    public String toString(){
        return "Vehicle [id="+id+", vehicleNumber=" + vehicleNumber+"type="+type+"status="+status+"capacity"+capacity+"]";
    }
}
