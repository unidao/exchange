(this.webpackJsonpuniswap=this.webpackJsonpuniswap||[]).push([[6],{988:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 9 10",fill:"currentColor"},e),a.a.createElement("path",{d:"M5.298 0H4.24v7.911h-.075L1.256 4.932l-.717.735L4.769 10 9 5.667l-.718-.735-2.908 2.979h-.076V0z",fill:"currentColor"}))}},989:function(e,t,n){"use strict";var r=n(31),a=n(42),i=n(36),u=n(20),c=n(37),o=n(90),l=n(3),s=n(0),m=n.n(s),f=n(4),b=n(987),d=n(985);function h(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return g=function(){return e},e}function j(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return j=function(){return e},e}var O=f.d.div(j(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray})),y=f.d.div(g(),(function(e){return e.theme.concreteGray})),E=f.d.div(p(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),w=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(b.a,t)}))(v(),(function(e){return e.theme.royalBlue})),x=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(d.a,t)}))(h(),(function(e){return e.theme.royalBlue})),N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showDetails:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?m.a.createElement(y,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?m.a.createElement(O,{error:i},a):m.a.createElement(m.a.Fragment,null,m.a.createElement(E,{onClick:function(){return e.setState((function(e){return{showDetails:!e.showDetails}}))}},this.state.showDetails?m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,r),m.a.createElement(x,null)):m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,n),m.a.createElement(w,null))),this.renderDetails())}}]),t}(s.Component);N.defaultProps={openDetailsText:"Advanced Details",closeDetailsText:"Hide Advanced",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=N},999:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));var r=n(11),a=n.n(r),i=n(21),u=n(7),c=n(3),o=n(0),l=n.n(o),s=n(60),m=n(128),f=n(46),b=n(12),d=n(10),h=n(4),v=n(18),p=n(990),g=n(989),j=n(984),O=n(988),y=n(73),E=n(91),w=n(82),x=n(180),N=n(181),T=n(5);function k(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return k=function(){return e},e}function D(){var e=Object(c.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return D=function(){return e},e}function S(){var e=Object(c.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return S=function(){return e},e}function W(){var e=Object(c.a)(["\n  margin-top: 1rem;\n"]);return W=function(){return e},e}function C(){var e=Object(c.a)(["\n  ","\n  padding: 1rem 0;\n"]);return C=function(){return e},e}function B(){var e=Object(c.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0;\n"]);return B=function(){return e},e}function H(){var e=Object(c.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0.75rem;\n"]);return H=function(){return e},e}function M(){var e=Object(c.a)(["\n  ","\n  min-height: 3.5rem;\n"]);return M=function(){return e},e}function R(){var e=Object(c.a)(["\n  ","\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return R=function(){return e},e}function A(){var e=Object(c.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}function z(){var e=Object(c.a)(["\n  color: ",";\n"]);return z=function(){return e},e}var L=d.ethers.utils.bigNumberify(200),q=900,Z=d.ethers.utils.bigNumberify(1e3),G=h.d.span(z(),(function(e){return e.theme.royalBlue})),I=h.d.div(A(),(function(e){return e.theme.flexRowNoWrap})),P=Object(h.d)(O.a)(R(),(function(e){return e.theme.flexRowNoWrap}),(function(e){var t=e.theme;return e.active?t.royalBlue:t.doveGray})),F=h.d.div(M(),(function(e){return e.theme.flexRowNoWrap})),U=h.d.div(H()),V=h.d.div(B()),J=h.d.div(C(),(function(e){return e.theme.flexColumnNoWrap})),K=h.d.div(W()),Q=h.d.div(S(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),X=h.d.span(D(),(function(e){return e.theme.doveGray})),Y=h.d.div(k());function $(e,t,n){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18));return a?e.mul(i).div(n).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))):n.mul(i).div(e).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r)))}}catch(u){}}(e,18,t,n,arguments.length>3&&void 0!==arguments[3]&&arguments[3])}function _(e){if(e){var t=e.mul(L).div(d.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(d.ethers.constants.Zero)?d.ethers.constants.Zero:n,maximum:r.gt(d.ethers.constants.MaxUint256)?d.ethers.constants.MaxUint256:r}}return{}}function ee(e){var t=e.params,n=Object(b.useWeb3Context)(),r=n.library,c=n.account,h=n.active,O=Object(s.b)().t,k=Object(E.e)();Object(o.useEffect)((function(){Object(f.a)().push(window.location.pathname+"")}),[]);var D=Object(o.useState)(t.poolTokenAddress),S=Object(u.a)(D,2),W=S[0],C=S[1],B=Object(o.useState)(t.poolTokenAmount?t.poolTokenAmount:""),H=Object(u.a)(B,2),M=H[0],R=H[1],A=Object(o.useState)(),z=Object(u.a)(A,2),L=z[0],ee=z[1],te=Object(o.useState)(),ne=Object(u.a)(te,2),re=ne[0],ae=ne[1];Object(o.useEffect)((function(){try{var e=d.ethers.utils.parseUnits(M,18);ae(e)}catch(t){""!==M&&ee(O("inputNotValid"))}return function(){ee(),ae()}}),[O,M]);var ie=Object(w.c)(W),ue=ie.symbol,ce=ie.decimals,oe=ie.exchangeAddress,le=Object(o.useState)(),se=Object(u.a)(le,2),me=se[0],fe=se[1],be=Object(x.b)(c,oe),de=Object(x.b)(oe,"ETH"),he=Object(x.b)(oe,W);Object(o.useEffect)((function(){re&&be&&(re.gt(be)?ee(O("insufficientBalance")):ee(null))}),[be,O,re]);var ve=Object(y.e)(oe),pe=be&&me&&!me.isZero()?be.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(me):void 0,ge=pe&&Object(T.a)(pe,16,4),je=de&&pe&&de.mul(pe).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),Oe=he&&pe&&he.mul(pe).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),ye=de&&me&&!me.isZero()?de.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(me):void 0,Ee=he&&me&&!me.isZero()?he.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(me):void 0,we=ye&&re?ye.mul(re).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,xe=Ee&&re?Ee.mul(re).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Ne=we?_(we).minimum:void 0,Te=xe?_(xe).minimum:void 0,ke=Object(o.useCallback)((function(){ve&&ve.totalSupply().then((function(e){fe(e)}))}),[ve]);function De(){return(De=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.a.event({category:"Pool",action:"RemoveLiquidity"}),t=Math.ceil(Date.now()/1e3)+q,e.next=4,ve.estimate.removeLiquidity(re,Ne,Te,t);case 4:n=e.sent,ve.removeLiquidity(re,Ne,Te,t,{gasLimit:Object(T.b)(n,Z)}).then((function(e){k(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){return ke(),r.on("block",ke),function(){r.removeListener("block",ke)}}),[ke,r]);var Se=function(e){return l.a.createElement(G,null,e)};function We(){return m.a.event({category:"TransactionDetail",action:"Open"}),l.a.createElement("div",null,l.a.createElement("div",null,O("youAreRemoving")," ",Se("".concat(Object(T.a)(we,18,4)," ETH"))," ",O("and")," ",Se("".concat(Object(T.a)(xe,ce,Math.min(ce,4))," ").concat(ue))," ",O("outPool")),l.a.createElement(K,null,O("youWillRemove")," ",Se(Object(T.a)(re,18,4))," ",O("liquidityTokens")),l.a.createElement(K,null,O("totalSupplyIs")," ",Se(Object(T.a)(me,18,4))),l.a.createElement(K,null,O("tokenWorth")," ",Se(Object(T.a)(ye,18,4))," ETH ",O("and")," ",Se(Object(T.a)(Ee,ce,Math.min(4,ce)))," ",ue))}var Ce=h&&c,Be=null===L,He=$(de,he,ce),Me=Object(N.b)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:O("poolTokens"),allBalances:Me,extraText:be&&function(e){return"Balance: ".concat(e)}(Object(T.a)(be,18,4)),extraTextClickHander:function(){if(be){var e=be;e.gt(d.ethers.constants.Zero)&&R(Object(T.a)(e,18,18,!1))}},onCurrencySelected:C,onValueChange:R,value:M,errorMessage:L,selectedTokenAddress:W}),l.a.createElement(j.a,null,l.a.createElement(I,null,l.a.createElement(P,{active:Ce,alt:"arrow"}))),l.a.createElement(p.a,{title:O("output"),allBalances:Me,description:we&&xe?"(".concat(O("estimated"),")"):"",key:"remove-liquidity-input",renderInput:function(){return we&&xe?l.a.createElement(F,null,l.a.createElement(U,null,"".concat(Object(T.a)(we,18,4,!1)," ETH")),l.a.createElement(V,null," + "),l.a.createElement(U,null,"".concat(Object(T.a)(xe,ce,Math.min(4,ce))," ").concat(ue))):l.a.createElement(F,null)},disableTokenSelect:!0,disableUnlock:!0}),l.a.createElement(j.a,{key:"remove-liquidity-input-under",hideBottom:!0},l.a.createElement(J,null,l.a.createElement(Q,null,l.a.createElement(X,null,O("exchangeRate")),He?l.a.createElement("span",null,"1 ETH = ".concat(Object(T.a)(He,18,4)," ").concat(ue)):" - "),l.a.createElement(Q,null,l.a.createElement(X,null,O("currentPoolSize")),de&&he&&(ce||0===ce)?l.a.createElement("span",null,"".concat(Object(T.a)(de,18,4)," ETH + ").concat(Object(T.a)(he,ce,Math.min(ce,4))," ").concat(ue)):" - "),l.a.createElement(Q,null,l.a.createElement(X,null,O("yourPoolShare")," (",ge&&ge,"%)"),je&&Oe?l.a.createElement("span",null,"".concat(Object(T.a)(je,18,4)," ETH + ").concat(Object(T.a)(Oe,ce,Math.min(ce,4))," ").concat(ue)):" - "))),function(){var e="",t=!1;return L?(e=L,t=!0):W&&"ETH"!==W?re?c||(e=O("noWallet"),t=!0):e=O("enterValueCont"):e=O("selectTokenCont"),l.a.createElement(g.a,{key:"context-info",openDetailsText:O("transactionDetails"),closeDetailsText:O("hideDetails"),contextualInfo:e,isError:t,renderTransactionDetails:We})}(),l.a.createElement(Y,null,l.a.createElement(v.b,{disabled:!Be,onClick:function(){return De.apply(this,arguments)}},O("removeLiquidity"))))}}}]);
//# sourceMappingURL=6.48ded952.chunk.js.map