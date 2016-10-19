import {library} from '../util/ffi';
import types from '../types/types';

interface SDL_error {
  /**
   * Use this function to clear any previous error message. 
   * code example: const char *error = SDL_GetError();
   *               if (*error) {
   *                  SDL_Log("SDL error: %s", error);
   *                  SDL_ClearError();
   *               }
   */
  SDL_ClearError(): void;

  /**
   * 
   */
  SDL_GetError(): string;
}
