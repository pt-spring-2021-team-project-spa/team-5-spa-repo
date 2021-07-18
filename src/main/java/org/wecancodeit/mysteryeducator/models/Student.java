package org.wecancodeit.mysteryeducator.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Student {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToMany(mappedBy = "students")
    private Collection<Parent> parents;

    @Enumerated(EnumType.STRING)
    private Grade gradeLevel;


    public Long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public Collection<Parent> getParents() { return parents; }

    @Enumerated(EnumType.STRING )
    public Grade getGradeLevel() {
        return gradeLevel;
    }

    public Student(){}



    public Student(String name, Grade gradeLevel){
        this.name = name;
        this.gradeLevel = getGradeLevel();
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

