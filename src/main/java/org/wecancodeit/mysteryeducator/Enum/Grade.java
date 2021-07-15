package org.wecancodeit.mysteryeducator.Enum;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import org.wecancodeit.mysteryeducator.models.Student;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Grade {

    FIRST("1"), SECOND("2"), THIRD("3"), FOURTH("4");
    private Student name;
    private String commandString;

   Grade(String commandString){
        this.commandString = commandString;
    }
    Grade(Student name){
       this.name = name;
    }
    @JsonValue
    public Student getName() {
        return name;
    }
    @JsonValue
    public String getCommandString() {
        return commandString;
    }

    @JsonValue
    @Override
    public String toString() {
        return "Grade{" +
                "name=" + name +
                ", commandString='" + commandString + '\'' +
                '}';
    }
}
