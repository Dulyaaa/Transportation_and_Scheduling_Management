package com.example.demo.controller;

import com.example.demo.model.Vehicles;
import com.example.demo.model.Vehicless;
import com.example.demo.repository.VehiclesRepository;
import com.example.demo.repository.VehiclesRepositorys;
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
public class VehiclesControllers {

    @Autowired
    VehiclesRepositorys vehiclesRepositorys;

    @GetMapping("/Vehicless")
    public ResponseEntity<List<Vehicless>> getAllVehicles(@RequestParam(required = false) String vehicleNumber){
        try{
            List<Vehicless> vehicles = new ArrayList<Vehicless>();

            if(vehicleNumber == null)
                vehiclesRepositorys.findAll().forEach(vehicles::add);
            else
                vehiclesRepositorys.findByVehicleNumber(vehicleNumber).forEach(vehicles::add);

            if(vehicles.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/Vehicless/{id}")
    public ResponseEntity<Vehicless> getVehicleById(@PathVariable("id") String id) {
        Optional<Vehicless> vehicleData = vehiclesRepositorys.findById(id);

        if(vehicleData.isPresent()){
            return new ResponseEntity<>(vehicleData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Vehicless")
    public ResponseEntity<Vehicless> createVehicle(@RequestBody Vehicless vehicles) {
        try{
            Vehicless _vehicles = vehiclesRepositorys.save(new Vehicless(vehicles.getVehicleNumber(), vehicles.getRegisteredYear(), vehicles.getType(), false, vehicles.getCapacity()));
            return new ResponseEntity<>(_vehicles, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/Vehicless/{id}")
    public ResponseEntity<Vehicless> updateVehicle(@PathVariable("id") String id, @RequestBody Vehicless vehicles){
        Optional<Vehicless> vehicleData = vehiclesRepositorys.findById(id);

        if(vehicleData.isPresent()){
            Vehicless _vehicle = vehicleData.get();
            _vehicle.setVehicleNumber(vehicles.getVehicleNumber());
            _vehicle.setRegisteredYear(vehicles.getRegisteredYear());
            _vehicle.setCapacity(vehicles.getCapacity());
            _vehicle.setType(vehicles.getType());
            _vehicle.setStatus(vehicles.isStatus());

            return new ResponseEntity<>(vehiclesRepositorys.save(_vehicle), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Vehicless/{id}")
    public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable("id") String id) {
        try{
            vehiclesRepositorys.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
