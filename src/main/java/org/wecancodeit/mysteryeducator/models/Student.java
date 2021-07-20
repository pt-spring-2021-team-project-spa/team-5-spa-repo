package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Student {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String grade;
    @ManyToMany(mappedBy = "students")
    private Collection<Parent> parents;

<<<<<<< Updated upstream
=======

    private Grade gradeLevel;


>>>>>>> Stashed changes
    public Long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getGrade() {
        return grade;
    }

    public Collection<Parent> getParents() { return parents; }

    public Student(){}
    public Student(String name, String grade){
        this.name = name;
        this.grade = grade;
        parents = new ArrayList<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(id, student.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}

