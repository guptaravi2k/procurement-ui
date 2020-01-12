(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '8iGT': function(t, e, i) {
      'use strict';
      i.r(e);
      var n = i('kZht'),
        s = i('cgGC'),
        r = i('AytR');
      function o(t) {
        return new s.a(t, `${r.a.i18nPrefix}/assets/i18n/examples/`, '.json');
      }
      class a {
        constructor() {}
      }
      var l = i('pLqg'),
        c = i('tjWy'),
        d = i('7tlY'),
        h = i('UUMc'),
        u = i('C9Ky'),
        p = i('0aut'),
        b = i('Lv2H'),
        g = i('4rR8'),
        m = i('ApNh'),
        _ = i('owzC'),
        f = i('An66'),
        v = i('1VvW'),
        y = i('aDqW'),
        x = i('QH8h'),
        O = i('OcC5'),
        D = i('pOQZ'),
        w = i('ENSU'),
        k = i('DiCn'),
        P = (i('FxgA'), i('tBgR')),
        j = n.ob({
          encapsulation: 2,
          styles: [
            '.mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}'
          ],
          data: {}
        });
      function C(t) {
        return n.Jb(
          2,
          [
            n.Fb(402653184, 1, { _inkBar: 0 }),
            (t()(),
            n.qb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'mat-tab-links']],
              null,
              [[null, 'cdkObserveContent']],
              function(t, e, i) {
                var n = !0;
                return (
                  'cdkObserveContent' === e &&
                    (n = !1 !== t.component._alignInkBar() && n),
                  n
                );
              },
              null,
              null
            )),
            n.pb(2, 1196032, null, 0, O.a, [O.b, n.k, n.y], null, {
              event: 'cdkObserveContent'
            }),
            n.zb(null, 0),
            (t()(),
            n.qb(
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
            n.pb(5, 16384, [[1, 4]], 0, b.b, [n.k, n.y, b.l], null, null)
          ],
          null,
          null
        );
      }
      var E = i('rW4h'),
        R = i('5ohT'),
        I = i('qBwE'),
        S = i('3kIJ'),
        A = i('ofez'),
        T = i('pKmL');
      class L {
        constructor(t) {
          (this.store = t),
            (this.examples = [
              { link: 'file-upload', label: 'File Upload' },
              { link: 'config', label: 'Config' }
            ]);
        }
        ngOnInit() {
          this.isAuthenticated$ = this.store.pipe(Object(A.C)(T.g));
        }
      }
      var F = n.ob({
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
                  expr: p.b,
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
                { type: 1, expr: p.d, animation: [], options: null },
                {
                  type: 1,
                  expr: p.e,
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
                  expr: p.c,
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
      function M(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
              function(t, e, i) {
                var s = !0;
                return (
                  'click' === e &&
                    (s =
                      !1 !==
                        n
                          .Ab(t, 3)
                          .onClick(
                            i.button,
                            i.ctrlKey,
                            i.metaKey,
                            i.shiftKey
                          ) && s),
                  s
                );
              },
              null,
              null
            )),
            n.pb(
              1,
              147456,
              [[1, 4]],
              0,
              b.i,
              [b.j, n.k, n.y, g.a, [2, m.k], [8, null], _.h],
              { disabled: [0, 'disabled'], active: [1, 'active'] },
              null
            ),
            n.Cb(131072, f.b, [n.h]),
            n.pb(
              3,
              671744,
              [[3, 4]],
              0,
              v.s,
              [v.p, v.a, f.h],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            n.pb(
              4,
              1720320,
              [['rla', 4]],
              2,
              v.r,
              [v.p, n.k, n.D, [2, v.q], [2, v.s]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            n.Fb(603979776, 2, { links: 1 }),
            n.Fb(603979776, 3, { linksWithHrefs: 1 }),
            (t()(), n.Hb(7, null, [' ', ' '])),
            n.Cb(131072, y.i, [y.j, n.h])
          ],
          function(t, e) {
            var i = e.component;
            t(
              e,
              1,
              0,
              e.context.$implicit.auth &&
                !n.Ib(e, 1, 0, n.Ab(e, 2).transform(i.isAuthenticated$)),
              n.Ab(e, 4).isActive
            ),
              t(e, 3, 0, e.context.$implicit.link),
              t(e, 4, 0, '');
          },
          function(t, e) {
            t(
              e,
              0,
              0,
              n.Ab(e, 1).active,
              n.Ab(e, 1).disabled.toString(),
              n.Ab(e, 1).tabIndex,
              n.Ab(e, 1).disabled,
              n.Ab(e, 1).active,
              n.Ab(e, 3).target,
              n.Ab(e, 3).href
            ),
              t(
                e,
                7,
                0,
                n.Ib(e, 7, 0, n.Ab(e, 8).transform(e.context.$implicit.label))
              );
          }
        );
      }
      function q(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
              function(t, e, i) {
                var s = !0;
                return (
                  'click' === e &&
                    (s = !1 !== n.Ab(t, 1)._selectViaInteraction() && s),
                  'keydown' === e &&
                    (s = !1 !== n.Ab(t, 1)._handleKeydown(i) && s),
                  'click' === e && (s = !1 !== n.Ab(t, 3).onClick() && s),
                  s
                );
              },
              x.c,
              x.a
            )),
            n.pb(
              1,
              8568832,
              [[4, 4]],
              0,
              m.p,
              [n.k, n.h, [2, m.j], [2, m.o]],
              { value: [0, 'value'], disabled: [1, 'disabled'] },
              null
            ),
            n.Cb(131072, f.b, [n.h]),
            n.pb(
              3,
              16384,
              null,
              0,
              v.q,
              [v.p, v.a, [8, null], n.D, n.k],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            (t()(), n.Hb(4, 0, [' ', ' '])),
            n.Cb(131072, y.i, [y.j, n.h])
          ],
          function(t, e) {
            var i = e.component;
            t(
              e,
              1,
              0,
              e.context.$implicit,
              e.context.$implicit.auth &&
                !n.Ib(e, 1, 1, n.Ab(e, 2).transform(i.isAuthenticated$))
            ),
              t(e, 3, 0, e.context.$implicit.link);
          },
          function(t, e) {
            t(
              e,
              0,
              0,
              n.Ab(e, 1)._getTabIndex(),
              n.Ab(e, 1).selected,
              n.Ab(e, 1).multiple,
              n.Ab(e, 1).active,
              n.Ab(e, 1).id,
              n.Ab(e, 1)._getAriaSelected(),
              n.Ab(e, 1).disabled.toString(),
              n.Ab(e, 1).disabled
            ),
              t(
                e,
                4,
                0,
                n.Ib(e, 4, 0, n.Ab(e, 5).transform(e.context.$implicit.label))
              );
          }
        );
      }
      function B(t) {
        return n.Jb(
          2,
          [
            (t()(),
            n.qb(
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
              C,
              j
            )),
            n.pb(
              1,
              3325952,
              null,
              1,
              b.j,
              [n.k, [2, D.b], n.y, n.h, P.e],
              null,
              null
            ),
            n.Fb(603979776, 1, { _tabLinks: 1 }),
            (t()(), n.fb(16777216, null, 0, 1, null, M)),
            n.pb(
              4,
              278528,
              null,
              0,
              f.j,
              [n.O, n.L, n.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            n.qb(
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
            n.qb(
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
              function(t, e, i) {
                var s = !0;
                return (
                  'keydown' === e &&
                    (s = !1 !== n.Ab(t, 9)._handleKeydown(i) && s),
                  'focus' === e && (s = !1 !== n.Ab(t, 9)._onFocus() && s),
                  'blur' === e && (s = !1 !== n.Ab(t, 9)._onBlur() && s),
                  s
                );
              },
              E.b,
              E.a
            )),
            n.Eb(6144, null, m.j, null, [R.c]),
            n.Eb(6144, null, I.c, null, [R.c]),
            n.pb(
              9,
              2080768,
              null,
              3,
              R.c,
              [
                P.e,
                n.h,
                n.y,
                m.b,
                n.k,
                [2, D.b],
                [2, S.i],
                [2, S.c],
                [2, I.b],
                [8, null],
                [8, null],
                R.a,
                _.j
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            n.Fb(603979776, 4, { options: 1 }),
            n.Fb(603979776, 5, { optionGroups: 1 }),
            n.Fb(603979776, 6, { customTrigger: 0 }),
            n.Cb(131072, y.i, [y.j, n.h]),
            (t()(), n.fb(16777216, null, 1, 1, null, q)),
            n.pb(
              15,
              278528,
              null,
              0,
              f.j,
              [n.O, n.L, n.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            n.qb(
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
            n.qb(
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
            n.pb(
              18,
              212992,
              [['o', 4]],
              0,
              v.u,
              [v.c, n.O, n.j, [8, null], n.h],
              null,
              null
            )
          ],
          function(t, e) {
            var i = e.component;
            t(e, 4, 0, i.examples),
              t(
                e,
                9,
                0,
                n.Ib(e, 9, 0, n.Ab(e, 13).transform('anms.examples.title')),
                'todos'
              ),
              t(e, 15, 0, i.examples),
              t(e, 18, 0);
          },
          function(t, e) {
            t(e, 6, 1, [
              n.Ab(e, 9).id,
              n.Ab(e, 9).tabIndex,
              n.Ab(e, 9)._getAriaLabel(),
              n.Ab(e, 9)._getAriaLabelledby(),
              n.Ab(e, 9).required.toString(),
              n.Ab(e, 9).disabled.toString(),
              n.Ab(e, 9).errorState,
              n.Ab(e, 9).panelOpen ? n.Ab(e, 9)._optionIds : null,
              n.Ab(e, 9).multiple,
              n.Ab(e, 9)._ariaDescribedby || null,
              n.Ab(e, 9)._getAriaActiveDescendant(),
              n.Ab(e, 9).disabled,
              n.Ab(e, 9).errorState,
              n.Ab(e, 9).required,
              n.Ab(e, 9).empty
            ]),
              t(
                e,
                16,
                0,
                n.Ab(e, 18).isActivated &&
                  n.Ab(e, 18).activatedRoute.routeConfig.path
              );
          }
        );
      }
      function N(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
              B,
              F
            )),
            n.pb(1, 114688, null, 0, L, [A.o], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var z = n.mb('anms-examples', L, N, {}, {}, []),
        $ = i('6uGs');
      const H = (() => {
        class t {
          constructor(t) {
            this.http = t;
          }
          uploadFile(t) {
            const e = new FormData();
            e.append('file', t);
            const i = new $.h('POST', 'http://localhost:8080/uploadFile', e, {
              reportProgress: !0,
              responseType: 'text'
            });
            return this.http.request(i);
          }
        }
        return (
          (t.ngInjectableDef = n.Lb({
            factory: function() {
              return new t(n.Pb($.c));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      class U {
        constructor(t) {
          this.fileService = t;
        }
        selectFile(t) {
          this.selectedFiles = t.target.files;
        }
        upload() {
          (this.currentFile = this.selectedFiles.item(0)),
            this.fileService.uploadFile(this.currentFile).subscribe(t => {
              t instanceof $.i && ((this.msg = t.body), console.log(t.body));
            });
        }
        ngOnInit() {}
      }
      var Y = n.ob({ encapsulation: 0, styles: [['']], data: {} });
      function J(t) {
        return n.Jb(
          2,
          [
            (t()(),
            n.qb(
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
            n.qb(
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
            n.qb(
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
            n.qb(
              3,
              0,
              null,
              null,
              0,
              'input',
              [['type', 'file']],
              null,
              [[null, 'change']],
              function(t, e, i) {
                var n = !0;
                return (
                  'change' === e && (n = !1 !== t.component.selectFile(i) && n),
                  n
                );
              },
              null,
              null
            )),
            (t()(),
            n.qb(
              4,
              0,
              null,
              null,
              1,
              'button',
              [],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(t, e, i) {
                var n = !0;
                return (
                  'click' === e && (n = !1 !== t.component.upload() && n), n
                );
              },
              null,
              null
            )),
            (t()(), n.Hb(-1, null, ['Upload']))
          ],
          null,
          function(t, e) {
            var i = e.component;
            t(e, 1, 0, i.msg), t(e, 4, 0, !i.selectedFiles);
          }
        );
      }
      function W(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
              J,
              Y
            )),
            n.pb(1, 114688, null, 0, U, [H], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Z = n.mb('anms-file-upload', U, W, {}, {}, []),
        G = i('WT5v'),
        V = i('ZTXN'),
        K = i('bwdy'),
        X = i('IdLP'),
        Q = i('g6G6'),
        tt = i('YtkY'),
        et = i('J+dc'),
        it = i('kuMc'),
        nt = i('jIqt'),
        st = i('8j5Y'),
        rt = i('TLy2');
      function ot(t, e) {
        for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t;
      }
      function at(t, e) {
        const i = e ? '' : 'none';
        ot(t.style, {
          touchAction: e ? '' : 'none',
          webkitUserDrag: e ? '' : 'none',
          webkitTapHighlightColor: e ? '' : 'transparent',
          userSelect: i,
          msUserSelect: i,
          webkitUserSelect: i,
          MozUserSelect: i
        });
      }
      function lt(t) {
        const e = t.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
        return parseFloat(t) * e;
      }
      function ct(t, e) {
        return t
          .getPropertyValue(e)
          .split(',')
          .map(t => t.trim());
      }
      const dt = Object(g.f)({ passive: !0 }),
        ht = Object(g.f)({ passive: !1 }),
        ut = 800;
      class pt {
        constructor(t, e, i, n, s, r) {
          (this._config = e),
            (this._document = i),
            (this._ngZone = n),
            (this._viewportRuler = s),
            (this._dragDropRegistry = r),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._moveEvents = new V.a()),
            (this._pointerMoveSubscription = K.a.EMPTY),
            (this._pointerUpSubscription = K.a.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = 'ltr'),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new V.a()),
            (this.started = new V.a()),
            (this.released = new V.a()),
            (this.ended = new V.a()),
            (this.entered = new V.a()),
            (this.exited = new V.a()),
            (this.dropped = new V.a()),
            (this.moved = this._moveEvents.asObservable()),
            (this._pointerDown = t => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const e = this._handles.find(e => {
                  const i = t.target;
                  return !!i && (i === e || e.contains(i));
                });
                !e ||
                  this._disabledHandles.has(e) ||
                  this.disabled ||
                  this._initializeDragSequence(e, t);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, t);
            }),
            (this._pointerMove = t => {
              if (!this._hasStartedDragging) {
                const e = this._getPointerPositionOnPage(t);
                return void (
                  Math.abs(e.x - this._pickupPositionOnPage.x) +
                    Math.abs(e.y - this._pickupPositionOnPage.y) >=
                    this._config.dragStartThreshold &&
                  Date.now() >=
                    this._dragStartTime + (this.dragStartDelay || 0) &&
                  ((this._dropContainer && this._dropContainer.isDragging()) ||
                    ((this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(t))))
                );
              }
              this._boundaryElement &&
                ((this._previewRect &&
                  (this._previewRect.width || this._previewRect.height)) ||
                  (this._previewRect = (
                    this._preview || this._rootElement
                  ).getBoundingClientRect()));
              const e = this._getConstrainedPointerPosition(t);
              if (
                ((this._hasMoved = !0),
                t.preventDefault(),
                this._updatePointerDirectionDelta(e),
                this._dropContainer)
              )
                this._updateActiveDropContainer(e);
              else {
                const t = this._activeTransform;
                (t.x =
                  e.x -
                  this._pickupPositionOnPage.x +
                  this._passiveTransform.x),
                  (t.y =
                    e.y -
                    this._pickupPositionOnPage.y +
                    this._passiveTransform.y),
                  this._applyRootElementTransform(t.x, t.y),
                  'undefined' != typeof SVGElement &&
                    this._rootElement instanceof SVGElement &&
                    this._rootElement.setAttribute(
                      'transform',
                      `translate(${t.x} ${t.y})`
                    );
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: e,
                    event: t,
                    distance: this._getDragDistance(e),
                    delta: this._pointerDirectionDelta
                  });
                });
            }),
            (this._pointerUp = t => {
              if (
                this._dragDropRegistry.isDragging(this) &&
                (this._removeSubscriptions(),
                this._dragDropRegistry.stopDragging(this),
                this._handles &&
                  (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight),
                this._hasStartedDragging)
              ) {
                if (
                  (this.released.next({ source: this }), !this._dropContainer)
                )
                  return (
                    (this._passiveTransform.x = this._activeTransform.x),
                    (this._passiveTransform.y = this._activeTransform.y),
                    this._ngZone.run(() => {
                      this.ended.next({
                        source: this,
                        distance: this._getDragDistance(
                          this._getPointerPositionOnPage(t)
                        )
                      });
                    }),
                    void this._dragDropRegistry.stopDragging(this)
                  );
                this._animatePreviewToPlaceholder().then(() => {
                  this._cleanupDragArtifacts(t),
                    this._dragDropRegistry.stopDragging(this);
                });
              }
            }),
            this.withRootElement(t),
            r.registerDragItem(this);
        }
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(t) {
          const e = Object(G.b)(t);
          e !== this._disabled &&
            ((this._disabled = e), this._toggleNativeDragInteractions());
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        withHandles(t) {
          return (
            (this._handles = t.map(t => Object(G.d)(t))),
            this._handles.forEach(t => at(t, !1)),
            this._toggleNativeDragInteractions(),
            this
          );
        }
        withPreviewTemplate(t) {
          return (this._previewTemplate = t), this;
        }
        withPlaceholderTemplate(t) {
          return (this._placeholderTemplate = t), this;
        }
        withRootElement(t) {
          const e = Object(G.d)(t);
          return (
            e !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              e.addEventListener('mousedown', this._pointerDown, ht),
              e.addEventListener('touchstart', this._pointerDown, dt),
              (this._initialTransform = void 0),
              (this._rootElement = e)),
            this
          );
        }
        withBoundaryElement(t) {
          return (this._boundaryElement = t ? Object(G.d)(t) : null), this;
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && _t(this._rootElement),
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
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ''),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(t) {
          this._handles.indexOf(t) > -1 && this._disabledHandles.add(t);
        }
        enableHandle(t) {
          this._disabledHandles.delete(t);
        }
        withDirection(t) {
          return (this._direction = t), this;
        }
        _withDropContainer(t) {
          this._dropContainer = t;
        }
        getFreeDragPosition() {
          return { x: this._passiveTransform.x, y: this._passiveTransform.y };
        }
        setFreeDragPosition(t) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = t.x),
            (this._passiveTransform.y = t.y),
            this._dropContainer || this._applyRootElementTransform(t.x, t.y),
            this
          );
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe();
        }
        _destroyPreview() {
          this._preview && _t(this._preview),
            this._previewRef && this._previewRef.destroy(),
            (this._preview = this._previewRef = null);
        }
        _destroyPlaceholder() {
          this._placeholder && _t(this._placeholder),
            this._placeholderRef && this._placeholderRef.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _startDragSequence(t) {
          if (
            (this.started.next({ source: this }),
            ft(t) && (this._lastTouchEventTime = Date.now()),
            this._dropContainer)
          ) {
            const t = this._rootElement;
            this._nextSibling = t.nextSibling;
            const i = (this._preview = this._createPreviewElement()),
              n = (this._placeholder = this._createPlaceholderElement());
            (t.style.display = 'none'),
              this._document.body.appendChild(t.parentNode.replaceChild(n, t)),
              ((e = this._document),
              e.fullscreenElement ||
                e.webkitFullscreenElement ||
                e.mozFullScreenElement ||
                e.msFullscreenElement ||
                e.body).appendChild(i),
              this._dropContainer.start();
          }
          var e;
        }
        _initializeDragSequence(t, e) {
          e.stopPropagation();
          const i = this.isDragging(),
            n = ft(e),
            s = !n && 0 !== e.button,
            r = this._rootElement,
            o =
              !n &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + ut > Date.now();
          if (
            (e.target &&
              e.target.draggable &&
              'mousedown' === e.type &&
              e.preventDefault(),
            i || s || o)
          )
            return;
          this._handles.length &&
            ((this._rootElementTapHighlight = r.style.webkitTapHighlightColor),
            (r.style.webkitTapHighlightColor = 'transparent')),
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
          const a = (this._pickupPositionOnPage = this._getPointerPositionOnPage(
            e
          ));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: a.x, y: a.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, e);
        }
        _cleanupDragArtifacts(t) {
          (this._rootElement.style.display = ''),
            this._nextSibling
              ? this._nextSibling.parentNode.insertBefore(
                  this._rootElement,
                  this._nextSibling
                )
              : Object(G.d)(this._initialContainer.element).appendChild(
                  this._rootElement
                ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._boundaryRect = this._previewRect = void 0),
            this._ngZone.run(() => {
              const e = this._dropContainer,
                i = e.getItemIndex(this),
                n = this._getPointerPositionOnPage(t),
                s = this._getDragDistance(this._getPointerPositionOnPage(t)),
                r = e._isOverContainer(n.x, n.y);
              this.ended.next({ source: this, distance: s }),
                this.dropped.next({
                  item: this,
                  currentIndex: i,
                  previousIndex: this._initialContainer.getItemIndex(this),
                  container: e,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: r,
                  distance: s
                }),
                e.drop(this, i, this._initialContainer, r, s),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x: t, y: e }) {
          let i = this._initialContainer._getSiblingContainerFromPosition(
            this,
            t,
            e
          );
          !i &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(t, e) &&
            (i = this._initialContainer),
            i &&
              i !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = i),
                  this._dropContainer.enter(this, t, e),
                  this.entered.next({
                    item: this,
                    container: i,
                    currentIndex: i.getItemIndex(this)
                  });
              }),
            this._dropContainer._sortItem(
              this,
              t,
              e,
              this._pointerDirectionDelta
            ),
            (this._preview.style.transform = bt(
              t - this._pickupPositionInElement.x,
              e - this._pickupPositionInElement.y
            ));
        }
        _createPreviewElement() {
          const t = this._previewTemplate,
            e = t ? t.template : null;
          let i;
          if (e) {
            const n = t.viewContainer.createEmbeddedView(e, t.context);
            (i = n.rootNodes[0]),
              (this._previewRef = n),
              (i.style.transform = bt(
                this._pickupPositionOnPage.x,
                this._pickupPositionOnPage.y
              ));
          } else {
            const t = this._rootElement,
              e = t.getBoundingClientRect();
            ((i = gt(t)).style.width = `${e.width}px`),
              (i.style.height = `${e.height}px`),
              (i.style.transform = bt(e.left, e.top));
          }
          return (
            ot(i.style, {
              pointerEvents: 'none',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '1000'
            }),
            at(i, !1),
            i.classList.add('cdk-drag-preview'),
            i.setAttribute('dir', this._direction),
            i
          );
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const t = this._placeholder.getBoundingClientRect();
          this._preview.classList.add('cdk-drag-animating'),
            (this._preview.style.transform = bt(t.left, t.top));
          const e = (function(t) {
            const e = getComputedStyle(t),
              i = ct(e, 'transition-property'),
              n = i.find(t => 'transform' === t || 'all' === t);
            if (!n) return 0;
            const s = i.indexOf(n),
              r = ct(e, 'transition-duration'),
              o = ct(e, 'transition-delay');
            return lt(r[s]) + lt(o[s]);
          })(this._preview);
          return 0 === e
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise(t => {
                    const i = e => {
                        (!e ||
                          (e.target === this._preview &&
                            'transform' === e.propertyName)) &&
                          (this._preview.removeEventListener(
                            'transitionend',
                            i
                          ),
                          t(),
                          clearTimeout(n));
                      },
                      n = setTimeout(i, 1.5 * e);
                    this._preview.addEventListener('transitionend', i);
                  })
              );
        }
        _createPlaceholderElement() {
          const t = this._placeholderTemplate,
            e = t ? t.template : null;
          let i;
          return (
            e
              ? ((this._placeholderRef = t.viewContainer.createEmbeddedView(
                  e,
                  t.context
                )),
                (i = this._placeholderRef.rootNodes[0]))
              : (i = gt(this._rootElement)),
            i.classList.add('cdk-drag-placeholder'),
            i
          );
        }
        _getPointerPositionInElement(t, e) {
          const i = this._rootElement.getBoundingClientRect(),
            n = t === this._rootElement ? null : t,
            s = n ? n.getBoundingClientRect() : i,
            r = ft(e) ? e.targetTouches[0] : e;
          return {
            x: s.left - i.left + (r.pageX - s.left - this._scrollPosition.left),
            y: s.top - i.top + (r.pageY - s.top - this._scrollPosition.top)
          };
        }
        _getPointerPositionOnPage(t) {
          const e = ft(t) ? t.touches[0] || t.changedTouches[0] : t;
          return {
            x: e.pageX - this._scrollPosition.left,
            y: e.pageY - this._scrollPosition.top
          };
        }
        _getConstrainedPointerPosition(t) {
          const e = this._getPointerPositionOnPage(t),
            i = this.constrainPosition ? this.constrainPosition(e) : e,
            n = this._dropContainer ? this._dropContainer.lockAxis : null;
          if (
            ('x' === this.lockAxis || 'x' === n
              ? (i.y = this._pickupPositionOnPage.y)
              : ('y' !== this.lockAxis && 'y' !== n) ||
                (i.x = this._pickupPositionOnPage.x),
            this._boundaryRect)
          ) {
            const { x: t, y: e } = this._pickupPositionInElement,
              n = this._boundaryRect,
              s = this._previewRect,
              r = n.top + e,
              o = n.bottom - (s.height - e);
            (i.x = mt(i.x, n.left + t, n.right - (s.width - t))),
              (i.y = mt(i.y, r, o));
          }
          return i;
        }
        _updatePointerDirectionDelta(t) {
          const { x: e, y: i } = t,
            n = this._pointerDirectionDelta,
            s = this._pointerPositionAtLastDirectionChange,
            r = Math.abs(e - s.x),
            o = Math.abs(i - s.y);
          return (
            r > this._config.pointerDirectionChangeThreshold &&
              ((n.x = e > s.x ? 1 : -1), (s.x = e)),
            o > this._config.pointerDirectionChangeThreshold &&
              ((n.y = i > s.y ? 1 : -1), (s.y = i)),
            n
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const t = this.disabled || this._handles.length > 0;
          t !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = t), at(this._rootElement, t));
        }
        _removeRootElementListeners(t) {
          t.removeEventListener('mousedown', this._pointerDown, ht),
            t.removeEventListener('touchstart', this._pointerDown, dt);
        }
        _applyRootElementTransform(t, e) {
          const i = bt(t, e);
          null == this._initialTransform &&
            (this._initialTransform = this._rootElement.style.transform || ''),
            (this._rootElement.style.transform = this._initialTransform
              ? i + ' ' + this._initialTransform
              : i);
        }
        _getDragDistance(t) {
          const e = this._pickupPositionOnPage;
          return e ? { x: t.x - e.x, y: t.y - e.y } : { x: 0, y: 0 };
        }
      }
      function bt(t, e) {
        return `translate3d(${Math.round(t)}px, ${Math.round(e)}px, 0)`;
      }
      function gt(t) {
        const e = t.cloneNode(!0),
          i = e.querySelectorAll('[id]'),
          n = t.querySelectorAll('canvas');
        e.removeAttribute('id');
        for (let s = 0; s < i.length; s++) i[s].removeAttribute('id');
        if (n.length) {
          const t = e.querySelectorAll('canvas');
          for (let e = 0; e < n.length; e++) {
            const i = t[e].getContext('2d');
            i && i.drawImage(n[e], 0, 0);
          }
        }
        return e;
      }
      function mt(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function _t(t) {
        t && t.parentNode && t.parentNode.removeChild(t);
      }
      function ft(t) {
        return t.type.startsWith('touch');
      }
      function vt(t, e, i) {
        const n = yt(e, t.length - 1),
          s = yt(i, t.length - 1);
        if (n === s) return;
        const r = t[n],
          o = s < n ? -1 : 1;
        for (let a = n; a !== s; a += o) t[a] = t[a + o];
        t[s] = r;
      }
      function yt(t, e) {
        return Math.max(0, Math.min(e, t));
      }
      let xt = 0;
      const Ot = 0.05;
      class Dt {
        constructor(t, e, i) {
          (this._dragDropRegistry = e),
            (this.id = `cdk-drop-list-ref-${xt++}`),
            (this.disabled = !1),
            (this.sortingDisabled = !0),
            (this.enterPredicate = () => !0),
            (this.beforeStarted = new V.a()),
            (this.entered = new V.a()),
            (this.exited = new V.a()),
            (this.dropped = new V.a()),
            (this.sorted = new V.a()),
            (this._isDragging = !1),
            (this._itemPositions = []),
            (this._previousSwap = { drag: null, delta: 0 }),
            (this._siblings = []),
            (this._orientation = 'vertical'),
            (this._activeSiblings = new Set()),
            (this._direction = 'ltr'),
            e.registerDropContainer(this),
            (this._document = i),
            (this.element = t instanceof n.k ? t.nativeElement : t);
        }
        dispose() {
          this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this._activeSiblings.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this.beforeStarted.next(),
            (this._isDragging = !0),
            this._cacheItems(),
            this._siblings.forEach(t => t._startReceiving(this));
        }
        enter(t, e, i) {
          this.start();
          let n = this.sortingDisabled ? this._draggables.indexOf(t) : -1;
          -1 === n && (n = this._getItemIndexFromPointerPosition(t, e, i));
          const s = this._activeDraggables,
            r = s.indexOf(t),
            o = t.getPlaceholderElement();
          let a = s[n];
          if (
            (a === t && (a = s[n + 1]),
            r > -1 && s.splice(r, 1),
            a && !this._dragDropRegistry.isDragging(a))
          ) {
            const e = a.getRootElement();
            e.parentElement.insertBefore(o, e), s.splice(n, 0, t);
          } else Object(G.d)(this.element).appendChild(o), s.push(t);
          (o.style.transform = ''),
            this._cacheItemPositions(),
            this.entered.next({
              item: t,
              container: this,
              currentIndex: this.getItemIndex(t)
            });
        }
        exit(t) {
          this._reset(), this.exited.next({ item: t, container: this });
        }
        drop(t, e, i, n, s = { x: 0, y: 0 }) {
          this._reset(),
            this.dropped.next({
              item: t,
              currentIndex: e,
              previousIndex: i.getItemIndex(t),
              container: this,
              previousContainer: i,
              isPointerOverContainer: n,
              distance: s
            });
        }
        withItems(t) {
          return (
            (this._draggables = t),
            t.forEach(t => t._withDropContainer(this)),
            this.isDragging() && this._cacheItems(),
            this
          );
        }
        withDirection(t) {
          return (this._direction = t), this;
        }
        connectedTo(t) {
          return (this._siblings = t.slice()), this;
        }
        withOrientation(t) {
          return (this._orientation = t), this;
        }
        getItemIndex(t) {
          return this._isDragging
            ? kt(
                'horizontal' === this._orientation && 'rtl' === this._direction
                  ? this._itemPositions.slice().reverse()
                  : this._itemPositions,
                e => e.drag === t
              )
            : this._draggables.indexOf(t);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(t, e, i, n) {
          if (this.sortingDisabled || !this._isPointerNearDropContainer(e, i))
            return;
          const s = this._itemPositions,
            r = this._getItemIndexFromPointerPosition(t, e, i, n);
          if (-1 === r && s.length > 0) return;
          const o = 'horizontal' === this._orientation,
            a = kt(s, e => e.drag === t),
            l = s[r],
            c = s[a].clientRect,
            d = l.clientRect,
            h = a > r ? 1 : -1;
          (this._previousSwap.drag = l.drag),
            (this._previousSwap.delta = o ? n.x : n.y);
          const u = this._getItemOffsetPx(c, d, h),
            p = this._getSiblingOffsetPx(a, s, h),
            b = s.slice();
          vt(s, a, r),
            this.sorted.next({
              previousIndex: a,
              currentIndex: r,
              container: this,
              item: t
            }),
            s.forEach((e, i) => {
              if (b[i] === e) return;
              const n = e.drag === t,
                s = n ? u : p,
                r = n ? t.getPlaceholderElement() : e.drag.getRootElement();
              (e.offset += s),
                o
                  ? ((r.style.transform = `translate3d(${Math.round(
                      e.offset
                    )}px, 0, 0)`),
                    wt(e.clientRect, 0, s))
                  : ((r.style.transform = `translate3d(0, ${Math.round(
                      e.offset
                    )}px, 0)`),
                    wt(e.clientRect, s, 0));
            });
        }
        _cacheOwnPosition() {
          this._clientRect = Object(G.d)(this.element).getBoundingClientRect();
        }
        _cacheItemPositions() {
          const t = 'horizontal' === this._orientation;
          this._itemPositions = this._activeDraggables
            .map(t => {
              const e = (this._dragDropRegistry.isDragging(t)
                ? t.getPlaceholderElement()
                : t.getRootElement()
              ).getBoundingClientRect();
              return {
                drag: t,
                offset: 0,
                clientRect: {
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                  left: e.left,
                  width: e.width,
                  height: e.height
                }
              };
            })
            .sort((e, i) =>
              t
                ? e.clientRect.left - i.clientRect.left
                : e.clientRect.top - i.clientRect.top
            );
        }
        _reset() {
          (this._isDragging = !1),
            this._activeDraggables.forEach(
              t => (t.getRootElement().style.transform = '')
            ),
            this._siblings.forEach(t => t._stopReceiving(this)),
            (this._activeDraggables = []),
            (this._itemPositions = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0);
        }
        _getSiblingOffsetPx(t, e, i) {
          const n = 'horizontal' === this._orientation,
            s = e[t].clientRect,
            r = e[t + -1 * i];
          let o = s[n ? 'width' : 'height'] * i;
          if (r) {
            const t = n ? 'left' : 'top',
              e = n ? 'right' : 'bottom';
            -1 === i
              ? (o -= r.clientRect[t] - s[e])
              : (o += s[t] - r.clientRect[e]);
          }
          return o;
        }
        _isPointerNearDropContainer(t, e) {
          const {
              top: i,
              right: n,
              bottom: s,
              left: r,
              width: o,
              height: a
            } = this._clientRect,
            l = o * Ot,
            c = a * Ot;
          return e > i - c && e < s + c && t > r - l && t < n + l;
        }
        _getItemOffsetPx(t, e, i) {
          const n = 'horizontal' === this._orientation;
          let s = n ? e.left - t.left : e.top - t.top;
          return (
            -1 === i && (s += n ? e.width - t.width : e.height - t.height), s
          );
        }
        _getItemIndexFromPointerPosition(t, e, i, n) {
          const s = 'horizontal' === this._orientation;
          return kt(this._itemPositions, ({ drag: r, clientRect: o }, a, l) => {
            if (r === t) return l.length < 2;
            if (n) {
              const t = s ? n.x : n.y;
              if (
                r === this._previousSwap.drag &&
                t === this._previousSwap.delta
              )
                return !1;
            }
            return s
              ? e >= Math.floor(o.left) && e <= Math.floor(o.right)
              : i >= Math.floor(o.top) && i <= Math.floor(o.bottom);
          });
        }
        _cacheItems() {
          (this._activeDraggables = this._draggables.slice()),
            this._cacheItemPositions(),
            this._cacheOwnPosition();
        }
        _isOverContainer(t, e) {
          return Pt(this._clientRect, t, e);
        }
        _getSiblingContainerFromPosition(t, e, i) {
          return this._siblings.find(n => n._canReceive(t, e, i));
        }
        _canReceive(t, e, i) {
          if (!this.enterPredicate(t, this) || !Pt(this._clientRect, e, i))
            return !1;
          const n = this._document.elementFromPoint(e, i);
          if (!n) return !1;
          const s = Object(G.d)(this.element);
          return n === s || s.contains(n);
        }
        _startReceiving(t) {
          const e = this._activeSiblings;
          e.has(t) || (e.add(t), this._cacheOwnPosition());
        }
        _stopReceiving(t) {
          this._activeSiblings.delete(t);
        }
      }
      function wt(t, e, i) {
        (t.top += e),
          (t.bottom = t.top + t.height),
          (t.left += i),
          (t.right = t.left + t.width);
      }
      function kt(t, e) {
        for (let i = 0; i < t.length; i++) if (e(t[i], i, t)) return i;
        return -1;
      }
      function Pt(t, e, i) {
        const { top: n, bottom: s, left: r, right: o } = t;
        return i >= n && i <= s && e >= r && e <= o;
      }
      const jt = Object(g.f)({ passive: !1, capture: !0 }),
        Ct = (() => {
          class t {
            constructor(t, e) {
              (this._ngZone = t),
                (this._dropInstances = new Set()),
                (this._dragInstances = new Set()),
                (this._activeDragInstances = new Set()),
                (this._globalListeners = new Map()),
                (this.pointerMove = new V.a()),
                (this.pointerUp = new V.a()),
                (this._preventDefaultWhileDragging = t => {
                  this._activeDragInstances.size && t.preventDefault();
                }),
                (this._document = e);
            }
            registerDropContainer(t) {
              if (!this._dropInstances.has(t)) {
                if (this.getDropContainer(t.id))
                  throw Error(
                    `Drop instance with id "${t.id}" has already been registered.`
                  );
                this._dropInstances.add(t);
              }
            }
            registerDragItem(t) {
              this._dragInstances.add(t),
                1 === this._dragInstances.size &&
                  this._ngZone.runOutsideAngular(() => {
                    this._document.addEventListener(
                      'touchmove',
                      this._preventDefaultWhileDragging,
                      jt
                    );
                  });
            }
            removeDropContainer(t) {
              this._dropInstances.delete(t);
            }
            removeDragItem(t) {
              this._dragInstances.delete(t),
                this.stopDragging(t),
                0 === this._dragInstances.size &&
                  this._document.removeEventListener(
                    'touchmove',
                    this._preventDefaultWhileDragging,
                    jt
                  );
            }
            startDragging(t, e) {
              if (
                !this._activeDragInstances.has(t) &&
                (this._activeDragInstances.add(t),
                1 === this._activeDragInstances.size)
              ) {
                const t = e.type.startsWith('touch'),
                  i = t ? 'touchend' : 'mouseup';
                this._globalListeners
                  .set(t ? 'touchmove' : 'mousemove', {
                    handler: t => this.pointerMove.next(t),
                    options: jt
                  })
                  .set(i, { handler: t => this.pointerUp.next(t), options: !0 })
                  .set('selectstart', {
                    handler: this._preventDefaultWhileDragging,
                    options: jt
                  }),
                  t ||
                    this._globalListeners.set('wheel', {
                      handler: this._preventDefaultWhileDragging,
                      options: jt
                    }),
                  this._ngZone.runOutsideAngular(() => {
                    this._globalListeners.forEach((t, e) => {
                      this._document.addEventListener(e, t.handler, t.options);
                    });
                  });
              }
            }
            stopDragging(t) {
              this._activeDragInstances.delete(t),
                0 === this._activeDragInstances.size &&
                  this._clearGlobalListeners();
            }
            isDragging(t) {
              return this._activeDragInstances.has(t);
            }
            getDropContainer(t) {
              return Array.from(this._dropInstances).find(e => e.id === t);
            }
            ngOnDestroy() {
              this._dragInstances.forEach(t => this.removeDragItem(t)),
                this._dropInstances.forEach(t => this.removeDropContainer(t)),
                this._clearGlobalListeners(),
                this.pointerMove.complete(),
                this.pointerUp.complete();
            }
            _clearGlobalListeners() {
              this._globalListeners.forEach((t, e) => {
                this._document.removeEventListener(e, t.handler, t.options);
              }),
                this._globalListeners.clear();
            }
          }
          return (
            (t.ngInjectableDef = Object(n.Lb)({
              factory: function() {
                return new t(Object(n.Pb)(n.y), Object(n.Pb)(f.d));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Et = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 },
        Rt = (() => {
          class t {
            constructor(t, e, i, n) {
              (this._document = t),
                (this._ngZone = e),
                (this._viewportRuler = i),
                (this._dragDropRegistry = n);
            }
            createDrag(t, e = Et) {
              return new pt(
                t,
                e,
                this._document,
                this._ngZone,
                this._viewportRuler,
                this._dragDropRegistry
              );
            }
            createDropList(t) {
              return new Dt(t, this._dragDropRegistry, this._document);
            }
          }
          return (
            (t.ngInjectableDef = Object(n.Lb)({
              factory: function() {
                return new t(
                  Object(n.Pb)(f.d),
                  Object(n.Pb)(n.y),
                  Object(n.Pb)(P.e),
                  Object(n.Pb)(Ct)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        It = new n.p('CDK_DROP_LIST'),
        St = new n.p('CDK_DRAG_PARENT'),
        At = new n.p('CDK_DRAG_CONFIG', {
          providedIn: 'root',
          factory: function() {
            return {
              dragStartThreshold: 5,
              pointerDirectionChangeThreshold: 5
            };
          }
        }),
        Tt = (() =>
          class {
            constructor(t, e, i, s, r, o, a, l, c) {
              (this.element = t),
                (this.dropContainer = e),
                (this._document = i),
                (this._ngZone = s),
                (this._viewContainerRef = r),
                (this._dir = a),
                (this._changeDetectorRef = c),
                (this._destroyed = new V.a()),
                (this.dragStartDelay = 0),
                (this._disabled = !1),
                (this.started = new n.m()),
                (this.released = new n.m()),
                (this.ended = new n.m()),
                (this.entered = new n.m()),
                (this.exited = new n.m()),
                (this.dropped = new n.m()),
                (this.moved = new X.a(t => {
                  const e = this._dragRef.moved
                    .pipe(
                      Object(tt.a)(t => ({
                        source: this,
                        pointerPosition: t.pointerPosition,
                        event: t.event,
                        delta: t.delta,
                        distance: t.distance
                      }))
                    )
                    .subscribe(t);
                  return () => {
                    e.unsubscribe();
                  };
                })),
                (this._dragRef = l.createDrag(t, o)),
                (this._dragRef.data = this),
                this._syncInputs(this._dragRef),
                this._handleEvents(this._dragRef);
            }
            get boundaryElementSelector() {
              return 'string' == typeof this.boundaryElement
                ? this.boundaryElement
                : void 0;
            }
            set boundaryElementSelector(t) {
              this.boundaryElement = t;
            }
            get disabled() {
              return (
                this._disabled ||
                (this.dropContainer && this.dropContainer.disabled)
              );
            }
            set disabled(t) {
              (this._disabled = Object(G.b)(t)),
                (this._dragRef.disabled = this._disabled);
            }
            getPlaceholderElement() {
              return this._dragRef.getPlaceholderElement();
            }
            getRootElement() {
              return this._dragRef.getRootElement();
            }
            reset() {
              this._dragRef.reset();
            }
            getFreeDragPosition() {
              return this._dragRef.getFreeDragPosition();
            }
            ngAfterViewInit() {
              this._ngZone.onStable
                .asObservable()
                .pipe(
                  Object(et.a)(1),
                  Object(it.a)(this._destroyed)
                )
                .subscribe(() => {
                  this._updateRootElement(),
                    this._handles.changes
                      .pipe(
                        Object(nt.a)(this._handles),
                        Object(st.a)(t => {
                          const e = t
                            .filter(t => t._parentDrag === this)
                            .map(t => t.element);
                          this._dragRef.withHandles(e);
                        }),
                        Object(rt.a)(t =>
                          Object(Q.a)(...t.map(t => t._stateChanges))
                        ),
                        Object(it.a)(this._destroyed)
                      )
                      .subscribe(t => {
                        const e = this._dragRef,
                          i = t.element.nativeElement;
                        t.disabled ? e.disableHandle(i) : e.enableHandle(i);
                      }),
                    this.freeDragPosition &&
                      this._dragRef.setFreeDragPosition(this.freeDragPosition);
                });
            }
            ngOnChanges(t) {
              const e = t.rootElementSelector,
                i = t.freeDragPosition;
              e && !e.firstChange && this._updateRootElement(),
                i &&
                  !i.firstChange &&
                  this.freeDragPosition &&
                  this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
            ngOnDestroy() {
              this._destroyed.next(),
                this._destroyed.complete(),
                this._dragRef.dispose();
            }
            _updateRootElement() {
              const t = this.element.nativeElement,
                e = this.rootElementSelector
                  ? Lt(t, this.rootElementSelector)
                  : t;
              if (e && e.nodeType !== this._document.ELEMENT_NODE)
                throw Error(
                  'cdkDrag must be attached to an element node. ' +
                    `Currently attached to "${e.nodeName}".`
                );
              this._dragRef.withRootElement(e || t);
            }
            _getBoundaryElement() {
              const t = this.boundaryElement;
              if (!t) return null;
              if ('string' == typeof t)
                return Lt(this.element.nativeElement, t);
              const e = Object(G.d)(t);
              if (Object(n.W)() && !e.contains(this.element.nativeElement))
                throw Error(
                  'Draggable element is not inside of the node passed into cdkDragBoundary.'
                );
              return e;
            }
            _syncInputs(t) {
              t.beforeStarted.subscribe(() => {
                if (!t.isDragging()) {
                  const e = this._dir,
                    i = this._placeholderTemplate
                      ? {
                          template: this._placeholderTemplate.templateRef,
                          context: this._placeholderTemplate.data,
                          viewContainer: this._viewContainerRef
                        }
                      : null,
                    n = this._previewTemplate
                      ? {
                          template: this._previewTemplate.templateRef,
                          context: this._previewTemplate.data,
                          viewContainer: this._viewContainerRef
                        }
                      : null;
                  (t.disabled = this.disabled),
                    (t.lockAxis = this.lockAxis),
                    (t.dragStartDelay = Object(G.e)(this.dragStartDelay)),
                    (t.constrainPosition = this.constrainPosition),
                    t
                      .withBoundaryElement(this._getBoundaryElement())
                      .withPlaceholderTemplate(i)
                      .withPreviewTemplate(n),
                    e && t.withDirection(e.value);
                }
              });
            }
            _handleEvents(t) {
              t.started.subscribe(() => {
                this.started.emit({ source: this }),
                  this._changeDetectorRef.markForCheck();
              }),
                t.released.subscribe(() => {
                  this.released.emit({ source: this });
                }),
                t.ended.subscribe(t => {
                  this.ended.emit({ source: this, distance: t.distance }),
                    this._changeDetectorRef.markForCheck();
                }),
                t.entered.subscribe(t => {
                  this.entered.emit({
                    container: t.container.data,
                    item: this,
                    currentIndex: t.currentIndex
                  });
                }),
                t.exited.subscribe(t => {
                  this.exited.emit({ container: t.container.data, item: this });
                }),
                t.dropped.subscribe(t => {
                  this.dropped.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    previousContainer: t.previousContainer.data,
                    container: t.container.data,
                    isPointerOverContainer: t.isPointerOverContainer,
                    item: this,
                    distance: t.distance
                  });
                });
            }
          })();
      function Lt(t, e) {
        let i = t.parentElement;
        for (; i; ) {
          if (i.matches ? i.matches(e) : i.msMatchesSelector(e)) return i;
          i = i.parentElement;
        }
        return null;
      }
      const Ft = (() =>
        class {
          constructor() {
            (this._items = new Set()), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(t) {
            this._disabled = Object(G.b)(t);
          }
          ngOnDestroy() {
            this._items.clear();
          }
        })();
      let Mt = 0;
      const qt = (() => {
          class t {
            constructor(e, i, s, r, o) {
              (this.element = e),
                (this._changeDetectorRef = s),
                (this._dir = r),
                (this._group = o),
                (this._destroyed = new V.a()),
                (this.connectedTo = []),
                (this.orientation = 'vertical'),
                (this.id = `cdk-drop-list-${Mt++}`),
                (this._disabled = !1),
                (this._sortingDisabled = !1),
                (this.enterPredicate = () => !0),
                (this.dropped = new n.m()),
                (this.entered = new n.m()),
                (this.exited = new n.m()),
                (this.sorted = new n.m()),
                (this._dropListRef = i.createDropList(e)),
                (this._dropListRef.data = this),
                (this._dropListRef.enterPredicate = (t, e) =>
                  this.enterPredicate(t.data, e.data)),
                this._syncInputs(this._dropListRef),
                this._handleEvents(this._dropListRef),
                t._dropLists.push(this),
                o && o._items.add(this);
            }
            get disabled() {
              return this._disabled || (!!this._group && this._group.disabled);
            }
            set disabled(t) {
              this._disabled = Object(G.b)(t);
            }
            get sortingDisabled() {
              return this._sortingDisabled;
            }
            set sortingDisabled(t) {
              this._sortingDisabled = Object(G.b)(t);
            }
            ngAfterContentInit() {
              this._draggables.changes
                .pipe(
                  Object(nt.a)(this._draggables),
                  Object(it.a)(this._destroyed)
                )
                .subscribe(t => {
                  this._dropListRef.withItems(t.map(t => t._dragRef));
                });
            }
            ngOnDestroy() {
              const e = t._dropLists.indexOf(this);
              e > -1 && t._dropLists.splice(e, 1),
                this._group && this._group._items.delete(this),
                this._dropListRef.dispose(),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            start() {
              this._dropListRef.start();
            }
            drop(t, e, i, n) {
              this._dropListRef.drop(t._dragRef, e, i._dropListRef, n);
            }
            enter(t, e, i) {
              this._dropListRef.enter(t._dragRef, e, i);
            }
            exit(t) {
              this._dropListRef.exit(t._dragRef);
            }
            getItemIndex(t) {
              return this._dropListRef.getItemIndex(t._dragRef);
            }
            _sortItem(t, e, i, n) {
              return this._dropListRef._sortItem(t._dragRef, e, i, n);
            }
            _getSiblingContainerFromPosition(t, e, i) {
              const n = this._dropListRef._getSiblingContainerFromPosition(
                t._dragRef,
                e,
                i
              );
              return n ? n.data : null;
            }
            _isOverContainer(t, e) {
              return this._dropListRef._isOverContainer(t, e);
            }
            _syncInputs(e) {
              this._dir &&
                this._dir.change
                  .pipe(
                    Object(nt.a)(this._dir.value),
                    Object(it.a)(this._destroyed)
                  )
                  .subscribe(t => e.withDirection(t)),
                e.beforeStarted.subscribe(() => {
                  const i = Object(G.a)(this.connectedTo).map(e =>
                    'string' == typeof e
                      ? t._dropLists.find(t => t.id === e)
                      : e
                  );
                  this._group &&
                    this._group._items.forEach(t => {
                      -1 === i.indexOf(t) && i.push(t);
                    }),
                    (e.disabled = this.disabled),
                    (e.lockAxis = this.lockAxis),
                    (e.sortingDisabled = this.sortingDisabled),
                    e
                      .connectedTo(
                        i.filter(t => t && t !== this).map(t => t._dropListRef)
                      )
                      .withOrientation(this.orientation);
                });
            }
            _handleEvents(t) {
              t.beforeStarted.subscribe(() => {
                this._changeDetectorRef.markForCheck();
              }),
                t.entered.subscribe(t => {
                  this.entered.emit({
                    container: this,
                    item: t.item.data,
                    currentIndex: t.currentIndex
                  });
                }),
                t.exited.subscribe(t => {
                  this.exited.emit({ container: this, item: t.item.data }),
                    this._changeDetectorRef.markForCheck();
                }),
                t.sorted.subscribe(t => {
                  this.sorted.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    container: this,
                    item: t.item.data
                  });
                }),
                t.dropped.subscribe(t => {
                  this.dropped.emit({
                    previousIndex: t.previousIndex,
                    currentIndex: t.currentIndex,
                    previousContainer: t.previousContainer.data,
                    container: t.container.data,
                    item: t.item.data,
                    isPointerOverContainer: t.isPointerOverContainer,
                    distance: t.distance
                  }),
                    this._changeDetectorRef.markForCheck();
                });
            }
          }
          return (t._dropLists = []), t;
        })(),
        Bt = (() => class {})();
      class Nt {
        constructor() {
          this.columnConfig = i('qN5x');
        }
        ngOnInit() {}
        onDrop(t) {
          t.previousContainer === t.container
            ? vt(t.container.data, t.previousIndex, t.currentIndex)
            : (function(e, i, n, s) {
                const r = yt(t.previousIndex, e.length - 1),
                  o = yt(s, i.length);
                e.length && i.splice(o, 0, e.splice(r, 1)[0]);
              })(t.previousContainer.data, t.container.data, 0, t.currentIndex);
        }
        saveColunConfig() {
          console.log(this.columnConfig);
        }
      }
      var zt = n.ob({
        encapsulation: 0,
        styles: [
          [
            '.wrapper[_ngcontent-%COMP%]{margin:25px auto;max-width:600px;text-align:center;padding:0 20px}.container[_ngcontent-%COMP%]{width:45%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.movie-list[_ngcontent-%COMP%]{width:80%;border:1px solid #ccc;min-height:60px;display:inline-block;background:#fff;border-radius:4px;overflow:hidden;margin-top:25px}.movie-block[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.movie-block[_ngcontent-%COMP%]:last-child{border:none}.movie-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .movie-block[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}'
          ]
        ],
        data: {}
      });
      function $t(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
            n.Eb(6144, null, St, null, [Tt]),
            n.pb(
              2,
              4866048,
              [[1, 4]],
              3,
              Tt,
              [n.k, [3, It], f.d, n.y, n.O, At, [2, D.b], Rt, n.h],
              null,
              null
            ),
            n.Fb(603979776, 2, { _handles: 1 }),
            n.Fb(603979776, 3, { _previewTemplate: 0 }),
            n.Fb(603979776, 4, { _placeholderTemplate: 0 }),
            (t()(), n.Hb(6, null, ['', ''])),
            (t()(), n.fb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, n.Ab(e, 2).disabled, n.Ab(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function Ht(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
            n.Eb(6144, null, St, null, [Tt]),
            n.pb(
              2,
              4866048,
              [[5, 4]],
              3,
              Tt,
              [n.k, [3, It], f.d, n.y, n.O, At, [2, D.b], Rt, n.h],
              null,
              null
            ),
            n.Fb(603979776, 6, { _handles: 1 }),
            n.Fb(603979776, 7, { _previewTemplate: 0 }),
            n.Fb(603979776, 8, { _placeholderTemplate: 0 }),
            (t()(), n.Hb(6, null, ['', ''])),
            (t()(), n.fb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, n.Ab(e, 2).disabled, n.Ab(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function Ut(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
            n.Eb(6144, null, St, null, [Tt]),
            n.pb(
              2,
              4866048,
              [[9, 4]],
              3,
              Tt,
              [n.k, [3, It], f.d, n.y, n.O, At, [2, D.b], Rt, n.h],
              null,
              null
            ),
            n.Fb(603979776, 10, { _handles: 1 }),
            n.Fb(603979776, 11, { _previewTemplate: 0 }),
            n.Fb(603979776, 12, { _placeholderTemplate: 0 }),
            (t()(), n.Hb(6, null, ['', ''])),
            (t()(), n.fb(0, null, null, 0))
          ],
          null,
          function(t, e) {
            t(e, 0, 0, n.Ab(e, 2).disabled, n.Ab(e, 2)._dragRef.isDragging()),
              t(e, 6, 0, e.context.$implicit);
          }
        );
      }
      function Yt(t) {
        return n.Jb(
          2,
          [
            (t()(),
            n.qb(
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
            n.qb(1, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), n.Hb(-1, null, ['columns'])),
            (t()(),
            n.qb(
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
              function(t, e, i) {
                var n = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (n = !1 !== t.component.onDrop(i) && n),
                  n
                );
              },
              null,
              null
            )),
            n.Eb(6144, null, It, null, [qt]),
            n.pb(
              5,
              1196032,
              [['columns', 4]],
              1,
              qt,
              [n.k, Rt, n.h, [2, D.b], [3, Ft]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            n.Fb(603979776, 1, { _draggables: 1 }),
            n.Bb(7, 2),
            n.Eb(256, null, Ft, void 0, []),
            (t()(), n.fb(16777216, null, null, 1, null, $t)),
            n.pb(
              10,
              278528,
              null,
              0,
              f.j,
              [n.O, n.L, n.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            n.qb(
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
            n.qb(12, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), n.Hb(-1, null, ['xaxis'])),
            (t()(),
            n.qb(
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
              function(t, e, i) {
                var n = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (n = !1 !== t.component.onDrop(i) && n),
                  n
                );
              },
              null,
              null
            )),
            n.Eb(6144, null, It, null, [qt]),
            n.pb(
              16,
              1196032,
              [['xaxisRef', 4]],
              1,
              qt,
              [n.k, Rt, n.h, [2, D.b], [3, Ft]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            n.Fb(603979776, 5, { _draggables: 1 }),
            n.Bb(18, 1),
            n.Eb(256, null, Ft, void 0, []),
            (t()(), n.fb(16777216, null, null, 1, null, Ht)),
            n.pb(
              21,
              278528,
              null,
              0,
              f.j,
              [n.O, n.L, n.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            n.qb(
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
            n.qb(23, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), n.Hb(-1, null, ['yaxis'])),
            (t()(),
            n.qb(
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
              function(t, e, i) {
                var n = !0;
                return (
                  'cdkDropListDropped' === e &&
                    (n = !1 !== t.component.onDrop(i) && n),
                  n
                );
              },
              null,
              null
            )),
            n.Eb(6144, null, It, null, [qt]),
            n.pb(
              27,
              1196032,
              [['yaxisRef', 4]],
              1,
              qt,
              [n.k, Rt, n.h, [2, D.b], [3, Ft]],
              { connectedTo: [0, 'connectedTo'], data: [1, 'data'] },
              { dropped: 'cdkDropListDropped' }
            ),
            n.Fb(603979776, 9, { _draggables: 1 }),
            n.Bb(29, 1),
            n.Eb(256, null, Ft, void 0, []),
            (t()(), n.fb(16777216, null, null, 1, null, Ut)),
            n.pb(
              32,
              278528,
              null,
              0,
              f.j,
              [n.O, n.L, n.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (t()(),
            n.qb(
              33,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(t, e, i) {
                var n = !0;
                return (
                  'click' === e &&
                    (n = !1 !== t.component.saveColunConfig() && n),
                  n
                );
              },
              null,
              null
            )),
            (t()(), n.Hb(-1, null, ['save']))
          ],
          function(t, e) {
            var i = e.component,
              s = t(e, 7, 0, n.Ab(e, 16), n.Ab(e, 27));
            t(e, 5, 0, s, i.columnConfig.columns),
              t(e, 10, 0, i.columnConfig.columns);
            var r = t(e, 18, 0, n.Ab(e, 5));
            t(e, 16, 0, r, i.columnConfig.xaxis),
              t(e, 21, 0, i.columnConfig.xaxis);
            var o = t(e, 29, 0, n.Ab(e, 5));
            t(e, 27, 0, o, i.columnConfig.yaxis),
              t(e, 32, 0, i.columnConfig.yaxis);
          },
          function(t, e) {
            t(
              e,
              3,
              0,
              n.Ab(e, 5).id,
              n.Ab(e, 5).disabled,
              n.Ab(e, 5)._dropListRef.isDragging(),
              n.Ab(e, 5)._dropListRef.isReceiving()
            ),
              t(
                e,
                14,
                0,
                n.Ab(e, 16).id,
                n.Ab(e, 16).disabled,
                n.Ab(e, 16)._dropListRef.isDragging(),
                n.Ab(e, 16)._dropListRef.isReceiving()
              ),
              t(
                e,
                25,
                0,
                n.Ab(e, 27).id,
                n.Ab(e, 27).disabled,
                n.Ab(e, 27)._dropListRef.isDragging(),
                n.Ab(e, 27)._dropListRef.isReceiving()
              );
          }
        );
      }
      function Jt(t) {
        return n.Jb(
          0,
          [
            (t()(),
            n.qb(
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
              Yt,
              zt
            )),
            n.pb(1, 114688, null, 0, Nt, [], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Wt = n.mb('anms-column-config', Nt, Jt, {}, {}, []),
        Zt = i('D4FV'),
        Gt = i('aFla'),
        Vt = i('zab8'),
        Kt = i('9+G+'),
        Xt = i('Av2N'),
        Qt = i('fN3Q');
      const te = [
        {
          id: Object(Qt.v4)(),
          username: 'rockets',
          name: 'Elon',
          surname: 'Musk'
        },
        {
          id: Object(Qt.v4)(),
          username: 'investing',
          name: 'Nassim',
          surname: 'Taleb'
        },
        {
          id: Object(Qt.v4)(),
          username: 'philosophy',
          name: 'Yuval',
          surname: 'Harari'
        }
      ];
      class ee {
        constructor(t) {
          (this.modelFactory = t),
            (this.model = this.modelFactory.create([...te])),
            (this.users$ = this.model.data$);
        }
        addUser(t) {
          const e = this.model.get();
          e.push(Object.assign({}, t, { id: Object(Qt.v4)() })),
            this.model.set(e);
        }
        updateUser(t) {
          const e = this.model.get(),
            i = e.findIndex(e => e.id === t.id);
          (e[i] = t), this.model.set(e);
        }
        removeUser(t) {
          const e = this.model.get(),
            i = e.findIndex(e => e.id === t);
          e.splice(i, 1), this.model.set(e);
        }
      }
      var ie = i('C05f'),
        ne = i('wqq/');
      class se {
        constructor(t, e, i, n) {
          (this._data = new ie.a(t)),
            (this.data$ = this._data.asObservable().pipe(
              Object(tt.a)(t =>
                e ? (n ? n(t) : JSON.parse(JSON.stringify(t))) : t
              ),
              i ? Object(ne.a)(1) : Object(tt.a)(t => t)
            ));
        }
        get() {
          return this._data.getValue();
        }
        set(t) {
          this._data.next(t);
        }
      }
      const re = (() => {
        let t = class {
          create(t) {
            return new se(t, !0, !1);
          }
          createMutable(t) {
            return new se(t, !1, !1);
          }
          createMutableWithSharedSubscription(t) {
            return new se(t, !1, !0);
          }
          createWithCustomClone(t, e) {
            return new se(t, !0, !1, e);
          }
        };
        return (
          (t.ngInjectableDef = Object(n.Lb)({
            factory: function() {
              return new t();
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      var oe = i('gX7W');
      const ae = (() => class {})();
      var le = i('8JnZ'),
        ce = i('9qA3'),
        de = i('9Z2Q'),
        he = i('S/D4'),
        ue = i('0S3s'),
        pe = i('eEhu'),
        be = i('yy4G'),
        ge = i('1PzT'),
        me = i('dFIu'),
        _e = i('uWIS'),
        fe = i('a+5/'),
        ve = i('ifl5'),
        ye = i('P9AZ'),
        xe = i('NxuZ'),
        Oe = i('5i2S'),
        De = i('PCNd');
      const we = { title: 'File Upload' },
        ke = { title: 'Config' };
      class Pe {}
      const je = Object(A.v)('[Todos] Add', (t, e = Object(Qt.v4)()) => ({
          name: t,
          id: e
        })),
        Ce = Object(A.v)('[Todos] Toggle', Object(A.B)()),
        Ee = Object(A.v)('[Todos] Remove Done'),
        Re = Object(A.v)('[Todos] Filter', Object(A.B)()),
        Ie = {
          items: [
            { id: Object(Qt.v4)(), name: 'Open Todo list example', done: !0 },
            { id: Object(Qt.v4)(), name: 'Check the other examples', done: !1 },
            {
              id: Object(Qt.v4)(),
              name: 'Use Angular ngRx Material Starter in your project',
              done: !1
            }
          ],
          filter: 'ALL'
        },
        Se = Object(A.x)(
          Ie,
          Object(A.A)(je, (t, e) =>
            Object.assign({}, t, {
              items: [{ id: e.id, name: e.name, done: !1 }, ...t.items]
            })
          ),
          Object(A.A)(Ce, (t, e) =>
            Object.assign({}, t, {
              items: t.items.map(t =>
                t.id === e.id ? Object.assign({}, t, { done: !t.done }) : t
              )
            })
          ),
          Object(A.A)(Ee, (t, e) =>
            Object.assign({}, t, { items: t.items.filter(t => !t.done) })
          ),
          Object(A.A)(Re, (t, e) => Object.assign({}, t, { filter: e.filter }))
        );
      function Ae(t, e) {
        return Se(t, e);
      }
      const Te = Object(A.v)('[Stock] Retrieve', Object(A.B)()),
        Le = Object(A.v)('[Stock] Retrieve Success', Object(A.B)()),
        Fe = Object(A.v)('[Stock] Retrieve Error', Object(A.B)()),
        Me = Object(A.x)(
          { symbol: 'GOOGL', loading: !1 },
          Object(A.A)(Te, (t, { symbol: e }) =>
            Object.assign({}, t, {
              loading: !0,
              stock: null,
              error: null,
              symbol: e
            })
          ),
          Object(A.A)(Le, (t, { stock: e }) =>
            Object.assign({}, t, { loading: !1, stock: e, error: null })
          ),
          Object(A.A)(Fe, (t, { error: e }) =>
            Object.assign({}, t, { loading: !1, stock: null, error: e })
          )
        );
      function qe(t, e) {
        return Me(t, e);
      }
      const Be = (function() {
        var t = { EntitiesOnly: 0, Both: 1, None: 2 };
        return (
          (t[t.EntitiesOnly] = 'EntitiesOnly'),
          (t[t.Both] = 'Both'),
          (t[t.None] = 'None'),
          t
        );
      })();
      function Ne(t) {
        return function(e, i) {
          const n = {
              ids: [...i.ids],
              entities: Object.assign({}, i.entities)
            },
            s = t(e, n);
          return s === Be.Both
            ? Object.assign({}, i, n)
            : s === Be.EntitiesOnly
            ? Object.assign({}, i, { entities: n.entities })
            : i;
        };
      }
      function ze(t, e) {
        const i = e(t);
        return (
          Object(n.W)() &&
            void 0 === i &&
            console.warn(
              '@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.',
              'You should probably provide your own `selectId` implementation.',
              'The entity that was passed:',
              t,
              'The `selectId` implementation:',
              e.toString()
            ),
          i
        );
      }
      function $e(t) {
        function e(e, i) {
          const n = ze(e, t);
          return n in i.entities
            ? Be.None
            : (i.ids.push(n), (i.entities[n] = e), Be.Both);
        }
        function i(t, i) {
          let n = !1;
          for (const s of t) n = e(s, i) !== Be.None || n;
          return n ? Be.Both : Be.None;
        }
        function n(t, e) {
          const i =
            (t instanceof Array ? t : e.ids.filter(i => t(e.entities[i])))
              .filter(t => t in e.entities)
              .map(t => delete e.entities[t]).length > 0;
          return (
            i && (e.ids = e.ids.filter(t => t in e.entities)),
            i ? Be.Both : Be.None
          );
        }
        function s(e, i) {
          const n = {};
          return (e = e.filter(t => t.id in i.entities)).length > 0
            ? e.filter(e =>
                (function(e, i, n) {
                  const s = Object.assign({}, n.entities[i.id], i.changes),
                    r = ze(s, t),
                    o = r !== i.id;
                  return (
                    o && ((e[i.id] = r), delete n.entities[i.id]),
                    (n.entities[r] = s),
                    o
                  );
                })(n, e, i)
              ).length > 0
              ? ((i.ids = i.ids.map(t => n[t] || t)), Be.Both)
              : Be.EntitiesOnly
            : Be.None;
        }
        function r(e, n) {
          const r = [],
            o = [];
          for (const i of e) {
            const e = ze(i, t);
            e in n.entities ? o.push({ id: e, changes: i }) : r.push(i);
          }
          const a = s(o, n),
            l = i(r, n);
          switch (!0) {
            case l === Be.None && a === Be.None:
              return Be.None;
            case l === Be.Both || a === Be.Both:
              return Be.Both;
            default:
              return Be.EntitiesOnly;
          }
        }
        return {
          removeAll: function(t) {
            return Object.assign({}, t, { ids: [], entities: {} });
          },
          addOne: Ne(e),
          addMany: Ne(i),
          addAll: Ne(function(t, e) {
            return (e.ids = []), (e.entities = {}), i(t, e), Be.Both;
          }),
          updateOne: Ne(function(t, e) {
            return s([t], e);
          }),
          updateMany: Ne(s),
          upsertOne: Ne(function(t, e) {
            return r([t], e);
          }),
          upsertMany: Ne(r),
          removeOne: Ne(function(t, e) {
            return n([t], e);
          }),
          removeMany: Ne(n),
          map: Ne(function(t, e) {
            return s(
              e.ids
                .reduce((i, n) => {
                  const s = t(e.entities[n]);
                  return (
                    s !== e.entities[n] && i.push({ id: n, changes: s }), i
                  );
                }, [])
                .filter(({ id: t }) => t in e.entities),
              e
            );
          })
        };
      }
      const He = Object(A.v)('[Books] Upsert One', Object(A.B)()),
        Ue = Object(A.v)('[Books] Delete One', Object(A.B)()),
        Ye = (function(t = {}) {
          const { selectId: e, sortComparer: i } = Object.assign(
              { sortComparer: !1, selectId: t => t.id },
              t
            ),
            n = {
              getInitialState: function(t = {}) {
                return Object.assign({ ids: [], entities: {} }, t);
              }
            },
            s = {
              getSelectors: function(t) {
                const e = t => t.ids,
                  i = t => t.entities,
                  n = Object(A.z)(e, i, (t, e) => t.map(t => e[t])),
                  s = Object(A.z)(e, t => t.length);
                return t
                  ? {
                      selectIds: Object(A.z)(t, e),
                      selectEntities: Object(A.z)(t, i),
                      selectAll: Object(A.z)(t, n),
                      selectTotal: Object(A.z)(t, s)
                    }
                  : {
                      selectIds: e,
                      selectEntities: i,
                      selectAll: n,
                      selectTotal: s
                    };
              }
            },
            r = i
              ? (function(t, e) {
                  const { removeOne: i, removeMany: n, removeAll: s } = $e(t);
                  function r(e, i) {
                    const n = e.filter(e => !(ze(e, t) in i.entities));
                    return 0 === n.length ? Be.None : (l(n, i), Be.Both);
                  }
                  function o(e, i) {
                    const n = [],
                      s =
                        e.filter(e =>
                          (function(e, i, n) {
                            if (!(i.id in n.entities)) return !1;
                            const s = Object.assign(
                                {},
                                n.entities[i.id],
                                i.changes
                              ),
                              r = ze(s, t);
                            return (
                              delete n.entities[i.id], e.push(s), r !== i.id
                            );
                          })(n, e, i)
                        ).length > 0;
                    if (0 === n.length) return Be.None;
                    {
                      const t = i.ids,
                        e = [];
                      return (
                        (i.ids = i.ids.filter(
                          (t, n) => t in i.entities || (e.push(n), !1)
                        )),
                        l(n, i),
                        !s && e.every(e => i.ids[e] === t[e])
                          ? Be.EntitiesOnly
                          : Be.Both
                      );
                    }
                  }
                  function a(e, i) {
                    const n = [],
                      s = [];
                    for (const r of e) {
                      const e = ze(r, t);
                      e in i.entities
                        ? s.push({ id: e, changes: r })
                        : n.push(r);
                    }
                    const a = o(s, i),
                      l = r(n, i);
                    switch (!0) {
                      case l === Be.None && a === Be.None:
                        return Be.None;
                      case l === Be.Both || a === Be.Both:
                        return Be.Both;
                      default:
                        return Be.EntitiesOnly;
                    }
                  }
                  function l(i, n) {
                    i.sort(e);
                    const s = [];
                    let r = 0,
                      o = 0;
                    for (; r < i.length && o < n.ids.length; ) {
                      const a = i[r],
                        l = ze(a, t),
                        c = n.ids[o];
                      e(a, n.entities[c]) <= 0
                        ? (s.push(l), r++)
                        : (s.push(c), o++);
                    }
                    (n.ids = s.concat(
                      r < i.length ? i.slice(r).map(t) : n.ids.slice(o)
                    )),
                      i.forEach((e, i) => {
                        n.entities[t(e)] = e;
                      });
                  }
                  return {
                    removeOne: i,
                    removeMany: n,
                    removeAll: s,
                    addOne: Ne(function(t, e) {
                      return r([t], e);
                    }),
                    updateOne: Ne(function(t, e) {
                      return o([t], e);
                    }),
                    upsertOne: Ne(function(t, e) {
                      return a([t], e);
                    }),
                    addAll: Ne(function(t, e) {
                      return (e.entities = {}), (e.ids = []), r(t, e), Be.Both;
                    }),
                    addMany: Ne(r),
                    updateMany: Ne(o),
                    upsertMany: Ne(a),
                    map: Ne(function(t, e) {
                      return o(
                        e.ids.reduce((i, n) => {
                          const s = t(e.entities[n]);
                          return (
                            s !== e.entities[n] &&
                              i.push({ id: n, changes: s }),
                            i
                          );
                        }, []),
                        e
                      );
                    })
                  };
                })(e, i)
              : $e(e);
          return Object.assign({ selectId: e, sortComparer: i }, n, s, r);
        })({
          sortComparer: function(t, e) {
            return t.title.localeCompare(e.title);
          }
        }),
        Je = Ye.getInitialState({
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
        We = Object(A.x)(
          Je,
          Object(A.A)(He, (t, { book: e }) => Ye.upsertOne(e, t)),
          Object(A.A)(Ue, (t, { id: e }) => Ye.removeOne(e, t))
        );
      function Ze(t, e) {
        return We(t, e);
      }
      const Ge = Object(A.v)('[Form] Update', Object(A.B)()),
        Ve = Object(A.v)('[Form] Reset'),
        Ke = { form: {} },
        Xe = Object(A.x)(
          Ke,
          Object(A.A)(Ge, (t, { form: e }) =>
            Object.assign({}, t, { form: e })
          ),
          Object(A.A)(Ve, () => Ke)
        );
      function Qe(t, e) {
        return Xe(t, e);
      }
      var ti = i('DyCy'),
        ei = i('Ohay'),
        ii = i('xVbo'),
        ni = i('BnVf');
      class si {
        constructor(t, e, i, n, s) {
          (this.actions$ = t),
            (this.store = e),
            (this.translateService = i),
            (this.router = n),
            (this.titleService = s),
            (this.setTranslateServiceLanguage = Object(ti.c)(
              () => () =>
                this.store.pipe(
                  Object(A.C)(T.i),
                  Object(ei.a)(),
                  Object(st.a)(t => this.translateService.use(t))
                ),
              { dispatch: !1 }
            )),
            (this.setTitle = Object(ti.c)(
              () =>
                Object(Q.a)(
                  this.actions$.pipe(Object(ti.d)(ni.f)),
                  this.router.events.pipe(Object(ii.a)(t => t instanceof v.b))
                ).pipe(
                  Object(st.a)(() => {
                    this.titleService.setTitle(
                      this.router.routerState.snapshot.root,
                      this.translateService
                    );
                  })
                ),
              { dispatch: !1 }
            ));
        }
      }
      var ri = i('WRUs'),
        oi = i('w0kG');
      const ai = Object(A.w)('examples'),
        li = Object(A.z)(ai, t => t.todos),
        ci = Object(A.z)(li, t => t.items),
        di = Object(A.z)(li, t => t.filter),
        hi =
          (Object(A.z)(ci, di, (t, e) =>
            'ALL' === e
              ? t
              : t.filter('DONE' === e ? t => t.done : t => !t.done)
          ),
          Object(A.z)(ci, t => !t.some(t => t.done)),
          'EXAMPLES.TODOS');
      class ui {
        constructor(t, e, i) {
          (this.actions$ = t),
            (this.store = e),
            (this.localStorageService = i),
            (this.persistTodos = Object(ti.c)(
              () =>
                this.actions$.pipe(
                  Object(ti.d)(je, Re, Ee, Ce),
                  Object(oi.a)(this.store.pipe(Object(A.C)(li))),
                  Object(st.a)(([t, e]) =>
                    this.localStorageService.setItem(hi, e)
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      var pi = i('EP1h'),
        bi = i('ROBh');
      class gi {
        constructor() {}
        retrieveStock(t) {
          const e = this.buildResult(t);
          return Object(bi.a)(e);
        }
        buildResult(t) {
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
        }
      }
      var mi = i('mWib'),
        _i = i('4e/d');
      const fi = 'EXAMPLES.STOCKS';
      class vi {
        constructor(t, e, i) {
          (this.actions$ = t),
            (this.localStorageService = e),
            (this.service = i),
            (this.retrieveStock = Object(ti.c)(
              () => ({ debounce: t = 500 } = {}) =>
                this.actions$.pipe(
                  Object(ti.d)(Te),
                  Object(st.a)(t =>
                    this.localStorageService.setItem(fi, { symbol: t.symbol })
                  ),
                  Object(mi.a)(t),
                  Object(rt.a)(t =>
                    this.service.retrieveStock(t.symbol).pipe(
                      Object(tt.a)(t => Le({ stock: t })),
                      Object(_i.a)(t => Object(bi.a)(Fe({ error: t })))
                    )
                  )
                )
            ));
        }
      }
      const { selectEntities: yi, selectAll: xi } = Ye.getSelectors(),
        Oi = Object(A.z)(ai, t => t.books),
        Di = (Object(A.z)(Oi, xi), Object(A.z)(Oi, yi)),
        wi =
          (Object(A.z)(Di, T.h, (t, e) => e && t[e.state.params.id]),
          'EXAMPLES.BOOKS');
      class ki {
        constructor(t, e, i) {
          (this.actions$ = t),
            (this.store = e),
            (this.localStorageService = i),
            (this.persistBooks = Object(ti.c)(
              () =>
                this.actions$.pipe(
                  Object(ti.d)(He, Ue),
                  Object(oi.a)(this.store.pipe(Object(A.C)(Oi))),
                  Object(st.a)(([t, e]) =>
                    this.localStorageService.setItem(wi, e)
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      const Pi = 'EXAMPLES.FORM';
      class ji {
        constructor(t, e) {
          (this.actions$ = t),
            (this.localStorageService = e),
            (this.persistForm = Object(ti.c)(
              () =>
                this.actions$.pipe(
                  Object(ti.d)(Ge),
                  Object(st.a)(t =>
                    this.localStorageService.setItem(Pi, { form: t.form })
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      var Ci = i('K5Xz');
      i.d(e, 'ExamplesModuleNgFactory', function() {
        return Ei;
      });
      var Ei = n.nb(a, [], function(t) {
        return n.xb([
          n.yb(512, n.j, n.ab, [
            [8, [l.a, c.a, c.b, d.a, h.b, h.a, u.a, z, Z, Wt]],
            [3, n.j],
            n.w
          ]),
          n.yb(4608, Rt, Rt, [f.d, n.y, P.e, Ct]),
          n.yb(4608, f.m, f.l, [n.t, [2, f.y]]),
          n.yb(4608, S.n, S.n, []),
          n.yb(4608, Zt.c, Zt.c, [
            Zt.i,
            Zt.e,
            n.j,
            Zt.h,
            Zt.f,
            n.q,
            n.y,
            f.d,
            D.b,
            [2, f.g]
          ]),
          n.yb(5120, Zt.j, Zt.k, [Zt.c]),
          n.yb(4608, O.c, O.c, []),
          n.yb(5120, R.a, R.b, [Zt.c]),
          n.yb(4608, m.b, m.b, []),
          n.yb(5120, Gt.c, Gt.j, [Zt.c]),
          n.yb(5120, Vt.b, Vt.c, [Zt.c]),
          n.yb(4608, w.e, m.c, [[2, m.g], [2, m.l]]),
          n.yb(4608, S.b, S.b, []),
          n.yb(5120, Kt.b, Kt.c, [Zt.c]),
          n.yb(135680, Kt.d, Kt.d, [
            Zt.c,
            n.q,
            [2, f.g],
            [2, Kt.a],
            Kt.b,
            [3, Kt.d],
            Zt.e
          ]),
          n.yb(4608, Xt.h, Xt.h, []),
          n.yb(5120, Xt.a, Xt.b, [Zt.c]),
          n.yb(4608, m.a, m.v, [[2, m.f], g.a]),
          n.yb(4608, ee, ee, [re]),
          n.yb(1073742336, D.a, D.a, []),
          n.yb(1073742336, m.l, m.l, [[2, m.d], [2, w.f]]),
          n.yb(1073742336, oe.d, oe.d, []),
          n.yb(1073742336, Bt, Bt, []),
          n.yb(1073742336, f.c, f.c, []),
          n.yb(1073742336, ae, ae, []),
          n.yb(1073742336, S.m, S.m, []),
          n.yb(1073742336, S.d, S.d, []),
          n.yb(1073742336, y.g, y.g, []),
          n.yb(1073742336, g.b, g.b, []),
          n.yb(1073742336, m.u, m.u, []),
          n.yb(1073742336, le.c, le.c, []),
          n.yb(1073742336, ce.b, ce.b, []),
          n.yb(1073742336, k.g, k.g, []),
          n.yb(1073742336, P.c, P.c, []),
          n.yb(1073742336, Zt.g, Zt.g, []),
          n.yb(1073742336, m.s, m.s, []),
          n.yb(1073742336, m.q, m.q, []),
          n.yb(1073742336, O.d, O.d, []),
          n.yb(1073742336, I.d, I.d, []),
          n.yb(1073742336, R.d, R.d, []),
          n.yb(1073742336, _.a, _.a, []),
          n.yb(1073742336, b.k, b.k, []),
          n.yb(1073742336, de.b, de.b, []),
          n.yb(1073742336, he.a, he.a, []),
          n.yb(1073742336, ue.a, ue.a, []),
          n.yb(1073742336, pe.b, pe.b, []),
          n.yb(1073742336, be.h, be.h, []),
          n.yb(1073742336, ge.b, ge.b, []),
          n.yb(1073742336, ge.a, ge.a, []),
          n.yb(1073742336, m.m, m.m, []),
          n.yb(1073742336, me.a, me.a, []),
          n.yb(1073742336, _e.c, _e.c, []),
          n.yb(1073742336, Gt.i, Gt.i, []),
          n.yb(1073742336, Gt.f, Gt.f, []),
          n.yb(1073742336, fe.c, fe.c, []),
          n.yb(1073742336, Vt.e, Vt.e, []),
          n.yb(1073742336, ve.e, ve.e, []),
          n.yb(1073742336, ye.c, ye.c, []),
          n.yb(1073742336, xe.f, xe.f, []),
          n.yb(1073742336, S.k, S.k, []),
          n.yb(1073742336, Oe.a, Oe.a, []),
          n.yb(1073742336, Kt.g, Kt.g, []),
          n.yb(1073742336, Xt.i, Xt.i, []),
          n.yb(1073742336, m.w, m.w, []),
          n.yb(1073742336, m.n, m.n, []),
          n.yb(1073742336, De.a, De.a, []),
          n.yb(1073742336, v.t, v.t, [[2, v.z], [2, v.p]]),
          n.yb(1073742336, Pe, Pe, []),
          n.yb(
            1024,
            A.I,
            function() {
              return [{}];
            },
            []
          ),
          n.yb(
            1024,
            A.k,
            function() {
              return [
                {
                  key: 'examples',
                  reducerFactory: A.t,
                  metaReducers: [],
                  initialState: void 0
                }
              ];
            },
            []
          ),
          n.yb(1024, A.J, A.P, [n.q, A.I, A.k]),
          n.yb(
            1024,
            A.H,
            function() {
              return [{ todos: Ae, stocks: qe, books: Ze, form: Qe }];
            },
            []
          ),
          n.yb(
            1024,
            A.K,
            function(t) {
              return [t];
            },
            [A.H]
          ),
          n.yb(
            1024,
            A.b,
            function(t, e, i) {
              return [A.Q(t, e, i)];
            },
            [n.q, A.H, A.K]
          ),
          n.yb(1073873408, A.p, A.p, [A.J, A.b, A.h, A.q]),
          n.yb(1024, y.f, o, [$.c]),
          n.yb(512, y.c, y.e, []),
          n.yb(512, y.h, y.d, []),
          n.yb(512, y.b, y.a, []),
          n.yb(256, y.l, void 0, []),
          n.yb(256, y.m, !0, []),
          n.yb(512, y.j, y.j, [y.k, y.f, y.c, y.h, y.b, y.l, y.m]),
          n.yb(512, si, si, [ti.a, A.o, y.j, v.p, ri.a]),
          n.yb(512, ui, ui, [ti.a, A.o, pi.a]),
          n.yb(512, gi, gi, []),
          n.yb(512, vi, vi, [ti.a, pi.a, gi]),
          n.yb(512, ki, ki, [ti.a, A.o, pi.a]),
          n.yb(512, ji, ji, [ti.a, pi.a]),
          n.yb(
            1024,
            ti.i,
            function(t, e, i, n, s) {
              return [ti.e(t, e, i, n, s)];
            },
            [si, ui, vi, ki, ji]
          ),
          n.yb(1073742336, ti.g, ti.g, [ti.f, ti.i, [2, A.q], [2, A.p]]),
          n.yb(1073742336, a, a, []),
          n.yb(256, pe.a, { separatorKeyCodes: [Ci.f] }, []),
          n.yb(256, m.e, m.i, []),
          n.yb(
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
                      { path: 'file-upload', component: U, data: we },
                      { path: 'config', component: Nt, data: ke }
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
    IC1n: function(t, e, i) {
      var n = i('fjNU'),
        s = i('X/SR');
      t.exports = function(t, e, i) {
        var r = (e && i) || 0;
        'string' == typeof t &&
          ((e = 'binary' === t ? new Array(16) : null), (t = null));
        var o = (t = t || {}).random || (t.rng || n)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e))
          for (var a = 0; a < 16; ++a) e[r + a] = o[a];
        return e || s(o);
      };
    },
    'X/SR': function(t, e) {
      for (var i = [], n = 0; n < 256; ++n)
        i[n] = (n + 256).toString(16).substr(1);
      t.exports = function(t, e) {
        var n = e || 0;
        return [
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          '-',
          i[t[n++]],
          i[t[n++]],
          '-',
          i[t[n++]],
          i[t[n++]],
          '-',
          i[t[n++]],
          i[t[n++]],
          '-',
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]],
          i[t[n++]]
        ].join('');
      };
    },
    'YF1/': function(t, e, i) {
      var n,
        s,
        r = i('fjNU'),
        o = i('X/SR'),
        a = 0,
        l = 0;
      t.exports = function(t, e, i) {
        var c = (e && i) || 0,
          d = e || [],
          h = (t = t || {}).node || n,
          u = void 0 !== t.clockseq ? t.clockseq : s;
        if (null == h || null == u) {
          var p = r();
          null == h && (h = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
            null == u && (u = s = 16383 & ((p[6] << 8) | p[7]));
        }
        var b = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
          g = void 0 !== t.nsecs ? t.nsecs : l + 1,
          m = b - a + (g - l) / 1e4;
        if (
          (m < 0 && void 0 === t.clockseq && (u = (u + 1) & 16383),
          (m < 0 || b > a) && void 0 === t.nsecs && (g = 0),
          g >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (a = b), (l = g), (s = u);
        var _ = (1e4 * (268435455 & (b += 122192928e5)) + g) % 4294967296;
        (d[c++] = (_ >>> 24) & 255),
          (d[c++] = (_ >>> 16) & 255),
          (d[c++] = (_ >>> 8) & 255),
          (d[c++] = 255 & _);
        var f = ((b / 4294967296) * 1e4) & 268435455;
        (d[c++] = (f >>> 8) & 255),
          (d[c++] = 255 & f),
          (d[c++] = ((f >>> 24) & 15) | 16),
          (d[c++] = (f >>> 16) & 255),
          (d[c++] = (u >>> 8) | 128),
          (d[c++] = 255 & u);
        for (var v = 0; v < 6; ++v) d[c + v] = h[v];
        return e || o(d);
      };
    },
    fN3Q: function(t, e, i) {
      var n = i('YF1/'),
        s = i('IC1n'),
        r = s;
      (r.v1 = n), (r.v4 = s), (t.exports = r);
    },
    fjNU: function(t, e) {
      var i =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (i) {
        var n = new Uint8Array(16);
        t.exports = function() {
          return i(n), n;
        };
      } else {
        var s = new Array(16);
        t.exports = function() {
          for (var t, e = 0; e < 16; e++)
            0 == (3 & e) && (t = 4294967296 * Math.random()),
              (s[e] = (t >>> ((3 & e) << 3)) & 255);
          return s;
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
