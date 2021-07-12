package org.wecancodeit.mysteryeducator.rest.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.SolarSystem;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class PlanetRestController {

    @Resource
    private PlanetRepository planetRepo;

    @GetMapping("/api/planets")
    public Collection<Planet> getPlanets(){
        return (Collection<Planet>) planetRepo.findAll();
    }
    @GetMapping("/api/planets/{id}")
    public Planet getPlanet(@PathVariable Long id){
        return planetRepo.findById(id).get();
    }
    @GetMapping("/api/planets/{solarSystem}")
        public Planet getSolarSystem(@PathVariable SolarSystem solarSystem){
        return planetRepo.findBySolarSystem(solarSystem).get();
    }

}
