import { useSetUpTokenWithAPI } from './useSetUpTokenWithAPI';
import { useSetUpUnauthorizedCallback } from './useSetUpUnauthorizedCallback';

interface APIConfiguration {
  token: string | undefined;
  onUnauthorized: () => void;
}

/**
 * This hook should be called whenever the APIConfiguration (`token` or
 * `onUnauthorized`) changes
 *
 * @param config the desired configuration of the API layer
 */
export const useAPIConfig = (config: APIConfiguration) => {
  useSetUpTokenWithAPI(config.token);
  useSetUpUnauthorizedCallback(config.onUnauthorized);
};
