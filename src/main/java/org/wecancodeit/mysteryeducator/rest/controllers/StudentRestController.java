package org.wecancodeit.mysteryeducator.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.Parent;
import org.wecancodeit.mysteryeducator.models.Student;
import org.wecancodeit.mysteryeducator.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class StudentRestController {
    @Resource
    private StudentRepository studentRepo;

    @GetMapping("/api/students")
    public Collection<Student> getStudents(){
        return (Collection<Student>) studentRepo.findAll();
    }
    @GetMapping("api/students/{id}")
    public Student getStudent(@PathVariable Long id){
        return studentRepo.findById(id).get();
    }
    @GetMapping("api/students/{id}/{parent}")
    public Optional<Student> getGuardian(@PathVariable Parent parent){
        return studentRepo.findById(parent.getId());
    }
}
