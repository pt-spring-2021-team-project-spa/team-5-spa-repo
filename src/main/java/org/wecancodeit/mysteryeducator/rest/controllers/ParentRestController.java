package org.wecancodeit.mysteryeducator.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.Parent;
import org.wecancodeit.mysteryeducator.models.Student;
import org.wecancodeit.mysteryeducator.repositories.ParentRepository;
import org.wecancodeit.mysteryeducator.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ParentRestController {

    @Resource
    private ParentRepository parentRepo;
    @Resource
    private StudentRepository studentRepo;

    @GetMapping("/api/parents")
    public Collection<Parent> getParents(){
        return(Collection<Parent>) parentRepo.findAll();
    }
    @GetMapping("/api/parents/{id}")
    public Optional<Parent> getParent(@PathVariable Long id){
        return parentRepo.findById(id);
    }
    @PostMapping("/api/parents/{id}/add-student")
    public Optional<Parent> attachStudentToParent(@RequestBody String body, @PathVariable Long id) throws JSONException{
        JSONObject newStudent = new JSONObject(body);
        String studentName = newStudent.getString("studentName");
        Optional<Student> newStudentOpt = studentRepo.findByName(studentName);
        if(newStudentOpt.isPresent()){
            Optional<Parent> parentToAttachStudentToOpt = parentRepo.findById(id);
            Parent parentToAttachStudentTo = parentToAttachStudentToOpt.get();
            parentToAttachStudentTo.addStudent(newStudentOpt.get());
        }
        return parentRepo.findById(id);
    }
}
