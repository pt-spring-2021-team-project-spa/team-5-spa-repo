package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.SolarSystem;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;
import org.wecancodeit.mysteryeducator.repositories.SSRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    SSRepository ssRepo;
    @Resource
    PlanetRepository planetRepo;

    @Override
    public void run(String... args) throws Exception {

        SolarSystem ourSS = new SolarSystem("Solar System","Milky Way","description...");
        ssRepo.save(ourSS);

        Planet mercury = new Planet("Mercury","3,030 Miles", "35 million Miles", "800 Degrees F","description...");
        Planet venus = new Planet("Venus","7,520 Miles","67 million Miles","847 Degrees F.","description...");
        Planet earth = new Planet("Earth","7,917 Miles","93 million Miles","61 Degrees F.","description...");
        Planet mars = new Planet("Mars","4,212 Miles","156 million Miles","-81 Degrees F.","description...");
        Planet jupiter = new Planet("Jupiter","86,881 Miles","468 million Miles","-238 Degrees F.","description...");
        Planet saturn = new Planet("Saturn","72,367 Miles","924 million Miles","-285 Degrees F.","description...");
        Planet uranus = new Planet("Uranus","31,518 Miles","1.8 billion Miles","-353 Degrees F.","description...");
        Planet neptune = new Planet("Neptune","30,599 Miles","2.78 billion Miles","-373 Degrees F.","description...");
        Planet pluto = new Planet("Pluto","1,476 Miles", "39.5 Astronomical Units (AU)","-400 Degrees F.","decription...");

        planetRepo.save(mercury);
        planetRepo.save(venus);
        planetRepo.save(earth);
        planetRepo.save(mars);
        planetRepo.save(jupiter);
        planetRepo.save(saturn);
        planetRepo.save(uranus);
        planetRepo.save(neptune);
        planetRepo.save(pluto);





    }
}
