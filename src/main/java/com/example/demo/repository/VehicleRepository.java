package com.example.demo.repository;

import com.example.demo.model.Vehicles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends MongoRepository<Vehicles, String> {
}
