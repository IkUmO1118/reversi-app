import express from 'express';
import { RegisterTurnUseCase } from '../application/useCase/RegisterTurnUseCase';
import { Point } from '../domain/model/turn/point';
import { toDisc } from '../domain/model/turn/disc';
import { TurnMySQLRepository } from '../infrastructure/repository/turn/turnMySQLRepository';
import { GameMySQLRepository } from '../infrastructure/repository/game/gameMySQLRepository';
import { GameResultMySQLRepository } from '../infrastructure/repository/gameResult/gameResultMySQLRepository';
import { FindLatestGameTurnByTurnCount } from '../application/useCase/findLatestGameTurnByTurnCountUseCase';

export const turnRouter = express.Router();

const findLatestGameTurnByTurnCountUseCase = new FindLatestGameTurnByTurnCount(
  new TurnMySQLRepository(),
  new GameMySQLRepository(),
  new GameResultMySQLRepository()
);
const registerTurnUseCase = new RegisterTurnUseCase(
  new TurnMySQLRepository(),
  new GameMySQLRepository(),
  new GameResultMySQLRepository()
);

// DTO (Data Transfer Object)
interface TurnGetResponseBody {
  turnCount: number;
  board: number[][];
  nextDisc: number | null;
  winnerDisc: number | null;
}

turnRouter.get(
  '/api/games/latest/turns/:turnCount',
  async (req, res: express.Response<TurnGetResponseBody>) => {
    const turnCount = parseInt(req.params.turnCount);

    const output = await findLatestGameTurnByTurnCountUseCase.run(turnCount);

    const responseBoby = {
      turnCount: output.turnCount,
      board: output.board,
      nextDisc: output.nextDisc ?? null,
      winnerDisc: output.winnerDisc ?? null,
    };
    res.json(responseBoby);
  }
);

// DTO (Data Transfer Object)
interface TurnPostRequestBody {
  turnCount: number;
  move: {
    disc: number;
    x: number;
    y: number;
  };
}

turnRouter.post(
  '/api/games/latest/turns',
  async (req: express.Request<{}, {}, TurnPostRequestBody>, res) => {
    const turnCount = req.body.turnCount;
    const disc = toDisc(req.body.move.disc);
    const point = new Point(req.body.move.x, req.body.move.y);

    await registerTurnUseCase.run(turnCount, disc, point);

    res.status(201).end();
  }
);
