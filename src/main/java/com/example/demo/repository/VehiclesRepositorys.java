package com.example.demo.repository;

import com.example.demo.model.Vehicles;
import com.example.demo.model.Vehicless;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VehiclesRepositorys extends MongoRepository<Vehicless, String> {
    List<Vehicless> findByVehicleNumber(String vehicleNumber);

//    List<Vehicles> findByPublished(boolean published);
//    List<Vehicles> findByVehicle(String type);
}
