package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.Enum.Grade;
import org.wecancodeit.mysteryeducator.models.Student;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends CrudRepository<Student,Long> {
    Optional<Student> findByName(String studentName);

    List<Object> findByGrade(Grade grade);
}
