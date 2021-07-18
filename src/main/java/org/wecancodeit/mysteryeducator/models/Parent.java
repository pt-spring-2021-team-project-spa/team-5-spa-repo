package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.*;

@Entity
public class Parent {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany
    @JsonIgnore
    private Collection<Student> students;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public Collection<Student> getStudents(){
        return students;
    }

    public Parent (String name, Collection<Student> students){
        this.name = name;
        this.students = students;
    }

    public Parent(){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Parent parent = (Parent) o;
        return Objects.equals(id, parent.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
    public void addStudent(Student studentToAdd){students.add(studentToAdd);}
    public void deleteStudent(Student studentToDelete){students.remove(studentToDelete);}
}
