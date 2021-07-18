package org.wecancodeit.mysteryeducator.converter;

import org.wecancodeit.mysteryeducator.models.Grade;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class GradeConverter implements AttributeConverter<Grade,String> {

    @Override
    public String convertToDatabaseColumn(Grade grade) {
        return grade.getCommandString();
    }

    @Override
    public Grade convertToEntityAttribute(String dbData) {
        return null;
    }
}
