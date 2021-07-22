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

        Planet mercury = new Planet("Mercury","https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg","http://localhost:8080/api/planets/2","3,030 Miles", "35 million Miles", "800 Degrees F","description...",ourSS);
        Planet venus = new Planet("Venus","https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg","http://localhost:8080/api/planets/3","7,520 Miles","67 million Miles","847 Degrees F.","description...",ourSS);
        Planet earth = new Planet("Earth","https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb.jpg","https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW5ldHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","7,917 Miles","93 million Miles","61 Degrees F.","description...",ourSS);
        Planet mars = new Planet("Mars","https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg","http://localhost:8080/api/planets/5","4,212 Miles","156 million Miles","-81 Degrees F.","description...",ourSS);
        Planet jupiter = new Planet("Jupiter","https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg","http://localhost:8080/api/planets/6","86,881 Miles","468 million Miles","-238 Degrees F.","description...",ourSS);
        Planet saturn = new Planet("Saturn","https://cdn.hswstatic.com/gif/saturn-lead-image.jpg","http://localhost:8080/api/planets/7","72,367 Miles","924 million Miles","-285 Degrees F.","description...",ourSS);
        Planet uranus = new Planet("Uranus","https://www.konnecthq.com/wp-content/uploads/2019/07/Uranus-2-10-1.jpg","http://localhost:8080/api/planets/8","31,518 Miles","1.8 billion Miles","-353 Degrees F.","description...",ourSS);
        Planet neptune = new Planet("Neptune","https://qph.fs.quoracdn.net/main-qimg-57fb4c82d6b0861d2fd1277fcee25d31","http://localhost:8080/api/planets/9","30,599 Miles","2.78 billion Miles","-373 Degrees F.","description...",ourSS);
        Planet pluto = new Planet("Pluto","https://cdn.uanews.arizona.edu/s3fs-public/images/uanow/Pluto_UANow%20thmb.jpg","http://localhost:8080/api/planets/10","1,476 Miles", "39.5 Astronomical Units (AU)","-400 Degrees F.","decription...",ourSS);

        planetRepo.save(mercury);
        planetRepo.save(venus);
        planetRepo.save(earth);
        planetRepo.save(mars);
        planetRepo.save(jupiter);
        planetRepo.save(saturn);
        planetRepo.save(uranus);
        planetRepo.save(neptune);
        planetRepo.save(pluto);


        Student testStudent1 = new Student("Myles",Grade.FIRST,10);
        Student testStudent2 = new Student("Gelena",Grade.SECOND,30);
        Student testStudent3 = new Student("Giada",Grade.THIRD,50);
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
