import { Constructor, BaseMovieDbClient } from './BaseMovieDbClient';
import { CoreOptions } from 'request';

export const WithKeywords = <T extends Constructor<BaseMovieDbClient>>(Base: T) =>
    class extends Base { }