package com.example.demo.repository;

import com.example.demo.model.Vehicles;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VehiclesRepository extends MongoRepository<Vehicles, String> {

//    List<Vehicles> findByPublished(boolean published);
//    List<Vehicles> findByVehicle(String type);
}
