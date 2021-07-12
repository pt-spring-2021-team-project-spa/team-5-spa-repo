package org.wecancodeit.mysteryeducator.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.SolarSystem;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class PlanetRestController {

    @Resource
    private PlanetRepository planetRepo;

    @GetMapping("/api/planets")
    public Collection<Planet> getPlanets(){
        return (Collection<Planet>) planetRepo.findAll();
    }
    @RequestMapping(value = "/api/planets/{id}")
    public Optional<Planet> getPlanet(@PathVariable Long id){
        return planetRepo.findById(id);
    }
    @GetMapping(value = "/api/planets/{solarSystem}")
    public Optional<Planet> getSolarSystem(@PathVariable SolarSystem solarSystem){
        return planetRepo.findBySolarSystem(solarSystem);
    }

}
