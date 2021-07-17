package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.*;
import org.wecancodeit.mysteryeducator.repositories.ParentRepository;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;
import org.wecancodeit.mysteryeducator.repositories.SSRepository;
import org.wecancodeit.mysteryeducator.repositories.StudentRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    SSRepository ssRepo;
    @Resource
    PlanetRepository planetRepo;
    @Resource
    StudentRepository studentRepo;
    @Resource
    ParentRepository parentRepo;


    @Override
    public void run(String... args) throws Exception {

        SolarSystem ourSS = new SolarSystem("Solar System","Milky Way","description...");
        ssRepo.save(ourSS);

        Planet mercury = new Planet("Mercury","3,030 Miles", "35 million Miles", "800 Degrees F","description...",ourSS);
        Planet venus = new Planet("Venus","7,520 Miles","67 million Miles","847 Degrees F.","description...",ourSS);
        Planet earth = new Planet("Earth","7,917 Miles","93 million Miles","61 Degrees F.","description...",ourSS);
        Planet mars = new Planet("Mars","4,212 Miles","156 million Miles","-81 Degrees F.","description...",ourSS);
        Planet jupiter = new Planet("Jupiter","86,881 Miles","468 million Miles","-238 Degrees F.","description...",ourSS);
        Planet saturn = new Planet("Saturn","72,367 Miles","924 million Miles","-285 Degrees F.","description...",ourSS);
        Planet uranus = new Planet("Uranus","31,518 Miles","1.8 billion Miles","-353 Degrees F.","description...",ourSS);
        Planet neptune = new Planet("Neptune","30,599 Miles","2.78 billion Miles","-373 Degrees F.","description...",ourSS);
        Planet pluto = new Planet("Pluto","1,476 Miles", "39.5 Astronomical Units (AU)","-400 Degrees F.","decription...",ourSS);

        planetRepo.save(mercury);
        planetRepo.save(venus);
        planetRepo.save(earth);
        planetRepo.save(mars);
        planetRepo.save(jupiter);
        planetRepo.save(saturn);
        planetRepo.save(uranus);
        planetRepo.save(neptune);
        planetRepo.save(pluto);


        Student testStudent1 = new Student("Myles",Grade.FIRST);
        studentRepo.save(testStudent1);

        Parent testParent1 = new Parent("Jordan",testStudent1);
        parentRepo.save(testParent1);




    }
}
