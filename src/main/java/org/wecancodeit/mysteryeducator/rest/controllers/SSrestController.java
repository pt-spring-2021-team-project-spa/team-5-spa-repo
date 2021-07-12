package org.wecancodeit.mysteryeducator.rest.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.SolarSystem;
import org.wecancodeit.mysteryeducator.repositories.SSRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class SSrestController {
    @Resource
    private SSRepository ssRepository;

    @GetMapping("/api/solar_system")
    public Collection<SolarSystem> getSolarSystems(){
        return (Collection<SolarSystem>) ssRepository.findAll();
    }
    @GetMapping("/api/solar_system/{ssId}")
    public SolarSystem getSolarSystem(@PathVariable Long ssId){
        return ssRepository.findById(ssId).get();
    }

}
