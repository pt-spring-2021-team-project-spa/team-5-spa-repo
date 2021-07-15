package org.wecancodeit.mysteryeducator.models;


import com.fasterxml.jackson.annotation.JsonFormat;


public enum OurPlanets  {

    MERCURY (3.303e+23, 2.4397e6,"Mercury"),
    VENUS   (4.869e+24, 6.0518e6,"Venus"),
    EARTH   (5.976e+24, 6.37814e6,"Earth"),
    MARS    (6.421e+23, 3.3972e6,"Mars"),
    JUPITER (1.9e+27,   7.1492e7,"Jupiter"),
    SATURN  (5.688e+26, 6.0268e7,"Saturn"),
    URANUS  (8.686e+25, 2.5559e7,"Uranus"),
    NEPTUNE (1.024e+26, 2.4746e7,"Neptune");

    private final double mass;   // in kilograms
    private final double radius; // in meters
    private String shortName;

    OurPlanets(double mass, double radius, String shortName) {
        this.shortName = shortName;
        this.mass = mass;
        this.radius = radius;
    }

    public String getShortName(){
        return shortName;
    }
    private double mass() {
        return mass;
    }
    private double radius() {
        return radius;
    }

    // universal gravitational constant  (m3 kg-1 s-2)
    public static final double G = 6.67300E-11;

    double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
//    public static void main(String[] args) {
//        if (args.length != 1) {
//            System.err.println("Usage: java Planet <earth_weight>");
//            System.exit(-1);
//        }
//        double earthWeight = Double.parseDouble(args[0]);
//        double mass = earthWeight/EARTH.surfaceGravity();
//        for (OurPlanets p : OurPlanets.values())
//            System.out.printf("Your weight on %s is %f%n",
//                    p, p.surfaceWeight(mass));
//    }


}
