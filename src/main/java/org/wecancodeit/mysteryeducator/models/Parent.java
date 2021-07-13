package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Parent {
    @Id
    @GeneratedValue
    private Long id;
    private final String name;
    @ManyToMany
    @JsonIgnore
    private final Set<Student> students;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public Collection<Student> getStudents(){
        return students;
    }

    public Parent (String name){
        this.name = name;
        this.students = new HashSet<>();
    }

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
