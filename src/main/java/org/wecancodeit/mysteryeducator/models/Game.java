package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {

    @Id
    @GeneratedValue
    private Long id;

    private double mass;
    private double radius;
    private double surfaceWeight;
    private double gravitationalConstant;
    private double surfaceGravity;

    public Long getId() {
        return id;
    }
    
    public Game(){}
    public Game(double mass,double radius,double gravitationalConstant,
                double surfaceWeight, double surfaceGravity){
        this.radius = radius;
        this.surfaceWeight = surfaceWeight;
        this.gravitationalConstant = 6.67300E-11;
        this.surfaceGravity = surfaceGravity;
        this.mass = mass;
        
    }


    public void setSurfaceGravity(double surfaceGravity) {
        this.surfaceGravity = gravitationalConstant * mass / (radius*radius);
    }

    public double getMass() {
        return mass;
    }

    public double getRadius() {
        return radius;
    }

    public double getSurfaceWeight() {
        return surfaceWeight;
    }

    public double getGravitationalConstant() {
        return gravitationalConstant;
    }

    public double getSurfaceGravity() {
        return surfaceGravity;
    }

    public double setSurfaceWeight(double otherMass) {
        return otherMass * surfaceWeight;
    }
}
