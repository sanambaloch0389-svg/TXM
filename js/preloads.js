
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BmwiweTg.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CpbbXX8I.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094.CKq4ycFH.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.D8axinzc.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.D4R1lrSU.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a.BlsbPO0-.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.CSuxQyVs.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.BGCbdLQm.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.CYeEzNfz.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786.UYzfUkjY.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.fAodWIua.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.LM7m9FaB.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.DTYdgjaZ.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d.BCB1O5to.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BX1JbjgR.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b.BvpRNGNm.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.BwBT6Ee1.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.q1FpO6jB.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78.BWvwq8Dl.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5.Bl30j75Z.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.z9JI2Kpw.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749.Br5_g5BM.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.BNOKvsui.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.BFw_ZciE.js","/cdn/shopifycloud/checkout-web/assets/c1/b71b03d1.2UDDzQm8.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.Cpu59EN-.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758.CIHBOvKY.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.DpJd6khx.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753.CcJukRiY.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab.RhllyzDR.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f.fSUmMHeI.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.DLiM2rMB.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.BttDeC40.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.D1SAQfdV.js","/cdn/shopifycloud/checkout-web/assets/c1/ee4d5c67.m4VEV7WN.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7.Cog5-tyW.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3.DngzbVwz.js","/cdn/shopifycloud/checkout-web/assets/c1/53e8828a.DjHViVmd.js","/cdn/shopifycloud/checkout-web/assets/c1/4c5b1c9e.BdQK0sCc.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81.BRyEIs0X.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.-1oV7ncd.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.qOSRL953.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.CHs0ZL5s.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548.B73LALZP.js","/cdn/shopifycloud/checkout-web/assets/c1/5f07060a.q6D2KpKr.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304.B751v-10.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.Cl-niuvw.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DRj3vMAG.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.B0wE-IWM.js","/cdn/shopifycloud/checkout-web/assets/c1/f1754c88.Brd5q1On.js","/cdn/shopifycloud/checkout-web/assets/c1/5d731017.UNQBjoVS.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.qPlKj6Xk.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.BUkmNwX_.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.Bx-dlWDl.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.CBETv5Pn.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0.B7raW24v.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226.CLBL_z_i.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0.EKn-rZol.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c.HnHk8JcW.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.BQhWIbcI.js","/cdn/shopifycloud/checkout-web/assets/c1/e59ed41d.MRB7D2B7.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba.DUH5J9nh.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf.CAdDo8oV.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a.Nxoa88MD.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e.D-Zi4Zoz.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860.3gCttoLP.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6.DYmDp8ZQ.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289.DRzI4_3z.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e.D_ftVxxa.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d.B7DCLiHQ.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8.2HeTyHZA.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.ByliXc2X.js","/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6.CwW_AIzI.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656.RNKZGKow.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d.BzTsK0la.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958.BNYkvMkN.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5.Bc3NnY5x.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c.DTMbiRuf.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c.CdQjwic1.js","/cdn/shopifycloud/checkout-web/assets/c1/542b75cf.C-_S3LI1.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557.BvPof8v6.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee.CBQgxqHw.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646.BfWi_anq.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81.ChBezXM1.js","/cdn/shopifycloud/checkout-web/assets/c1/70565d02.1Bp_LzKK.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291.Dadqp5Eq.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1.C_JEseqR.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74.TN-tA2B6.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6.D2SX6Csd.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e.CBeb1f-j.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132.ghdZ8Wrd.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836.CiZVV_UU.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e.CWqcrZ3a.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded.CidFLon1.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116.BCLcjjo1.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3.BXndWoFg.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5.BJPWOA4Z.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36.DH3ac4OP.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00.B_CIi70n.js","/cdn/shopifycloud/checkout-web/assets/c1/71b36506.BMZGKY7X.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.YX_NTCyu.js","/cdn/shopifycloud/checkout-web/assets/c1/e72406f8.BpfR2h1o.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128.BXeTqbmR.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.B07H-k6z.js","/cdn/shopifycloud/checkout-web/assets/c1/5d5cabdf.DBuDiKue.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b.DyOdR0xl.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.Cx57sSL5.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507.ZBi71-Xy.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b.DEsSgFGk.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b.e4QsuNYD.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08.nVjCcZl1.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2.aUQRsOV0.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2.B8AY7tNW.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9.CpJmBxDc.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930.Dh3XXtum.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd.BXjOSl0v.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74.LvIOfy2W.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b.CXE6MBXa.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96.BReKoBmB.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c.DZYOhmk3.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc.CMWZPnt5.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20.DSao6ixu.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c.ByRQfRi8.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18.BigIXXPf.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8.Bss9OsoP.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf.CsRiMvlx.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5.BkGMIO0s.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a.IJFk0p3K.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320.6DdUxlGs.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f.CkjiFeYe.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb.Xnq4sOKR.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664.xaWtvYDu.js","/cdn/shopifycloud/checkout-web/assets/c1/045c921f.BiPRIpj6.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466.CzlJ_Zy0.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3.B3Kre-Ec.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02.DrzANfrD.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416.BXWpLHKA.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a.DWYM7CpL.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9.C0XcAokb.js","/cdn/shopifycloud/checkout-web/assets/c1/05f561d4.DaMl5Fhu.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d.C3z2moVr.js","/cdn/shopifycloud/checkout-web/assets/c1/121bd940.CVLb0LrK.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CGRs8DQS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.Drpcgh6C.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BHJbo22r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4.DiwHZivn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.CW2HhXMu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/69c8bed031.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04c08e5c0e.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/0fde071d7ex9f0ef4a6.B0RErzdh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/605b2a80c9xbaeb52f9.BAjucZ-8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.B5DPTpH4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d4951797f3.UDCqXpbq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8.CIs_ZowJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/f2a87b867b.Cl0Eyn3N.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4d60858badxb036935a.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/65db0eadda.qa_ACxP4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5a34f22f1a.D7MQTDGO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefx27591707.B68J3GgF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7aa3c6599b.C5b9n-0_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760d.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760dxbaeb52f9.4dSOKuBa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6559bc5a39x1573b800.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/89f3b0bff6.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/500596e378xe1c30c9c.CyQZvZOO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/bde15ff106x11e90a44.ak5YUtDE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax11e90a44.CbGDlw5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax6d8a6990.eanpcn-r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d34ebf45edx11e90a44.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51x11e90a44.DrWvAMMF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x11e90a44.DqwdjT1Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x670d76d4.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x03fe6ed3.CVKcAbIN.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96xd17a0c7b.BULdn7yC.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/343ea67e0bx11e90a44.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/401ac968b4x11e90a44.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51.DRJckcGa.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  