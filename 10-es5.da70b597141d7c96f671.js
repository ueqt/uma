function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UTEa:function(e,t,i){"use strict";i.r(t),i.d(t,"TimerPickerModule",(function(){return D}));var r,c,n,a,b=i("ofXK"),o=i("3Pt+"),m=i("Wp6s"),s=i("kmnG"),u=i("zkoq"),l=i("NFeN"),d=i("qFsG"),T=i("wZkO"),p=i("tyNb"),h=i("psLn"),f=i("fXoL"),S=((r=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Ib({type:r,selectors:[["app-timer-picker-api"]],decls:101,vars:0,consts:[[1,"table-api-documentation"],[1,"api-description"]],template:function(e,t){1&e&&(f.Tb(0,"h2"),f.Bc(1,"Components"),f.Sb(),f.Tb(2,"h3"),f.Bc(3,"UmaTimerPicker"),f.Sb(),f.Tb(4,"p"),f.Bc(5,"This is the main class of the component."),f.Sb(),f.Tb(6,"h4"),f.Bc(7,"Inputs"),f.Sb(),f.Tb(8,"table",0),f.Tb(9,"thead"),f.Tb(10,"tr"),f.Tb(11,"th"),f.Bc(12,"Name"),f.Sb(),f.Tb(13,"th"),f.Bc(14,"Description"),f.Sb(),f.Sb(),f.Sb(),f.Tb(15,"tbody"),f.Tb(16,"tr"),f.Tb(17,"td"),f.Tb(18,"code"),f.Bc(19,"hideButtons: boolean"),f.Sb(),f.Sb(),f.Tb(20,"td",1),f.Bc(21,"Hide the buttons (confirm/cancel)"),f.Sb(),f.Sb(),f.Tb(22,"tr"),f.Tb(23,"td"),f.Tb(24,"code"),f.Bc(25,"umaTimerPickerFormat: UmaTimerPickerFormat"),f.Sb(),f.Sb(),f.Tb(26,"td",1),f.Bc(27,"Define the format that timer-picker will output the selected time (default: 12)"),f.Sb(),f.Sb(),f.Tb(28,"tr"),f.Tb(29,"td"),f.Tb(30,"code"),f.Bc(31,"umaTimerPickerMin: string"),f.Sb(),f.Sb(),f.Tb(32,"td",1),f.Bc(33,"Define the minimum allowed time (default: 00:00 am, accepts both formats)"),f.Sb(),f.Sb(),f.Tb(34,"tr"),f.Tb(35,"td"),f.Tb(36,"code"),f.Bc(37,"umaTimerPickerMax: string"),f.Sb(),f.Sb(),f.Tb(38,"td",1),f.Bc(39,"Define the maximum allowed time (default: 12:00 pm, accepts both formats)"),f.Sb(),f.Sb(),f.Tb(40,"tr"),f.Tb(41,"td"),f.Tb(42,"code"),f.Bc(43,"btnCancel: string"),f.Sb(),f.Sb(),f.Tb(44,"td",1),f.Bc(45,"Cancel button text (default: Cancel)"),f.Sb(),f.Sb(),f.Tb(46,"tr"),f.Tb(47,"td"),f.Tb(48,"code"),f.Bc(49,"btnConfirm: string"),f.Sb(),f.Sb(),f.Tb(50,"td",1),f.Bc(51,"Confirm button text (default: Confirm)"),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(52,"h4"),f.Bc(53,"Outputs"),f.Sb(),f.Tb(54,"table",0),f.Tb(55,"thead"),f.Tb(56,"tr"),f.Tb(57,"th"),f.Bc(58,"Name"),f.Sb(),f.Tb(59,"th"),f.Bc(60,"Description"),f.Sb(),f.Sb(),f.Sb(),f.Tb(61,"tbody"),f.Tb(62,"tr"),f.Tb(63,"td"),f.Tb(64,"code"),f.Bc(65,"selected: string"),f.Sb(),f.Sb(),f.Tb(66,"td",1),f.Bc(67,"Output the selected timer"),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Pb(68,"hr"),f.Tb(69,"h2"),f.Bc(70,"Directives"),f.Sb(),f.Tb(71,"h3"),f.Bc(72,"UmaTimerPickerOriginDirective"),f.Sb(),f.Tb(73,"p"),f.Bc(74,"This directive is used on the trigger component. If we associate the directive an input text, when the input is focused the timer picker will open on the screen"),f.Sb(),f.Tb(75,"h3"),f.Bc(76,"UmaConnectedTimerPickerDirective"),f.Sb(),f.Tb(77,"p"),f.Bc(78,"Directive used on the "),f.Tb(79,"code"),f.Bc(80,"UmaTimerPickerComponent"),f.Sb(),f.Bc(81," to connect to an element ( "),f.Tb(82,"code"),f.Bc(83,"UmaTimerPickerOriginDirective"),f.Sb(),f.Bc(84,")"),f.Sb(),f.Tb(85,"h4"),f.Bc(86,"Inputs"),f.Sb(),f.Tb(87,"table",0),f.Tb(88,"thead"),f.Tb(89,"tr"),f.Tb(90,"th"),f.Bc(91,"Name"),f.Sb(),f.Tb(92,"th"),f.Bc(93,"Description"),f.Sb(),f.Sb(),f.Sb(),f.Tb(94,"tbody"),f.Tb(95,"tr"),f.Tb(96,"td"),f.Tb(97,"code"),f.Bc(98,"umaConnectedTimerPickerOrigin: UmaTimerPickerOriginDirective"),f.Sb(),f.Sb(),f.Tb(99,"td",1),f.Bc(100,"Element that timer picker has to connect"),f.Sb(),f.Sb(),f.Sb(),f.Sb())},encapsulation:2,changeDetection:0}),r),g=i("3dsp"),k=i("2Vo4"),P=((a=function(){function e(t,i){var r=this;_classCallCheck(this,e),this.elementRef=t,this.renderer=i,this.change=new k.a(""),this.hasFocus=new k.a(!1),i.listen(t.nativeElement,"focus",(function(){return r.hasFocus.next(!0)}))}return _createClass(e,[{key:"writeValue",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.change.next(e),this.propagateChanges&&this.propagateChanges(e)}},{key:"writeValueFromTimerPicker",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.propagateChanges(e)}},{key:"writeValueFromKeyup",value:function(e){this.change.next(e),this.propagateChanges(e)}},{key:"registerOnChange",value:function(e){this.propagateChanges=e}},{key:"registerOnTouched",value:function(e){}},{key:"setDisabledState",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return new(e||a)(f.Ob(f.l),f.Ob(f.E))},a.\u0275dir=f.Jb({type:a,selectors:[["","umaTimerPickerOrigin",""],["","uma-timer-picker-origin",""]],outputs:{change:"change",hasFocus:"hasFocus"},exportAs:["umaTimerPickerOrigin"],features:[f.Ab([{provide:o.o,useExisting:Object(f.T)((function(){return a})),multi:!0}])]}),a),B=((n=function(){function e(t,i){_classCallCheck(this,e),this.timerPicker=t,this.changeDetectorRef=i,this.timerPicker.connected=!0}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this._timerPickerSub||(this.timerPicker.trigger=this.origin,this._attachTimerPicker())}},{key:"ngOnDestroy",value:function(){this._originFocus&&!this._originFocus.closed&&this._originFocus.unsubscribe(),this._timerPickerSub&&!this._timerPickerSub.closed&&this._timerPickerSub.unsubscribe()}},{key:"_attachTimerPicker",value:function(){var e=this;this._originFocus=this.origin.hasFocus.subscribe((function(t){e.timerPicker.focus="hour",e.timerPicker.isOpen=t,e.changeDetectorRef.detectChanges()})),this._timerPickerSub=this.timerPicker.selected.subscribe((function(t){return e.origin.writeValueFromTimerPicker(t)}))}}]),e}()).\u0275fac=function(e){return new(e||n)(f.Ob(g.a),f.Ob(f.h))},n.\u0275dir=f.Jb({type:n,selectors:[["","umaConnectedTimerPicker",""],["","uma-connected-timer-picker",""]],inputs:{origin:["umaConnectedTimerPickerOrigin","origin"]},exportAs:["umaConnectedTimerPicker"]}),n),C=((c=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}()).\u0275fac=function(e){return new(e||c)(f.Ob(o.f))},c.\u0275cmp=f.Ib({type:c,selectors:[["app-timer-picker-examples"]],decls:46,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin"],["matInput","","umaTimerPickerOrigin","","placeholder","Timer","formControlName","timer"],["inputTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","","umaTimerPickerMin","09:45","umaTimerPickerMax","20:30",3,"umaConnectedTimerPickerOrigin"],["minMaxInputTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin","umaTimerPickerFormat"],["formatTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin","hideButtons"],["buttonTrigger","umaTimerPickerOrigin"]],template:function(e,t){if(1&e&&(f.Tb(0,"mat-card"),f.Tb(1,"mat-card-header"),f.Tb(2,"mat-card-title"),f.Bc(3," Connect with an input "),f.Sb(),f.Sb(),f.Tb(4,"mat-card-content"),f.Tb(5,"form",0),f.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Tb(6,"mat-form-field"),f.Pb(7,"uma-timer-picker",1),f.Pb(8,"input",2,3),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(10,"mat-card"),f.Tb(11,"mat-card-header"),f.Tb(12,"mat-card-title"),f.Bc(13," Use custom range "),f.Sb(),f.Sb(),f.Tb(14,"mat-card-content"),f.Tb(15,"form",0),f.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Tb(16,"mat-form-field"),f.Pb(17,"uma-timer-picker",4),f.Pb(18,"input",2,5),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(20,"mat-card"),f.Tb(21,"mat-card-header"),f.Tb(22,"mat-card-title"),f.Bc(23," Convert value to 24h "),f.Sb(),f.Sb(),f.Tb(24,"mat-card-content"),f.Tb(25,"form",0),f.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Tb(26,"mat-form-field"),f.Pb(27,"uma-timer-picker",6),f.Pb(28,"input",2,7),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(30,"mat-card"),f.Tb(31,"mat-card-header"),f.Tb(32,"mat-card-title"),f.Bc(33," Hide buttons "),f.Sb(),f.Sb(),f.Tb(34,"mat-card-content"),f.Tb(35,"form",0),f.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Tb(36,"mat-form-field"),f.Pb(37,"uma-timer-picker",8),f.Pb(38,"input",2,9),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Tb(40,"mat-card"),f.Tb(41,"mat-card-header"),f.Tb(42,"mat-card-title"),f.Bc(43," Opened component "),f.Sb(),f.Sb(),f.Tb(44,"mat-card-content"),f.Pb(45,"uma-timer-picker"),f.Sb(),f.Sb()),2&e){var i=f.pc(9),r=f.pc(19),c=f.pc(29),n=f.pc(39);f.Bb(5),f.kc("formGroup",t.form),f.Bb(2),f.kc("umaConnectedTimerPickerOrigin",i),f.Bb(8),f.kc("formGroup",t.form),f.Bb(2),f.kc("umaConnectedTimerPickerOrigin",r),f.Bb(8),f.kc("formGroup",t.form),f.Bb(2),f.kc("umaConnectedTimerPickerOrigin",c)("umaTimerPickerFormat","24"),f.Bb(8),f.kc("formGroup",t.form),f.Bb(2),f.kc("umaConnectedTimerPickerOrigin",n)("hideButtons",!0)}},directives:[m.a,m.c,m.e,m.b,o.E,o.r,o.j,s.b,g.a,B,d.a,o.c,P,o.q,o.i],encapsulation:2,changeDetection:0}),c);function v(e,t){1&e&&f.Bc(0," Overview ")}function O(e,t){1&e&&f.Bc(0," API ")}function y(e,t){1&e&&f.Bc(0," Examples ")}var w,_,x=[{path:"",component:(w=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}(),w.\u0275fac=function(e){return new(e||w)(f.Ob(o.f))},w.\u0275cmp=f.Ib({type:w,selectors:[["app-timer-picker"]],decls:42,vars:4,consts:[[1,"page-title"],[1,"page-subtitle"],["mat-tab-label",""],["cols","4","rowHeight","70px"],["colspan","3"],["href","https://github.com/ueqt/uma/tree/master/src/lib/timer-picker","target","_blank"],["src","https://ueqt.github.io/uma/demo-app/assets/img/source-code.png","alt","Source Code",1,"source-code"],[1,"code-snippet"],[1,"lang-typescript"],[1,"hljs-variable"],[1,"hljs-attribute"],["label","Examples"]],template:function(e,t){1&e&&(f.Tb(0,"h1",0),f.Tb(1,"mat-icon"),f.Bc(2,"timer"),f.Sb(),f.Bc(3," Timer Picker\n"),f.Sb(),f.Tb(4,"p",1),f.Bc(5,"Some examples of how to use the "),f.Tb(6,"span"),f.Bc(7,"uma-timer-picker"),f.Sb(),f.Bc(8," component"),f.Sb(),f.Tb(9,"mat-tab-group"),f.Tb(10,"mat-tab"),f.zc(11,v,1,0,"ng-template",2),f.Tb(12,"mat-grid-list",3),f.Tb(13,"mat-grid-tile",4),f.Tb(14,"h2"),f.Bc(15,"UmaTimerPicker"),f.Sb(),f.Sb(),f.Tb(16,"mat-grid-tile"),f.Tb(17,"a",5),f.Pb(18,"img",6),f.Sb(),f.Sb(),f.Sb(),f.Tb(19,"p"),f.Bc(20,"This is a implementation of timer picker for material design."),f.Sb(),f.Tb(21,"p"),f.Bc(22,"To use this component, just import the module from "),f.Tb(23,"code"),f.Bc(24,"uma"),f.Sb(),f.Bc(25," package."),f.Sb(),f.Tb(26,"pre",7),f.Tb(27,"code",8),f.Bc(28),f.Tb(29,"span",9),f.Bc(30,"@NgModule"),f.Sb(),f.Bc(31),f.Tb(32,"span",10),f.Bc(33,"imports"),f.Sb(),f.Bc(34),f.Sb(),f.Bc(35,"\n"),f.Sb(),f.Sb(),f.Tb(36,"mat-tab"),f.zc(37,O,1,0,"ng-template",2),f.Pb(38,"app-timer-picker-api"),f.Sb(),f.Tb(39,"mat-tab",11),f.zc(40,y,1,0,"ng-template",2),f.Pb(41,"app-timer-picker-examples"),f.Sb(),f.Sb()),2&e&&(f.Bb(28),f.Ec("  import ","{"," UmaTimerPickerModule ","}"," from 'uma';\n\n  "),f.Bb(3),f.Dc("(","{","\n    ...\n    "),f.Bb(3),f.Dc(": [\n      UmaTimerPickerModule\n    ]\n    ...\n  ","}",")\n  "))},directives:[l.a,T.b,T.a,T.c,u.a,u.c,S,C],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"],changeDetection:0}),w)}],D=((_=function e(){_classCallCheck(this,e)}).\u0275mod=f.Mb({type:_}),_.\u0275inj=f.Lb({factory:function(e){return new(e||_)},imports:[[b.c,p.c.forChild(x),o.y,m.d,d.b,s.d,l.b,u.b,T.d,h.e]]}),_)}}]);