import { game, view } from "./quiz";
import quiz from './questions.json';

view.start.addEventListener('click', () =>
    game.start(quiz.questions), false);
view.response.addEventListener('click', (event) =>
    game.check(event), false);
