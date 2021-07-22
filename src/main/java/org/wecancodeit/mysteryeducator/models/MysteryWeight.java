package org.wecancodeit.mysteryeducator.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.stereotype.Component;

import javax.persistence.OneToOne;
@JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
public enum MysteryWeight {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6),
    JUPITER (1.9e+27,   7.1492e7),
    SATURN  (5.688e+26, 6.0268e7),
    URANUS  (8.686e+25, 2.5559e7),
    NEPTUNE (1.024e+26, 2.4746e7);

    MysteryWeight(){}

    public double mass;
    public double radius;
    public Student earthWeight;

    MysteryWeight(double mass, double radius, Student earthWeight) {
        this.mass = mass;
        this.radius = radius;
        this.earthWeight = earthWeight;
    }

    MysteryWeight(double mass, double radius) {
    }

    public double getMass() {
        return mass;
    }

    public double getRadius() {
        return radius;
    }
    public static final double gravity = 6.67300E-11;
    public double surfaceGravity(){
        return gravity*mass/(radius*radius);
    }
    public double surfaceWeight(double otherMass){
        return otherMass*surfaceGravity();
    }

    @OneToOne
    public Student earthWeight() {
        return earthWeight;
    }


    @Override
    public String toString() {
        return "MysteryWeight{" +
                "mass=" + mass +
                ", radius=" + radius +
                '}';
    }
}
