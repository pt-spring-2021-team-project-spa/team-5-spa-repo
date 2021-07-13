package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Planet;
import org.wecancodeit.mysteryeducator.models.SolarSystem;

import java.util.Optional;

public interface PlanetRepository extends CrudRepository<Planet, Long> {
    Optional<Planet> findBySolarSystem(SolarSystem solar_system);
}
