package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;
import org.wecancodeit.mysteryeducator.models.Student;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Grade {

    FIRST("1st"), SECOND("2nd"), THIRD("3rd"), FOURTH("4th"), FIFTH("5th"),
    SIXTH("6th"),SEVENTH("7th"),EIGTH("8th");
    private Student name;


    private final String commandString;

    Grade(String commandString){
        this.commandString = commandString;
    }

    @JsonValue
    public String getCommandString() {
        return commandString;
    }


    @Override
    public String toString() {
        return "Grade{" +
                "name=" + name +
                ", commandString='" + commandString + '\'' +
                '}';
    }
}