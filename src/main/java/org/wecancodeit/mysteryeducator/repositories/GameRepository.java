package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Game;

public interface GameRepository extends CrudRepository<Game,Long> {
}
