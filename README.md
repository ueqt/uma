# Uma
Ueqt's angular material components.

[![npm version](https://badge.fury.io/js/uma.svg)](https://badge.fury.io/js/uma)
![Build and Deploy](https://github.com/ueqt/uma/workflows/Build%20and%20Deploy/badge.svg)

All the components are created using just [Angular](https://angular.io), [Material 2](https://material.angular.io) and [CDK](https://material.angular.io/cdk).

Check out our [documentation & live demo](https://ueqt.github.io/uma/)

## Components Status

All the components have the prefix `uma` followed by the package name.

| Component    | Status    | package          |
| ------------ | --------- | ---------------- |
| Carousel | -         | ---              |
| Color Picker | Available | uma-color-picker |
| File Manager | -         | ---              |
| Google Recaptcha | -         | ---              |
| Scrollspy    | Available | uma-scrollspy    |
| Speed Dial   | Available | uma-speed-dial   |
| Timer Picker | Available | uma-timer-picker |

If you miss any component, please follow the [CONTRIBUTION GUIDELINE](https://github.com/ueqt/uma/blob/master/CONTRIBUTING.md) to open an issue.

## Install

### step: 1

We use some components from the [Angular Material](https://material.angular.io/). To be able to use this component, you have to install the `@angular/animations`. If you follow all the steps in [Material Guide](https://material.angular.io/guide/getting-started), you already have this step done.

```bash
    npm install --save @angular/animations
```

Note: [@angular/animations](https://angular.io/guide/animations) uses the WebAnimation API that isn't supported by all browsers yet. If you want to support Material component animations in these browsers, you'll have to include a [polyfill](https://github.com/web-animations/web-animations-js).

```typescript
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

If you don't want to add another dependency to your project, you can use the [NoopAnimationsModule](https://angular.io/api/platform-browser/animations/NoopAnimationsModule).

```typescript
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

### step: 2

Install uma package:

```bash
    npm install @ueqt/uma
```

## Theming

To use the same theme of Angular Material add the following code to your ```style.scss```.

```scss
@import '~@angular/material/theming';
@import '~uma/theming';

@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/
$demo-primary: mat-palette($mat-green);
$demo-accent: mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$demo-warn: mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$demo-theme: mat-light-theme($demo-primary, $demo-accent, $demo-warn);

// build angular material theme
@include angular-material-theme($demo-theme);

// pass angular material theme to ueqt's material components
@include uma-theme($demo-theme);
```
***this is only available for the ```timer-picker``` component***

## How to use

For more examples, you can see our [app-demo](https://github.com/ueqt/uma/blob/master/src/demo-app/app) folder or read the full [documentation](https://ueqt.github.io/uma)

## License

[The MIT License (MIT) Copyright (c) 2020](http://opensource.org/licenses/MIT)

