package com.example.demo.controller;

import com.example.demo.model.Requests;
import com.example.demo.repository.RequestsRepository;
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
public class RequestsController {

    @Autowired
    RequestsRepository requestsRepository;

    @GetMapping("/Requests")
    public ResponseEntity<List<Requests>> getAllRequests(@RequestParam(required = false) String customerName){
        try{
            List<Requests> requests = new ArrayList<Requests>();

            if(customerName == null)
                requestsRepository.findAll().forEach(requests::add);
            else
                requestsRepository.findByCustomerName(customerName).forEach(requests::add);

            if(requests.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(requests, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/Requests/{id}")
    public ResponseEntity<Requests> getRequestById(@PathVariable("id") String id) {
        Optional<Requests> requestData = requestsRepository.findById(id);

        if(requestData.isPresent()){
            return new ResponseEntity<>(requestData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Requests")
    public ResponseEntity<Requests> createRequest(@RequestBody Requests requests) {
        try{
            Requests _requests = requestsRepository.save(new Requests(requests.getCustomerName(), requests.getCustomerAddress(), requests.getQuantity(), requests.getRequestedDate(), requests.getTransportedDate(), false));
            return new ResponseEntity<>(_requests, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/Requests/{id}")
    public ResponseEntity<Requests> updateRequest(@PathVariable("id") String id, @RequestBody Requests requests){
        Optional<Requests> requestData = requestsRepository.findById(id);

        if(requestData.isPresent()){
            Requests _request = requestData.get();
            _request.setCustomerName(requests.getCustomerName());
            _request.setCustomerAddress(requests.getCustomerAddress());
            _request.setRequestedDate(requests.getRequestedDate());
            _request.setTransportedDate(requests.getTransportedDate());
            _request.setQuantity(requests.getQuantity());
            _request.setStatus(requests.isStatus());

            return new ResponseEntity<>(requestsRepository.save(_request), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Requests/{id}")
    public ResponseEntity<HttpStatus> deleteRequest(@PathVariable("id") String id) {
        try{
            requestsRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
