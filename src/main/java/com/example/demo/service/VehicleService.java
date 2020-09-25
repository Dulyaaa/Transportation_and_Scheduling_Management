package com.example.demo.service;

import com.example.demo.model.Vehicles;
import com.example.demo.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

    @Autowired
    public VehicleRepository vehicleRepository;

    public Vehicles addNewVehicleService(Vehicles vehicle){
        return vehicleRepository.save(vehicle);
    }
}
