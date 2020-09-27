package com.example.demo.controller;

import com.example.demo.model.Vehicles;
import com.example.demo.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class VehiclesController {

    @Autowired
    VehiclesRepository vehiclesRepository;

    @GetMapping("/Vehicles")
    public ResponseEntity<List<Vehicles>> getAllVehicles(@RequestParam(required = false) String vehicleNumber){
        try{
            List<Vehicles> vehicles = new ArrayList<Vehicles>();

            if(vehicleNumber == null)
                vehiclesRepository.findAll().forEach(vehicles::add);
            else
                vehiclesRepository.findByVehicleNumber(vehicleNumber).forEach(vehicles::add);

            if(vehicles.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/Vehicles/{id}")
    public ResponseEntity<Vehicles> getVehicleById(@PathVariable("id") String id) {
        Optional<Vehicles> vehicleData = vehiclesRepository.findById(id);

        if(vehicleData.isPresent()){
            return new ResponseEntity<>(vehicleData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Vehicles")
    public ResponseEntity<Vehicles> createVehicle(@RequestBody Vehicles vehicles) {
        try{
            Vehicles _vehicles = vehiclesRepository.save(new Vehicles(vehicles.getVehicleNumber(), vehicles.getRegisteredYear(), vehicles.getType(), false, vehicles.getCapacity()));
            return new ResponseEntity<>(_vehicles, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/Vehicles/{id}")
    public ResponseEntity<Vehicles> updateVehicle(@PathVariable("id") String id, @RequestBody Vehicles vehicles){
        Optional<Vehicles> vehicleData = vehiclesRepository.findById(id);

        if(vehicleData.isPresent()){
            Vehicles _vehicle = vehicleData.get();
            _vehicle.setVehicleNumber(vehicles.getVehicleNumber());
            _vehicle.setRegisteredYear(vehicles.getRegisteredYear());
            _vehicle.setCapacity(vehicles.getCapacity());
            _vehicle.setType(vehicles.getType());
            _vehicle.setStatus(vehicles.isStatus());

            return new ResponseEntity<>(vehiclesRepository.save(_vehicle), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Vehicles/{id}")
    public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable("id") String id) {
        try{
            vehiclesRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
