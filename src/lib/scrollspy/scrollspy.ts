import { UmaScrollspyItemDirective } from './scrollspy.directive';
import { BehaviorSubject } from 'rxjs';

// scrollspy animations
export const SCROLLSPY_ANIMATION_SMOOTH = 'smooth';
export const SCROLLSPY_ANIMATION_INSTANT = 'instant';
export const SCROLLSPY_ANIMATION_AUTO = 'auto';

/**
 * Scrollspy group
 */
export interface UmaScrollspyGroup {
  name: string;
  animation: ScrollBehavior;
  items: BehaviorSubject<UmaScrollspyItemDirective[]>;
}
