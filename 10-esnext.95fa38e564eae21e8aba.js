(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UTEa:function(e,t,i){"use strict";i.r(t),i.d(t,"TimerPickerModule",(function(){return C}));var r=i("ofXK"),c=i("3Pt+"),n=i("Wp6s"),b=i("kmnG"),a=i("zkoq"),m=i("NFeN"),o=i("qFsG"),s=i("wZkO"),u=i("tyNb"),T=i("psLn"),d=i("fXoL");let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Ib({type:e,selectors:[["app-timer-picker-api"]],decls:101,vars:0,consts:[[1,"table-api-documentation"],[1,"api-description"]],template:function(e,t){1&e&&(d.Tb(0,"h2"),d.Bc(1,"Components"),d.Sb(),d.Tb(2,"h3"),d.Bc(3,"UmaTimerPicker"),d.Sb(),d.Tb(4,"p"),d.Bc(5,"This is the main class of the component."),d.Sb(),d.Tb(6,"h4"),d.Bc(7,"Inputs"),d.Sb(),d.Tb(8,"table",0),d.Tb(9,"thead"),d.Tb(10,"tr"),d.Tb(11,"th"),d.Bc(12,"Name"),d.Sb(),d.Tb(13,"th"),d.Bc(14,"Description"),d.Sb(),d.Sb(),d.Sb(),d.Tb(15,"tbody"),d.Tb(16,"tr"),d.Tb(17,"td"),d.Tb(18,"code"),d.Bc(19,"hideButtons: boolean"),d.Sb(),d.Sb(),d.Tb(20,"td",1),d.Bc(21,"Hide the buttons (confirm/cancel)"),d.Sb(),d.Sb(),d.Tb(22,"tr"),d.Tb(23,"td"),d.Tb(24,"code"),d.Bc(25,"umaTimerPickerFormat: UmaTimerPickerFormat"),d.Sb(),d.Sb(),d.Tb(26,"td",1),d.Bc(27,"Define the format that timer-picker will output the selected time (default: 12)"),d.Sb(),d.Sb(),d.Tb(28,"tr"),d.Tb(29,"td"),d.Tb(30,"code"),d.Bc(31,"umaTimerPickerMin: string"),d.Sb(),d.Sb(),d.Tb(32,"td",1),d.Bc(33,"Define the minimum allowed time (default: 00:00 am, accepts both formats)"),d.Sb(),d.Sb(),d.Tb(34,"tr"),d.Tb(35,"td"),d.Tb(36,"code"),d.Bc(37,"umaTimerPickerMax: string"),d.Sb(),d.Sb(),d.Tb(38,"td",1),d.Bc(39,"Define the maximum allowed time (default: 12:00 pm, accepts both formats)"),d.Sb(),d.Sb(),d.Tb(40,"tr"),d.Tb(41,"td"),d.Tb(42,"code"),d.Bc(43,"btnCancel: string"),d.Sb(),d.Sb(),d.Tb(44,"td",1),d.Bc(45,"Cancel button text (default: Cancel)"),d.Sb(),d.Sb(),d.Tb(46,"tr"),d.Tb(47,"td"),d.Tb(48,"code"),d.Bc(49,"btnConfirm: string"),d.Sb(),d.Sb(),d.Tb(50,"td",1),d.Bc(51,"Confirm button text (default: Confirm)"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(52,"h4"),d.Bc(53,"Outputs"),d.Sb(),d.Tb(54,"table",0),d.Tb(55,"thead"),d.Tb(56,"tr"),d.Tb(57,"th"),d.Bc(58,"Name"),d.Sb(),d.Tb(59,"th"),d.Bc(60,"Description"),d.Sb(),d.Sb(),d.Sb(),d.Tb(61,"tbody"),d.Tb(62,"tr"),d.Tb(63,"td"),d.Tb(64,"code"),d.Bc(65,"selected: string"),d.Sb(),d.Sb(),d.Tb(66,"td",1),d.Bc(67,"Output the selected timer"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Pb(68,"hr"),d.Tb(69,"h2"),d.Bc(70,"Directives"),d.Sb(),d.Tb(71,"h3"),d.Bc(72,"UmaTimerPickerOriginDirective"),d.Sb(),d.Tb(73,"p"),d.Bc(74,"This directive is used on the trigger component. If we associate the directive an input text, when the input is focused the timer picker will open on the screen"),d.Sb(),d.Tb(75,"h3"),d.Bc(76,"UmaConnectedTimerPickerDirective"),d.Sb(),d.Tb(77,"p"),d.Bc(78,"Directive used on the "),d.Tb(79,"code"),d.Bc(80,"UmaTimerPickerComponent"),d.Sb(),d.Bc(81," to connect to an element ( "),d.Tb(82,"code"),d.Bc(83,"UmaTimerPickerOriginDirective"),d.Sb(),d.Bc(84,")"),d.Sb(),d.Tb(85,"h4"),d.Bc(86,"Inputs"),d.Sb(),d.Tb(87,"table",0),d.Tb(88,"thead"),d.Tb(89,"tr"),d.Tb(90,"th"),d.Bc(91,"Name"),d.Sb(),d.Tb(92,"th"),d.Bc(93,"Description"),d.Sb(),d.Sb(),d.Sb(),d.Tb(94,"tbody"),d.Tb(95,"tr"),d.Tb(96,"td"),d.Tb(97,"code"),d.Bc(98,"umaConnectedTimerPickerOrigin: UmaTimerPickerOriginDirective"),d.Sb(),d.Sb(),d.Tb(99,"td",1),d.Bc(100,"Element that timer picker has to connect"),d.Sb(),d.Sb(),d.Sb(),d.Sb())},encapsulation:2,changeDetection:0}),e})();var h=i("3dsp"),l=i("2Vo4");let S=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.change=new l.a(""),this.hasFocus=new l.a(!1),t.listen(e.nativeElement,"focus",()=>this.hasFocus.next(!0))}writeValue(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.change.next(e),this.propagateChanges&&this.propagateChanges(e)}writeValueFromTimerPicker(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.propagateChanges(e)}writeValueFromKeyup(e){this.change.next(e),this.propagateChanges(e)}registerOnChange(e){this.propagateChanges=e}registerOnTouched(e){}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(d.l),d.Ob(d.E))},e.\u0275dir=d.Jb({type:e,selectors:[["","umaTimerPickerOrigin",""],["","uma-timer-picker-origin",""]],outputs:{change:"change",hasFocus:"hasFocus"},exportAs:["umaTimerPickerOrigin"],features:[d.Ab([{provide:c.o,useExisting:Object(d.T)(()=>e),multi:!0}])]}),e})(),g=(()=>{class e{constructor(e,t){this.timerPicker=e,this.changeDetectorRef=t,this.timerPicker.connected=!0}ngAfterViewInit(){this._timerPickerSub||(this.timerPicker.trigger=this.origin,this._attachTimerPicker())}ngOnDestroy(){this._originFocus&&!this._originFocus.closed&&this._originFocus.unsubscribe(),this._timerPickerSub&&!this._timerPickerSub.closed&&this._timerPickerSub.unsubscribe()}_attachTimerPicker(){this._originFocus=this.origin.hasFocus.subscribe(e=>{this.timerPicker.focus="hour",this.timerPicker.isOpen=e,this.changeDetectorRef.detectChanges()}),this._timerPickerSub=this.timerPicker.selected.subscribe(e=>this.origin.writeValueFromTimerPicker(e))}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(h.a),d.Ob(d.h))},e.\u0275dir=d.Jb({type:e,selectors:[["","umaConnectedTimerPicker",""],["","uma-connected-timer-picker",""]],inputs:{origin:["umaConnectedTimerPickerOrigin","origin"]},exportAs:["umaConnectedTimerPicker"]}),e})(),f=(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.form=this.formBuilder.group({timer:[""]})}onSubmit({value:e,valid:t}){console.log(t,e)}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(c.f))},e.\u0275cmp=d.Ib({type:e,selectors:[["app-timer-picker-examples"]],decls:46,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin"],["matInput","","umaTimerPickerOrigin","","placeholder","Timer","formControlName","timer"],["inputTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","","umaTimerPickerMin","09:45","umaTimerPickerMax","20:30",3,"umaConnectedTimerPickerOrigin"],["minMaxInputTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin","umaTimerPickerFormat"],["formatTrigger","umaTimerPickerOrigin"],["umaConnectedTimerPicker","",3,"umaConnectedTimerPickerOrigin","hideButtons"],["buttonTrigger","umaTimerPickerOrigin"]],template:function(e,t){if(1&e&&(d.Tb(0,"mat-card"),d.Tb(1,"mat-card-header"),d.Tb(2,"mat-card-title"),d.Bc(3," Connect with an input "),d.Sb(),d.Sb(),d.Tb(4,"mat-card-content"),d.Tb(5,"form",0),d.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),d.Tb(6,"mat-form-field"),d.Pb(7,"uma-timer-picker",1),d.Pb(8,"input",2,3),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(10,"mat-card"),d.Tb(11,"mat-card-header"),d.Tb(12,"mat-card-title"),d.Bc(13," Use custom range "),d.Sb(),d.Sb(),d.Tb(14,"mat-card-content"),d.Tb(15,"form",0),d.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),d.Tb(16,"mat-form-field"),d.Pb(17,"uma-timer-picker",4),d.Pb(18,"input",2,5),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(20,"mat-card"),d.Tb(21,"mat-card-header"),d.Tb(22,"mat-card-title"),d.Bc(23," Convert value to 24h "),d.Sb(),d.Sb(),d.Tb(24,"mat-card-content"),d.Tb(25,"form",0),d.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),d.Tb(26,"mat-form-field"),d.Pb(27,"uma-timer-picker",6),d.Pb(28,"input",2,7),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(30,"mat-card"),d.Tb(31,"mat-card-header"),d.Tb(32,"mat-card-title"),d.Bc(33," Hide buttons "),d.Sb(),d.Sb(),d.Tb(34,"mat-card-content"),d.Tb(35,"form",0),d.bc("ngSubmit",(function(){return t.onSubmit(t.form)})),d.Tb(36,"mat-form-field"),d.Pb(37,"uma-timer-picker",8),d.Pb(38,"input",2,9),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(40,"mat-card"),d.Tb(41,"mat-card-header"),d.Tb(42,"mat-card-title"),d.Bc(43," Opened component "),d.Sb(),d.Sb(),d.Tb(44,"mat-card-content"),d.Pb(45,"uma-timer-picker"),d.Sb(),d.Sb()),2&e){const e=d.pc(9),i=d.pc(19),r=d.pc(29),c=d.pc(39);d.Bb(5),d.kc("formGroup",t.form),d.Bb(2),d.kc("umaConnectedTimerPickerOrigin",e),d.Bb(8),d.kc("formGroup",t.form),d.Bb(2),d.kc("umaConnectedTimerPickerOrigin",i),d.Bb(8),d.kc("formGroup",t.form),d.Bb(2),d.kc("umaConnectedTimerPickerOrigin",r)("umaTimerPickerFormat","24"),d.Bb(8),d.kc("formGroup",t.form),d.Bb(2),d.kc("umaConnectedTimerPickerOrigin",c)("hideButtons",!0)}},directives:[n.a,n.c,n.e,n.b,c.E,c.r,c.j,b.b,h.a,g,o.a,c.c,S,c.q,c.i],encapsulation:2,changeDetection:0}),e})();function k(e,t){1&e&&d.Bc(0," Overview ")}function B(e,t){1&e&&d.Bc(0," API ")}function P(e,t){1&e&&d.Bc(0," Examples ")}const O=[{path:"",component:(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.form=this.formBuilder.group({timer:[""]})}onSubmit({value:e,valid:t}){console.log(t,e)}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(c.f))},e.\u0275cmp=d.Ib({type:e,selectors:[["app-timer-picker"]],decls:42,vars:4,consts:[[1,"page-title"],[1,"page-subtitle"],["mat-tab-label",""],["cols","4","rowHeight","70px"],["colspan","3"],["href","https://github.com/ueqt/uma/tree/master/src/lib/timer-picker","target","_blank"],["src","https://ueqt.github.io/uma/demo-app/assets/img/source-code.png","alt","Source Code",1,"source-code"],[1,"code-snippet"],[1,"lang-typescript"],[1,"hljs-variable"],[1,"hljs-attribute"],["label","Examples"]],template:function(e,t){1&e&&(d.Tb(0,"h1",0),d.Tb(1,"mat-icon"),d.Bc(2,"timer"),d.Sb(),d.Bc(3," Timer Picker\n"),d.Sb(),d.Tb(4,"p",1),d.Bc(5,"Some examples of how to use the "),d.Tb(6,"span"),d.Bc(7,"uma-timer-picker"),d.Sb(),d.Bc(8," component"),d.Sb(),d.Tb(9,"mat-tab-group"),d.Tb(10,"mat-tab"),d.zc(11,k,1,0,"ng-template",2),d.Tb(12,"mat-grid-list",3),d.Tb(13,"mat-grid-tile",4),d.Tb(14,"h2"),d.Bc(15,"UmaTimerPicker"),d.Sb(),d.Sb(),d.Tb(16,"mat-grid-tile"),d.Tb(17,"a",5),d.Pb(18,"img",6),d.Sb(),d.Sb(),d.Sb(),d.Tb(19,"p"),d.Bc(20,"This is a implementation of timer picker for material design."),d.Sb(),d.Tb(21,"p"),d.Bc(22,"To use this component, just import the module from "),d.Tb(23,"code"),d.Bc(24,"uma"),d.Sb(),d.Bc(25," package."),d.Sb(),d.Tb(26,"pre",7),d.Tb(27,"code",8),d.Bc(28),d.Tb(29,"span",9),d.Bc(30,"@NgModule"),d.Sb(),d.Bc(31),d.Tb(32,"span",10),d.Bc(33,"imports"),d.Sb(),d.Bc(34),d.Sb(),d.Bc(35,"\n"),d.Sb(),d.Sb(),d.Tb(36,"mat-tab"),d.zc(37,B,1,0,"ng-template",2),d.Pb(38,"app-timer-picker-api"),d.Sb(),d.Tb(39,"mat-tab",11),d.zc(40,P,1,0,"ng-template",2),d.Pb(41,"app-timer-picker-examples"),d.Sb(),d.Sb()),2&e&&(d.Bb(28),d.Ec("  import ","{"," UmaTimerPickerModule ","}"," from '@ueqt/uma';\n\n  "),d.Bb(3),d.Dc("(","{","\n    ...\n    "),d.Bb(3),d.Dc(": [\n      UmaTimerPickerModule\n    ]\n    ...\n  ","}",")\n  "))},directives:[m.a,s.b,s.a,s.c,a.a,a.c,p,f],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"],changeDetection:0}),e})()}];let C=(()=>{class e{}return e.\u0275mod=d.Mb({type:e}),e.\u0275inj=d.Lb({factory:function(t){return new(t||e)},imports:[[r.c,u.c.forChild(O),c.y,n.d,o.b,b.d,m.b,a.b,s.d,T.e]]}),e})()}}]);