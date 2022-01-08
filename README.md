# weecha
After doing "yarn" go to node_modules/react-native-reanimated/lib/reanimated2/core.js and do the following:

Replace this:
import { nativeShouldBeMock } from './PlatformChecker';

By this:
import { nativeShouldBeMock, shouldBeUseWeb } from './PlatformChecker';
