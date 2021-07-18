package org.wecancodeit.mysteryeducator.rest.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Grade;
import org.wecancodeit.mysteryeducator.models.Student;
import org.wecancodeit.mysteryeducator.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.*;

@RestController
@CrossOrigin
public class GradeRestController {

    @Resource
    private StudentRepository studentRepo;

//    @GetMapping("/api/grades14")
//    public Iterable<Student> getStringToGrade(@RequestParam("gradeLevel") Grade gradeLevel){
//       List<Grade> retrievedGrade = Arrays.asList(Grade.values());
//       Optional<Student> studentOptional = studentRepo.findByGrade(gradeLevel);
//       if(studentOptional.isPresent()){
//           retrievedGrade = (List<Grade>) Collections.singleton(studentOptional.get().getGradeLevel());
//       }
//       return studentRepo.findAll();
//    }


}
