package org.wecancodeit.mysteryeducator.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.Grade;
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
    @PostMapping("/api/add-student")
    public Collection<Student> addStudent(@RequestBody String body,@RequestBody Grade grade) throws JSONException{
        JSONObject newStudent = new JSONObject(body);
        JSONObject newStudentGrade = new JSONObject(grade);
        String studentName = newStudent.getString("newStudentName");
        Grade studentGrade = (Grade) newStudentGrade.get("newStudentGrade");
        Optional<Student> studentOptional = studentRepo.findByName(studentName);
        if(studentOptional.isEmpty()){
            Student studentToAdd = new Student(studentName,studentGrade);
            studentRepo.save(studentToAdd);
        }
        return (Collection<Student>) studentRepo.findAll();
    }

}
