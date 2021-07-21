package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Planet {


    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String imageUrl;
    private String url;
    private String diameter;
    private String distanceFromSun;
    private String avgTemperature;
    private String description;

    @ManyToOne
    private SolarSystem solarSystem;

    public SolarSystem getSolarSystem() {
        return solarSystem;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getDiameter() {
        return diameter;
    }

    public String getDistanceFromSun() {
        return distanceFromSun;
    }

    public String getTemperature() {
        return avgTemperature;
    }

    public String getDescription() {
        return description;
    }

    public Planet(){}
    public Planet(String name, String imageUrl,String url, String diameter, String distanceFromSun, String avgTemperature, String description, SolarSystem solarSystem){
        this.name = name;
        this.imageUrl = imageUrl;
        this.url = url;
        this.diameter = diameter;
        this.distanceFromSun = distanceFromSun;
        this.avgTemperature = avgTemperature;
        this.description = description;
        this.solarSystem = solarSystem;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Planet planet = (Planet) o;
        return Objects.equals(id, planet.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


    public String getUrl() {
        return url;
    }
}
