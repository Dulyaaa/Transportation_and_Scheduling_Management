package com.example.demo.controller;

import com.example.demo.model.Vehicles;
import com.example.demo.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VehiclesController {

    @Autowired
    private VehicleService vehicleService;

    @RequestMapping(value = "/vehicles", method = RequestMethod.POST)
    public Vehicles addNewVehicle(@RequestBody Vehicles vehicle){
        return vehicleService.addNewVehicleService(vehicle);
    }
}
