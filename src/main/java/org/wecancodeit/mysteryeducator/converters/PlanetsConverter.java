package org.wecancodeit.mysteryeducator.converters;

import org.wecancodeit.mysteryeducator.models.OurPlanets;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class PlanetsConverter implements AttributeConverter<OurPlanets,String> {
    @Override
    public String convertToDatabaseColumn(OurPlanets planet) {
        return planet.getShortName();
    }

    @Override
    public OurPlanets convertToEntityAttribute(String dbData) {
    return OurPlanets.valueOf(dbData);
    }
}