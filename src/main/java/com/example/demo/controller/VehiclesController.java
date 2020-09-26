package com.example.demo.controller;

import com.example.demo.model.Vehicles;
import com.example.demo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class VehiclesController {

    @Autowired
    VehiclesRepository vehiclesRepository;

    @PostMapping("/Vehicles")
    public ResponseEntity<Vehicles> createVehicle(@RequestBody Vehicles vehicles) {
        try{
            Vehicles _vehicles = vehiclesRepository.save(new Vehicles(vehicles.getVehicleNumber(), vehicles.getRegisteredYear(), vehicles.getType(), false, vehicles.getCapacity()));
            return new ResponseEntity<>(_vehicles, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
