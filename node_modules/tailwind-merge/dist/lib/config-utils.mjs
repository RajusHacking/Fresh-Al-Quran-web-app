import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { createClassUtils } from './class-utils.mjs';
import { createLruCache } from './lru-cache.mjs';
import { createSplitModifiers } from './modifier-utils.mjs';

function createConfigUtils(config) {
  return _extends({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}

export { createConfigUtils };
//# sourceMappingURL=config-utils.mjs.map
