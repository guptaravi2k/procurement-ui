(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '02iP': function(l, n, e) {
      'use strict';
      e.r(n);
      var t = e('LoAr'),
        a = (function() {
          return function() {};
        })(),
        i = e('pLqg'),
        o = e('tjWy'),
        r = e('7tlY'),
        u = e('UUMc'),
        m = e('C9Ky'),
        d = e('QH8h'),
        s = e('LYzL'),
        c = e('zZcu'),
        b = e('euho'),
        f = e('y7gG'),
        p = e('SeAg'),
        g = e('C7Lb'),
        h = e('WV+C'),
        C = e('Z5FQ'),
        v = e('IfiR'),
        x = e('0xYh'),
        k = t.qb({
          encapsulation: 2,
          styles: [
            '.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging{transition-duration:0s}.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}'
          ],
          data: {}
        });
      function w(l) {
        return t.Lb(
          2,
          [
            t.Hb(671088640, 1, { _thumbEl: 0 }),
            t.Hb(671088640, 2, { _thumbBarEl: 0 }),
            t.Hb(671088640, 3, { _inputElement: 0 }),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.sb(
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
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'change' === n && (t = !1 !== a._onChangeEvent(e) && t),
                  'click' === n && (t = !1 !== a._onInputClick(e) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.sb(
              6,
              0,
              [[1, 0], ['thumbContainer', 1]],
              null,
              5,
              'div',
              [['class', 'mat-slide-toggle-thumb-container']],
              null,
              [[null, 'slidestart'], [null, 'slide'], [null, 'slideend']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'slidestart' === n && (t = !1 !== a._onDragStart() && t),
                  'slide' === n && (t = !1 !== a._onDrag(e) && t),
                  'slideend' === n && (t = !1 !== a._onDragEnd() && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              9,
              212992,
              null,
              0,
              s.t,
              [t.k, t.A, h.a, [2, s.k], [2, C.a]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            t.Fb(10, { enterDuration: 0 }),
            (l()(),
            t.sb(
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
            t.sb(
              12,
              0,
              [['labelContent', 1]],
              null,
              4,
              'span',
              [['class', 'mat-slide-toggle-content']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, e) {
                var t = !0;
                return (
                  'cdkObserveContent' === n &&
                    (t = !1 !== l.component._onLabelTextChange() && t),
                  t
                );
              },
              null,
              null
            )),
            t.rb(13, 1196032, null, 0, f.a, [f.b, t.k, t.A], null, {
              event: 'cdkObserveContent'
            }),
            (l()(),
            t.sb(
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
            (l()(), t.Jb(-1, null, ['\xa0'])),
            t.Bb(null, 0)
          ],
          function(l, n) {
            var e = n.component,
              a = l(n, 10, 0, 150);
            l(n, 9, 0, !0, 20, a, e.disableRipple || e.disabled, t.Cb(n, 3));
          },
          function(l, n) {
            var e = n.component;
            l(n, 3, 0, e.inputId),
              l(
                n,
                4,
                0,
                !t.Cb(n, 12).textContent || !t.Cb(n, 12).textContent.trim()
              ),
              l(
                n,
                5,
                0,
                e.inputId,
                e.required,
                e.tabIndex,
                e.checked,
                e.disabled,
                e.name,
                e.checked.toString(),
                e.ariaLabel,
                e.ariaLabelledby
              ),
              l(n, 8, 0, t.Cb(n, 9).unbounded);
          }
        );
      }
      var y = e('SECt'),
        _ = e('eXL1'),
        A = e('IvSS'),
        L = e('WT9V'),
        I = e('Hc9t'),
        E = e('rXXt'),
        H = e('iwai'),
        S = e('FOLC'),
        z = e('Ho7M'),
        M = t.qb({
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
      function T(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(
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
      function P(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.Bb(null, 0)
          ],
          null,
          null
        );
      }
      function j(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.Bb(null, 2),
            (l()(), t.Jb(2, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 2, 0, n.component._control.placeholder);
          }
        );
      }
      function F(l) {
        return t.Lb(
          0,
          [t.Bb(null, 3), (l()(), t.hb(0, null, null, 0))],
          null,
          null
        );
      }
      function N(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            (l()(), t.Jb(-1, null, [' *']))
          ],
          null,
          null
        );
      }
      function O(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var t = !0;
                return (
                  'cdkObserveContent' === n &&
                    (t = !1 !== l.component.updateOutlineGap() && t),
                  t
                );
              },
              null,
              null
            )),
            t.rb(
              1,
              16384,
              null,
              0,
              L.n,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            t.rb(
              2,
              1196032,
              null,
              0,
              f.a,
              [f.b, t.k, t.A],
              { disabled: [0, 'disabled'] },
              { event: 'cdkObserveContent' }
            ),
            (l()(), t.hb(16777216, null, null, 1, null, j)),
            t.rb(
              4,
              278528,
              null,
              0,
              L.o,
              [t.Q, t.N, L.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, F)),
            t.rb(
              6,
              278528,
              null,
              0,
              L.o,
              [t.Q, t.N, L.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, N)),
            t.rb(
              8,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0, e._hasLabel()),
              l(n, 2, 0, 'outline' != e.appearance),
              l(n, 4, 0, !1),
              l(n, 6, 0, !0),
              l(
                n,
                8,
                0,
                !e.hideRequiredMarker &&
                  e._control.required &&
                  !e._control.disabled
              );
          },
          function(l, n) {
            var e = n.component;
            l(
              n,
              0,
              0,
              e._labelId,
              e._control.id,
              e._control.id,
              e._control.empty && !e._shouldAlwaysFloat,
              e._control.empty && !e._shouldAlwaysFloat,
              'accent' == e.color,
              'warn' == e.color
            );
          }
        );
      }
      function G(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.Bb(null, 4)
          ],
          null,
          null
        );
      }
      function K(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.sb(
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
          function(l, n) {
            var e = n.component;
            l(n, 1, 0, 'accent' == e.color, 'warn' == e.color);
          }
        );
      }
      function q(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.Bb(null, 5)
          ],
          null,
          function(l, n) {
            l(n, 0, 0, n.component._subscriptAnimationState);
          }
        );
      }
      function Q(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            (l()(), t.Jb(1, null, ['', '']))
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, e._hintLabelId), l(n, 1, 0, e.hintLabel);
          }
        );
      }
      function B(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            (l()(), t.hb(16777216, null, null, 1, null, Q)),
            t.rb(
              2,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Bb(null, 6),
            (l()(),
            t.sb(
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
            t.Bb(null, 7)
          ],
          function(l, n) {
            l(n, 2, 0, n.component.hintLabel);
          },
          function(l, n) {
            l(n, 0, 0, n.component._subscriptAnimationState);
          }
        );
      }
      function J(l) {
        return t.Lb(
          2,
          [
            t.Hb(671088640, 1, { underlineRef: 0 }),
            t.Hb(402653184, 2, { _connectionContainerRef: 0 }),
            t.Hb(671088640, 3, { _inputContainerRef: 0 }),
            t.Hb(671088640, 4, { _label: 0 }),
            (l()(),
            t.sb(
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
            t.sb(
              5,
              0,
              [[2, 0], ['connectionContainer', 1]],
              null,
              11,
              'div',
              [['class', 'mat-form-field-flex']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'click' === n &&
                    (t =
                      !1 !==
                        (a._control.onContainerClick &&
                          a._control.onContainerClick(e)) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(), t.hb(16777216, null, null, 1, null, T)),
            t.rb(
              7,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, P)),
            t.rb(
              9,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.Bb(null, 1),
            (l()(),
            t.sb(
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
            (l()(), t.hb(16777216, null, null, 1, null, O)),
            t.rb(
              14,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, G)),
            t.rb(
              16,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, K)),
            t.rb(
              18,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(
              20,
              16384,
              null,
              0,
              L.n,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, q)),
            t.rb(
              22,
              278528,
              null,
              0,
              L.o,
              [t.Q, t.N, L.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, B)),
            t.rb(
              24,
              278528,
              null,
              0,
              L.o,
              [t.Q, t.N, L.n],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 7, 0, 'outline' == e.appearance),
              l(n, 9, 0, e._prefixChildren.length),
              l(n, 14, 0, e._hasFloatingLabel()),
              l(n, 16, 0, e._suffixChildren.length),
              l(n, 18, 0, 'outline' != e.appearance),
              l(n, 20, 0, e._getDisplayedMessages()),
              l(n, 22, 0, 'error'),
              l(n, 24, 0, 'hint');
          },
          null
        );
      }
      var D = e('rW4h'),
        R = e('CRa1'),
        V = e('GovN'),
        U = e('pKmL'),
        X = e('BnVf'),
        Y = e('EMFo'),
        W = (function() {
          function l(l) {
            (this.store = l),
              (this.routeAnimationsElements = U.c),
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
          return (
            (l.prototype.ngOnInit = function() {
              this.settings$ = this.store.pipe(Object(V.C)(Y.d));
            }),
            (l.prototype.onLanguageSelect = function(l) {
              var n = l.value;
              this.store.dispatch(Object(X.f)({ language: n }));
            }),
            (l.prototype.onThemeSelect = function(l) {
              var n = l.value;
              this.store.dispatch(Object(X.h)({ theme: n }));
            }),
            (l.prototype.onAutoNightModeToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(X.d)({ autoNightMode: n }));
            }),
            (l.prototype.onStickyHeaderToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(X.g)({ stickyHeader: n }));
            }),
            (l.prototype.onPageAnimationsToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(X.b)({ pageAnimations: n }));
            }),
            (l.prototype.onElementsAnimationsToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(X.a)({ elementsAnimations: n }));
            }),
            l
          );
        })(),
        $ = t.qb({
          encapsulation: 0,
          styles: [
            [
              '.container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px;text-transform:uppercase}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}'
            ]
          ],
          data: {}
        });
      function Z(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== t.Cb(l, 1)._selectViaInteraction() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Cb(l, 1)._handleKeydown(e) && a),
                  a
                );
              },
              d.c,
              d.a
            )),
            t.rb(
              1,
              8568832,
              [[10, 4]],
              0,
              s.p,
              [t.k, t.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), t.Jb(2, 0, [' ', ' '])),
            t.Eb(131072, c.i, [c.j, t.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 1)._getTabIndex(),
              t.Cb(n, 1).selected,
              t.Cb(n, 1).multiple,
              t.Cb(n, 1).active,
              t.Cb(n, 1).id,
              t.Cb(n, 1)._getAriaSelected(),
              t.Cb(n, 1).disabled.toString(),
              t.Cb(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                t.Kb(
                  n,
                  2,
                  0,
                  t
                    .Cb(n, 3)
                    .transform(
                      'anms.settings.general.language.' +
                        n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function ll(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== t.Cb(l, 1)._selectViaInteraction() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Cb(l, 1)._handleKeydown(e) && a),
                  a
                );
              },
              d.c,
              d.a
            )),
            t.rb(
              1,
              8568832,
              [[22, 4]],
              0,
              s.p,
              [t.k, t.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), t.Jb(2, 0, [' ', ' '])),
            t.Eb(131072, c.i, [c.j, t.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 1)._getTabIndex(),
              t.Cb(n, 1).selected,
              t.Cb(n, 1).multiple,
              t.Cb(n, 1).active,
              t.Cb(n, 1).id,
              t.Cb(n, 1)._getAriaSelected(),
              t.Cb(n, 1).disabled.toString(),
              t.Cb(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                t.Kb(
                  n,
                  2,
                  0,
                  t
                    .Cb(n, 3)
                    .transform(
                      'anms.settings.themes.' + n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function nl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0;
                return (
                  'longpress' === n && (a = !1 !== t.Cb(l, 2).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Cb(l, 2)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Cb(l, 2)._handleTouchend() && a),
                  'focus' === n &&
                    (a =
                      !1 !== t.Cb(l, 3)._inputElement.nativeElement.focus() &&
                      a),
                  a
                );
              },
              w,
              k
            )),
            t.Gb(
              5120,
              null,
              v.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.rb(
              2,
              212992,
              null,
              0,
              y.d,
              [
                _.c,
                t.k,
                A.b,
                t.Q,
                t.A,
                h.a,
                x.c,
                x.h,
                y.b,
                [2, g.b],
                [2, y.a],
                [2, p.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.rb(
              3,
              1228800,
              null,
              0,
              b.b,
              [t.k, x.h, t.h, [8, null], t.A, b.a, [2, C.a], [2, g.b]],
              { disabled: [0, 'disabled'] },
              null
            ),
            (l()(), t.hb(0, null, null, 0))
          ],
          function(l, n) {
            l(
              n,
              2,
              0,
              'before',
              'Sorry, this feature is disabled in IE, EDGE and Safari'
            ),
              l(n, 3, 0, '');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 3).id,
              t.Cb(n, 3).disabled ? null : -1,
              t.Cb(n, 3).checked,
              t.Cb(n, 3).disabled,
              'before' == t.Cb(n, 3).labelPosition,
              'NoopAnimations' === t.Cb(n, 3)._animationMode
            );
          }
        );
      }
      function el(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== t.Cb(l, 2)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === n &&
                    (a = !1 !== i.onPageAnimationsToggle(e) && a),
                  a
                );
              },
              w,
              k
            )),
            t.Gb(
              5120,
              null,
              v.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.rb(
              2,
              1228800,
              null,
              0,
              b.b,
              [t.k, x.h, t.h, [8, null], t.A, b.a, [2, C.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, n) {
            l(n, 2, 0, n.parent.context.ngIf.pageAnimations);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Cb(n, 2).id,
              t.Cb(n, 2).disabled ? null : -1,
              t.Cb(n, 2).checked,
              t.Cb(n, 2).disabled,
              'before' == t.Cb(n, 2).labelPosition,
              'NoopAnimations' === t.Cb(n, 2)._animationMode
            );
          }
        );
      }
      function tl(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.Gb(512, null, L.v, L.w, [t.t, t.u, t.k, t.F]),
            t.rb(
              4,
              278528,
              null,
              0,
              L.i,
              [L.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.sb(5, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Jb(6, null, ['', ''])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              10,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              12,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
              J,
              M
            )),
            t.rb(
              14,
              7520256,
              null,
              9,
              z.b,
              [t.k, t.h, [2, s.h], [2, g.b], [2, z.a], h.a, t.A, [2, C.a]],
              null,
              null
            ),
            t.Hb(603979776, 1, { _controlNonStatic: 0 }),
            t.Hb(335544320, 2, { _controlStatic: 0 }),
            t.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Hb(335544320, 4, { _labelChildStatic: 0 }),
            t.Hb(603979776, 5, { _placeholderChild: 0 }),
            t.Hb(603979776, 6, { _errorChildren: 1 }),
            t.Hb(603979776, 7, { _hintChildren: 1 }),
            t.Hb(603979776, 8, { _prefixChildren: 1 }),
            t.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'keydown' === n &&
                    (a = !1 !== t.Cb(l, 29)._handleKeydown(e) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 29)._onFocus() && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 29)._onBlur() && a),
                  'selectionChange' === n &&
                    (a = !1 !== i.onLanguageSelect(e) && a),
                  a
                );
              },
              D.b,
              D.a
            )),
            t.Gb(6144, null, s.j, null, [R.c]),
            t.rb(
              26,
              671744,
              null,
              0,
              v.j,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            t.Gb(2048, null, v.g, null, [v.j]),
            t.rb(28, 16384, null, 0, v.h, [[4, v.g]], null, null),
            t.rb(
              29,
              2080768,
              null,
              3,
              R.c,
              [
                A.e,
                t.h,
                t.A,
                s.b,
                t.k,
                [2, g.b],
                [2, v.i],
                [2, v.c],
                [2, z.b],
                [6, v.g],
                [8, null],
                R.a,
                x.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            t.Hb(603979776, 10, { options: 1 }),
            t.Hb(603979776, 11, { optionGroups: 1 }),
            t.Hb(603979776, 12, { customTrigger: 0 }),
            t.Eb(131072, c.i, [c.j, t.h]),
            t.Gb(2048, [[1, 4], [2, 4]], z.c, null, [R.c]),
            (l()(), t.hb(16777216, null, 1, 1, null, Z)),
            t.rb(
              36,
              278528,
              null,
              0,
              L.j,
              [t.Q, t.N, t.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              39,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              41,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(43, 16384, null, 0, z.e, [], null, null),
            (l()(), t.Jb(44, null, ['', ' '])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== t.Cb(l, 48)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === n && (a = !1 !== i.onStickyHeaderToggle(e) && a),
                  a
                );
              },
              w,
              k
            )),
            t.Gb(
              5120,
              null,
              v.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.rb(
              48,
              1228800,
              null,
              0,
              b.b,
              [t.k, x.h, t.h, [8, null], t.A, b.a, [2, C.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.Gb(512, null, L.v, L.w, [t.t, t.u, t.k, t.F]),
            t.rb(
              52,
              278528,
              null,
              0,
              L.i,
              [L.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.sb(53, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Jb(54, null, ['', ''])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              58,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              60,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
              J,
              M
            )),
            t.rb(
              62,
              7520256,
              null,
              9,
              z.b,
              [t.k, t.h, [2, s.h], [2, g.b], [2, z.a], h.a, t.A, [2, C.a]],
              null,
              null
            ),
            t.Hb(603979776, 13, { _controlNonStatic: 0 }),
            t.Hb(335544320, 14, { _controlStatic: 0 }),
            t.Hb(603979776, 15, { _labelChildNonStatic: 0 }),
            t.Hb(335544320, 16, { _labelChildStatic: 0 }),
            t.Hb(603979776, 17, { _placeholderChild: 0 }),
            t.Hb(603979776, 18, { _errorChildren: 1 }),
            t.Hb(603979776, 19, { _hintChildren: 1 }),
            t.Hb(603979776, 20, { _prefixChildren: 1 }),
            t.Hb(603979776, 21, { _suffixChildren: 1 }),
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'keydown' === n &&
                    (a = !1 !== t.Cb(l, 77)._handleKeydown(e) && a),
                  'focus' === n && (a = !1 !== t.Cb(l, 77)._onFocus() && a),
                  'blur' === n && (a = !1 !== t.Cb(l, 77)._onBlur() && a),
                  'selectionChange' === n &&
                    (a = !1 !== i.onThemeSelect(e) && a),
                  a
                );
              },
              D.b,
              D.a
            )),
            t.Gb(6144, null, s.j, null, [R.c]),
            t.rb(
              74,
              671744,
              null,
              0,
              v.j,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            t.Gb(2048, null, v.g, null, [v.j]),
            t.rb(76, 16384, null, 0, v.h, [[4, v.g]], null, null),
            t.rb(
              77,
              2080768,
              null,
              3,
              R.c,
              [
                A.e,
                t.h,
                t.A,
                s.b,
                t.k,
                [2, g.b],
                [2, v.i],
                [2, v.c],
                [2, z.b],
                [6, v.g],
                [8, null],
                R.a,
                x.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            t.Hb(603979776, 22, { options: 1 }),
            t.Hb(603979776, 23, { optionGroups: 1 }),
            t.Hb(603979776, 24, { customTrigger: 0 }),
            t.Eb(131072, c.i, [c.j, t.h]),
            t.Gb(2048, [[13, 4], [14, 4]], z.c, null, [R.c]),
            (l()(), t.hb(16777216, null, 1, 1, null, ll)),
            t.rb(
              84,
              278528,
              null,
              0,
              L.j,
              [t.Q, t.N, t.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              87,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              89,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(91, 16384, null, 0, z.e, [], null, null),
            (l()(), t.Jb(92, null, ['', ' '])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== t.Cb(l, 96)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === n &&
                    (a = !1 !== i.onAutoNightModeToggle(e) && a),
                  a
                );
              },
              w,
              k
            )),
            t.Gb(
              5120,
              null,
              v.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.rb(
              96,
              1228800,
              null,
              0,
              b.b,
              [t.k, x.h, t.h, [8, null], t.A, b.a, [2, C.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            t.sb(
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
            t.Gb(512, null, L.v, L.w, [t.t, t.u, t.k, t.F]),
            t.rb(
              99,
              278528,
              null,
              0,
              L.i,
              [L.v],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.sb(
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
            (l()(), t.Jb(101, null, ['', ''])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              105,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(
              107,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              109,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(111, 16384, null, 0, z.e, [], null, null),
            (l()(), t.Jb(112, null, ['', ' '])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(), t.hb(16777216, null, null, 1, null, nl)),
            t.rb(
              115,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.hb(16777216, null, null, 1, null, el)),
            t.rb(
              117,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.sb(
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
            t.rb(
              120,
              9158656,
              null,
              0,
              E.b,
              [t.k, E.d, [8, null], [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.sb(
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
              H.b,
              H.a
            )),
            t.rb(
              122,
              573440,
              null,
              0,
              S.a,
              [p.b, S.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.sb(
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
            t.rb(124, 16384, null, 0, z.e, [], null, null),
            (l()(), t.Jb(125, null, ['', ' '])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(
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
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== t.Cb(l, 129)._inputElement.nativeElement.focus() &&
                      a),
                  'change' === n &&
                    (a = !1 !== i.onElementsAnimationsToggle(e) && a),
                  a
                );
              },
              w,
              k
            )),
            t.Gb(
              5120,
              null,
              v.f,
              function(l) {
                return [l];
              },
              [b.b]
            ),
            t.rb(
              129,
              1228800,
              null,
              0,
              b.b,
              [t.k, x.h, t.h, [8, null], t.A, b.a, [2, C.a], [2, g.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 10, 0, 'accent'),
              l(n, 12, 0, 'language'),
              l(n, 26, 0, 'language', n.context.ngIf.language),
              l(
                n,
                29,
                0,
                t.Kb(
                  n,
                  29,
                  0,
                  t.Cb(n, 33).transform('anms.settings.general.placeholder')
                )
              ),
              l(n, 36, 0, e.languages),
              l(n, 39, 0, 'accent'),
              l(n, 41, 0, 'bars'),
              l(n, 48, 0, n.context.ngIf.stickyHeader),
              l(n, 52, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 58, 0, 'accent'),
              l(n, 60, 0, 'paint-brush'),
              l(n, 74, 0, 'themes', n.context.ngIf.theme),
              l(
                n,
                77,
                0,
                t.Kb(
                  n,
                  77,
                  0,
                  t.Cb(n, 81).transform('anms.settings.themes.placeholder')
                )
              ),
              l(n, 84, 0, e.themes),
              l(n, 87, 0, 'accent'),
              l(n, 89, 0, 'lightbulb'),
              l(n, 96, 0, n.context.ngIf.autoNightMode),
              l(n, 99, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 105, 0, 'accent'),
              l(n, 107, 0, 'accent'),
              l(n, 109, 0, 'window-maximize'),
              l(n, 115, 0, n.context.ngIf.pageAnimationsDisabled),
              l(n, 117, 0, !n.context.ngIf.pageAnimationsDisabled),
              l(n, 120, 0, 'accent'),
              l(n, 122, 0, 'stream'),
              l(n, 129, 0, n.context.ngIf.elementsAnimations);
          },
          function(l, n) {
            l(
              n,
              6,
              0,
              t.Kb(n, 6, 0, t.Cb(n, 7).transform('anms.settings.general.title'))
            ),
              l(
                n,
                9,
                0,
                t.Cb(n, 10).inline,
                'primary' !== t.Cb(n, 10).color &&
                  'accent' !== t.Cb(n, 10).color &&
                  'warn' !== t.Cb(n, 10).color
              ),
              l(n, 11, 0, t.Cb(n, 12).renderedIconHTML),
              l(n, 13, 1, [
                'standard' == t.Cb(n, 14).appearance,
                'fill' == t.Cb(n, 14).appearance,
                'outline' == t.Cb(n, 14).appearance,
                'legacy' == t.Cb(n, 14).appearance,
                t.Cb(n, 14)._control.errorState,
                t.Cb(n, 14)._canLabelFloat,
                t.Cb(n, 14)._shouldLabelFloat(),
                t.Cb(n, 14)._hasFloatingLabel(),
                t.Cb(n, 14)._hideControlPlaceholder(),
                t.Cb(n, 14)._control.disabled,
                t.Cb(n, 14)._control.autofilled,
                t.Cb(n, 14)._control.focused,
                'accent' == t.Cb(n, 14).color,
                'warn' == t.Cb(n, 14).color,
                t.Cb(n, 14)._shouldForward('untouched'),
                t.Cb(n, 14)._shouldForward('touched'),
                t.Cb(n, 14)._shouldForward('pristine'),
                t.Cb(n, 14)._shouldForward('dirty'),
                t.Cb(n, 14)._shouldForward('valid'),
                t.Cb(n, 14)._shouldForward('invalid'),
                t.Cb(n, 14)._shouldForward('pending'),
                !t.Cb(n, 14)._animationsEnabled
              ]),
              l(n, 24, 1, [
                t.Cb(n, 28).ngClassUntouched,
                t.Cb(n, 28).ngClassTouched,
                t.Cb(n, 28).ngClassPristine,
                t.Cb(n, 28).ngClassDirty,
                t.Cb(n, 28).ngClassValid,
                t.Cb(n, 28).ngClassInvalid,
                t.Cb(n, 28).ngClassPending,
                t.Cb(n, 29).id,
                t.Cb(n, 29).tabIndex,
                t.Cb(n, 29)._getAriaLabel(),
                t.Cb(n, 29)._getAriaLabelledby(),
                t.Cb(n, 29).required.toString(),
                t.Cb(n, 29).disabled.toString(),
                t.Cb(n, 29).errorState,
                t.Cb(n, 29).panelOpen ? t.Cb(n, 29)._optionIds : null,
                t.Cb(n, 29).multiple,
                t.Cb(n, 29)._ariaDescribedby || null,
                t.Cb(n, 29)._getAriaActiveDescendant(),
                t.Cb(n, 29).disabled,
                t.Cb(n, 29).errorState,
                t.Cb(n, 29).required,
                t.Cb(n, 29).empty
              ]),
              l(
                n,
                38,
                0,
                t.Cb(n, 39).inline,
                'primary' !== t.Cb(n, 39).color &&
                  'accent' !== t.Cb(n, 39).color &&
                  'warn' !== t.Cb(n, 39).color
              ),
              l(n, 40, 0, t.Cb(n, 41).renderedIconHTML),
              l(
                n,
                44,
                0,
                t.Kb(
                  n,
                  44,
                  0,
                  t.Cb(n, 45).transform('anms.settings.themes.sticky-header')
                )
              ),
              l(
                n,
                46,
                0,
                t.Cb(n, 48).id,
                t.Cb(n, 48).disabled ? null : -1,
                t.Cb(n, 48).checked,
                t.Cb(n, 48).disabled,
                'before' == t.Cb(n, 48).labelPosition,
                'NoopAnimations' === t.Cb(n, 48)._animationMode
              ),
              l(
                n,
                54,
                0,
                t.Kb(
                  n,
                  54,
                  0,
                  t.Cb(n, 55).transform('anms.settings.themes.title')
                )
              ),
              l(
                n,
                57,
                0,
                t.Cb(n, 58).inline,
                'primary' !== t.Cb(n, 58).color &&
                  'accent' !== t.Cb(n, 58).color &&
                  'warn' !== t.Cb(n, 58).color
              ),
              l(n, 59, 0, t.Cb(n, 60).renderedIconHTML),
              l(n, 61, 1, [
                'standard' == t.Cb(n, 62).appearance,
                'fill' == t.Cb(n, 62).appearance,
                'outline' == t.Cb(n, 62).appearance,
                'legacy' == t.Cb(n, 62).appearance,
                t.Cb(n, 62)._control.errorState,
                t.Cb(n, 62)._canLabelFloat,
                t.Cb(n, 62)._shouldLabelFloat(),
                t.Cb(n, 62)._hasFloatingLabel(),
                t.Cb(n, 62)._hideControlPlaceholder(),
                t.Cb(n, 62)._control.disabled,
                t.Cb(n, 62)._control.autofilled,
                t.Cb(n, 62)._control.focused,
                'accent' == t.Cb(n, 62).color,
                'warn' == t.Cb(n, 62).color,
                t.Cb(n, 62)._shouldForward('untouched'),
                t.Cb(n, 62)._shouldForward('touched'),
                t.Cb(n, 62)._shouldForward('pristine'),
                t.Cb(n, 62)._shouldForward('dirty'),
                t.Cb(n, 62)._shouldForward('valid'),
                t.Cb(n, 62)._shouldForward('invalid'),
                t.Cb(n, 62)._shouldForward('pending'),
                !t.Cb(n, 62)._animationsEnabled
              ]),
              l(n, 72, 1, [
                t.Cb(n, 76).ngClassUntouched,
                t.Cb(n, 76).ngClassTouched,
                t.Cb(n, 76).ngClassPristine,
                t.Cb(n, 76).ngClassDirty,
                t.Cb(n, 76).ngClassValid,
                t.Cb(n, 76).ngClassInvalid,
                t.Cb(n, 76).ngClassPending,
                t.Cb(n, 77).id,
                t.Cb(n, 77).tabIndex,
                t.Cb(n, 77)._getAriaLabel(),
                t.Cb(n, 77)._getAriaLabelledby(),
                t.Cb(n, 77).required.toString(),
                t.Cb(n, 77).disabled.toString(),
                t.Cb(n, 77).errorState,
                t.Cb(n, 77).panelOpen ? t.Cb(n, 77)._optionIds : null,
                t.Cb(n, 77).multiple,
                t.Cb(n, 77)._ariaDescribedby || null,
                t.Cb(n, 77)._getAriaActiveDescendant(),
                t.Cb(n, 77).disabled,
                t.Cb(n, 77).errorState,
                t.Cb(n, 77).required,
                t.Cb(n, 77).empty
              ]),
              l(
                n,
                86,
                0,
                t.Cb(n, 87).inline,
                'primary' !== t.Cb(n, 87).color &&
                  'accent' !== t.Cb(n, 87).color &&
                  'warn' !== t.Cb(n, 87).color
              ),
              l(n, 88, 0, t.Cb(n, 89).renderedIconHTML),
              l(
                n,
                92,
                0,
                t.Kb(
                  n,
                  92,
                  0,
                  t.Cb(n, 93).transform('anms.settings.themes.night-mode')
                )
              ),
              l(
                n,
                94,
                0,
                t.Cb(n, 96).id,
                t.Cb(n, 96).disabled ? null : -1,
                t.Cb(n, 96).checked,
                t.Cb(n, 96).disabled,
                'before' == t.Cb(n, 96).labelPosition,
                'NoopAnimations' === t.Cb(n, 96)._animationMode
              ),
              l(
                n,
                101,
                0,
                t.Kb(
                  n,
                  101,
                  0,
                  t.Cb(n, 102).transform('anms.settings.animations.title')
                )
              ),
              l(
                n,
                104,
                0,
                t.Cb(n, 105).inline,
                'primary' !== t.Cb(n, 105).color &&
                  'accent' !== t.Cb(n, 105).color &&
                  'warn' !== t.Cb(n, 105).color
              ),
              l(
                n,
                106,
                0,
                t.Cb(n, 107).inline,
                'primary' !== t.Cb(n, 107).color &&
                  'accent' !== t.Cb(n, 107).color &&
                  'warn' !== t.Cb(n, 107).color
              ),
              l(n, 108, 0, t.Cb(n, 109).renderedIconHTML),
              l(
                n,
                112,
                0,
                t.Kb(
                  n,
                  112,
                  0,
                  t.Cb(n, 113).transform('anms.settings.animations.page')
                )
              ),
              l(
                n,
                119,
                0,
                t.Cb(n, 120).inline,
                'primary' !== t.Cb(n, 120).color &&
                  'accent' !== t.Cb(n, 120).color &&
                  'warn' !== t.Cb(n, 120).color
              ),
              l(n, 121, 0, t.Cb(n, 122).renderedIconHTML),
              l(
                n,
                125,
                0,
                t.Kb(
                  n,
                  125,
                  0,
                  t.Cb(n, 126).transform('anms.settings.animations.elements')
                )
              ),
              l(
                n,
                127,
                0,
                t.Cb(n, 129).id,
                t.Cb(n, 129).disabled ? null : -1,
                t.Cb(n, 129).checked,
                t.Cb(n, 129).disabled,
                'before' == t.Cb(n, 129).labelPosition,
                'NoopAnimations' === t.Cb(n, 129)._animationMode
              );
          }
        );
      }
      function al(l) {
        return t.Lb(
          2,
          [
            (l()(),
            t.sb(
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
            t.sb(
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
            t.sb(
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
            t.sb(3, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), t.Jb(4, null, ['', ''])),
            t.Eb(131072, c.i, [c.j, t.h]),
            (l()(),
            t.sb(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), t.hb(16777216, null, null, 2, null, tl)),
            t.rb(
              8,
              16384,
              null,
              0,
              L.k,
              [t.Q, t.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Eb(131072, L.b, [t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 8, 0, t.Kb(n, 8, 0, t.Cb(n, 9).transform(e.settings$)));
          },
          function(l, n) {
            l(
              n,
              4,
              0,
              t.Kb(n, 4, 0, t.Cb(n, 5).transform('anms.settings.title'))
            );
          }
        );
      }
      function il(l) {
        return t.Lb(
          0,
          [
            (l()(),
            t.sb(
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
              $
            )),
            t.rb(1, 114688, null, 0, W, [V.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var ol = t.ob('anms-settings', W, il, {}, {}, []),
        rl = e('5kg2'),
        ul = e('s8WJ'),
        ml = e('O0P8'),
        dl = e('GcYS'),
        sl = e('/hyk'),
        cl = e('abkR'),
        bl = e('w9fW'),
        fl = e('+3V+'),
        pl = e('dgjn'),
        gl = e('QIIz'),
        hl = e('a198'),
        Cl = e('XIB+'),
        vl = e('V3Ng'),
        xl = e('z1EI'),
        kl = e('8xy9'),
        wl = e('e8uv'),
        yl = e('8raB'),
        _l = e('qXP9'),
        Al = e('PCNd'),
        Ll = e('981U'),
        Il = { title: 'anms.menu.settings' },
        El = (function() {
          return function() {};
        })(),
        Hl = e('rh80');
      e.d(n, 'SettingsModuleNgFactory', function() {
        return Sl;
      });
      var Sl = t.pb(a, [], function(l) {
        return t.zb([
          t.Ab(512, t.j, t.cb, [
            [8, [i.a, o.a, o.b, r.a, u.b, u.a, m.a, ol]],
            [3, t.j],
            t.y
          ]),
          t.Ab(4608, L.m, L.l, [t.v, [2, L.y]]),
          t.Ab(4608, v.n, v.n, []),
          t.Ab(4608, _.c, _.c, [
            _.i,
            _.e,
            t.j,
            _.h,
            _.f,
            t.r,
            t.A,
            L.d,
            g.b,
            [2, L.g]
          ]),
          t.Ab(5120, _.j, _.k, [_.c]),
          t.Ab(4608, f.c, f.c, []),
          t.Ab(5120, R.a, R.b, [_.c]),
          t.Ab(4608, s.b, s.b, []),
          t.Ab(5120, rl.c, rl.j, [_.c]),
          t.Ab(5120, y.b, y.c, [_.c]),
          t.Ab(4608, p.e, s.c, [[2, s.g], [2, s.l]]),
          t.Ab(4608, v.b, v.b, []),
          t.Ab(5120, ul.b, ul.c, [_.c]),
          t.Ab(135680, ul.d, ul.d, [
            _.c,
            t.r,
            [2, L.g],
            [2, ul.a],
            ul.b,
            [3, ul.d],
            _.e
          ]),
          t.Ab(4608, ml.h, ml.h, []),
          t.Ab(5120, ml.a, ml.b, [_.c]),
          t.Ab(4608, s.a, s.v, [[2, s.f], h.a]),
          t.Ab(1073742336, L.c, L.c, []),
          t.Ab(1073742336, v.m, v.m, []),
          t.Ab(1073742336, v.d, v.d, []),
          t.Ab(1073742336, c.g, c.g, []),
          t.Ab(1073742336, g.a, g.a, []),
          t.Ab(1073742336, s.l, s.l, [[2, s.d], [2, p.f]]),
          t.Ab(1073742336, h.b, h.b, []),
          t.Ab(1073742336, s.u, s.u, []),
          t.Ab(1073742336, dl.c, dl.c, []),
          t.Ab(1073742336, sl.b, sl.b, []),
          t.Ab(1073742336, cl.g, cl.g, []),
          t.Ab(1073742336, A.c, A.c, []),
          t.Ab(1073742336, _.g, _.g, []),
          t.Ab(1073742336, s.s, s.s, []),
          t.Ab(1073742336, s.q, s.q, []),
          t.Ab(1073742336, f.d, f.d, []),
          t.Ab(1073742336, z.d, z.d, []),
          t.Ab(1073742336, R.d, R.d, []),
          t.Ab(1073742336, x.a, x.a, []),
          t.Ab(1073742336, bl.k, bl.k, []),
          t.Ab(1073742336, fl.b, fl.b, []),
          t.Ab(1073742336, pl.a, pl.a, []),
          t.Ab(1073742336, gl.a, gl.a, []),
          t.Ab(1073742336, hl.b, hl.b, []),
          t.Ab(1073742336, Cl.d, Cl.d, []),
          t.Ab(1073742336, vl.h, vl.h, []),
          t.Ab(1073742336, xl.b, xl.b, []),
          t.Ab(1073742336, xl.a, xl.a, []),
          t.Ab(1073742336, s.m, s.m, []),
          t.Ab(1073742336, kl.a, kl.a, []),
          t.Ab(1073742336, wl.c, wl.c, []),
          t.Ab(1073742336, rl.i, rl.i, []),
          t.Ab(1073742336, rl.f, rl.f, []),
          t.Ab(1073742336, E.c, E.c, []),
          t.Ab(1073742336, y.e, y.e, []),
          t.Ab(1073742336, yl.e, yl.e, []),
          t.Ab(1073742336, b.c, b.c, []),
          t.Ab(1073742336, S.f, S.f, []),
          t.Ab(1073742336, v.k, v.k, []),
          t.Ab(1073742336, _l.a, _l.a, []),
          t.Ab(1073742336, ul.g, ul.g, []),
          t.Ab(1073742336, ml.i, ml.i, []),
          t.Ab(1073742336, s.w, s.w, []),
          t.Ab(1073742336, s.n, s.n, []),
          t.Ab(1073742336, Al.a, Al.a, []),
          t.Ab(1073742336, Ll.t, Ll.t, [[2, Ll.z], [2, Ll.p]]),
          t.Ab(1073742336, El, El, []),
          t.Ab(1073742336, a, a, []),
          t.Ab(256, hl.a, { separatorKeyCodes: [Hl.f] }, []),
          t.Ab(256, s.e, s.i, []),
          t.Ab(
            1024,
            Ll.n,
            function() {
              return [[{ path: '', component: W, data: Il }]];
            },
            []
          )
        ]);
      });
    }
  }
]);
