package org.wecancodeit.mysteryeducator.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.SolarSystem;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class PlanetRestController {

    @Resource
    private PlanetRepository planetRepo;

    @GetMapping("/api/planets")
    public Collection<Planet> getPlanets(){
        return (Collection<Planet>) planetRepo.findAll();
    }
    @GetMapping(value = "/api/planets/{id}")
    public Planet getPlanet(@PathVariable Long id){
        return planetRepo.findById(id).get();
    }
    @GetMapping(value = "/api/planets/{solar_system}")
    public Planet getSolarSystem(@PathVariable SolarSystem solar_system){
        return planetRepo.findBySolarSystem(solar_system).get();
    }

}