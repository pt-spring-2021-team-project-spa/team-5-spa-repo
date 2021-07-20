package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.*;
import org.wecancodeit.mysteryeducator.repositories.ParentRepository;
import org.wecancodeit.mysteryeducator.repositories.PlanetRepository;
import org.wecancodeit.mysteryeducator.repositories.SSRepository;
import org.wecancodeit.mysteryeducator.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.Collections;

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

        Planet mercury = new Planet("Mercury","http://src/main/resources/static/images/earth.jpg","3,030 Miles", "35 million Miles", "800 Degrees F","description...",ourSS);
        Planet venus = new Planet("Venus","images.venus.jpg","7,520 Miles","67 million Miles","847 Degrees F.","description...",ourSS);
        Planet earth = new Planet("Earth","images/earth.jpg","7,917 Miles","93 million Miles","61 Degrees F.","description...",ourSS);
        Planet mars = new Planet("Mars","images/mars.jpg","4,212 Miles","156 million Miles","-81 Degrees F.","description...",ourSS);
        Planet jupiter = new Planet("Jupiter","images/jupiter.png","86,881 Miles","468 million Miles","-238 Degrees F.","description...",ourSS);
        Planet saturn = new Planet("Saturn","images/saturn.jpg","72,367 Miles","924 million Miles","-285 Degrees F.","description...",ourSS);
        Planet uranus = new Planet("Uranus","images.uranus.jpg","31,518 Miles","1.8 billion Miles","-353 Degrees F.","description...",ourSS);
        Planet neptune = new Planet("Neptune","images/neptune.jpg","30,599 Miles","2.78 billion Miles","-373 Degrees F.","description...",ourSS);
        Planet pluto = new Planet("Pluto","images/pluto.jpg","1,476 Miles", "39.5 Astronomical Units (AU)","-400 Degrees F.","decription...",ourSS);

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
        Student testStudent2 = new Student("Gelena",Grade.SECOND);
        Student testStudent3 = new Student("Giada",Grade.THIRD);
        studentRepo.save(testStudent1);
        studentRepo.save(testStudent2);
        studentRepo.save(testStudent3);

        Parent testParent1 = new Parent("Jordan", Collections.singleton(testStudent1));
        Parent testParent2 = new Parent("John", Collections.singleton(testStudent2));
        Parent testParent3 = new Parent("Jermaine", Collections.singleton(testStudent3));
        parentRepo.save(testParent1);
        parentRepo.save(testParent2);
        parentRepo.save(testParent3);




    }
}
