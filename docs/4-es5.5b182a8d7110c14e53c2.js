(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '8iGT': function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n('LoAr'),
        r = n('cCTv'),
        o = n('AytR');
      function s(t) {
        return new r.a(t, o.a.i18nPrefix + '/assets/i18n/examples/', '.json');
      }
      var a = (function() {
          return function() {};
        })(),
        l = n('pLqg'),
        c = n('tjWy'),
        u = n('7tlY'),
        d = n('UUMc'),
        p = n('C9Ky'),
        h = n('0aut'),
        f = n('w9fW'),
        b = n('WV+C'),
        g = n('LYzL'),
        m = n('0xYh'),
        _ = n('WT9V'),
        v = n('981U'),
        y = n('zZcu'),
        x = n('QH8h'),
        O = n('y7gG'),
        C = n('C7Lb'),
        D = n('SeAg'),
        w = n('abkR'),
        k = (n('Z5FQ'), n('IvSS')),
        R = i.qb({
          encapsulation: 2,
          styles: [
            '.mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}'
          ],
          data: {}
        });
      function P(t) {
        return i.Lb(
          2,
          [
            i.Hb(402653184, 1, { _inkBar: 0 }),
            (t()(),
            i.sb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'mat-tab-links']],
              null,
              [[null, 'cdkObserveContent']],
              function(t, e, n) {
                var i = !0;
                return (
                  'cdkObserveContent' === e &&
                    (i = !1 !== t.component._alignInkBar() && i),
                  i
                );
              },
              null,
              null
            )),
            i.rb(2, 1196032, null, 0, O.a, [O.b, i.k, i.A], null, {
              event: 'cdkObserveContent'
            }),
            i.Bb(null, 0),
            (t()(),
            i.sb(
              4,
              0,
              null,
              null,
              1,
              'mat-ink-bar',
              [['class', 'mat-ink-bar']],
              null,
              null,
              null,
              null,
              null
            )),
            i.rb(5, 16384, [[1, 4]], 0, f.b, [i.k, i.A, f.l], null, null)
          ],
          null,
          null
        );
      }
      var j = n('rW4h'),
        A = n('CRa1'),
        E = n('Ho7M'),
        I = n('IfiR'),
        S = n('GovN'),
        T = n('pKmL'),
        L = (function() {
          function t(t) {
            (this.store = t),
              (this.examples = [
                { link: 'file-upload', label: 'File Upload' },
                { link: 'config', label: 'Config' }
              ]);
          }
          return (
            (t.prototype.ngOnInit = function() {
              this.isAuthenticated$ = this.store.pipe(Object(S.C)(T.g));
            }),
            t
          );
        })(),
        M = i.qb({
          encapsulation: 0,
          styles: [
            [
              'nav[_ngcontent-%COMP%]{margin-bottom:20px}nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:120px;padding:0 15px}@media (max-width:768px){nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:0}}'
            ]
          ],
          data: {
            animation: [
              {
                type: 7,
                name: 'routeAnimations',
                definitions: [
                  {
                    type: 1,
                    expr: h.b,
                    animation: [
                      {
                        type: 11,
                        selector: ':enter > *',
                        animation: {
                          type: 6,
                          styles: { opacity: 0, position: 'fixed' },
                          offset: null
                        },
                        options: { optional: !0 }
                      },
                      {
                        type: 11,
                        selector: ':enter .route-animations-elements',
                        animation: {
                          type: 6,
                          styles: { opacity: 0 },
                          offset: null
                        },
                        options: { optional: !0 }
                      },
                      {
                        type: 2,
                        steps: [
                          {
                            type: 11,
                            selector: ':leave > *',
                            animation: [
                              {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: {
                                    transform: 'translateY(-3%)',
                                    opacity: 0
                                  },
                                  offset: null
                                },
                                timings: '0.2s ease-in-out'
                              },
                              {
                                type: 6,
                                styles: { position: 'fixed' },
                                offset: null
                              }
                            ],
                            options: { optional: !0 }
                          },
                          {
                            type: 11,
                            selector: ':enter > *',
                            animation: [
                              {
                                type: 6,
                                styles: {
                                  transform: 'translateY(-3%)',
                                  opacity: 0,
                                  position: 'static'
                                },
                                offset: null
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: {
                                    transform: 'translateY(0%)',
                                    opacity: 1
                                  },
                                  offset: null
                                },
                                timings: '0.5s ease-in-out'
                              }
                            ],
                            options: { optional: !0 }
                          }
                        ],
                        options: null
                      },
                      {
                        type: 11,
                        selector: ':enter .route-animations-elements',
                        animation: {
                          type: 12,
                          timings: 75,
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(10%)',
                                opacity: 0
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              timings: '0.5s ease-in-out'
                            }
                          ]
                        },
                        options: { optional: !0 }
                      }
                    ],
                    options: null
                  },
                  { type: 1, expr: h.d, animation: [], options: null },
                  {
                    type: 1,
                    expr: h.e,
                    animation: [
                      {
                        type: 11,
                        selector: ':enter > *',
                        animation: {
                          type: 6,
                          styles: { opacity: 0, position: 'fixed' },
                          offset: null
                        },
                        options: { optional: !0 }
                      },
                      {
                        type: 2,
                        steps: [
                          {
                            type: 11,
                            selector: ':leave > *',
                            animation: [
                              {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: {
                                    transform: 'translateY(-3%)',
                                    opacity: 0
                                  },
                                  offset: null
                                },
                                timings: '0.2s ease-in-out'
                              },
                              {
                                type: 6,
                                styles: { position: 'fixed' },
                                offset: null
                              }
                            ],
                            options: { optional: !0 }
                          },
                          {
                            type: 11,
                            selector: ':enter > *',
                            animation: [
                              {
                                type: 6,
                                styles: {
                                  transform: 'translateY(-3%)',
                                  opacity: 0,
                                  position: 'static'
                                },
                                offset: null
                              },
                              {
                                type: 4,
                                styles: {
                                  type: 6,
                                  styles: {
                                    transform: 'translateY(0%)',
                                    opacity: 1
                                  },
                                  offset: null
                                },
                                timings: '0.5s ease-in-out'
                              }
                            ],
                            options: { optional: !0 }
                          }
                        ],
                        options: null
                      }
                    ],
                    options: null
                  },
                  {
                    type: 1,
                    expr: h.c,
                    animation: [
                      {
                        type: 11,
                        selector: ':enter .route-animations-elements',
                        animation: {
                          type: 6,
                          styles: { opacity: 0 },
                          offset: null
                        },
                        options: { optional: !0 }
                      },
                      {
                        type: 11,
                        selector: ':enter .route-animations-elements',
                        animation: {
                          type: 12,
                          timings: 75,
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(10%)',
                                opacity: 0
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              timings: '0.5s ease-in-out'
                            }
                          ]
                        },
                        options: { optional: !0 }
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
      function F(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              8,
              'a',
              [
                ['class', 'mat-tab-link'],
                ['mat-tab-link', ''],
                ['routerLinkActive', '']
              ],
              [
                [1, 'aria-current', 0],
                [1, 'aria-disabled', 0],
                [1, 'tabIndex', 0],
                [2, 'mat-tab-disabled', null],
                [2, 'mat-tab-label-active', null],
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r =
                      !1 !==
                        i
                          .Cb(t, 3)
                          .onClick(
                            n.button,
                            n.ctrlKey,
                            n.metaKey,
                            n.shiftKey
                          ) && r),
                  r
                );
              },
              null,
              null
            )),
            i.rb(
              1,
              147456,
              [[1, 4]],
              0,
              f.i,
              [f.j, i.k, i.A, b.a, [2, g.k], [8, null], m.h],
              { disabled: [0, 'disabled'], active: [1, 'active'] },
              null
            ),
            i.Eb(131072, _.b, [i.h]),
            i.rb(
              3,
              671744,
              [[3, 4]],
              0,
              v.s,
              [v.p, v.a, _.h],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            i.rb(
              4,
              1720320,
              [['rla', 4]],
              2,
              v.r,
              [v.p, i.k, i.F, [2, v.q], [2, v.s]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            i.Hb(603979776, 2, { links: 1 }),
            i.Hb(603979776, 3, { linksWithHrefs: 1 }),
            (t()(), i.Jb(7, null, [' ', ' '])),
            i.Eb(131072, y.i, [y.j, i.h])
          ],
          function(t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              e.context.$implicit.auth &&
                !i.Kb(e, 1, 0, i.Cb(e, 2).transform(n.isAuthenticated$)),
              i.Cb(e, 4).isActive
            ),
              t(e, 3, 0, e.context.$implicit.link),
              t(e, 4, 0, '');
          },
          function(t, e) {
            t(
              e,
              0,
              0,
              i.Cb(e, 1).active,
              i.Cb(e, 1).disabled.toString(),
              i.Cb(e, 1).tabIndex,
              i.Cb(e, 1).disabled,
              i.Cb(e, 1).active,
              i.Cb(e, 3).target,
              i.Cb(e, 3).href
            ),
              t(
                e,
                7,
                0,
                i.Kb(e, 7, 0, i.Cb(e, 8).transform(e.context.$implicit.label))
              );
          }
        );
      }
      function N(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              5,
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
              function(t, e, n) {
                var r = !0;
                return (
                  'click' === e &&
                    (r = !1 !== i.Cb(t, 1)._selectViaInteraction() && r),
                  'keydown' === e &&
                    (r = !1 !== i.Cb(t, 1)._handleKeydown(n) && r),
                  'click' === e && (r = !1 !== i.Cb(t, 3).onClick() && r),
                  r
                );
              },
              x.c,
              x.a
            )),
            i.rb(
              1,
              8568832,
              [[4, 4]],
              0,
              g.p,
              [i.k, i.h, [2, g.j], [2, g.o]],
              { value: [0, 'value'], disabled: [1, 'disabled'] },
              null
            ),
            i.Eb(131072, _.b, [i.h]),
            i.rb(
              3,
              16384,
              null,
              0,
              v.q,
              [v.p, v.a, [8, null], i.F, i.k],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            (t()(), i.Jb(4, 0, [' ', ' '])),
            i.Eb(131072, y.i, [y.j, i.h])
          ],
          function(t, e) {
            var n = e.component;
            t(
              e,
              1,
              0,
              e.context.$implicit,
              e.context.$implicit.auth &&
                !i.Kb(e, 1, 1, i.Cb(e, 2).transform(n.isAuthenticated$))
            ),
              t(e, 3, 0, e.context.$implicit.link);
          },
          function(t, e) {
            t(
              e,
              0,
              0,
              i.Cb(e, 1)._getTabIndex(),
              i.Cb(e, 1).selected,
              i.Cb(e, 1).multiple,
              i.Cb(e, 1).active,
              i.Cb(e, 1).id,
              i.Cb(e, 1)._getAriaSelected(),
              i.Cb(e, 1).disabled.toString(),
              i.Cb(e, 1).disabled
            ),
              t(
                e,
                4,
                0,
                i.Kb(e, 4, 0, i.Cb(e, 5).transform(e.context.$implicit.label))
              );
          }
        );
      }
      function z(t) {
        return i.Lb(
          2,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              4,
              'nav',
              [
                ['class', 'd-none d-sm-flex mat-tab-nav-bar'],
                ['mat-tab-nav-bar', '']
              ],
              null,
              null,
              null,
              P,
              R
            )),
            i.rb(
              1,
              3325952,
              null,
              1,
              f.j,
              [i.k, [2, C.b], i.A, i.h, k.e],
              null,
              null
            ),
            i.Hb(603979776, 1, { _tabLinks: 1 }),
            (t()(), i.hb(16777216, null, 0, 1, null, F)),
            i.rb(
              4,
              278528,
              null,
              0,
              _.j,
              [i.Q, i.N, i.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            i.sb(
              5,
              0,
              null,
              null,
              10,
              'nav',
              [
                [
                  'class',
                  'nav-responsive d-sm-none d-flex justify-content-center'
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(
              6,
              0,
              null,
              null,
              9,
              'mat-select',
              [['class', 'mat-select'], ['role', 'listbox']],
              [
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
              [[null, 'keydown'], [null, 'focus'], [null, 'blur']],
              function(t, e, n) {
                var r = !0;
                return (
                  'keydown' === e &&
                    (r = !1 !== i.Cb(t, 9)._handleKeydown(n) && r),
                  'focus' === e && (r = !1 !== i.Cb(t, 9)._onFocus() && r),
                  'blur' === e && (r = !1 !== i.Cb(t, 9)._onBlur() && r),
                  r
                );
              },
              j.b,
              j.a
            )),
            i.Gb(6144, null, g.j, null, [A.c]),
            i.Gb(6144, null, E.c, null, [A.c]),
            i.rb(
              9,
              2080768,
              null,
              3,
              A.c,
              [
                k.e,
                i.h,
                i.A,
                g.b,
                i.k,
                [2, C.b],
                [2, I.i],
                [2, I.c],
                [2, E.b],
                [8, null],
                [8, null],
                A.a,
                m.j
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            i.Hb(603979776, 4, { options: 1 }),
            i.Hb(603979776, 5, { optionGroups: 1 }),
            i.Hb(603979776, 6, { customTrigger: 0 }),
            i.Eb(131072, y.i, [y.j, i.h]),
            (t()(), i.hb(16777216, null, 1, 1, null, N)),
            i.rb(
              15,
              278528,
              null,
              0,
              _.j,
              [i.Q, i.N, i.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            i.sb(
              16,
              0,
              null,
              null,
              2,
              'div',
              [],
              [[24, '@routeAnimations', 0]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(
              17,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            i.rb(
              18,
              212992,
              [['o', 4]],
              0,
              v.u,
              [v.c, i.Q, i.j, [8, null], i.h],
              null,
              null
            )
          ],
          function(t, e) {
            var n = e.component;
            t(e, 4, 0, n.examples),
              t(
                e,
                9,
                0,
                i.Kb(e, 9, 0, i.Cb(e, 13).transform('anms.examples.title')),
                'todos'
              ),
              t(e, 15, 0, n.examples),
              t(e, 18, 0);
          },
          function(t, e) {
            t(e, 6, 1, [
              i.Cb(e, 9).id,
              i.Cb(e, 9).tabIndex,
              i.Cb(e, 9)._getAriaLabel(),
              i.Cb(e, 9)._getAriaLabelledby(),
              i.Cb(e, 9).required.toString(),
              i.Cb(e, 9).disabled.toString(),
              i.Cb(e, 9).errorState,
              i.Cb(e, 9).panelOpen ? i.Cb(e, 9)._optionIds : null,
              i.Cb(e, 9).multiple,
              i.Cb(e, 9)._ariaDescribedby || null,
              i.Cb(e, 9)._getAriaActiveDescendant(),
              i.Cb(e, 9).disabled,
              i.Cb(e, 9).errorState,
              i.Cb(e, 9).required,
              i.Cb(e, 9).empty
            ]),
              t(
                e,
                16,
                0,
                i.Cb(e, 18).isActivated &&
                  i.Cb(e, 18).activatedRoute.routeConfig.path
              );
          }
        );
      }
      function B(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              1,
              'anms-examples',
              [],
              null,
              null,
              null,
              z,
              M
            )),
            i.rb(1, 114688, null, 0, L, [S.o], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var H = i.ob('anms-examples', L, B, {}, {}, []),
        q = n('GiBk'),
        U = (function() {
          function t(t) {
            this.http = t;
          }
          return (
            (t.prototype.uploadFile = function(t) {
              var e = new FormData();
              e.append('file', t);
              var n = new q.h('POST', 'http://localhost:8080/uploadFile', e, {
                reportProgress: !0,
                responseType: 'text'
              });
              return this.http.request(n);
            }),
            (t.ngInjectableDef = i.Nb({
              factory: function() {
                return new t(i.Rb(q.c));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        G = (function() {
          function t(t) {
            this.fileService = t;
          }
          return (
            (t.prototype.selectFile = function(t) {
              this.selectedFiles = t.target.files;
            }),
            (t.prototype.upload = function() {
              var t = this;
              (this.currentFile = this.selectedFiles.item(0)),
                this.fileService
                  .uploadFile(this.currentFile)
                  .subscribe(function(e) {
                    e instanceof q.i && ((t.msg = e.body), console.log(e.body));
                  });
            }),
            (t.prototype.ngOnInit = function() {}),
            t
          );
        })(),
        Y = i.qb({ encapsulation: 0, styles: [['']], data: {} });
      function $(t) {
        return i.Lb(
          2,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              5,
              'div',
              [['style', 'text-align:center']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(
              1,
              0,
              null,
              null,
              0,
              'div',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(
              2,
              0,
              null,
              null,
              1,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(
              3,
              0,
              null,
              null,
              0,
              'input',
              [['type', 'file']],
              null,
              [[null, 'change']],
              function(t, e, n) {
                var i = !0;
                return (
                  'change' === e && (i = !1 !== t.component.selectFile(n) && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.sb(
              4,
              0,
              null,
              null,
              1,
              'button',
              [],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(t, e, n) {
                var i = !0;
                return (
                  'click' === e && (i = !1 !== t.component.upload() && i), i
                );
              },
              null,
              null
            )),
            (t()(), i.Jb(-1, null, ['Upload']))
          ],
          null,
          function(t, e) {
            var n = e.component;
            t(e, 1, 0, n.msg), t(e, 4, 0, !n.selectedFiles);
          }
        );
      }
      function J(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              1,
              'anms-file-upload',
              [],
              null,
              null,
              null,
              $,
              Y
            )),
            i.rb(1, 114688, null, 0, G, [U], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var K = i.ob('anms-file-upload', G, J, {}, {}, []),
        W = n('HfXx'),
        Q = n('fQLH'),
        V = n('LR82'),
        Z = n('HnWI'),
        X = n('gQst'),
        tt = n('Jg5f'),
        et = n('G2Mx'),
        nt = n('mhnT'),
        it = n('W/Ou'),
        rt = n('U3QC'),
        ot = n('AouM');
      function st(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      function at(t, e) {
        var n = e ? '' : 'none';
        st(t.style, {
          touchAction: e ? '' : 'none',
          webkitUserDrag: e ? '' : 'none',
          webkitTapHighlightColor: e ? '' : 'transparent',
          userSelect: n,
          msUserSelect: n,
          webkitUserSelect: n,
          MozUserSelect: n
        });
      }
      function lt(t) {
        var e = t.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
        return parseFloat(t) * e;
      }
      function ct(t, e) {
        return t
          .getPropertyValue(e)
          .split(',')
          .map(function(t) {
            return t.trim();
          });
      }
      var ut = Object(b.f)({ passive: !0 }),
        dt = Object(b.f)({ passive: !1 }),
        pt = (function() {
          function t(t, e, n, i, r, o) {
            var s = this;
            (this._config = e),
              (this._document = n),
              (this._ngZone = i),
              (this._viewportRuler = r),
              (this._dragDropRegistry = o),
              (this._passiveTransform = { x: 0, y: 0 }),
              (this._activeTransform = { x: 0, y: 0 }),
              (this._moveEvents = new Q.a()),
              (this._pointerMoveSubscription = V.a.EMPTY),
              (this._pointerUpSubscription = V.a.EMPTY),
              (this._boundaryElement = null),
              (this._nativeInteractionsEnabled = !0),
              (this._handles = []),
              (this._disabledHandles = new Set()),
              (this._direction = 'ltr'),
              (this.dragStartDelay = 0),
              (this._disabled = !1),
              (this.beforeStarted = new Q.a()),
              (this.started = new Q.a()),
              (this.released = new Q.a()),
              (this.ended = new Q.a()),
              (this.entered = new Q.a()),
              (this.exited = new Q.a()),
              (this.dropped = new Q.a()),
              (this.moved = this._moveEvents.asObservable()),
              (this._pointerDown = function(t) {
                if ((s.beforeStarted.next(), s._handles.length)) {
                  var e = s._handles.find(function(e) {
                    var n = t.target;
                    return !!n && (n === e || e.contains(n));
                  });
                  !e ||
                    s._disabledHandles.has(e) ||
                    s.disabled ||
                    s._initializeDragSequence(e, t);
                } else
                  s.disabled || s._initializeDragSequence(s._rootElement, t);
              }),
              (this._pointerMove = function(t) {
                if (s._hasStartedDragging) {
                  s._boundaryElement &&
                    ((s._previewRect &&
                      (s._previewRect.width || s._previewRect.height)) ||
                      (s._previewRect = (
                        s._preview || s._rootElement
                      ).getBoundingClientRect()));
                  var e = s._getConstrainedPointerPosition(t);
                  if (
                    ((s._hasMoved = !0),
                    t.preventDefault(),
                    s._updatePointerDirectionDelta(e),
                    s._dropContainer)
                  )
                    s._updateActiveDropContainer(e);
                  else {
                    var n = s._activeTransform;
                    (n.x =
                      e.x - s._pickupPositionOnPage.x + s._passiveTransform.x),
                      (n.y =
                        e.y -
                        s._pickupPositionOnPage.y +
                        s._passiveTransform.y),
                      s._applyRootElementTransform(n.x, n.y),
                      'undefined' != typeof SVGElement &&
                        s._rootElement instanceof SVGElement &&
                        s._rootElement.setAttribute(
                          'transform',
                          'translate(' + n.x + ' ' + n.y + ')'
                        );
                  }
                  s._moveEvents.observers.length &&
                    s._ngZone.run(function() {
                      s._moveEvents.next({
                        source: s,
                        pointerPosition: e,
                        event: t,
                        distance: s._getDragDistance(e),
                        delta: s._pointerDirectionDelta
                      });
                    });
                } else {
                  var i = s._getPointerPositionOnPage(t);
                  Math.abs(i.x - s._pickupPositionOnPage.x) +
                    Math.abs(i.y - s._pickupPositionOnPage.y) >=
                    s._config.dragStartThreshold &&
                    Date.now() >= s._dragStartTime + (s.dragStartDelay || 0) &&
                    ((s._dropContainer && s._dropContainer.isDragging()) ||
                      ((s._hasStartedDragging = !0),
                      s._ngZone.run(function() {
                        return s._startDragSequence(t);
                      })));
                }
              }),
              (this._pointerUp = function(t) {
                if (
                  s._dragDropRegistry.isDragging(s) &&
                  (s._removeSubscriptions(),
                  s._dragDropRegistry.stopDragging(s),
                  s._handles &&
                    (s._rootElement.style.webkitTapHighlightColor =
                      s._rootElementTapHighlight),
                  s._hasStartedDragging)
                ) {
                  if ((s.released.next({ source: s }), !s._dropContainer))
                    return (
                      (s._passiveTransform.x = s._activeTransform.x),
                      (s._passiveTransform.y = s._activeTransform.y),
                      s._ngZone.run(function() {
                        s.ended.next({
                          source: s,
                          distance: s._getDragDistance(
                            s._getPointerPositionOnPage(t)
                          )
                        });
                      }),
                      void s._dragDropRegistry.stopDragging(s)
                    );
                  s._animatePreviewToPlaceholder().then(function() {
                    s._cleanupDragArtifacts(t),
                      s._dragDropRegistry.stopDragging(s);
                  });
                }
              }),
              this.withRootElement(t),
              o.registerDragItem(this);
          }
          return (
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return (
                  this._disabled ||
                  !(!this._dropContainer || !this._dropContainer.disabled)
                );
              },
              set: function(t) {
                var e = Object(W.b)(t);
                e !== this._disabled &&
                  ((this._disabled = e), this._toggleNativeDragInteractions());
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getPlaceholderElement = function() {
              return this._placeholder;
            }),
            (t.prototype.getRootElement = function() {
              return this._rootElement;
            }),
            (t.prototype.withHandles = function(t) {
              return (
                (this._handles = t.map(function(t) {
                  return Object(W.d)(t);
                })),
                this._handles.forEach(function(t) {
                  return at(t, !1);
                }),
                this._toggleNativeDragInteractions(),
                this
              );
            }),
            (t.prototype.withPreviewTemplate = function(t) {
              return (this._previewTemplate = t), this;
            }),
            (t.prototype.withPlaceholderTemplate = function(t) {
              return (this._placeholderTemplate = t), this;
            }),
            (t.prototype.withRootElement = function(t) {
              var e = Object(W.d)(t);
              return (
                e !== this._rootElement &&
                  (this._rootElement &&
                    this._removeRootElementListeners(this._rootElement),
                  e.addEventListener('mousedown', this._pointerDown, dt),
                  e.addEventListener('touchstart', this._pointerDown, ut),
                  (this._initialTransform = void 0),
                  (this._rootElement = e)),
                this
              );
            }),
            (t.prototype.withBoundaryElement = function(t) {
              return (this._boundaryElement = t ? Object(W.d)(t) : null), this;
            }),
            (t.prototype.dispose = function() {
              this._removeRootElementListeners(this._rootElement),
                this.isDragging() && gt(this._rootElement),
                this._destroyPreview(),
                this._destroyPlaceholder(),
                this._dragDropRegistry.removeDragItem(this),
                this._removeSubscriptions(),
                this.beforeStarted.complete(),
                this.started.complete(),
                this.released.complete(),
                this.ended.complete(),
                this.entered.complete(),
                this.exited.complete(),
                this.dropped.complete(),
                this._moveEvents.complete(),
                (this._handles = []),
                this._disabledHandles.clear(),
                (this._dropContainer = void 0),
                (this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._nextSibling = null);
            }),
            (t.prototype.isDragging = function() {
              return (
                this._hasStartedDragging &&
                this._dragDropRegistry.isDragging(this)
              );
            }),
            (t.prototype.reset = function() {
              (this._rootElement.style.transform =
                this._initialTransform || ''),
                (this._activeTransform = { x: 0, y: 0 }),
                (this._passiveTransform = { x: 0, y: 0 });
            }),
            (t.prototype.disableHandle = function(t) {
              this._handles.indexOf(t) > -1 && this._disabledHandles.add(t);
            }),
            (t.prototype.enableHandle = function(t) {
              this._disabledHandles.delete(t);
            }),
            (t.prototype.withDirection = function(t) {
              return (this._direction = t), this;
            }),
            (t.prototype._withDropContainer = function(t) {
              this._dropContainer = t;
            }),
            (t.prototype.getFreeDragPosition = function() {
              return {
                x: this._passiveTransform.x,
                y: this._passiveTransform.y
              };
            }),
            (t.prototype.setFreeDragPosition = function(t) {
              return (
                (this._activeTransform = { x: 0, y: 0 }),
                (this._passiveTransform.x = t.x),
                (this._passiveTransform.y = t.y),
                this._dropContainer ||
                  this._applyRootElementTransform(t.x, t.y),
                this
              );
            }),
            (t.prototype._removeSubscriptions = function() {
              this._pointerMoveSubscription.unsubscribe(),
                this._pointerUpSubscription.unsubscribe();
            }),
            (t.prototype._destroyPreview = function() {
              this._preview && gt(this._preview),
                this._previewRef && this._previewRef.destroy(),
                (this._preview = this._previewRef = null);
            }),
            (t.prototype._destroyPlaceholder = function() {
              this._placeholder && gt(this._placeholder),
                this._placeholderRef && this._placeholderRef.destroy(),
                (this._placeholder = this._placeholderRef = null);
            }),
            (t.prototype._startDragSequence = function(t) {
              if (
                (this.started.next({ source: this }),
                mt(t) && (this._lastTouchEventTime = Date.now()),
                this._dropContainer)
              ) {
                var e = this._rootElement;
                this._nextSibling = e.nextSibling;
                var n = (this._preview = this._createPreviewElement()),
                  i = (this._placeholder = this._createPlaceholderElement());
                (e.style.display = 'none'),
                  this._document.body.appendChild(
                    e.parentNode.replaceChild(i, e)
                  ),
                  ((r = this._document),
                  r.fullscreenElement ||
                    r.webkitFullscreenElement ||
                    r.mozFullScreenElement ||
                    r.msFullscreenElement ||
                    r.body).appendChild(n),
                  this._dropContainer.start();
              }
              var r;
            }),
            (t.prototype._initializeDragSequence = function(t, e) {
              e.stopPropagation();
              var n = this.isDragging(),
                i = mt(e),
                r = !i && 0 !== e.button,
                o = this._rootElement,
                s =
                  !i &&
                  this._lastTouchEventTime &&
                  this._lastTouchEventTime + 800 > Date.now();
              if (
                (e.target &&
                  e.target.draggable &&
                  'mousedown' === e.type &&
                  e.preventDefault(),
                !(n || r || s))
              ) {
                this._handles.length &&
                  ((this._rootElementTapHighlight =
                    o.style.webkitTapHighlightColor),
                  (o.style.webkitTapHighlightColor = 'transparent')),
                  this._toggleNativeDragInteractions(),
                  (this._hasStartedDragging = this._hasMoved = !1),
                  (this._initialContainer = this._dropContainer),
                  this._removeSubscriptions(),
                  (this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(
                    this._pointerMove
                  )),
                  (this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(
                    this._pointerUp
                  )),
                  (this._scrollPosition = this._viewportRuler.getViewportScrollPosition()),
                  this._boundaryElement &&
                    (this._boundaryRect = this._boundaryElement.getBoundingClientRect()),
                  (this._pickupPositionInElement =
                    this._previewTemplate && this._previewTemplate.template
                      ? { x: 0, y: 0 }
                      : this._getPointerPositionInElement(t, e));
                var a = (this._pickupPositionOnPage = this._getPointerPositionOnPage(
                  e
                ));
                (this._pointerDirectionDelta = { x: 0, y: 0 }),
                  (this._pointerPositionAtLastDirectionChange = {
                    x: a.x,
                    y: a.y
                  }),
                  (this._dragStartTime = Date.now()),
                  this._dragDropRegistry.startDragging(this, e);
              }
            }),
            (t.prototype._cleanupDragArtifacts = function(t) {
              var e = this;
              (this._rootElement.style.display = ''),
                this._nextSibling
                  ? this._nextSibling.parentNode.insertBefore(
                      this._rootElement,
                      this._nextSibling
                    )
                  : Object(W.d)(this._initialContainer.element).appendChild(
                      this._rootElement
                    ),
                this._destroyPreview(),
                this._destroyPlaceholder(),
                (this._boundaryRect = this._previewRect = void 0),
                this._ngZone.run(function() {
                  var n = e._dropContainer,
                    i = n.getItemIndex(e),
                    r = e._getPointerPositionOnPage(t),
                    o = e._getDragDistance(e._getPointerPositionOnPage(t)),
                    s = n._isOverContainer(r.x, r.y);
                  e.ended.next({ source: e, distance: o }),
                    e.dropped.next({
                      item: e,
                      currentIndex: i,
                      previousIndex: e._initialContainer.getItemIndex(e),
                      container: n,
                      previousContainer: e._initialContainer,
                      isPointerOverContainer: s,
                      distance: o
                    }),
                    n.drop(e, i, e._initialContainer, s, o),
                    (e._dropContainer = e._initialContainer);
                });
            }),
            (t.prototype._updateActiveDropContainer = function(t) {
              var e = this,
                n = t.x,
                i = t.y,
                r = this._initialContainer._getSiblingContainerFromPosition(
                  this,
                  n,
                  i
                );
              !r &&
                this._dropContainer !== this._initialContainer &&
                this._initialContainer._isOverContainer(n, i) &&
                (r = this._initialContainer),
                r &&
                  r !== this._dropContainer &&
                  this._ngZone.run(function() {
                    e.exited.next({ item: e, container: e._dropContainer }),
                      e._dropContainer.exit(e),
                      (e._dropContainer = r),
                      e._dropContainer.enter(e, n, i),
                      e.entered.next({
                        item: e,
                        container: r,
                        currentIndex: r.getItemIndex(e)
                      });
                  }),
                this._dropContainer._sortItem(
                  this,
                  n,
                  i,
                  this._pointerDirectionDelta
                ),
                (this._preview.style.transform = ht(
                  n - this._pickupPositionInElement.x,
                  i - this._pickupPositionInElement.y
                ));
            }),
            (t.prototype._createPreviewElement = function() {
              var t,
                e = this._previewTemplate,
                n = e ? e.template : null;
              if (n) {
                var i = e.viewContainer.createEmbeddedView(n, e.context);
                (t = i.rootNodes[0]),
                  (this._previewRef = i),
                  (t.style.transform = ht(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y
                  ));
              } else {
                var r = this._rootElement,
                  o = r.getBoundingClientRect();
                ((t = ft(r)).style.width = o.width + 'px'),
                  (t.style.height = o.height + 'px'),
                  (t.style.transform = ht(o.left, o.top));
              }
              return (
                st(t.style, {
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  zIndex: '1000'
                }),
                at(t, !1),
                t.classList.add('cdk-drag-preview'),
                t.setAttribute('dir', this._direction),
                t
              );
            }),
            (t.prototype._animatePreviewToPlaceholder = function() {
              var t = this;
              if (!this._hasMoved) return Promise.resolve();
              var e = this._placeholder.getBoundingClientRect();
              this._preview.classList.add('cdk-drag-animating'),
                (this._preview.style.transform = ht(e.left, e.top));
              var n = (function(t) {
                var e = getComputedStyle(t),
                  n = ct(e, 'transition-property'),
                  i = n.find(function(t) {
                    return 'transform' === t || 'all' === t;
                  });
                if (!i) return 0;
                var r = n.indexOf(i),
                  o = ct(e, 'transition-duration'),
                  s = ct(e, 'transition-delay');
                return lt(o[r]) + lt(s[r]);
              })(this._preview);
              return 0 === n
                ? Promise.resolve()
                : this._ngZone.runOutsideAngular(function() {
                    return new Promise(function(e) {
                      var i = function(n) {
                          (!n ||
                            (n.target === t._preview &&
                              'transform' === n.propertyName)) &&
                            (t._preview.removeEventListener('transitionend', i),
                            e(),
                            clearTimeout(r));
                        },
                        r = setTimeout(i, 1.5 * n);
                      t._preview.addEventListener('transitionend', i);
                    });
                  });
            }),
            (t.prototype._createPlaceholderElement = function() {
              var t,
                e = this._placeholderTemplate,
                n = e ? e.template : null;
              return (
                n
                  ? ((this._placeholderRef = e.viewContainer.createEmbeddedView(
                      n,
                      e.context
                    )),
                    (t = this._placeholderRef.rootNodes[0]))
                  : (t = ft(this._rootElement)),
                t.classList.add('cdk-drag-placeholder'),
                t
              );
            }),
            (t.prototype._getPointerPositionInElement = function(t, e) {
              var n = this._rootElement.getBoundingClientRect(),
                i = t === this._rootElement ? null : t,
                r = i ? i.getBoundingClientRect() : n,
                o = mt(e) ? e.targetTouches[0] : e;
              return {
                x:
                  r.left -
                  n.left +
                  (o.pageX - r.left - this._scrollPosition.left),
                y: r.top - n.top + (o.pageY - r.top - this._scrollPosition.top)
              };
            }),
            (t.prototype._getPointerPositionOnPage = function(t) {
              var e = mt(t) ? t.touches[0] || t.changedTouches[0] : t;
              return {
                x: e.pageX - this._scrollPosition.left,
                y: e.pageY - this._scrollPosition.top
              };
            }),
            (t.prototype._getConstrainedPointerPosition = function(t) {
              var e = this._getPointerPositionOnPage(t),
                n = this.constrainPosition ? this.constrainPosition(e) : e,
                i = this._dropContainer ? this._dropContainer.lockAxis : null;
              if (
                ('x' === this.lockAxis || 'x' === i
                  ? (n.y = this._pickupPositionOnPage.y)
                  : ('y' !== this.lockAxis && 'y' !== i) ||
                    (n.x = this._pickupPositionOnPage.x),
                this._boundaryRect)
              ) {
                var r = this._pickupPositionInElement,
                  o = r.x,
                  s = r.y,
                  a = this._boundaryRect,
                  l = this._previewRect,
                  c = a.top + s,
                  u = a.bottom - (l.height - s);
                (n.x = bt(n.x, a.left + o, a.right - (l.width - o))),
                  (n.y = bt(n.y, c, u));
              }
              return n;
            }),
            (t.prototype._updatePointerDirectionDelta = function(t) {
              var e = t.x,
                n = t.y,
                i = this._pointerDirectionDelta,
                r = this._pointerPositionAtLastDirectionChange,
                o = Math.abs(e - r.x),
                s = Math.abs(n - r.y);
              return (
                o > this._config.pointerDirectionChangeThreshold &&
                  ((i.x = e > r.x ? 1 : -1), (r.x = e)),
                s > this._config.pointerDirectionChangeThreshold &&
                  ((i.y = n > r.y ? 1 : -1), (r.y = n)),
                i
              );
            }),
            (t.prototype._toggleNativeDragInteractions = function() {
              if (this._rootElement && this._handles) {
                var t = this.disabled || this._handles.length > 0;
                t !== this._nativeInteractionsEnabled &&
                  ((this._nativeInteractionsEnabled = t),
                  at(this._rootElement, t));
              }
            }),
            (t.prototype._removeRootElementListeners = function(t) {
              t.removeEventListener('mousedown', this._pointerDown, dt),
                t.removeEventListener('touchstart', this._pointerDown, ut);
            }),
            (t.prototype._applyRootElementTransform = function(t, e) {
              var n = ht(t, e);
              null == this._initialTransform &&
                (this._initialTransform =
                  this._rootElement.style.transform || ''),
                (this._rootElement.style.transform = this._initialTransform
                  ? n + ' ' + this._initialTransform
                  : n);
            }),
            (t.prototype._getDragDistance = function(t) {
              var e = this._pickupPositionOnPage;
              return e ? { x: t.x - e.x, y: t.y - e.y } : { x: 0, y: 0 };
            }),
            t
          );
        })();
      function ht(t, e) {
        return (
          'translate3d(' + Math.round(t) + 'px, ' + Math.round(e) + 'px, 0)'
        );
      }
      function ft(t) {
        var e = t.cloneNode(!0),
          n = e.querySelectorAll('[id]'),
          i = t.querySelectorAll('canvas');
        e.removeAttribute('id');
        for (var r = 0; r < n.length; r++) n[r].removeAttribute('id');
        if (i.length) {
          var o = e.querySelectorAll('canvas');
          for (r = 0; r < i.length; r++) {
            var s = o[r].getContext('2d');
            s && s.drawImage(i[r], 0, 0);
          }
        }
        return e;
      }
      function bt(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function gt(t) {
        t && t.parentNode && t.parentNode.removeChild(t);
      }
      function mt(t) {
        return t.type.startsWith('touch');
      }
      function _t(t, e, n) {
        var i = vt(e, t.length - 1),
          r = vt(n, t.length - 1);
        if (i !== r) {
          for (var o = t[i], s = r < i ? -1 : 1, a = i; a !== r; a += s)
            t[a] = t[a + s];
          t[r] = o;
        }
      }
      function vt(t, e) {
        return Math.max(0, Math.min(e, t));
      }
      var yt = 0,
        xt = (function() {
          function t(t, e, n) {
            (this._dragDropRegistry = e),
              (this.id = 'cdk-drop-list-ref-' + yt++),
              (this.disabled = !1),
              (this.sortingDisabled = !0),
              (this.enterPredicate = function() {
                return !0;
              }),
              (this.beforeStarted = new Q.a()),
              (this.entered = new Q.a()),
              (this.exited = new Q.a()),
              (this.dropped = new Q.a()),
              (this.sorted = new Q.a()),
              (this._isDragging = !1),
              (this._itemPositions = []),
              (this._previousSwap = { drag: null, delta: 0 }),
              (this._siblings = []),
              (this._orientation = 'vertical'),
              (this._activeSiblings = new Set()),
              (this._direction = 'ltr'),
              e.registerDropContainer(this),
              (this._document = n),
              (this.element = t instanceof i.k ? t.nativeElement : t);
          }
          return (
            (t.prototype.dispose = function() {
              this.beforeStarted.complete(),
                this.entered.complete(),
                this.exited.complete(),
                this.dropped.complete(),
                this.sorted.complete(),
                this._activeSiblings.clear(),
                this._dragDropRegistry.removeDropContainer(this);
            }),
            (t.prototype.isDragging = function() {
              return this._isDragging;
            }),
            (t.prototype.start = function() {
              var t = this;
              this.beforeStarted.next(),
                (this._isDragging = !0),
                this._cacheItems(),
                this._siblings.forEach(function(e) {
                  return e._startReceiving(t);
                });
            }),
            (t.prototype.enter = function(t, e, n) {
              this.start();
              var i = this.sortingDisabled ? this._draggables.indexOf(t) : -1;
              -1 === i && (i = this._getItemIndexFromPointerPosition(t, e, n));
              var r = this._activeDraggables,
                o = r.indexOf(t),
                s = t.getPlaceholderElement(),
                a = r[i];
              if (
                (a === t && (a = r[i + 1]),
                o > -1 && r.splice(o, 1),
                a && !this._dragDropRegistry.isDragging(a))
              ) {
                var l = a.getRootElement();
                l.parentElement.insertBefore(s, l), r.splice(i, 0, t);
              } else Object(W.d)(this.element).appendChild(s), r.push(t);
              (s.style.transform = ''),
                this._cacheItemPositions(),
                this.entered.next({
                  item: t,
                  container: this,
                  currentIndex: this.getItemIndex(t)
                });
            }),
            (t.prototype.exit = function(t) {
              this._reset(), this.exited.next({ item: t, container: this });
            }),
            (t.prototype.drop = function(t, e, n, i, r) {
              void 0 === r && (r = { x: 0, y: 0 }),
                this._reset(),
                this.dropped.next({
                  item: t,
                  currentIndex: e,
                  previousIndex: n.getItemIndex(t),
                  container: this,
                  previousContainer: n,
                  isPointerOverContainer: i,
                  distance: r
                });
            }),
            (t.prototype.withItems = function(t) {
              var e = this;
              return (
                (this._draggables = t),
                t.forEach(function(t) {
                  return t._withDropContainer(e);
                }),
                this.isDragging() && this._cacheItems(),
                this
              );
            }),
            (t.prototype.withDirection = function(t) {
              return (this._direction = t), this;
            }),
            (t.prototype.connectedTo = function(t) {
              return (this._siblings = t.slice()), this;
            }),
            (t.prototype.withOrientation = function(t) {
              return (this._orientation = t), this;
            }),
            (t.prototype.getItemIndex = function(t) {
              return this._isDragging
                ? Ct(
                    'horizontal' === this._orientation &&
                      'rtl' === this._direction
                      ? this._itemPositions.slice().reverse()
                      : this._itemPositions,
                    function(e) {
                      return e.drag === t;
                    }
                  )
                : this._draggables.indexOf(t);
            }),
            (t.prototype.isReceiving = function() {
              return this._activeSiblings.size > 0;
            }),
            (t.prototype._sortItem = function(t, e, n, i) {
              if (
                !this.sortingDisabled &&
                this._isPointerNearDropContainer(e, n)
              ) {
                var r = this._itemPositions,
                  o = this._getItemIndexFromPointerPosition(t, e, n, i);
                if (!(-1 === o && r.length > 0)) {
                  var s = 'horizontal' === this._orientation,
                    a = Ct(r, function(e) {
                      return e.drag === t;
                    }),
                    l = r[o],
                    c = r[a].clientRect,
                    u = l.clientRect,
                    d = a > o ? 1 : -1;
                  (this._previousSwap.drag = l.drag),
                    (this._previousSwap.delta = s ? i.x : i.y);
                  var p = this._getItemOffsetPx(c, u, d),
                    h = this._getSiblingOffsetPx(a, r, d),
                    f = r.slice();
                  _t(r, a, o),
                    this.sorted.next({
                      previousIndex: a,
                      currentIndex: o,
                      container: this,
                      item: t
                    }),
                    r.forEach(function(e, n) {
                      if (f[n] !== e) {
                        var i = e.drag === t,
                          r = i ? p : h,
                          o = i
                            ? t.getPlaceholderElement()
                            : e.drag.getRootElement();
                        (e.offset += r),
                          s
                            ? ((o.style.transform =
                                'translate3d(' +
                                Math.round(e.offset) +
                                'px, 0, 0)'),
                              Ot(e.clientRect, 0, r))
                            : ((o.style.transform =
                                'translate3d(0, ' +
                                Math.round(e.offset) +
                                'px, 0)'),
                              Ot(e.clientRect, r, 0));
                      }
                    });
                }
              }
            }),
            (t.prototype._cacheOwnPosition = function() {
              this._clientRect = Object(W.d)(
                this.element
              ).getBoundingClientRect();
            }),
            (t.prototype._cacheItemPositions = function() {
              var t = this,
                e = 'horizontal' === this._orientation;
              this._itemPositions = this._activeDraggables
                .map(function(e) {
                  var n = (t._dragDropRegistry.isDragging(e)
                    ? e.getPlaceholderElement()
                    : e.getRootElement()
                  ).getBoundingClientRect();
                  return {
                    drag: e,
                    offset: 0,
                    clientRect: {
                      top: n.top,
                      right: n.right,
                      bottom: n.bottom,
                      left: n.left,
                      width: n.width,
                      height: n.height
                    }
                  };
                })
                .sort(function(t, n) {
                  return e
                    ? t.clientRect.left - n.clientRect.left
                    : t.clientRect.top - n.clientRect.top;
                });
            }),
            (t.prototype._reset = function() {
              var t = this;
              (this._isDragging = !1),
                this._activeDraggables.forEach(function(t) {
                  return (t.getRootElement().style.transform = '');
                }),
                this._siblings.forEach(function(e) {
                  return e._stopReceiving(t);
                }),
                (this._activeDraggables = []),
                (this._itemPositions = []),
                (this._previousSwap.drag = null),
                (this._previousSwap.delta = 0);
            }),
            (t.prototype._getSiblingOffsetPx = function(t, e, n) {
              var i = 'horizontal' === this._orientation,
                r = e[t].clientRect,
                o = e[t + -1 * n],
                s = r[i ? 'width' : 'height'] * n;
              if (o) {
                var a = i ? 'left' : 'top',
                  l = i ? 'right' : 'bottom';
                -1 === n
                  ? (s -= o.clientRect[a] - r[l])
                  : (s += r[a] - o.clientRect[l]);
              }
              return s;
            }),
            (t.prototype._isPointerNearDropContainer = function(t, e) {
              var n = this._clientRect,
                i = 0.05 * n.width,
                r = 0.05 * n.height;
              return (
                e > n.top - r &&
                e < n.bottom + r &&
                t > n.left - i &&
                t < n.right + i
              );
            }),
            (t.prototype._getItemOffsetPx = function(t, e, n) {
              var i = 'horizontal' === this._orientation,
                r = i ? e.left - t.left : e.top - t.top;
              return (
                -1 === n && (r += i ? e.width - t.width : e.height - t.height),
                r
              );
            }),
            (t.prototype._getItemIndexFromPointerPosition = function(
              t,
              e,
              n,
              i
            ) {
              var r = this,
                o = 'horizontal' === this._orientation;
              return Ct(this._itemPositions, function(s, a, l) {
                var c = s.drag,
                  u = s.clientRect;
                return c === t
                  ? l.length < 2
                  : (!i ||
                      c !== r._previousSwap.drag ||
                      (o ? i.x : i.y) !== r._previousSwap.delta) &&
                      (o
                        ? e >= Math.floor(u.left) && e <= Math.floor(u.right)
                        : n >= Math.floor(u.top) && n <= Math.floor(u.bottom));
              });
            }),
            (t.prototype._cacheItems = function() {
              (this._activeDraggables = this._draggables.slice()),
                this._cacheItemPositions(),
                this._cacheOwnPosition();
            }),
            (t.prototype._isOverContainer = function(t, e) {
              return Dt(this._clientRect, t, e);
            }),
            (t.prototype._getSiblingContainerFromPosition = function(t, e, n) {
              return this._siblings.find(function(i) {
                return i._canReceive(t, e, n);
              });
            }),
            (t.prototype._canReceive = function(t, e, n) {
              if (!this.enterPredicate(t, this) || !Dt(this._clientRect, e, n))
                return !1;
              var i = this._document.elementFromPoint(e, n);
              if (!i) return !1;
              var r = Object(W.d)(this.element);
              return i === r || r.contains(i);
            }),
            (t.prototype._startReceiving = function(t) {
              var e = this._activeSiblings;
              e.has(t) || (e.add(t), this._cacheOwnPosition());
            }),
            (t.prototype._stopReceiving = function(t) {
              this._activeSiblings.delete(t);
            }),
            t
          );
        })();
      function Ot(t, e, n) {
        (t.top += e),
          (t.bottom = t.top + t.height),
          (t.left += n),
          (t.right = t.left + t.width);
      }
      function Ct(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }
      function Dt(t, e, n) {
        return n >= t.top && n <= t.bottom && e >= t.left && e <= t.right;
      }
      var wt = Object(b.f)({ passive: !1, capture: !0 }),
        kt = (function() {
          function t(t, e) {
            var n = this;
            (this._ngZone = t),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = new Set()),
              (this._globalListeners = new Map()),
              (this.pointerMove = new Q.a()),
              (this.pointerUp = new Q.a()),
              (this._preventDefaultWhileDragging = function(t) {
                n._activeDragInstances.size && t.preventDefault();
              }),
              (this._document = e);
          }
          return (
            (t.prototype.registerDropContainer = function(t) {
              if (!this._dropInstances.has(t)) {
                if (this.getDropContainer(t.id))
                  throw Error(
                    'Drop instance with id "' +
                      t.id +
                      '" has already been registered.'
                  );
                this._dropInstances.add(t);
              }
            }),
            (t.prototype.registerDragItem = function(t) {
              var e = this;
              this._dragInstances.add(t),
                1 === this._dragInstances.size &&
                  this._ngZone.runOutsideAngular(function() {
                    e._document.addEventListener(
                      'touchmove',
                      e._preventDefaultWhileDragging,
                      wt
                    );
                  });
            }),
            (t.prototype.removeDropContainer = function(t) {
              this._dropInstances.delete(t);
            }),
            (t.prototype.removeDragItem = function(t) {
              this._dragInstances.delete(t),
                this.stopDragging(t),
                0 === this._dragInstances.size &&
                  this._document.removeEventListener(
                    'touchmove',
                    this._preventDefaultWhileDragging,
                    wt
                  );
            }),
            (t.prototype.startDragging = function(t, e) {
              var n = this;
              if (
                !this._activeDragInstances.has(t) &&
                (this._activeDragInstances.add(t),
                1 === this._activeDragInstances.size)
              ) {
                var i = e.type.startsWith('touch'),
                  r = i ? 'touchend' : 'mouseup';
                this._globalListeners
                  .set(i ? 'touchmove' : 'mousemove', {
                    handler: function(t) {
                      return n.pointerMove.next(t);
                    },
                    options: wt
                  })
                  .set(r, {
                    handler: function(t) {
                      return n.pointerUp.next(t);
                    },
                    options: !0
                  })
                  .set('selectstart', {
                    handler: this._preventDefaultWhileDragging,
                    options: wt
                  }),
                  i ||
                    this._globalListeners.set('wheel', {
                      handler: this._preventDefaultWhileDragging,
                      options: wt
                    }),
                  this._ngZone.runOutsideAngular(function() {
                    n._globalListeners.forEach(function(t, e) {
                      n._document.addEventListener(e, t.handler, t.options);
                    });
                  });
              }
            }),
            (t.prototype.stopDragging = function(t) {
              this._activeDragInstances.delete(t),
                0 === this._activeDragInstances.size &&
                  this._clearGlobalListeners();
            }),
            (t.prototype.isDragging = function(t) {
              return this._activeDragInstances.has(t);
            }),
            (t.prototype.getDropContainer = function(t) {
              return Array.from(this._dropInstances).find(function(e) {
                return e.id === t;
              });
            }),
            (t.prototype.ngOnDestroy = function() {
              var t = this;
              this._dragInstances.forEach(function(e) {
                return t.removeDragItem(e);
              }),
                this._dropInstances.forEach(function(e) {
                  return t.removeDropContainer(e);
                }),
                this._clearGlobalListeners(),
                this.pointerMove.complete(),
                this.pointerUp.complete();
            }),
            (t.prototype._clearGlobalListeners = function() {
              var t = this;
              this._globalListeners.forEach(function(e, n) {
                t._document.removeEventListener(n, e.handler, e.options);
              }),
                this._globalListeners.clear();
            }),
            (t.ngInjectableDef = Object(i.Nb)({
              factory: function() {
                return new t(Object(i.Rb)(i.A), Object(i.Rb)(_.d));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Rt = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 },
        Pt = (function() {
          function t(t, e, n, i) {
            (this._document = t),
              (this._ngZone = e),
              (this._viewportRuler = n),
              (this._dragDropRegistry = i);
          }
          return (
            (t.prototype.createDrag = function(t, e) {
              return (
                void 0 === e && (e = Rt),
                new pt(
                  t,
                  e,
                  this._document,
                  this._ngZone,
                  this._viewportRuler,
                  this._dragDropRegistry
                )
              );
            }),
            (t.prototype.createDropList = function(t) {
              return new xt(t, this._dragDropRegistry, this._document);
            }),
            (t.ngInjectableDef = Object(i.Nb)({
              factory: function() {
                return new t(
                  Object(i.Rb)(_.d),
                  Object(i.Rb)(i.A),
                  Object(i.Rb)(k.e),
                  Object(i.Rb)(kt)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        jt = new i.q('CDK_DROP_LIST'),
        At = new i.q('CDK_DRAG_PARENT'),
        Et = new i.q('CDK_DRAG_CONFIG', {
          providedIn: 'root',
          factory: function() {
            return {
              dragStartThreshold: 5,
              pointerDirectionChangeThreshold: 5
            };
          }
        }),
        It = (function() {
          function t(t, e, n, r, o, s, a, l, c) {
            var u = this;
            (this.element = t),
              (this.dropContainer = e),
              (this._document = n),
              (this._ngZone = r),
              (this._viewContainerRef = o),
              (this._dir = a),
              (this._changeDetectorRef = c),
              (this._destroyed = new Q.a()),
              (this.dragStartDelay = 0),
              (this._disabled = !1),
              (this.started = new i.m()),
              (this.released = new i.m()),
              (this.ended = new i.m()),
              (this.entered = new i.m()),
              (this.exited = new i.m()),
              (this.dropped = new i.m()),
              (this.moved = new Z.a(function(t) {
                var e = u._dragRef.moved
                  .pipe(
                    Object(tt.a)(function(t) {
                      return {
                        source: u,
                        pointerPosition: t.pointerPosition,
                        event: t.event,
                        delta: t.delta,
                        distance: t.distance
                      };
                    })
                  )
                  .subscribe(t);
                return function() {
                  e.unsubscribe();
                };
              })),
              (this._dragRef = l.createDrag(t, s)),
              (this._dragRef.data = this),
              this._syncInputs(this._dragRef),
              this._handleEvents(this._dragRef);
          }
          return (
            Object.defineProperty(t.prototype, 'boundaryElementSelector', {
              get: function() {
                return 'string' == typeof this.boundaryElement
                  ? this.boundaryElement
                  : void 0;
              },
              set: function(t) {
                this.boundaryElement = t;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return (
                  this._disabled ||
                  (this.dropContainer && this.dropContainer.disabled)
                );
              },
              set: function(t) {
                (this._disabled = Object(W.b)(t)),
                  (this._dragRef.disabled = this._disabled);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getPlaceholderElement = function() {
              return this._dragRef.getPlaceholderElement();
            }),
            (t.prototype.getRootElement = function() {
              return this._dragRef.getRootElement();
            }),
            (t.prototype.reset = function() {
              this._dragRef.reset();
            }),
            (t.prototype.getFreeDragPosition = function() {
              return this._dragRef.getFreeDragPosition();
            }),
            (t.prototype.ngAfterViewInit = function() {
              var t = this;
              this._ngZone.onStable
                .asObservable()
                .pipe(
                  Object(et.a)(1),
                  Object(nt.a)(this._destroyed)
                )
                .subscribe(function() {
                  t._updateRootElement(),
                    t._handles.changes
                      .pipe(
                        Object(it.a)(t._handles),
                        Object(rt.a)(function(e) {
                          var n = e
                            .filter(function(e) {
                              return e._parentDrag === t;
                            })
                            .map(function(t) {
                              return t.element;
                            });
                          t._dragRef.withHandles(n);
                        }),
                        Object(ot.a)(function(t) {
                          return X.a.apply(
                            void 0,
                            t.map(function(t) {
                              return t._stateChanges;
                            })
                          );
                        }),
                        Object(nt.a)(t._destroyed)
                      )
                      .subscribe(function(e) {
                        var n = t._dragRef,
                          i = e.element.nativeElement;
                        e.disabled ? n.disableHandle(i) : n.enableHandle(i);
                      }),
                    t.freeDragPosition &&
                      t._dragRef.setFreeDragPosition(t.freeDragPosition);
                });
            }),
            (t.prototype.ngOnChanges = function(t) {
              var e = t.rootElementSelector,
                n = t.freeDragPosition;
              e && !e.firstChange && this._updateRootElement(),
                n &&
                  !n.firstChange &&
                  this.freeDragPosition &&
                  this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }),
            (t.prototype.ngOnDestroy = function() {
              this._destroyed.next(),
                this._destroyed.complete(),
                this._dragRef.dispose();
            }),
            (t.prototype._updateRootElement = function() {
              var t = this.element.nativeElement,
                e = this.rootElementSelector
                  ? St(t, this.rootElementSelector)
                  : t;
              if (e && e.nodeType !== this._document.ELEMENT_NODE)
                throw Error(
                  'cdkDrag must be attached to an element node. Currently attached to "' +
                    e.nodeName +
                    '".'
                );
              this._dragRef.withRootElement(e || t);
            }),
            (t.prototype._getBoundaryElement = function() {
              var t = this.boundaryElement;
              if (!t) return null;
              if ('string' == typeof t)
                return St(this.element.nativeElement, t);
              var e = Object(W.d)(t);
              if (Object(i.Y)() && !e.contains(this.element.nativeElement))
                throw Error(
                  'Draggable element is not inside of the node passed into cdkDragBoundary.'
                );
              return e;
            }),
            (t.prototype._syncInputs = function(t) {
              var e = this;
              t.beforeStarted.subscribe(function() {
                if (!t.isDragging()) {
                  var n = e._dir,
                    i = e._placeholderTemplate
                      ? {
                          template: e._placeholderTemplate.templateRef,
                          context: e._placeholderTemplate.data,
                          viewContainer: e._viewContainerRef
                        }
                      : null,
                    r = e._previewTemplate
                      ? {
                          template: e._previewTemplate.templateRef,
                          context: e._previewTemplate.data,
                          viewContainer: e._viewContainerRef
                        }
                      : null;
                  (t.disabled = e.disabled),
                    (t.lockAxis = e.lockAxis),
                    (t.dragStartDelay = Object(W.e)(e.dragStartDelay)),
                    (t.constrainPosition = e.constrainPosition),
                    t
                      .withBoundaryElement(e._getBoundaryElement())
                      .withPlaceholderTemplate(i)
                      .withPreviewTemplate(r),
                    n && t.withDirection(n.value);
                }
              });
            }),
            (t.prototype._handleEvents = function(t) {
              var e = this;
              t.started.subscribe(function() {
                e.started.emit({ source: e }),
                  e._changeDetectorRef.markForCheck();
              }),
                t.released.subscribe(function() {
                  e.released.emit({ source: e });
                }),
                t.ended.subscribe(function(t) {
                  e.ended.emit({ source: e, distance: t.distance }),
                    e._changeDetectorRef.markForCheck();
                }),
                t.entered.subscribe(function(t) {
                  e.entered.emit({
                    container: t.container.data,
                    item: e,
                    currentIndex: t.currentIndex
                  });
                }),
                t.exited.subscribe(function(t) {
                  e.exited.emit({ container: t.container.data, item: e });
                }),
                t.dropped.subscribe(function(t) {
                  e.dropped.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    previousContainer: t.previousContainer.data,
                    container: t.container.data,
                    isPointerOverContainer: t.isPointerOverContainer,
                    item: e,
                    distance: t.distance
                  });
                });
            }),
            t
          );
        })();
      function St(t, e) {
        for (var n = t.parentElement; n; ) {
          if (n.matches ? n.matches(e) : n.msMatchesSelector(e)) return n;
          n = n.parentElement;
        }
        return null;
      }
      var Tt = (function() {
          function t() {
            (this._items = new Set()), (this._disabled = !1);
          }
          return (
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return this._disabled;
              },
              set: function(t) {
                this._disabled = Object(W.b)(t);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.ngOnDestroy = function() {
              this._items.clear();
            }),
            t
          );
        })(),
        Lt = 0,
        Mt = (function() {
          function t(e, n, r, o, s) {
            var a = this;
            (this.element = e),
              (this._changeDetectorRef = r),
              (this._dir = o),
              (this._group = s),
              (this._destroyed = new Q.a()),
              (this.connectedTo = []),
              (this.orientation = 'vertical'),
              (this.id = 'cdk-drop-list-' + Lt++),
              (this._disabled = !1),
              (this._sortingDisabled = !1),
              (this.enterPredicate = function() {
                return !0;
              }),
              (this.dropped = new i.m()),
              (this.entered = new i.m()),
              (this.exited = new i.m()),
              (this.sorted = new i.m()),
              (this._dropListRef = n.createDropList(e)),
              (this._dropListRef.data = this),
              (this._dropListRef.enterPredicate = function(t, e) {
                return a.enterPredicate(t.data, e.data);
              }),
              this._syncInputs(this._dropListRef),
              this._handleEvents(this._dropListRef),
              t._dropLists.push(this),
              s && s._items.add(this);
          }
          return (
            Object.defineProperty(t.prototype, 'disabled', {
              get: function() {
                return (
                  this._disabled || (!!this._group && this._group.disabled)
                );
              },
              set: function(t) {
                this._disabled = Object(W.b)(t);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'sortingDisabled', {
              get: function() {
                return this._sortingDisabled;
              },
              set: function(t) {
                this._sortingDisabled = Object(W.b)(t);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.ngAfterContentInit = function() {
              var t = this;
              this._draggables.changes
                .pipe(
                  Object(it.a)(this._draggables),
                  Object(nt.a)(this._destroyed)
                )
                .subscribe(function(e) {
                  t._dropListRef.withItems(
                    e.map(function(t) {
                      return t._dragRef;
                    })
                  );
                });
            }),
            (t.prototype.ngOnDestroy = function() {
              var e = t._dropLists.indexOf(this);
              e > -1 && t._dropLists.splice(e, 1),
                this._group && this._group._items.delete(this),
                this._dropListRef.dispose(),
                this._destroyed.next(),
                this._destroyed.complete();
            }),
            (t.prototype.start = function() {
              this._dropListRef.start();
            }),
            (t.prototype.drop = function(t, e, n, i) {
              this._dropListRef.drop(t._dragRef, e, n._dropListRef, i);
            }),
            (t.prototype.enter = function(t, e, n) {
              this._dropListRef.enter(t._dragRef, e, n);
            }),
            (t.prototype.exit = function(t) {
              this._dropListRef.exit(t._dragRef);
            }),
            (t.prototype.getItemIndex = function(t) {
              return this._dropListRef.getItemIndex(t._dragRef);
            }),
            (t.prototype._sortItem = function(t, e, n, i) {
              return this._dropListRef._sortItem(t._dragRef, e, n, i);
            }),
            (t.prototype._getSiblingContainerFromPosition = function(t, e, n) {
              var i = this._dropListRef._getSiblingContainerFromPosition(
                t._dragRef,
                e,
                n
              );
              return i ? i.data : null;
            }),
            (t.prototype._isOverContainer = function(t, e) {
              return this._dropListRef._isOverContainer(t, e);
            }),
            (t.prototype._syncInputs = function(e) {
              var n = this;
              this._dir &&
                this._dir.change
                  .pipe(
                    Object(it.a)(this._dir.value),
                    Object(nt.a)(this._destroyed)
                  )
                  .subscribe(function(t) {
                    return e.withDirection(t);
                  }),
                e.beforeStarted.subscribe(function() {
                  var i = Object(W.a)(n.connectedTo).map(function(e) {
                    return 'string' == typeof e
                      ? t._dropLists.find(function(t) {
                          return t.id === e;
                        })
                      : e;
                  });
                  n._group &&
                    n._group._items.forEach(function(t) {
                      -1 === i.indexOf(t) && i.push(t);
                    }),
                    (e.disabled = n.disabled),
                    (e.lockAxis = n.lockAxis),
                    (e.sortingDisabled = n.sortingDisabled),
                    e
                      .connectedTo(
                        i
                          .filter(function(t) {
                            return t && t !== n;
                          })
                          .map(function(t) {
                            return t._dropListRef;
                          })
                      )
                      .withOrientation(n.orientation);
                });
            }),
            (t.prototype._handleEvents = function(t) {
              var e = this;
              t.beforeStarted.subscribe(function() {
                e._changeDetectorRef.markForCheck();
              }),
                t.entered.subscribe(function(t) {
                  e.entered.emit({
                    container: e,
                    item: t.item.data,
                    currentIndex: t.currentIndex
                  });
                }),
                t.exited.subscribe(function(t) {
                  e.exited.emit({ container: e, item: t.item.data }),
                    e._changeDetectorRef.markForCheck();
                }),
                t.sorted.subscribe(function(t) {
                  e.sorted.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    container: e,
                    item: t.item.data
                  });
                }),
                t.dropped.subscribe(function(t) {
                  e.dropped.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    previousContainer: t.previousContainer.data,
                    container: t.container.data,
                    item: t.item.data,
                    isPointerOverContainer: t.isPointerOverContainer,
                    distance: t.distance
                  }),
                    e._changeDetectorRef.markForCheck();
                });
            }),
            (t._dropLists = []),
            t
          );
        })(),
        Ft = (function() {
          return function() {};
        })(),
        Nt = (function() {
          function t() {
            this.columnConfig = n('qN5x');
          }
          return (
            (t.prototype.ngOnInit = function() {}),
            (t.prototype.onDrop = function(t) {
              var e, n, i, r, o;
              t.previousContainer === t.container
                ? _t(t.container.data, t.previousIndex, t.currentIndex)
                : ((n = t.container.data),
                  (i = t.currentIndex),
                  (r = vt(
                    t.previousIndex,
                    (e = t.previousContainer.data).length - 1
                  )),
                  (o = vt(i, n.length)),
                  e.length && n.splice(o, 0, e.splice(r, 1)[0]));
            }),
            (t.prototype.saveColunConfig = function() {
              console.log(this.columnConfig);
            }),
            t
          );
        })(),
        zt = i.qb({
          encapsulation: 0,
          styles: [
            [
              '.wrapper[_ngcontent-%COMP%]{margin:25px auto;max-width:600px;text-align:center;padding:0 20px}.container[_ngcontent-%COMP%]{width:45%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.movie-list[_ngcontent-%COMP%]{width:80%;border:1px solid #ccc;min-height:60px;display:inline-block;background:#fff;border-radius:4px;overflow:hidden;margin-top:25px}.movie-block[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.movie-block[_ngcontent-%COMP%]:last-child{border:none}.movie-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .movie-block[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}'
            ]
          ],
          data: {}
        });
      function Bt(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              16777216,
              null,
              null,
              6,
              'div',
              [['cdkDrag', ''], ['class', 'movie-block cdk-drag']],
              [[2, 'cdk-drag-disabled', null], [2, 'cdk-drag-dragging', null]],
              null,
              null,
              null,
              null
            )),
            i.Gb(6144, null, At, null, [It]),
            i.rb(
              2,
              4866048,
              [[1, 4]],
              3,
              It,
              [i.k, [3, jt], _.d, i.A, i.Q, Et, [2, C.b], Pt, i.h],
              null,
              null
            ),
            i.Hb(603979776, 2, { _handles: 1 }),
            i.Hb(603979776, 3, { _previewTemplate: 0 }),
            i.Hb(603979776, 4, { _placeholderTemplate: 0 }),
            (t()(), i.Jb(6, null, ['', ''])),
            (t()(), i.hb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, i.Cb(e, 2).disabled, i.Cb(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function Ht(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              16777216,
              null,
              null,
              6,
              'div',
              [['cdkDrag', ''], ['class', 'movie-block cdk-drag']],
              [[2, 'cdk-drag-disabled', null], [2, 'cdk-drag-dragging', null]],
              null,
              null,
              null,
              null
            )),
            i.Gb(6144, null, At, null, [It]),
            i.rb(
              2,
              4866048,
              [[5, 4]],
              3,
              It,
              [i.k, [3, jt], _.d, i.A, i.Q, Et, [2, C.b], Pt, i.h],
              null,
              null
            ),
            i.Hb(603979776, 6, { _handles: 1 }),
            i.Hb(603979776, 7, { _previewTemplate: 0 }),
            i.Hb(603979776, 8, { _placeholderTemplate: 0 }),
            (t()(), i.Jb(6, null, ['', ''])),
            (t()(), i.hb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, i.Cb(e, 2).disabled, i.Cb(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function qt(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              16777216,
              null,
              null,
              6,
              'div',
              [['cdkDrag', ''], ['class', 'movie-block cdk-drag']],
              [[2, 'cdk-drag-disabled', null], [2, 'cdk-drag-dragging', null]],
              null,
              null,
              null,
              null
            )),
            i.Gb(6144, null, At, null, [It]),
            i.rb(
              2,
              4866048,
              [[9, 4]],
              3,
              It,
              [i.k, [3, jt], _.d, i.A, i.Q, Et, [2, C.b], Pt, i.h],
              null,
              null
            ),
            i.Hb(603979776, 10, { _handles: 1 }),
            i.Hb(603979776, 11, { _previewTemplate: 0 }),
            i.Hb(603979776, 12, { _placeholderTemplate: 0 }),
            (t()(), i.Jb(6, null, ['', ''])),
            (t()(), i.hb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, i.Cb(e, 2).disabled, i.Cb(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function Ut(t) {
        return i.Lb(
          2,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(1, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), i.Jb(-1, null, ['columns'])),
            (t()(),
            i.sb(
              3,
              0,
              null,
              null,
              7,
              'div',
              [['cdkDropList', ''], ['class', 'movie-list cdk-drop-list']],
              [
                [8, 'id', 0],
                [2, 'cdk-drop-list-disabled', null],
                [2, 'cdk-drop-list-dragging', null],
                [2, 'cdk-drop-list-receiving', null]
              ],
              [[null, 'cdkDropListDropped']],
              function(t, e, n) {
                var i = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (i = !1 !== t.component.onDrop(n) && i),
                  i
                );
              },
              null,
              null
            )),
            i.Gb(6144, null, jt, null, [Mt]),
            i.rb(
              5,
              1196032,
              [['columns', 4]],
              1,
              Mt,
              [i.k, Pt, i.h, [2, C.b], [3, Tt]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            i.Hb(603979776, 1, { _draggables: 1 }),
            i.Db(7, 2),
            i.Gb(256, null, Tt, void 0, []),
            (t()(), i.hb(16777216, null, null, 1, null, Bt)),
            i.rb(
              10,
              278528,
              null,
              0,
              _.j,
              [i.Q, i.N, i.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            i.sb(
              11,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(12, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), i.Jb(-1, null, ['xaxis'])),
            (t()(),
            i.sb(
              14,
              0,
              null,
              null,
              7,
              'div',
              [['cdkDropList', ''], ['class', 'movie-list cdk-drop-list']],
              [
                [8, 'id', 0],
                [2, 'cdk-drop-list-disabled', null],
                [2, 'cdk-drop-list-dragging', null],
                [2, 'cdk-drop-list-receiving', null]
              ],
              [[null, 'cdkDropListDropped']],
              function(t, e, n) {
                var i = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (i = !1 !== t.component.onDrop(n) && i),
                  i
                );
              },
              null,
              null
            )),
            i.Gb(6144, null, jt, null, [Mt]),
            i.rb(
              16,
              1196032,
              [['xaxisRef', 4]],
              1,
              Mt,
              [i.k, Pt, i.h, [2, C.b], [3, Tt]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            i.Hb(603979776, 5, { _draggables: 1 }),
            i.Db(18, 1),
            i.Gb(256, null, Tt, void 0, []),
            (t()(), i.hb(16777216, null, null, 1, null, Ht)),
            i.rb(
              21,
              278528,
              null,
              0,
              _.j,
              [i.Q, i.N, i.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            i.sb(
              22,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.sb(23, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), i.Jb(-1, null, ['yaxis'])),
            (t()(),
            i.sb(
              25,
              0,
              null,
              null,
              7,
              'div',
              [['cdkDropList', ''], ['class', 'movie-list cdk-drop-list']],
              [
                [8, 'id', 0],
                [2, 'cdk-drop-list-disabled', null],
                [2, 'cdk-drop-list-dragging', null],
                [2, 'cdk-drop-list-receiving', null]
              ],
              [[null, 'cdkDropListDropped']],
              function(t, e, n) {
                var i = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (i = !1 !== t.component.onDrop(n) && i),
                  i
                );
              },
              null,
              null
            )),
            i.Gb(6144, null, jt, null, [Mt]),
            i.rb(
              27,
              1196032,
              [['yaxisRef', 4]],
              1,
              Mt,
              [i.k, Pt, i.h, [2, C.b], [3, Tt]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            i.Hb(603979776, 9, { _draggables: 1 }),
            i.Db(29, 1),
            i.Gb(256, null, Tt, void 0, []),
            (t()(), i.hb(16777216, null, null, 1, null, qt)),
            i.rb(
              32,
              278528,
              null,
              0,
              _.j,
              [i.Q, i.N, i.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            i.sb(
              33,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(t, e, n) {
                var i = !0;
                return (
                  'click' === e &&
                    (i = !1 !== t.component.saveColunConfig() && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(), i.Jb(-1, null, ['save']))
          ],
          function(t, e) {
            var n = e.component,
              r = t(e, 7, 0, i.Cb(e, 16), i.Cb(e, 27));
            t(e, 5, 0, r, n.columnConfig.columns),
              t(e, 10, 0, n.columnConfig.columns);
            var o = t(e, 18, 0, i.Cb(e, 5));
            t(e, 16, 0, o, n.columnConfig.xaxis),
              t(e, 21, 0, n.columnConfig.xaxis);
            var s = t(e, 29, 0, i.Cb(e, 5));
            t(e, 27, 0, s, n.columnConfig.yaxis),
              t(e, 32, 0, n.columnConfig.yaxis);
          },
          function(t, e) {
            t(
              e,
              3,
              0,
              i.Cb(e, 5).id,
              i.Cb(e, 5).disabled,
              i.Cb(e, 5)._dropListRef.isDragging(),
              i.Cb(e, 5)._dropListRef.isReceiving()
            ),
              t(
                e,
                14,
                0,
                i.Cb(e, 16).id,
                i.Cb(e, 16).disabled,
                i.Cb(e, 16)._dropListRef.isDragging(),
                i.Cb(e, 16)._dropListRef.isReceiving()
              ),
              t(
                e,
                25,
                0,
                i.Cb(e, 27).id,
                i.Cb(e, 27).disabled,
                i.Cb(e, 27)._dropListRef.isDragging(),
                i.Cb(e, 27)._dropListRef.isReceiving()
              );
          }
        );
      }
      function Gt(t) {
        return i.Lb(
          0,
          [
            (t()(),
            i.sb(
              0,
              0,
              null,
              null,
              1,
              'anms-column-config',
              [],
              null,
              null,
              null,
              Ut,
              zt
            )),
            i.rb(1, 114688, null, 0, Nt, [], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Yt = i.ob('anms-column-config', Nt, Gt, {}, {}, []),
        $t = n('eXL1'),
        Jt = n('5kg2'),
        Kt = n('SECt'),
        Wt = n('s8WJ'),
        Qt = n('O0P8'),
        Vt = n('D57K'),
        Zt = n('fN3Q'),
        Xt = [
          {
            id: Object(Zt.v4)(),
            username: 'rockets',
            name: 'Elon',
            surname: 'Musk'
          },
          {
            id: Object(Zt.v4)(),
            username: 'investing',
            name: 'Nassim',
            surname: 'Taleb'
          },
          {
            id: Object(Zt.v4)(),
            username: 'philosophy',
            name: 'Yuval',
            surname: 'Harari'
          }
        ],
        te = (function() {
          function t(t) {
            (this.modelFactory = t),
              (this.model = this.modelFactory.create(Xt.slice())),
              (this.users$ = this.model.data$);
          }
          return (
            (t.prototype.addUser = function(t) {
              var e = this.model.get();
              e.push(Vt.a({}, t, { id: Object(Zt.v4)() })), this.model.set(e);
            }),
            (t.prototype.updateUser = function(t) {
              var e = this.model.get(),
                n = e.findIndex(function(e) {
                  return e.id === t.id;
                });
              (e[n] = t), this.model.set(e);
            }),
            (t.prototype.removeUser = function(t) {
              var e = this.model.get(),
                n = e.findIndex(function(e) {
                  return e.id === t;
                });
              e.splice(n, 1), this.model.set(e);
            }),
            t
          );
        })(),
        ee = n('LiEJ'),
        ne = n('AqJ0'),
        ie = (function() {
          function t(t, e, n, i) {
            (this._data = new ee.a(t)),
              (this.data$ = this._data.asObservable().pipe(
                Object(tt.a)(function(t) {
                  return e ? (i ? i(t) : JSON.parse(JSON.stringify(t))) : t;
                }),
                n
                  ? Object(ne.a)(1)
                  : Object(tt.a)(function(t) {
                      return t;
                    })
              ));
          }
          return (
            (t.prototype.get = function() {
              return this._data.getValue();
            }),
            (t.prototype.set = function(t) {
              this._data.next(t);
            }),
            t
          );
        })(),
        re = (function() {
          function t() {}
          return (
            (t.prototype.create = function(t) {
              return new ie(t, !0, !1);
            }),
            (t.prototype.createMutable = function(t) {
              return new ie(t, !1, !1);
            }),
            (t.prototype.createMutableWithSharedSubscription = function(t) {
              return new ie(t, !1, !0);
            }),
            (t.prototype.createWithCustomClone = function(t, e) {
              return new ie(t, !0, !1, e);
            }),
            (t.ngInjectableDef = Object(i.Nb)({
              factory: function() {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        oe = n('XIB+'),
        se = (function() {
          return function() {};
        })(),
        ae = n('GcYS'),
        le = n('/hyk'),
        ce = n('+3V+'),
        ue = n('dgjn'),
        de = n('QIIz'),
        pe = n('a198'),
        he = n('V3Ng'),
        fe = n('z1EI'),
        be = n('8xy9'),
        ge = n('e8uv'),
        me = n('rXXt'),
        _e = n('8raB'),
        ve = n('euho'),
        ye = n('FOLC'),
        xe = n('qXP9'),
        Oe = n('PCNd'),
        Ce = { title: 'File Upload' },
        De = { title: 'Config' },
        we = (function() {
          return function() {};
        })(),
        ke = Object(S.v)('[Todos] Add', function(t, e) {
          return void 0 === e && (e = Object(Zt.v4)()), { name: t, id: e };
        }),
        Re = Object(S.v)('[Todos] Toggle', Object(S.B)()),
        Pe = Object(S.v)('[Todos] Remove Done'),
        je = Object(S.v)('[Todos] Filter', Object(S.B)()),
        Ae = {
          items: [
            { id: Object(Zt.v4)(), name: 'Open Todo list example', done: !0 },
            { id: Object(Zt.v4)(), name: 'Check the other examples', done: !1 },
            {
              id: Object(Zt.v4)(),
              name: 'Use Angular ngRx Material Starter in your project',
              done: !1
            }
          ],
          filter: 'ALL'
        },
        Ee = Object(S.x)(
          Ae,
          Object(S.A)(ke, function(t, e) {
            return Vt.a({}, t, {
              items: [{ id: e.id, name: e.name, done: !1 }].concat(t.items)
            });
          }),
          Object(S.A)(Re, function(t, e) {
            return Vt.a({}, t, {
              items: t.items.map(function(t) {
                return t.id === e.id ? Vt.a({}, t, { done: !t.done }) : t;
              })
            });
          }),
          Object(S.A)(Pe, function(t, e) {
            return Vt.a({}, t, {
              items: t.items.filter(function(t) {
                return !t.done;
              })
            });
          }),
          Object(S.A)(je, function(t, e) {
            return Vt.a({}, t, { filter: e.filter });
          })
        );
      function Ie(t, e) {
        return Ee(t, e);
      }
      var Se = Object(S.v)('[Stock] Retrieve', Object(S.B)()),
        Te = Object(S.v)('[Stock] Retrieve Success', Object(S.B)()),
        Le = Object(S.v)('[Stock] Retrieve Error', Object(S.B)()),
        Me = Object(S.x)(
          { symbol: 'GOOGL', loading: !1 },
          Object(S.A)(Se, function(t, e) {
            return Vt.a({}, t, {
              loading: !0,
              stock: null,
              error: null,
              symbol: e.symbol
            });
          }),
          Object(S.A)(Te, function(t, e) {
            return Vt.a({}, t, { loading: !1, stock: e.stock, error: null });
          }),
          Object(S.A)(Le, function(t, e) {
            return Vt.a({}, t, { loading: !1, stock: null, error: e.error });
          })
        );
      function Fe(t, e) {
        return Me(t, e);
      }
      var Ne = (function(t) {
        return (
          (t[(t.EntitiesOnly = 0)] = 'EntitiesOnly'),
          (t[(t.Both = 1)] = 'Both'),
          (t[(t.None = 2)] = 'None'),
          t
        );
      })({});
      function ze(t) {
        return function(e, n) {
          var i = {
              ids: Object(Vt.g)(n.ids),
              entities: Object(Vt.a)({}, n.entities)
            },
            r = t(e, i);
          return r === Ne.Both
            ? Object.assign({}, n, i)
            : r === Ne.EntitiesOnly
            ? Object(Vt.a)({}, n, { entities: i.entities })
            : n;
        };
      }
      function Be(t, e) {
        var n = e(t);
        return (
          Object(i.Y)() &&
            void 0 === n &&
            console.warn(
              '@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.',
              'You should probably provide your own `selectId` implementation.',
              'The entity that was passed:',
              t,
              'The `selectId` implementation:',
              e.toString()
            ),
          n
        );
      }
      function He(t) {
        function e(e, n) {
          var i = Be(e, t);
          return i in n.entities
            ? Ne.None
            : (n.ids.push(i), (n.entities[i] = e), Ne.Both);
        }
        function n(t, n) {
          var i,
            r,
            o = !1;
          try {
            for (var s = Object(Vt.h)(t), a = s.next(); !a.done; a = s.next())
              o = e(a.value, n) !== Ne.None || o;
          } catch (l) {
            i = { error: l };
          } finally {
            try {
              a && !a.done && (r = s.return) && r.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return o ? Ne.Both : Ne.None;
        }
        function i(t, e) {
          var n =
            (t instanceof Array
              ? t
              : e.ids.filter(function(n) {
                  return t(e.entities[n]);
                })
            )
              .filter(function(t) {
                return t in e.entities;
              })
              .map(function(t) {
                return delete e.entities[t];
              }).length > 0;
          return (
            n &&
              (e.ids = e.ids.filter(function(t) {
                return t in e.entities;
              })),
            n ? Ne.Both : Ne.None
          );
        }
        function r(e, n) {
          var i = {};
          return (e = e.filter(function(t) {
            return t.id in n.entities;
          })).length > 0
            ? e.filter(function(e) {
                return (function(e, n, i) {
                  var r = Object.assign({}, i.entities[n.id], n.changes),
                    o = Be(r, t),
                    s = o !== n.id;
                  return (
                    s && ((e[n.id] = o), delete i.entities[n.id]),
                    (i.entities[o] = r),
                    s
                  );
                })(i, e, n);
              }).length > 0
              ? ((n.ids = n.ids.map(function(t) {
                  return i[t] || t;
                })),
                Ne.Both)
              : Ne.EntitiesOnly
            : Ne.None;
        }
        function o(e, i) {
          var o,
            s,
            a = [],
            l = [];
          try {
            for (var c = Object(Vt.h)(e), u = c.next(); !u.done; u = c.next()) {
              var d = u.value,
                p = Be(d, t);
              p in i.entities ? l.push({ id: p, changes: d }) : a.push(d);
            }
          } catch (b) {
            o = { error: b };
          } finally {
            try {
              u && !u.done && (s = c.return) && s.call(c);
            } finally {
              if (o) throw o.error;
            }
          }
          var h = r(l, i),
            f = n(a, i);
          switch (!0) {
            case f === Ne.None && h === Ne.None:
              return Ne.None;
            case f === Ne.Both || h === Ne.Both:
              return Ne.Both;
            default:
              return Ne.EntitiesOnly;
          }
        }
        return {
          removeAll: function(t) {
            return Object.assign({}, t, { ids: [], entities: {} });
          },
          addOne: ze(e),
          addMany: ze(n),
          addAll: ze(function(t, e) {
            return (e.ids = []), (e.entities = {}), n(t, e), Ne.Both;
          }),
          updateOne: ze(function(t, e) {
            return r([t], e);
          }),
          updateMany: ze(r),
          upsertOne: ze(function(t, e) {
            return o([t], e);
          }),
          upsertMany: ze(o),
          removeOne: ze(function(t, e) {
            return i([t], e);
          }),
          removeMany: ze(i),
          map: ze(function(t, e) {
            return r(
              e.ids
                .reduce(function(n, i) {
                  var r = t(e.entities[i]);
                  return (
                    r !== e.entities[i] && n.push({ id: i, changes: r }), n
                  );
                }, [])
                .filter(function(t) {
                  return t.id in e.entities;
                }),
              e
            );
          })
        };
      }
      var qe = Object(S.v)('[Books] Upsert One', Object(S.B)()),
        Ue = Object(S.v)('[Books] Delete One', Object(S.B)()),
        Ge = (function(t) {
          void 0 === t && (t = {});
          var e = Object(Vt.a)(
              {
                sortComparer: !1,
                selectId: function(t) {
                  return t.id;
                }
              },
              t
            ),
            n = e.selectId,
            i = e.sortComparer,
            r = {
              getInitialState: function(t) {
                return (
                  void 0 === t && (t = {}),
                  Object.assign({ ids: [], entities: {} }, t)
                );
              }
            },
            o = {
              getSelectors: function(t) {
                var e = function(t) {
                    return t.ids;
                  },
                  n = function(t) {
                    return t.entities;
                  },
                  i = Object(S.z)(e, n, function(t, e) {
                    return t.map(function(t) {
                      return e[t];
                    });
                  }),
                  r = Object(S.z)(e, function(t) {
                    return t.length;
                  });
                return t
                  ? {
                      selectIds: Object(S.z)(t, e),
                      selectEntities: Object(S.z)(t, n),
                      selectAll: Object(S.z)(t, i),
                      selectTotal: Object(S.z)(t, r)
                    }
                  : {
                      selectIds: e,
                      selectEntities: n,
                      selectAll: i,
                      selectTotal: r
                    };
              }
            },
            s = i
              ? (function(t, e) {
                  var n = He(t);
                  function i(e, n) {
                    var i = e.filter(function(e) {
                      return !(Be(e, t) in n.entities);
                    });
                    return 0 === i.length ? Ne.None : (s(i, n), Ne.Both);
                  }
                  function r(e, n) {
                    var i = [],
                      r =
                        e.filter(function(e) {
                          return (function(e, n, i) {
                            if (!(n.id in i.entities)) return !1;
                            var r = Object.assign(
                                {},
                                i.entities[n.id],
                                n.changes
                              ),
                              o = Be(r, t);
                            return (
                              delete i.entities[n.id], e.push(r), o !== n.id
                            );
                          })(i, e, n);
                        }).length > 0;
                    if (0 === i.length) return Ne.None;
                    var o = n.ids,
                      a = [];
                    return (
                      (n.ids = n.ids.filter(function(t, e) {
                        return t in n.entities || (a.push(e), !1);
                      })),
                      s(i, n),
                      !r &&
                      a.every(function(t) {
                        return n.ids[t] === o[t];
                      })
                        ? Ne.EntitiesOnly
                        : Ne.Both
                    );
                  }
                  function o(e, n) {
                    var o,
                      s,
                      a = [],
                      l = [];
                    try {
                      for (
                        var c = Object(Vt.h)(e), u = c.next();
                        !u.done;
                        u = c.next()
                      ) {
                        var d = u.value,
                          p = Be(d, t);
                        p in n.entities
                          ? l.push({ id: p, changes: d })
                          : a.push(d);
                      }
                    } catch (b) {
                      o = { error: b };
                    } finally {
                      try {
                        u && !u.done && (s = c.return) && s.call(c);
                      } finally {
                        if (o) throw o.error;
                      }
                    }
                    var h = r(l, n),
                      f = i(a, n);
                    switch (!0) {
                      case f === Ne.None && h === Ne.None:
                        return Ne.None;
                      case f === Ne.Both || h === Ne.Both:
                        return Ne.Both;
                      default:
                        return Ne.EntitiesOnly;
                    }
                  }
                  function s(n, i) {
                    n.sort(e);
                    for (
                      var r = [], o = 0, s = 0;
                      o < n.length && s < i.ids.length;

                    ) {
                      var a = n[o],
                        l = Be(a, t),
                        c = i.ids[s];
                      e(a, i.entities[c]) <= 0
                        ? (r.push(l), o++)
                        : (r.push(c), s++);
                    }
                    (i.ids = r.concat(
                      o < n.length ? n.slice(o).map(t) : i.ids.slice(s)
                    )),
                      n.forEach(function(e, n) {
                        i.entities[t(e)] = e;
                      });
                  }
                  return {
                    removeOne: n.removeOne,
                    removeMany: n.removeMany,
                    removeAll: n.removeAll,
                    addOne: ze(function(t, e) {
                      return i([t], e);
                    }),
                    updateOne: ze(function(t, e) {
                      return r([t], e);
                    }),
                    upsertOne: ze(function(t, e) {
                      return o([t], e);
                    }),
                    addAll: ze(function(t, e) {
                      return (e.entities = {}), (e.ids = []), i(t, e), Ne.Both;
                    }),
                    addMany: ze(i),
                    updateMany: ze(r),
                    upsertMany: ze(o),
                    map: ze(function(t, e) {
                      return r(
                        e.ids.reduce(function(n, i) {
                          var r = t(e.entities[i]);
                          return (
                            r !== e.entities[i] &&
                              n.push({ id: i, changes: r }),
                            n
                          );
                        }, []),
                        e
                      );
                    })
                  };
                })(n, i)
              : He(n);
          return Object(Vt.a)({ selectId: n, sortComparer: i }, r, o, s);
        })({
          sortComparer: function(t, e) {
            return t.title.localeCompare(e.title);
          }
        }),
        Ye = Ge.getInitialState({
          ids: ['123'],
          entities: {
            123: {
              id: '123',
              title: 'Reactive Programming with Angular and ngrx',
              author: 'Oren Farhi',
              description:
                'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
            }
          }
        }),
        $e = Object(S.x)(
          Ye,
          Object(S.A)(qe, function(t, e) {
            return Ge.upsertOne(e.book, t);
          }),
          Object(S.A)(Ue, function(t, e) {
            return Ge.removeOne(e.id, t);
          })
        );
      function Je(t, e) {
        return $e(t, e);
      }
      var Ke = Object(S.v)('[Form] Update', Object(S.B)()),
        We = Object(S.v)('[Form] Reset'),
        Qe = { form: {} },
        Ve = Object(S.x)(
          Qe,
          Object(S.A)(Ke, function(t, e) {
            return Vt.a({}, t, { form: e.form });
          }),
          Object(S.A)(We, function() {
            return Qe;
          })
        );
      function Ze(t, e) {
        return Ve(t, e);
      }
      var Xe = n('D3xR'),
        tn = n('lqvn'),
        en = n('z5yO'),
        nn = n('BnVf'),
        rn = (function() {
          return function(t, e, n, i, r) {
            var o = this;
            (this.actions$ = t),
              (this.store = e),
              (this.translateService = n),
              (this.router = i),
              (this.titleService = r),
              (this.setTranslateServiceLanguage = Object(Xe.c)(
                function() {
                  return function() {
                    return o.store.pipe(
                      Object(S.C)(T.i),
                      Object(tn.a)(),
                      Object(rt.a)(function(t) {
                        return o.translateService.use(t);
                      })
                    );
                  };
                },
                { dispatch: !1 }
              )),
              (this.setTitle = Object(Xe.c)(
                function() {
                  return Object(X.a)(
                    o.actions$.pipe(Object(Xe.d)(nn.f)),
                    o.router.events.pipe(
                      Object(en.a)(function(t) {
                        return t instanceof v.b;
                      })
                    )
                  ).pipe(
                    Object(rt.a)(function() {
                      o.titleService.setTitle(
                        o.router.routerState.snapshot.root,
                        o.translateService
                      );
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        on = n('WRUs'),
        sn = n('eb+u'),
        an = Object(S.w)('examples'),
        ln = Object(S.z)(an, function(t) {
          return t.todos;
        }),
        cn = Object(S.z)(ln, function(t) {
          return t.items;
        }),
        un = Object(S.z)(ln, function(t) {
          return t.filter;
        }),
        dn =
          (Object(S.z)(cn, un, function(t, e) {
            return 'ALL' === e
              ? t
              : t.filter(
                  'DONE' === e
                    ? function(t) {
                        return t.done;
                      }
                    : function(t) {
                        return !t.done;
                      }
                );
          }),
          Object(S.z)(cn, function(t) {
            return !t.some(function(t) {
              return t.done;
            });
          }),
          'EXAMPLES.TODOS'),
        pn = (function() {
          return function(t, e, n) {
            var i = this;
            (this.actions$ = t),
              (this.store = e),
              (this.localStorageService = n),
              (this.persistTodos = Object(Xe.c)(
                function() {
                  return i.actions$.pipe(
                    Object(Xe.d)(ke, je, Pe, Re),
                    Object(sn.a)(i.store.pipe(Object(S.C)(ln))),
                    Object(rt.a)(function(t) {
                      return i.localStorageService.setItem(dn, t[1]);
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        hn = n('EP1h'),
        fn = n('pN2L'),
        bn = (function() {
          function t() {}
          return (
            (t.prototype.retrieveStock = function(t) {
              var e = this.buildResult(t);
              return Object(fn.a)(e);
            }),
            (t.prototype.buildResult = function(t) {
              return {
                symbol: t,
                exchange: 'Nasdaq',
                last: '124',
                ccy: 'USD',
                change: '1',
                changePositive: !0,
                changeNegative: !1,
                changePercent: '0.81'
              };
            }),
            t
          );
        })(),
        gn = n('R+ki'),
        mn = n('IMYO'),
        _n = (function() {
          return function(t, e, n) {
            var i = this;
            (this.actions$ = t),
              (this.localStorageService = e),
              (this.service = n),
              (this.retrieveStock = Object(Xe.c)(function() {
                return function(t) {
                  var e = (void 0 === t ? {} : t).debounce,
                    n = void 0 === e ? 500 : e;
                  return i.actions$.pipe(
                    Object(Xe.d)(Se),
                    Object(rt.a)(function(t) {
                      return i.localStorageService.setItem('EXAMPLES.STOCKS', {
                        symbol: t.symbol
                      });
                    }),
                    Object(gn.a)(n),
                    Object(ot.a)(function(t) {
                      return i.service.retrieveStock(t.symbol).pipe(
                        Object(tt.a)(function(t) {
                          return Te({ stock: t });
                        }),
                        Object(mn.a)(function(t) {
                          return Object(fn.a)(Le({ error: t }));
                        })
                      );
                    })
                  );
                };
              }));
          };
        })(),
        vn = Ge.getSelectors(),
        yn = vn.selectEntities,
        xn = vn.selectAll,
        On = Object(S.z)(an, function(t) {
          return t.books;
        }),
        Cn = (Object(S.z)(On, xn), Object(S.z)(On, yn)),
        Dn =
          (Object(S.z)(Cn, T.h, function(t, e) {
            return e && t[e.state.params.id];
          }),
          'EXAMPLES.BOOKS'),
        wn = (function() {
          return function(t, e, n) {
            var i = this;
            (this.actions$ = t),
              (this.store = e),
              (this.localStorageService = n),
              (this.persistBooks = Object(Xe.c)(
                function() {
                  return i.actions$.pipe(
                    Object(Xe.d)(qe, Ue),
                    Object(sn.a)(i.store.pipe(Object(S.C)(On))),
                    Object(rt.a)(function(t) {
                      return i.localStorageService.setItem(Dn, t[1]);
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        kn = (function() {
          return function(t, e) {
            var n = this;
            (this.actions$ = t),
              (this.localStorageService = e),
              (this.persistForm = Object(Xe.c)(
                function() {
                  return n.actions$.pipe(
                    Object(Xe.d)(Ke),
                    Object(rt.a)(function(t) {
                      return n.localStorageService.setItem('EXAMPLES.FORM', {
                        form: t.form
                      });
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        Rn = n('rh80');
      n.d(e, 'ExamplesModuleNgFactory', function() {
        return Pn;
      });
      var Pn = i.pb(a, [], function(t) {
        return i.zb([
          i.Ab(512, i.j, i.cb, [
            [8, [l.a, c.a, c.b, u.a, d.b, d.a, p.a, H, K, Yt]],
            [3, i.j],
            i.y
          ]),
          i.Ab(4608, Pt, Pt, [_.d, i.A, k.e, kt]),
          i.Ab(4608, _.m, _.l, [i.v, [2, _.y]]),
          i.Ab(4608, I.n, I.n, []),
          i.Ab(4608, $t.c, $t.c, [
            $t.i,
            $t.e,
            i.j,
            $t.h,
            $t.f,
            i.r,
            i.A,
            _.d,
            C.b,
            [2, _.g]
          ]),
          i.Ab(5120, $t.j, $t.k, [$t.c]),
          i.Ab(4608, O.c, O.c, []),
          i.Ab(5120, A.a, A.b, [$t.c]),
          i.Ab(4608, g.b, g.b, []),
          i.Ab(5120, Jt.c, Jt.j, [$t.c]),
          i.Ab(5120, Kt.b, Kt.c, [$t.c]),
          i.Ab(4608, D.e, g.c, [[2, g.g], [2, g.l]]),
          i.Ab(4608, I.b, I.b, []),
          i.Ab(5120, Wt.b, Wt.c, [$t.c]),
          i.Ab(135680, Wt.d, Wt.d, [
            $t.c,
            i.r,
            [2, _.g],
            [2, Wt.a],
            Wt.b,
            [3, Wt.d],
            $t.e
          ]),
          i.Ab(4608, Qt.h, Qt.h, []),
          i.Ab(5120, Qt.a, Qt.b, [$t.c]),
          i.Ab(4608, g.a, g.v, [[2, g.f], b.a]),
          i.Ab(4608, te, te, [re]),
          i.Ab(1073742336, C.a, C.a, []),
          i.Ab(1073742336, g.l, g.l, [[2, g.d], [2, D.f]]),
          i.Ab(1073742336, oe.d, oe.d, []),
          i.Ab(1073742336, Ft, Ft, []),
          i.Ab(1073742336, _.c, _.c, []),
          i.Ab(1073742336, se, se, []),
          i.Ab(1073742336, I.m, I.m, []),
          i.Ab(1073742336, I.d, I.d, []),
          i.Ab(1073742336, y.g, y.g, []),
          i.Ab(1073742336, b.b, b.b, []),
          i.Ab(1073742336, g.u, g.u, []),
          i.Ab(1073742336, ae.c, ae.c, []),
          i.Ab(1073742336, le.b, le.b, []),
          i.Ab(1073742336, w.g, w.g, []),
          i.Ab(1073742336, k.c, k.c, []),
          i.Ab(1073742336, $t.g, $t.g, []),
          i.Ab(1073742336, g.s, g.s, []),
          i.Ab(1073742336, g.q, g.q, []),
          i.Ab(1073742336, O.d, O.d, []),
          i.Ab(1073742336, E.d, E.d, []),
          i.Ab(1073742336, A.d, A.d, []),
          i.Ab(1073742336, m.a, m.a, []),
          i.Ab(1073742336, f.k, f.k, []),
          i.Ab(1073742336, ce.b, ce.b, []),
          i.Ab(1073742336, ue.a, ue.a, []),
          i.Ab(1073742336, de.a, de.a, []),
          i.Ab(1073742336, pe.b, pe.b, []),
          i.Ab(1073742336, he.h, he.h, []),
          i.Ab(1073742336, fe.b, fe.b, []),
          i.Ab(1073742336, fe.a, fe.a, []),
          i.Ab(1073742336, g.m, g.m, []),
          i.Ab(1073742336, be.a, be.a, []),
          i.Ab(1073742336, ge.c, ge.c, []),
          i.Ab(1073742336, Jt.i, Jt.i, []),
          i.Ab(1073742336, Jt.f, Jt.f, []),
          i.Ab(1073742336, me.c, me.c, []),
          i.Ab(1073742336, Kt.e, Kt.e, []),
          i.Ab(1073742336, _e.e, _e.e, []),
          i.Ab(1073742336, ve.c, ve.c, []),
          i.Ab(1073742336, ye.f, ye.f, []),
          i.Ab(1073742336, I.k, I.k, []),
          i.Ab(1073742336, xe.a, xe.a, []),
          i.Ab(1073742336, Wt.g, Wt.g, []),
          i.Ab(1073742336, Qt.i, Qt.i, []),
          i.Ab(1073742336, g.w, g.w, []),
          i.Ab(1073742336, g.n, g.n, []),
          i.Ab(1073742336, Oe.a, Oe.a, []),
          i.Ab(1073742336, v.t, v.t, [[2, v.z], [2, v.p]]),
          i.Ab(1073742336, we, we, []),
          i.Ab(
            1024,
            S.I,
            function() {
              return [{}];
            },
            []
          ),
          i.Ab(
            1024,
            S.k,
            function() {
              return [
                {
                  key: 'examples',
                  reducerFactory: S.t,
                  metaReducers: [],
                  initialState: void 0
                }
              ];
            },
            []
          ),
          i.Ab(1024, S.J, S.P, [i.r, S.I, S.k]),
          i.Ab(
            1024,
            S.H,
            function() {
              return [{ todos: Ie, stocks: Fe, books: Je, form: Ze }];
            },
            []
          ),
          i.Ab(
            1024,
            S.K,
            function(t) {
              return [t];
            },
            [S.H]
          ),
          i.Ab(
            1024,
            S.b,
            function(t, e, n) {
              return [S.Q(t, e, n)];
            },
            [i.r, S.H, S.K]
          ),
          i.Ab(1073873408, S.p, S.p, [S.J, S.b, S.h, S.q]),
          i.Ab(1024, y.f, s, [q.c]),
          i.Ab(512, y.c, y.e, []),
          i.Ab(512, y.h, y.d, []),
          i.Ab(512, y.b, y.a, []),
          i.Ab(256, y.l, void 0, []),
          i.Ab(256, y.m, !0, []),
          i.Ab(512, y.j, y.j, [y.k, y.f, y.c, y.h, y.b, y.l, y.m]),
          i.Ab(512, rn, rn, [Xe.a, S.o, y.j, v.p, on.a]),
          i.Ab(512, pn, pn, [Xe.a, S.o, hn.a]),
          i.Ab(512, bn, bn, []),
          i.Ab(512, _n, _n, [Xe.a, hn.a, bn]),
          i.Ab(512, wn, wn, [Xe.a, S.o, hn.a]),
          i.Ab(512, kn, kn, [Xe.a, hn.a]),
          i.Ab(
            1024,
            Xe.i,
            function(t, e, n, i, r) {
              return [Xe.e(t, e, n, i, r)];
            },
            [rn, pn, _n, wn, kn]
          ),
          i.Ab(1073742336, Xe.g, Xe.g, [Xe.f, Xe.i, [2, S.q], [2, S.p]]),
          i.Ab(1073742336, a, a, []),
          i.Ab(256, pe.a, { separatorKeyCodes: [Rn.f] }, []),
          i.Ab(256, g.e, g.i, []),
          i.Ab(
            1024,
            v.n,
            function() {
              return [
                [
                  {
                    path: '',
                    component: L,
                    children: [
                      {
                        path: '',
                        redirectTo: 'file-upload',
                        pathMatch: 'full'
                      },
                      { path: 'file-upload', component: G, data: Ce },
                      { path: 'config', component: Nt, data: De }
                    ]
                  }
                ]
              ];
            },
            []
          )
        ]);
      });
    },
    IC1n: function(t, e, n) {
      var i = n('fjNU'),
        r = n('X/SR');
      t.exports = function(t, e, n) {
        var o = (e && n) || 0;
        'string' == typeof t &&
          ((e = 'binary' === t ? new Array(16) : null), (t = null));
        var s = (t = t || {}).random || (t.rng || i)();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), e))
          for (var a = 0; a < 16; ++a) e[o + a] = s[a];
        return e || r(s);
      };
    },
    'X/SR': function(t, e) {
      for (var n = [], i = 0; i < 256; ++i)
        n[i] = (i + 256).toString(16).substr(1);
      t.exports = function(t, e) {
        var i = e || 0;
        return [
          n[t[i++]],
          n[t[i++]],
          n[t[i++]],
          n[t[i++]],
          '-',
          n[t[i++]],
          n[t[i++]],
          '-',
          n[t[i++]],
          n[t[i++]],
          '-',
          n[t[i++]],
          n[t[i++]],
          '-',
          n[t[i++]],
          n[t[i++]],
          n[t[i++]],
          n[t[i++]],
          n[t[i++]],
          n[t[i++]]
        ].join('');
      };
    },
    'YF1/': function(t, e, n) {
      var i,
        r,
        o = n('fjNU'),
        s = n('X/SR'),
        a = 0,
        l = 0;
      t.exports = function(t, e, n) {
        var c = (e && n) || 0,
          u = e || [],
          d = (t = t || {}).node || i,
          p = void 0 !== t.clockseq ? t.clockseq : r;
        if (null == d || null == p) {
          var h = o();
          null == d && (d = i = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == p && (p = r = 16383 & ((h[6] << 8) | h[7]));
        }
        var f = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
          b = void 0 !== t.nsecs ? t.nsecs : l + 1,
          g = f - a + (b - l) / 1e4;
        if (
          (g < 0 && void 0 === t.clockseq && (p = (p + 1) & 16383),
          (g < 0 || f > a) && void 0 === t.nsecs && (b = 0),
          b >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (a = f), (l = b), (r = p);
        var m = (1e4 * (268435455 & (f += 122192928e5)) + b) % 4294967296;
        (u[c++] = (m >>> 24) & 255),
          (u[c++] = (m >>> 16) & 255),
          (u[c++] = (m >>> 8) & 255),
          (u[c++] = 255 & m);
        var _ = ((f / 4294967296) * 1e4) & 268435455;
        (u[c++] = (_ >>> 8) & 255),
          (u[c++] = 255 & _),
          (u[c++] = ((_ >>> 24) & 15) | 16),
          (u[c++] = (_ >>> 16) & 255),
          (u[c++] = (p >>> 8) | 128),
          (u[c++] = 255 & p);
        for (var v = 0; v < 6; ++v) u[c + v] = d[v];
        return e || s(u);
      };
    },
    fN3Q: function(t, e, n) {
      var i = n('YF1/'),
        r = n('IC1n'),
        o = r;
      (o.v1 = i), (o.v4 = r), (t.exports = o);
    },
    fjNU: function(t, e) {
      var n =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var i = new Uint8Array(16);
        t.exports = function() {
          return n(i), i;
        };
      } else {
        var r = new Array(16);
        t.exports = function() {
          for (var t, e = 0; e < 16; e++)
            0 == (3 & e) && (t = 4294967296 * Math.random()),
              (r[e] = (t >>> ((3 & e) << 3)) & 255);
          return r;
        };
      }
    },
    qN5x: function(t) {
      t.exports = {
        columns: [
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten'
        ],
        xaxis: [],
        yaxis: []
      };
    }
  }
]);
