(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '02iP': function(l, e, n) {
      'use strict';
      n.r(e);
      var t = n('kZht');
      class a {}
      var i = n('pLqg'),
        o = n('tjWy'),
        r = n('7tlY'),
        u = n('UUMc'),
        m = n('C9Ky'),
        d = n('QH8h'),
        c = n('ApNh'),
        s = n('aDqW'),
        b = n('P9AZ'),
        f = n('OcC5'),
        p = n('ENSU'),
        g = n('pOQZ'),
        h = n('4rR8'),
        y = n('FxgA'),
        A = n('3kIJ'),
        v = n('owzC'),
        x = t.ob({
          encapsulation: 2,
          styles: [
            '.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}'
          ],
          data: {}
        });
      function k(l) {
        return t.Jb(
          2,
          [
            t.Fb(671088640, 1, { _thumbEl: 0 }),
            t.Fb(671088640, 2, { _thumbBarEl: 0 }),
            t.Fb(671088640, 3, { _inputElement: 0 }),
            (l()(),
            t.qb(
              3,
              0,
              [['label', 1]],
              null,
              13,
              'label',
              [['class', 'mat-slide-toggle-label']],
              [[1, 'for', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              [[2, 0], ['toggleBar', 1]],
              null,
              7,
              'div',
              [['class', 'mat-slide-toggle-bar']],
              [[2, 'mat-slide-toggle-bar-no-side-margin', null]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              5,
              0,
              [[3, 0], ['input', 1]],
              null,
              0,
              'input',
              [
                ['class', 'mat-slide-toggle-input cdk-visually-hidden'],
                ['role', 'switch'],
                ['type', 'checkbox']
              ],
              [
                [8, 'id', 0],
                [8, 'required', 0],
                [8, 'tabIndex', 0],
                [8, 'checked', 0],
                [8, 'disabled', 0],
                [1, 'name', 0],
                [1, 'aria-checked', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0]
              ],
              [[null, 'change'], [null, 'click']],
              function(l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  'change' === e && (t = !1 !== a._onChangeEvent(n) && t),
                  'click' === e && (t = !1 !== a._onInputClick(n) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.qb(
              6,
              0,
              [[1, 0], ['thumbContainer', 1]],
              null,
              5,
              'div',
              [['class', 'mat-slide-toggle-thumb-container']],
              null,
              [[null, 'slidestart'], [null, 'slide'], [null, 'slideend']],
              function(l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  'slidestart' === e && (t = !1 !== a._onDragStart() && t),
                  'slide' === e && (t = !1 !== a._onDrag(n) && t),
                  'slideend' === e && (t = !1 !== a._onDragEnd() && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-slide-toggle-thumb']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'mat-slide-toggle-ripple mat-ripple'],
                ['mat-ripple', '']
              ],
              [[2, 'mat-ripple-unbounded', null]],
              null,
              null,
              null,
              null
            )),
            t.pb(
              9,
              212992,
              null,
              0,
              c.t,
              [t.k, t.y, h.a, [2, c.k], [2, y.a]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            t.Db(10, { enterDuration: 0 }),
            (l()(),
            t.qb(
              11,
              0,
              null,
              null,
              0,
              'div',
              [
                [
                  'class',
                  'mat-ripple-element mat-slide-toggle-persistent-ripple'
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              12,
              0,
              [['labelContent', 1]],
              null,
              4,
              'span',
              [['class', 'mat-slide-toggle-content']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, e, n) {
                var t = !0;
                return (
                  'cdkObserveContent' === e &&
                    (t = !1 !== l.component._onLabelTextChange() && t),
                  t
                );
              },
              null,
              null
            )),
            t.pb(13, 1196032, null, 0, f.a, [f.b, t.k, t.y], null, {
              event: 'cdkObserveContent'
            }),
            (l()(),
            t.qb(
              14,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'display:none']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['\xa0'])),
            t.zb(null, 0)
          ],
          function(l, e) {
            var n = e.component,
              a = l(e, 10, 0, 150);
            l(e, 9, 0, !0, 20, a, n.disableRipple || n.disabled, t.Ab(e, 3));
          },
          function(l, e) {
            var n = e.component;
            l(e, 3, 0, n.inputId),
              l(
                e,
                4,
                0,
                !t.Ab(e, 12).textContent || !t.Ab(e, 12).textContent.trim()
              ),
              l(
                e,
                5,
                0,
                n.inputId,
                n.required,
                n.tabIndex,
                n.checked,
                n.disabled,
                n.name,
                n.checked.toString(),
                n.ariaLabel,
                n.ariaLabelledby
              ),
              l(e, 8, 0, t.Ab(e, 9).unbounded);
          }
        );
      }
      var w = n('zab8'),
        _ = n('D4FV'),
        C = n('tBgR'),
        q = n('An66'),
        I = n('Hc9t'),
        F = n('a+5/'),
        z = n('iwai'),
        E = n('NxuZ'),
        L = n('qBwE'),
        S = t.ob({
          encapsulation: 2,
          styles: [
            '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}',
            ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}",
            ".mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}",
            '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}',
            '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none}',
            '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}'
          ],
          data: {
            animation: [
              {
                type: 7,
                name: 'transitionMessages',
                definitions: [
                  {
                    type: 0,
                    name: 'enter',
                    styles: {
                      type: 6,
                      styles: { opacity: 1, transform: 'translateY(0%)' },
                      offset: null
                    },
                    options: void 0
                  },
                  {
                    type: 1,
                    expr: 'void => enter',
                    animation: [
                      {
                        type: 6,
                        styles: { opacity: 0, transform: 'translateY(-100%)' },
                        offset: null
                      },
                      {
                        type: 4,
                        styles: null,
                        timings: '300ms cubic-bezier(0.55, 0, 0.55, 0.2)'
                      }
                    ],
                    options: null
                  }
                ],
                options: {}
              }
            ]
          }
        });
      function O(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              8,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-form-field-outline']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-start']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-gap']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-end']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              3,
              'div',
              [
                ['class', 'mat-form-field-outline mat-form-field-outline-thick']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              6,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-start']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-gap']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-outline-end']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function M(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-form-field-prefix']],
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 0)
          ],
          null,
          null
        );
      }
      function T(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 2),
            (l()(), t.Hb(2, null, ['', '']))
          ],
          null,
          function(l, e) {
            l(e, 2, 0, e.component._control.placeholder);
          }
        );
      }
      function P(l) {
        return t.Jb(
          0,
          [t.zb(null, 3), (l()(), t.fb(0, null, null, 0))],
          null,
          null
        );
      }
      function H(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'span',
              [
                ['aria-hidden', 'true'],
                [
                  'class',
                  'mat-placeholder-required mat-form-field-required-marker'
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, [' *']))
          ],
          null,
          null
        );
      }
      function j(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              [[4, 0], ['label', 1]],
              null,
              8,
              'label',
              [['class', 'mat-form-field-label']],
              [
                [8, 'id', 0],
                [1, 'for', 0],
                [1, 'aria-owns', 0],
                [2, 'mat-empty', null],
                [2, 'mat-form-field-empty', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null]
              ],
              [[null, 'cdkObserveContent']],
              function(l, e, n) {
                var t = !0;
                return (
                  'cdkObserveContent' === e &&
                    (t = !1 !== l.component.updateOutlineGap() && t),
                  t
                );
              },
              null,
              null
            )),
            t.pb(
              1,
              16384,
              null,
              0,
              q.n,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            t.pb(
              2,
              1196032,
              null,
              0,
              f.a,
              [f.b, t.k, t.y],
              { disabled: [0, 'disabled'] },
              { event: 'cdkObserveContent' }
            ),
            (l()(), t.fb(16777216, null, null, 1, null, T)),
            t.pb(
              4,
              278528,
              null,
              0,
              q.o,
              [t.O, t.L, q.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, P)),
            t.pb(
              6,
              278528,
              null,
              0,
              q.o,
              [t.O, t.L, q.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, H)),
            t.pb(
              8,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, e) {
            var n = e.component;
            l(e, 1, 0, n._hasLabel()),
              l(e, 2, 0, 'outline' != n.appearance),
              l(e, 4, 0, !1),
              l(e, 6, 0, !0),
              l(
                e,
                8,
                0,
                !n.hideRequiredMarker &&
                  n._control.required &&
                  !n._control.disabled
              );
          },
          function(l, e) {
            var n = e.component;
            l(
              e,
              0,
              0,
              n._labelId,
              n._control.id,
              n._control.id,
              n._control.empty && !n._shouldAlwaysFloat,
              n._control.empty && !n._shouldAlwaysFloat,
              'accent' == n.color,
              'warn' == n.color
            );
          }
        );
      }
      function D(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-form-field-suffix']],
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 4)
          ],
          null,
          null
        );
      }
      function J(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              [[1, 0], ['underline', 1]],
              null,
              1,
              'div',
              [['class', 'mat-form-field-underline']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              0,
              'span',
              [['class', 'mat-form-field-ripple']],
              [[2, 'mat-accent', null], [2, 'mat-warn', null]],
              null,
              null,
              null,
              null
            ))
          ],
          null,
          function(l, e) {
            var n = e.component;
            l(e, 1, 0, 'accent' == n.color, 'warn' == n.color);
          }
        );
      }
      function N(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [],
              [[24, '@transitionMessages', 0]],
              null,
              null,
              null,
              null
            )),
            t.zb(null, 5)
          ],
          null,
          function(l, e) {
            l(e, 0, 0, e.component._subscriptAnimationState);
          }
        );
      }
      function K(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-hint']],
              [[8, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(1, null, ['', '']))
          ],
          null,
          function(l, e) {
            var n = e.component;
            l(e, 0, 0, n._hintLabelId), l(e, 1, 0, n.hintLabel);
          }
        );
      }
      function B(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'mat-form-field-hint-wrapper']],
              [[24, '@transitionMessages', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, K)),
            t.pb(
              2,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.zb(null, 6),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-form-field-hint-spacer']],
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 7)
          ],
          function(l, e) {
            l(e, 2, 0, e.component.hintLabel);
          },
          function(l, e) {
            l(e, 0, 0, e.component._subscriptAnimationState);
          }
        );
      }
      function G(l) {
        return t.Jb(
          2,
          [
            t.Fb(671088640, 1, { underlineRef: 0 }),
            t.Fb(402653184, 2, { _connectionContainerRef: 0 }),
            t.Fb(671088640, 3, { _inputContainerRef: 0 }),
            t.Fb(671088640, 4, { _label: 0 }),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              20,
              'div',
              [['class', 'mat-form-field-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              5,
              0,
              [[2, 0], ['connectionContainer', 1]],
              null,
              11,
              'div',
              [['class', 'mat-form-field-flex']],
              null,
              [[null, 'click']],
              function(l, e, n) {
                var t = !0,
                  a = l.component;
                return (
                  'click' === e &&
                    (t =
                      !1 !==
                        (a._control.onContainerClick &&
                          a._control.onContainerClick(n)) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, O)),
            t.pb(
              7,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, M)),
            t.pb(
              9,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              10,
              0,
              [[3, 0], ['inputContainer', 1]],
              null,
              4,
              'div',
              [['class', 'mat-form-field-infix']],
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 1),
            (l()(),
            t.qb(
              12,
              0,
              null,
              null,
              2,
              'span',
              [['class', 'mat-form-field-label-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, j)),
            t.pb(
              14,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, D)),
            t.pb(
              16,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, J)),
            t.pb(
              18,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              19,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'mat-form-field-subscript-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(
              20,
              16384,
              null,
              0,
              q.n,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, N)),
            t.pb(
              22,
              278528,
              null,
              0,
              q.o,
              [t.O, t.L, q.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, B)),
            t.pb(
              24,
              278528,
              null,
              0,
              q.o,
              [t.O, t.L, q.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            )
          ],
          function(l, e) {
            var n = e.component;
            l(e, 7, 0, 'outline' == n.appearance),
              l(e, 9, 0, n._prefixChildren.length),
              l(e, 14, 0, n._hasFloatingLabel()),
              l(e, 16, 0, n._suffixChildren.length),
              l(e, 18, 0, 'outline' != n.appearance),
              l(e, 20, 0, n._getDisplayedMessages()),
              l(e, 22, 0, 'error'),
              l(e, 24, 0, 'hint');
          },
          null
        );
      }
      var R = n('rW4h'),
        U = n('5ohT'),
        V = n('ofez'),
        W = n('pKmL'),
        Z = n('BnVf'),
        $ = n('EMFo');
      class X {
        constructor(l) {
          (this.store = l),
            (this.routeAnimationsElements = W.c),
            (this.themes = [
              { value: 'DEFAULT-THEME', label: 'blue' },
              { value: 'LIGHT-THEME', label: 'light' },
              { value: 'NATURE-THEME', label: 'nature' },
              { value: 'BLACK-THEME', label: 'dark' }
            ]),
            (this.languages = [
              { value: 'en', label: 'en' },
              { value: 'de', label: 'de' },
              { value: 'sk', label: 'sk' },
              { value: 'fr', label: 'fr' },
              { value: 'es', label: 'es' },
              { value: 'pt-br', label: 'pt-br' },
              { value: 'zh-cn', label: 'zh-cn' },
              { value: 'he', label: 'he' }
            ]);
        }
        ngOnInit() {
          this.settings$ = this.store.pipe(Object(V.C)($.d));
        }
        onLanguageSelect({ value: l }) {
          this.store.dispatch(Object(Z.f)({ language: l }));
        }
        onThemeSelect({ value: l }) {
          this.store.dispatch(Object(Z.h)({ theme: l }));
        }
        onAutoNightModeToggle({ checked: l }) {
          this.store.dispatch(Object(Z.d)({ autoNightMode: l }));
        }
        onStickyHeaderToggle({ checked: l }) {
          this.store.dispatch(Object(Z.g)({ stickyHeader: l }));
        }
        onPageAnimationsToggle({ checked: l }) {
          this.store.dispatch(Object(Z.b)({ pageAnimations: l }));
        }
        onElementsAnimationsToggle({ checked: l }) {
          this.store.dispatch(Object(Z.a)({ elementsAnimations: l }));
        }
      }
      var Y = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px;text-transform:uppercase}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}'
          ]
        ],
        data: {}
      });
      function Q(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'mat-option',
              [['class', 'mat-option'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-selected', null],
                [2, 'mat-option-multiple', null],
                [2, 'mat-active', null],
                [8, 'id', 0],
                [1, 'aria-selected', 0],
                [1, 'aria-disabled', 0],
                [2, 'mat-option-disabled', null]
              ],
              [[null, 'click'], [null, 'keydown']],
              function(l, e, n) {
                var a = !0;
                return (
                  'click' === e &&
                    (a = !1 !== t.Ab(l, 1)._selectViaInteraction() && a),
                  'keydown' === e &&
                    (a = !1 !== t.Ab(l, 1)._handleKeydown(n) && a),
                  a
                );
              },
              d.c,
              d.a
            )),
            t.pb(
              1,
              8568832,
              [[10, 4]],
              0,
              c.p,
              [t.k, t.h, [2, c.j], [2, c.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), t.Hb(2, 0, [' ', ' '])),
            t.Cb(131072, s.i, [s.j, t.h])
          ],
          function(l, e) {
            l(e, 1, 0, e.context.$implicit.value);
          },
          function(l, e) {
            l(
              e,
              0,
              0,
              t.Ab(e, 1)._getTabIndex(),
              t.Ab(e, 1).selected,
              t.Ab(e, 1).multiple,
              t.Ab(e, 1).active,
              t.Ab(e, 1).id,
              t.Ab(e, 1)._getAriaSelected(),
              t.Ab(e, 1).disabled.toString(),
              t.Ab(e, 1).disabled
            ),
              l(
                e,
                2,
                0,
                t.Ib(
                  e,
                  2,
                  0,
                  t
                    .Ab(e, 3)
                    .transform(
                      'anms.settings.general.language.' +
                        e.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function ll(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'mat-option',
              [['class', 'mat-option'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-selected', null],
                [2, 'mat-option-multiple', null],
                [2, 'mat-active', null],
                [8, 'id', 0],
                [1, 'aria-selected', 0],
                [1, 'aria-disabled', 0],
                [2, 'mat-option-disabled', null]
              ],
              [[null, 'click'], [null, 'keydown']],
              function(l, e, n) {
                var a = !0;
                return (
                  'click' === e &&
                    (a = !1 !== t.Ab(l, 1)._selectViaInteraction() && a),
                  'keydown' === e &&
                    (a = !1 !== t.Ab(l, 1)._handleKeydown(n) && a),
                  a
                );
              },
              d.c,
              d.a
            )),
            t.pb(
              1,
              8568832,
              [[22, 4]],
              0,
              c.p,
              [t.k, t.h, [2, c.j], [2, c.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), t.Hb(2, 0, [' ', ' '])),
            t.Cb(131072, s.i, [s.j, t.h])
          ],
          function(l, e) {
            l(e, 1, 0, e.context.$implicit.value);
          },
          function(l, e) {
            l(
              e,
              0,
              0,
              t.Ab(e, 1)._getTabIndex(),
              t.Ab(e, 1).selected,
              t.Ab(e, 1).multiple,
              t.Ab(e, 1).active,
              t.Ab(e, 1).id,
              t.Ab(e, 1)._getAriaSelected(),
              t.Ab(e, 1).disabled.toString(),
              t.Ab(e, 1).disabled
            ),
              l(
                e,
                2,
                0,
                t.Ib(
                  e,
                  2,
                  0,
                  t
                    .Ab(e, 3)
                    .transform(
                      'anms.settings.themes.' + e.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function el(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              16777216,
              null,
              null,
              3,
              'mat-slide-toggle',
              [
                ['class', 'mat-slide-toggle'],
                ['disabled', ''],
                [
                  'matTooltip',
                  'Sorry, this feature is disabled in IE, EDGE and Safari'
                ],
                ['matTooltipPosition', 'before']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [
                [null, 'longpress'],
                [null, 'keydown'],
                [null, 'touchend'],
                [null, 'focus']
              ],
              function(l, e, n) {
                var a = !0;
                return (
                  'longpress' === e && (a = !1 !== t.Ab(l, 2).show() && a),
                  'keydown' === e &&
                    (a = !1 !== t.Ab(l, 2)._handleKeydown(n) && a),
                  'touchend' === e &&
                    (a = !1 !== t.Ab(l, 2)._handleTouchend() && a),
                  'focus' === e &&
                    (a =
                      !1 !== t.Ab(l, 3)._inputElement.nativeElement.focus() &&
                      a),
                  a
                );
              },
              k,
              x
            )),
            t.Eb(
              5120,
              null,
              A.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.pb(
              2,
              212992,
              null,
              0,
              w.d,
              [
                _.c,
                t.k,
                C.b,
                t.O,
                t.y,
                h.a,
                v.c,
                v.h,
                w.b,
                [2, g.b],
                [2, w.a],
                [2, p.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.pb(
              3,
              1228800,
              null,
              0,
              b.b,
              [t.k, v.h, t.h, [8, null], t.y, b.a, [2, y.a], [2, g.b]],
              { disabled: [0, 'disabled'] },
              null
            ),
            (l()(), t.fb(0, null, null, 0))
          ],
          function(l, e) {
            l(
              e,
              2,
              0,
              'before',
              'Sorry, this feature is disabled in IE, EDGE and Safari'
            ),
              l(e, 3, 0, '');
          },
          function(l, e) {
            l(
              e,
              0,
              0,
              t.Ab(e, 3).id,
              t.Ab(e, 3).disabled ? null : -1,
              t.Ab(e, 3).checked,
              t.Ab(e, 3).disabled,
              'before' == t.Ab(e, 3).labelPosition,
              'NoopAnimations' === t.Ab(e, 3)._animationMode
            );
          }
        );
      }
      function nl(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === e &&
                    (a =
                      !1 !== t.Ab(l, 2)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === e &&
                    (a = !1 !== i.onPageAnimationsToggle(n) && a),
                  a
                );
              },
              k,
              x
            )),
            t.Eb(
              5120,
              null,
              A.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.pb(
              2,
              1228800,
              null,
              0,
              b.b,
              [t.k, v.h, t.h, [8, null], t.y, b.a, [2, y.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, e) {
            l(e, 2, 0, e.parent.context.ngIf.pageAnimations);
          },
          function(l, e) {
            l(
              e,
              0,
              0,
              t.Ab(e, 2).id,
              t.Ab(e, 2).disabled ? null : -1,
              t.Ab(e, 2).checked,
              t.Ab(e, 2).disabled,
              'before' == t.Ab(e, 2).labelPosition,
              'NoopAnimations' === t.Ab(e, 2)._animationMode
            );
          }
        );
      }
      function tl(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              129,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              47,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              46,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, q.v, q.w, [t.r, t.s, t.k, t.D]),
            t.pb(
              4,
              278528,
              null,
              0,
              q.i,
              [q.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(5, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(6, null, ['', ''])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              28,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              9,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              10,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              11,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'language']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              12,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              13,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              G,
              S
            )),
            t.pb(
              14,
              7520256,
              null,
              9,
              L.b,
              [t.k, t.h, [2, c.h], [2, g.b], [2, L.a], h.a, t.y, [2, y.a]],
              null,
              null
            ),
            t.Fb(603979776, 1, { _controlNonStatic: 0 }),
            t.Fb(335544320, 2, { _controlStatic: 0 }),
            t.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 4, { _labelChildStatic: 0 }),
            t.Fb(603979776, 5, { _placeholderChild: 0 }),
            t.Fb(603979776, 6, { _errorChildren: 1 }),
            t.Fb(603979776, 7, { _hintChildren: 1 }),
            t.Fb(603979776, 8, { _prefixChildren: 1 }),
            t.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              24,
              0,
              null,
              1,
              12,
              'mat-select',
              [
                ['class', 'mat-select'],
                ['name', 'language'],
                ['role', 'listbox']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [1, 'id', 0],
                [1, 'tabindex', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-owns', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-activedescendant', 0],
                [2, 'mat-select-disabled', null],
                [2, 'mat-select-invalid', null],
                [2, 'mat-select-required', null],
                [2, 'mat-select-empty', null]
              ],
              [
                [null, 'selectionChange'],
                [null, 'keydown'],
                [null, 'focus'],
                [null, 'blur']
              ],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'keydown' === e &&
                    (a = !1 !== t.Ab(l, 29)._handleKeydown(n) && a),
                  'focus' === e && (a = !1 !== t.Ab(l, 29)._onFocus() && a),
                  'blur' === e && (a = !1 !== t.Ab(l, 29)._onBlur() && a),
                  'selectionChange' === e &&
                    (a = !1 !== i.onLanguageSelect(n) && a),
                  a
                );
              },
              R.b,
              R.a
            )),
            t.Eb(6144, null, c.j, null, [U.c]),
            t.pb(
              26,
              671744,
              null,
              0,
              A.j,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            t.Eb(2048, null, A.g, null, [A.j]),
            t.pb(28, 16384, null, 0, A.h, [[4, A.g]], null, null),
            t.pb(
              29,
              2080768,
              null,
              3,
              U.c,
              [
                C.e,
                t.h,
                t.y,
                c.b,
                t.k,
                [2, g.b],
                [2, A.i],
                [2, A.c],
                [2, L.b],
                [6, A.g],
                [8, null],
                U.a,
                v.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            t.Fb(603979776, 10, { options: 1 }),
            t.Fb(603979776, 11, { optionGroups: 1 }),
            t.Fb(603979776, 12, { customTrigger: 0 }),
            t.Cb(131072, s.i, [s.j, t.h]),
            t.Eb(2048, [[1, 4], [2, 4]], L.c, null, [U.c]),
            (l()(), t.fb(16777216, null, 1, 1, null, Q)),
            t.pb(
              36,
              278528,
              null,
              0,
              q.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.qb(
              37,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              38,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              39,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              40,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['color', 'accent'], ['icon', 'bars']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              41,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              42,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(43, 16384, null, 0, L.e, [], null, null),
            (l()(), t.Hb(44, null, ['', ' '])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              46,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === e &&
                    (a =
                      !1 !== t.Ab(l, 48)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === e && (a = !1 !== i.onStickyHeaderToggle(n) && a),
                  a
                );
              },
              k,
              x
            )),
            t.Eb(
              5120,
              null,
              A.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.pb(
              48,
              1228800,
              null,
              0,
              b.b,
              [t.k, v.h, t.h, [8, null], t.y, b.a, [2, y.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            t.qb(
              49,
              0,
              null,
              null,
              80,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              50,
              0,
              null,
              null,
              46,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, q.v, q.w, [t.r, t.s, t.k, t.D]),
            t.pb(
              52,
              278528,
              null,
              0,
              q.i,
              [q.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(53, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(54, null, ['', ''])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              56,
              0,
              null,
              null,
              28,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              57,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              58,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              59,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'paint-brush']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              60,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              61,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              G,
              S
            )),
            t.pb(
              62,
              7520256,
              null,
              9,
              L.b,
              [t.k, t.h, [2, c.h], [2, g.b], [2, L.a], h.a, t.y, [2, y.a]],
              null,
              null
            ),
            t.Fb(603979776, 13, { _controlNonStatic: 0 }),
            t.Fb(335544320, 14, { _controlStatic: 0 }),
            t.Fb(603979776, 15, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 16, { _labelChildStatic: 0 }),
            t.Fb(603979776, 17, { _placeholderChild: 0 }),
            t.Fb(603979776, 18, { _errorChildren: 1 }),
            t.Fb(603979776, 19, { _hintChildren: 1 }),
            t.Fb(603979776, 20, { _prefixChildren: 1 }),
            t.Fb(603979776, 21, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              72,
              0,
              null,
              1,
              12,
              'mat-select',
              [
                ['class', 'mat-select'],
                ['name', 'themes'],
                ['role', 'listbox']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [1, 'id', 0],
                [1, 'tabindex', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-owns', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-activedescendant', 0],
                [2, 'mat-select-disabled', null],
                [2, 'mat-select-invalid', null],
                [2, 'mat-select-required', null],
                [2, 'mat-select-empty', null]
              ],
              [
                [null, 'selectionChange'],
                [null, 'keydown'],
                [null, 'focus'],
                [null, 'blur']
              ],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'keydown' === e &&
                    (a = !1 !== t.Ab(l, 77)._handleKeydown(n) && a),
                  'focus' === e && (a = !1 !== t.Ab(l, 77)._onFocus() && a),
                  'blur' === e && (a = !1 !== t.Ab(l, 77)._onBlur() && a),
                  'selectionChange' === e &&
                    (a = !1 !== i.onThemeSelect(n) && a),
                  a
                );
              },
              R.b,
              R.a
            )),
            t.Eb(6144, null, c.j, null, [U.c]),
            t.pb(
              74,
              671744,
              null,
              0,
              A.j,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            t.Eb(2048, null, A.g, null, [A.j]),
            t.pb(76, 16384, null, 0, A.h, [[4, A.g]], null, null),
            t.pb(
              77,
              2080768,
              null,
              3,
              U.c,
              [
                C.e,
                t.h,
                t.y,
                c.b,
                t.k,
                [2, g.b],
                [2, A.i],
                [2, A.c],
                [2, L.b],
                [6, A.g],
                [8, null],
                U.a,
                v.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            t.Fb(603979776, 22, { options: 1 }),
            t.Fb(603979776, 23, { optionGroups: 1 }),
            t.Fb(603979776, 24, { customTrigger: 0 }),
            t.Cb(131072, s.i, [s.j, t.h]),
            t.Eb(2048, [[13, 4], [14, 4]], L.c, null, [U.c]),
            (l()(), t.fb(16777216, null, 1, 1, null, ll)),
            t.pb(
              84,
              278528,
              null,
              0,
              q.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.qb(
              85,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              86,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              87,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              88,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'lightbulb']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              89,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              90,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(91, 16384, null, 0, L.e, [], null, null),
            (l()(), t.Hb(92, null, ['', ' '])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              94,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === e &&
                    (a =
                      !1 !== t.Ab(l, 96)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === e &&
                    (a = !1 !== i.onAutoNightModeToggle(n) && a),
                  a
                );
              },
              k,
              x
            )),
            t.Eb(
              5120,
              null,
              A.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.pb(
              96,
              1228800,
              null,
              0,
              b.b,
              [t.k, v.h, t.h, [8, null], t.y, b.a, [2, y.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            t.qb(
              97,
              0,
              null,
              null,
              32,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, q.v, q.w, [t.r, t.s, t.k, t.D]),
            t.pb(
              99,
              278528,
              null,
              0,
              q.i,
              [q.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              100,
              0,
              null,
              null,
              2,
              'h2',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(101, null, ['', ''])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              103,
              0,
              null,
              null,
              14,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              104,
              0,
              null,
              null,
              5,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              105,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              106,
              0,
              null,
              0,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              107,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              108,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'window-maximize']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              109,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              110,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(111, 16384, null, 0, L.e, [], null, null),
            (l()(), t.Hb(112, null, ['', ' '])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(), t.fb(16777216, null, null, 1, null, el)),
            t.pb(
              115,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, nl)),
            t.pb(
              117,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              118,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              119,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              I.b,
              I.a
            )),
            t.pb(
              120,
              9158656,
              null,
              0,
              F.b,
              [t.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              121,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'stream']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              z.b,
              z.a
            )),
            t.pb(
              122,
              573440,
              null,
              0,
              E.a,
              [p.b, E.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              123,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(124, 16384, null, 0, L.e, [], null, null),
            (l()(), t.Hb(125, null, ['', ' '])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(
              127,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, e, n) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === e &&
                    (a =
                      !1 !== t.Ab(l, 129)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === e &&
                    (a = !1 !== i.onElementsAnimationsToggle(n) && a),
                  a
                );
              },
              k,
              x
            )),
            t.Eb(
              5120,
              null,
              A.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.pb(
              129,
              1228800,
              null,
              0,
              b.b,
              [t.k, v.h, t.h, [8, null], t.y, b.a, [2, y.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, e) {
            var n = e.component;
            l(e, 4, 0, 'col-md-6 group', n.routeAnimationsElements),
              l(e, 10, 0, 'accent'),
              l(e, 12, 0, 'language'),
              l(e, 26, 0, 'language', e.context.ngIf.language),
              l(
                e,
                29,
                0,
                t.Ib(
                  e,
                  29,
                  0,
                  t.Ab(e, 33).transform('anms.settings.general.placeholder')
                )
              ),
              l(e, 36, 0, n.languages),
              l(e, 39, 0, 'accent'),
              l(e, 41, 0, 'bars'),
              l(e, 48, 0, e.context.ngIf.stickyHeader),
              l(e, 52, 0, 'col-md-6 group', n.routeAnimationsElements),
              l(e, 58, 0, 'accent'),
              l(e, 60, 0, 'paint-brush'),
              l(e, 74, 0, 'themes', e.context.ngIf.theme),
              l(
                e,
                77,
                0,
                t.Ib(
                  e,
                  77,
                  0,
                  t.Ab(e, 81).transform('anms.settings.themes.placeholder')
                )
              ),
              l(e, 84, 0, n.themes),
              l(e, 87, 0, 'accent'),
              l(e, 89, 0, 'lightbulb'),
              l(e, 96, 0, e.context.ngIf.autoNightMode),
              l(e, 99, 0, 'col-md-6 group', n.routeAnimationsElements),
              l(e, 105, 0, 'accent'),
              l(e, 107, 0, 'accent'),
              l(e, 109, 0, 'window-maximize'),
              l(e, 115, 0, e.context.ngIf.pageAnimationsDisabled),
              l(e, 117, 0, !e.context.ngIf.pageAnimationsDisabled),
              l(e, 120, 0, 'accent'),
              l(e, 122, 0, 'stream'),
              l(e, 129, 0, e.context.ngIf.elementsAnimations);
          },
          function(l, e) {
            l(
              e,
              6,
              0,
              t.Ib(e, 6, 0, t.Ab(e, 7).transform('anms.settings.general.title'))
            ),
              l(
                e,
                9,
                0,
                t.Ab(e, 10).inline,
                'primary' !== t.Ab(e, 10).color &&
                  'accent' !== t.Ab(e, 10).color &&
                  'warn' !== t.Ab(e, 10).color
              ),
              l(e, 11, 0, t.Ab(e, 12).renderedIconHTML),
              l(e, 13, 1, [
                'standard' == t.Ab(e, 14).appearance,
                'fill' == t.Ab(e, 14).appearance,
                'outline' == t.Ab(e, 14).appearance,
                'legacy' == t.Ab(e, 14).appearance,
                t.Ab(e, 14)._control.errorState,
                t.Ab(e, 14)._canLabelFloat,
                t.Ab(e, 14)._shouldLabelFloat(),
                t.Ab(e, 14)._hasFloatingLabel(),
                t.Ab(e, 14)._hideControlPlaceholder(),
                t.Ab(e, 14)._control.disabled,
                t.Ab(e, 14)._control.autofilled,
                t.Ab(e, 14)._control.focused,
                'accent' == t.Ab(e, 14).color,
                'warn' == t.Ab(e, 14).color,
                t.Ab(e, 14)._shouldForward('untouched'),
                t.Ab(e, 14)._shouldForward('touched'),
                t.Ab(e, 14)._shouldForward('pristine'),
                t.Ab(e, 14)._shouldForward('dirty'),
                t.Ab(e, 14)._shouldForward('valid'),
                t.Ab(e, 14)._shouldForward('invalid'),
                t.Ab(e, 14)._shouldForward('pending'),
                !t.Ab(e, 14)._animationsEnabled
              ]),
              l(e, 24, 1, [
                t.Ab(e, 28).ngClassUntouched,
                t.Ab(e, 28).ngClassTouched,
                t.Ab(e, 28).ngClassPristine,
                t.Ab(e, 28).ngClassDirty,
                t.Ab(e, 28).ngClassValid,
                t.Ab(e, 28).ngClassInvalid,
                t.Ab(e, 28).ngClassPending,
                t.Ab(e, 29).id,
                t.Ab(e, 29).tabIndex,
                t.Ab(e, 29)._getAriaLabel(),
                t.Ab(e, 29)._getAriaLabelledby(),
                t.Ab(e, 29).required.toString(),
                t.Ab(e, 29).disabled.toString(),
                t.Ab(e, 29).errorState,
                t.Ab(e, 29).panelOpen ? t.Ab(e, 29)._optionIds : null,
                t.Ab(e, 29).multiple,
                t.Ab(e, 29)._ariaDescribedby || null,
                t.Ab(e, 29)._getAriaActiveDescendant(),
                t.Ab(e, 29).disabled,
                t.Ab(e, 29).errorState,
                t.Ab(e, 29).required,
                t.Ab(e, 29).empty
              ]),
              l(
                e,
                38,
                0,
                t.Ab(e, 39).inline,
                'primary' !== t.Ab(e, 39).color &&
                  'accent' !== t.Ab(e, 39).color &&
                  'warn' !== t.Ab(e, 39).color
              ),
              l(e, 40, 0, t.Ab(e, 41).renderedIconHTML),
              l(
                e,
                44,
                0,
                t.Ib(
                  e,
                  44,
                  0,
                  t.Ab(e, 45).transform('anms.settings.themes.sticky-header')
                )
              ),
              l(
                e,
                46,
                0,
                t.Ab(e, 48).id,
                t.Ab(e, 48).disabled ? null : -1,
                t.Ab(e, 48).checked,
                t.Ab(e, 48).disabled,
                'before' == t.Ab(e, 48).labelPosition,
                'NoopAnimations' === t.Ab(e, 48)._animationMode
              ),
              l(
                e,
                54,
                0,
                t.Ib(
                  e,
                  54,
                  0,
                  t.Ab(e, 55).transform('anms.settings.themes.title')
                )
              ),
              l(
                e,
                57,
                0,
                t.Ab(e, 58).inline,
                'primary' !== t.Ab(e, 58).color &&
                  'accent' !== t.Ab(e, 58).color &&
                  'warn' !== t.Ab(e, 58).color
              ),
              l(e, 59, 0, t.Ab(e, 60).renderedIconHTML),
              l(e, 61, 1, [
                'standard' == t.Ab(e, 62).appearance,
                'fill' == t.Ab(e, 62).appearance,
                'outline' == t.Ab(e, 62).appearance,
                'legacy' == t.Ab(e, 62).appearance,
                t.Ab(e, 62)._control.errorState,
                t.Ab(e, 62)._canLabelFloat,
                t.Ab(e, 62)._shouldLabelFloat(),
                t.Ab(e, 62)._hasFloatingLabel(),
                t.Ab(e, 62)._hideControlPlaceholder(),
                t.Ab(e, 62)._control.disabled,
                t.Ab(e, 62)._control.autofilled,
                t.Ab(e, 62)._control.focused,
                'accent' == t.Ab(e, 62).color,
                'warn' == t.Ab(e, 62).color,
                t.Ab(e, 62)._shouldForward('untouched'),
                t.Ab(e, 62)._shouldForward('touched'),
                t.Ab(e, 62)._shouldForward('pristine'),
                t.Ab(e, 62)._shouldForward('dirty'),
                t.Ab(e, 62)._shouldForward('valid'),
                t.Ab(e, 62)._shouldForward('invalid'),
                t.Ab(e, 62)._shouldForward('pending'),
                !t.Ab(e, 62)._animationsEnabled
              ]),
              l(e, 72, 1, [
                t.Ab(e, 76).ngClassUntouched,
                t.Ab(e, 76).ngClassTouched,
                t.Ab(e, 76).ngClassPristine,
                t.Ab(e, 76).ngClassDirty,
                t.Ab(e, 76).ngClassValid,
                t.Ab(e, 76).ngClassInvalid,
                t.Ab(e, 76).ngClassPending,
                t.Ab(e, 77).id,
                t.Ab(e, 77).tabIndex,
                t.Ab(e, 77)._getAriaLabel(),
                t.Ab(e, 77)._getAriaLabelledby(),
                t.Ab(e, 77).required.toString(),
                t.Ab(e, 77).disabled.toString(),
                t.Ab(e, 77).errorState,
                t.Ab(e, 77).panelOpen ? t.Ab(e, 77)._optionIds : null,
                t.Ab(e, 77).multiple,
                t.Ab(e, 77)._ariaDescribedby || null,
                t.Ab(e, 77)._getAriaActiveDescendant(),
                t.Ab(e, 77).disabled,
                t.Ab(e, 77).errorState,
                t.Ab(e, 77).required,
                t.Ab(e, 77).empty
              ]),
              l(
                e,
                86,
                0,
                t.Ab(e, 87).inline,
                'primary' !== t.Ab(e, 87).color &&
                  'accent' !== t.Ab(e, 87).color &&
                  'warn' !== t.Ab(e, 87).color
              ),
              l(e, 88, 0, t.Ab(e, 89).renderedIconHTML),
              l(
                e,
                92,
                0,
                t.Ib(
                  e,
                  92,
                  0,
                  t.Ab(e, 93).transform('anms.settings.themes.night-mode')
                )
              ),
              l(
                e,
                94,
                0,
                t.Ab(e, 96).id,
                t.Ab(e, 96).disabled ? null : -1,
                t.Ab(e, 96).checked,
                t.Ab(e, 96).disabled,
                'before' == t.Ab(e, 96).labelPosition,
                'NoopAnimations' === t.Ab(e, 96)._animationMode
              ),
              l(
                e,
                101,
                0,
                t.Ib(
                  e,
                  101,
                  0,
                  t.Ab(e, 102).transform('anms.settings.animations.title')
                )
              ),
              l(
                e,
                104,
                0,
                t.Ab(e, 105).inline,
                'primary' !== t.Ab(e, 105).color &&
                  'accent' !== t.Ab(e, 105).color &&
                  'warn' !== t.Ab(e, 105).color
              ),
              l(
                e,
                106,
                0,
                t.Ab(e, 107).inline,
                'primary' !== t.Ab(e, 107).color &&
                  'accent' !== t.Ab(e, 107).color &&
                  'warn' !== t.Ab(e, 107).color
              ),
              l(e, 108, 0, t.Ab(e, 109).renderedIconHTML),
              l(
                e,
                112,
                0,
                t.Ib(
                  e,
                  112,
                  0,
                  t.Ab(e, 113).transform('anms.settings.animations.page')
                )
              ),
              l(
                e,
                119,
                0,
                t.Ab(e, 120).inline,
                'primary' !== t.Ab(e, 120).color &&
                  'accent' !== t.Ab(e, 120).color &&
                  'warn' !== t.Ab(e, 120).color
              ),
              l(e, 121, 0, t.Ab(e, 122).renderedIconHTML),
              l(
                e,
                125,
                0,
                t.Ib(
                  e,
                  125,
                  0,
                  t.Ab(e, 126).transform('anms.settings.animations.elements')
                )
              ),
              l(
                e,
                127,
                0,
                t.Ab(e, 129).id,
                t.Ab(e, 129).disabled ? null : -1,
                t.Ab(e, 129).checked,
                t.Ab(e, 129).disabled,
                'before' == t.Ab(e, 129).labelPosition,
                'NoopAnimations' === t.Ab(e, 129)._animationMode
              );
          }
        );
      }
      function al(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'col-sm-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(3, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), t.Hb(4, null, ['', ''])),
            t.Cb(131072, s.i, [s.j, t.h]),
            (l()(),
            t.qb(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), t.fb(16777216, null, null, 2, null, tl)),
            t.pb(
              8,
              16384,
              null,
              0,
              q.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, q.b, [t.h])
          ],
          function(l, e) {
            var n = e.component;
            l(e, 8, 0, t.Ib(e, 8, 0, t.Ab(e, 9).transform(n.settings$)));
          },
          function(l, e) {
            l(
              e,
              4,
              0,
              t.Ib(e, 4, 0, t.Ab(e, 5).transform('anms.settings.title'))
            );
          }
        );
      }
      function il(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-settings',
              [],
              null,
              null,
              null,
              al,
              Y
            )),
            t.pb(1, 114688, null, 0, X, [V.o], null, null)
          ],
          function(l, e) {
            l(e, 1, 0);
          },
          null
        );
      }
      var ol = t.mb('anms-settings', X, il, {}, {}, []),
        rl = n('aFla'),
        ul = n('9+G+'),
        ml = n('Av2N'),
        dl = n('8JnZ'),
        cl = n('9qA3'),
        sl = n('DiCn'),
        bl = n('Lv2H'),
        fl = n('9Z2Q'),
        pl = n('S/D4'),
        gl = n('0S3s'),
        hl = n('eEhu'),
        yl = n('gX7W'),
        Al = n('yy4G'),
        vl = n('1PzT'),
        xl = n('dFIu'),
        kl = n('uWIS'),
        wl = n('ifl5'),
        _l = n('5i2S'),
        Cl = n('PCNd'),
        ql = n('1VvW');
      const Il = { title: 'anms.menu.settings' };
      class Fl {}
      var zl = n('K5Xz');
      n.d(e, 'SettingsModuleNgFactory', function() {
        return El;
      });
      var El = t.nb(a, [], function(l) {
        return t.xb([
          t.yb(512, t.j, t.ab, [
            [8, [i.a, o.a, o.b, r.a, u.b, u.a, m.a, ol]],
            [3, t.j],
            t.w
          ]),
          t.yb(4608, q.m, q.l, [t.t, [2, q.y]]),
          t.yb(4608, A.n, A.n, []),
          t.yb(4608, _.c, _.c, [
            _.i,
            _.e,
            t.j,
            _.h,
            _.f,
            t.q,
            t.y,
            q.d,
            g.b,
            [2, q.g]
          ]),
          t.yb(5120, _.j, _.k, [_.c]),
          t.yb(4608, f.c, f.c, []),
          t.yb(5120, U.a, U.b, [_.c]),
          t.yb(4608, c.b, c.b, []),
          t.yb(5120, rl.c, rl.j, [_.c]),
          t.yb(5120, w.b, w.c, [_.c]),
          t.yb(4608, p.e, c.c, [[2, c.g], [2, c.l]]),
          t.yb(4608, A.b, A.b, []),
          t.yb(5120, ul.b, ul.c, [_.c]),
          t.yb(135680, ul.d, ul.d, [
            _.c,
            t.q,
            [2, q.g],
            [2, ul.a],
            ul.b,
            [3, ul.d],
            _.e
          ]),
          t.yb(4608, ml.h, ml.h, []),
          t.yb(5120, ml.a, ml.b, [_.c]),
          t.yb(4608, c.a, c.v, [[2, c.f], h.a]),
          t.yb(1073742336, q.c, q.c, []),
          t.yb(1073742336, A.m, A.m, []),
          t.yb(1073742336, A.d, A.d, []),
          t.yb(1073742336, s.g, s.g, []),
          t.yb(1073742336, g.a, g.a, []),
          t.yb(1073742336, c.l, c.l, [[2, c.d], [2, p.f]]),
          t.yb(1073742336, h.b, h.b, []),
          t.yb(1073742336, c.u, c.u, []),
          t.yb(1073742336, dl.c, dl.c, []),
          t.yb(1073742336, cl.b, cl.b, []),
          t.yb(1073742336, sl.g, sl.g, []),
          t.yb(1073742336, C.c, C.c, []),
          t.yb(1073742336, _.g, _.g, []),
          t.yb(1073742336, c.s, c.s, []),
          t.yb(1073742336, c.q, c.q, []),
          t.yb(1073742336, f.d, f.d, []),
          t.yb(1073742336, L.d, L.d, []),
          t.yb(1073742336, U.d, U.d, []),
          t.yb(1073742336, v.a, v.a, []),
          t.yb(1073742336, bl.k, bl.k, []),
          t.yb(1073742336, fl.b, fl.b, []),
          t.yb(1073742336, pl.a, pl.a, []),
          t.yb(1073742336, gl.a, gl.a, []),
          t.yb(1073742336, hl.b, hl.b, []),
          t.yb(1073742336, yl.d, yl.d, []),
          t.yb(1073742336, Al.h, Al.h, []),
          t.yb(1073742336, vl.b, vl.b, []),
          t.yb(1073742336, vl.a, vl.a, []),
          t.yb(1073742336, c.m, c.m, []),
          t.yb(1073742336, xl.a, xl.a, []),
          t.yb(1073742336, kl.c, kl.c, []),
          t.yb(1073742336, rl.i, rl.i, []),
          t.yb(1073742336, rl.f, rl.f, []),
          t.yb(1073742336, F.c, F.c, []),
          t.yb(1073742336, w.e, w.e, []),
          t.yb(1073742336, wl.e, wl.e, []),
          t.yb(1073742336, b.c, b.c, []),
          t.yb(1073742336, E.f, E.f, []),
          t.yb(1073742336, A.k, A.k, []),
          t.yb(1073742336, _l.a, _l.a, []),
          t.yb(1073742336, ul.g, ul.g, []),
          t.yb(1073742336, ml.i, ml.i, []),
          t.yb(1073742336, c.w, c.w, []),
          t.yb(1073742336, c.n, c.n, []),
          t.yb(1073742336, Cl.a, Cl.a, []),
          t.yb(1073742336, ql.t, ql.t, [[2, ql.z], [2, ql.p]]),
          t.yb(1073742336, Fl, Fl, []),
          t.yb(1073742336, a, a, []),
          t.yb(256, hl.a, { separatorKeyCodes: [zl.f] }, []),
          t.yb(256, c.e, c.i, []),
          t.yb(
            1024,
            ql.n,
            function() {
              return [[{ path: '', component: X, data: Il }]];
            },
            []
          )
        ]);
      });
    }
  }
]);
