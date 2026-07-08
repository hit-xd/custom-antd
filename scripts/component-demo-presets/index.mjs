import { dataDisplayPresets } from './data-display.mjs';
import { dataEntryPresets } from './data-entry.mjs';
import { feedbackPresets } from './feedback.mjs';
import { navigationLayoutPresets } from './navigation-layout.mjs';

export const componentDemoPresets = {
  ...dataEntryPresets,
  ...dataDisplayPresets,
  ...feedbackPresets,
  ...navigationLayoutPresets,
};
