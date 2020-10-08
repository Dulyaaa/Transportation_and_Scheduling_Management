package com.example.demo.repository;

import com.example.demo.model.Requests;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RequestsRepository extends MongoRepository<Requests, String> {
    List<Requests> findByCustomerName(String customerName);

//    List<Vehicles> findByPublished(boolean published);
//    List<Vehicles> findByVehicle(String type);
}
