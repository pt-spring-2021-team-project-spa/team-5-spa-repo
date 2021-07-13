package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class SolarSystem {
    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String description;
    private String name;
    private String galaxy;
    @OneToMany(mappedBy = "solarSystem")
    @JsonIgnore
    public Collection<Planet> planets;

    public Collection<Planet> getPlanets() {
        return planets;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGalaxy() {
        return galaxy;
    }
    public String getDescription() {
        return description;
    }




    public SolarSystem(){}
    public SolarSystem(String name, String galaxy, String description){
        this.name = name;
        this.galaxy = galaxy;
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SolarSystem that = (SolarSystem) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
