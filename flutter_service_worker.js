'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "013c95b65e4bf38627ee4989cd5cc362",
".git/config": "89a0cf7884a6a95d24d95598c0ec680d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e689f05242af1d182eb895e62624e92",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "feed1adfb7fb09d8dfe72bc4a77ad788",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63c5aa800a017a88fd4c179d66066f2e",
".git/logs/refs/heads/master": "63c5aa800a017a88fd4c179d66066f2e",
".git/logs/refs/remotes/origin/master": "b8ec5bfc0b9e90b8efe6787075dc249d",
".git/objects/00/d63520ba4428a24a00d8bbafe512b59f30e857": "68b4339247ecbcfea57d6328a3e12751",
".git/objects/04/18bfa1dc5ab50ca9e016987c9b5fc2841f82f4": "b7c45e4eb2ae41c5e81400d04353b692",
".git/objects/04/1e7694652f56e97e067d0b26e9bbe3001de7b9": "518561ff9c078a034e964ea6b0a4c1cf",
".git/objects/05/abe3157f541ec533e8f3ae5954fb3098a52c8b": "dc7d45b59506d40fcfdaf17a9a6ec9ef",
".git/objects/08/81492067a290bda9e13fde87387ac95d7bfc3d": "2bd171dbbe1af8340db62f592c009471",
".git/objects/09/3a2613d1a0ddbe66320536265bdd7dfec34605": "9f4e0ae2e32da719f70bf9ec68f1d94b",
".git/objects/09/db42b006ce7ceaf46aa8f98272ec97d8f713b6": "184baf854645cc1c8ca18ee5b8c87f24",
".git/objects/0a/289ffc3e1ea27ccadde0031295ff723225f825": "14f39375008cff2f534416547ced9745",
".git/objects/0d/2e2bdbda995414c3a6482aef46b81f8aeaaf93": "f3e226bab9e42a5e53dc6b967d5d92ae",
".git/objects/0d/e94bb5dcfa7ef34fd11b9bfea89a55959227e5": "e56698f209eb6cffea25677af054d3ac",
".git/objects/0f/69766f24793c9733221c288a3c2dd2dd4fe5a1": "54ed611fa4d33561d64d39ae64829e3d",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/811600be189d7a10fd4b23ab4e7dc91e937403": "9ee6cc1bbf36dfd09b6506656b4fb5ec",
".git/objects/14/63d37b14aaabe4907fab246894721be8198b98": "aab4383d0038fe0b3b3be27a67dce4f6",
".git/objects/14/968a6847000401bcf10cd6a6adef27850c1a19": "779ee0e3ae74147251f7cc4cfdcdef35",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/ea199d1b90b3f841b5f715d7245c2028ed8f28": "e3d776770a6cc5cf38b779ae69e569ec",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/af49a69064c83372644a310eebb3540d6e04fe": "ade15dd8e776577ebbed8efb0e5d6d8d",
".git/objects/22/68f07eb710966e323360ba8fb82962cbb896d9": "71b8072983016c29b3fce224b1afce7f",
".git/objects/24/37254c17920a22e7fce2c61c26477666c90eff": "e7055ddac71fb5e019b4c8931b84ae78",
".git/objects/24/90dbc88ee89f954affa54a281ba1189e2e0443": "4b32280e8153af4f6f3aed40677412f5",
".git/objects/26/9fdcd52a66f2bcc93d197b1513c50071c0fff1": "fde7cc06b0dcc23d2b9fede51ff0531f",
".git/objects/2a/0e29f314b6350e6447a93d30ba409cc86eeea2": "89a76a204e3e6023bab532422691236b",
".git/objects/2a/10ed1248687400d6db16e2ed0833f244856296": "a5abe68058e985994a710a33378a81d1",
".git/objects/2d/c1bfd031cad3a09144a60a9b767489271a14b0": "be1d0411ba6c1863f4827849ab1f77a5",
".git/objects/30/3b4561918810cd7c54201d5a99a8be1040640f": "3a6888fdcf1df85de2293a2e0988699d",
".git/objects/36/46d318633d00e7d5babbc2d93fba28260d39a1": "4b0c5da7cadcb55d06fad867a7a60cf0",
".git/objects/37/4348000df33000f2f45281541521298c634550": "bde644a1d040642535c102c173e05d17",
".git/objects/3d/4cb25b5f06b041c2ab80901215f5762e5badf5": "81e2e4d5f9000a540b587fa9391543b1",
".git/objects/3e/f95255107252351be244c9f122a190ecfc6074": "2d0dfae393797f883df1bd9d330293ee",
".git/objects/44/6b195b230ea211f1d1423b4d1642e7ac8f0058": "12fc6190aff4d519bed392dbd5cf6352",
".git/objects/46/43f0c59c93b569fb7d7a6f1a46c7361a851c0f": "da065c67542ab9de00a81c6336f873c4",
".git/objects/46/9fecd875ebf5ef4ce159bd6d2a04588bfaf855": "e684f1a519cef7ed4dd9f3e13479b920",
".git/objects/4c/817fc6f34a5481d753be139ddf73dc5ed649e0": "13f6446bd049206acaf412c0515e2aff",
".git/objects/4f/9943da5f2411b97f05f5df94cfd576bae15f8c": "780f1c937a9e8e6dc1a299ad02cacf1b",
".git/objects/52/2741fd129f339a00e761a07795507336182f4d": "2f55fa94d37031a1c76b5937592cea06",
".git/objects/54/a0dcd5f242be75e2f650130f0fc44d6c6b78ef": "5b60a67da0798c50a2ce7d1a00088efd",
".git/objects/5b/e83e4ca44961c92edb6e3d372370db9ba52eba": "8670c29b44a279bb92de275a4d1c417e",
".git/objects/5c/14d129b2fc2f99739e39263671fba79100b611": "655620207e4b4a02a2b86da80d2d97df",
".git/objects/5c/e3bb47f47774ed5561a33513943c2118a3afb4": "7796174844b3362f74976305e05f2c34",
".git/objects/5d/b014eed5a108f59fd43e0b0e0bb705f779c246": "05cc607266c0501ace4e1af622e065c8",
".git/objects/60/34657061db00e84d017994a1f4498987a6503e": "e3d3cf5d1db4d83d3f6885e43574ff61",
".git/objects/61/3c6960d2871beadf03914cc14a55d2b642f71f": "a89657187318eeb89be36db375a3cb1d",
".git/objects/62/33c00f430807a848a0b817c5ea7b2889035c38": "672a0f240f7beded70367f300104398b",
".git/objects/64/33359e7f0604cd659f7d5fddef87fa353eaa67": "6ea3e615fcec246be96e5518a7cad361",
".git/objects/66/8b16ed3e66205e7d3bc01ce94144d9f47281e9": "f78d2653ab9c5db35a7984fa155bec4a",
".git/objects/6a/328bbc716b0c248337d98851a86f26c8ccbcd2": "6449e221eca67ed6bc19219fb0601284",
".git/objects/75/c124859b6bdd2af89efa4b1abd6d4a783430a1": "cc862db39278cb4d912ee7d995353a6f",
".git/objects/79/3d258fbbfc62eaaafe376a234b9461cd2564e5": "0147989e8318b2250f361fd3f6818276",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/9018d2d152e70f2558e4163ebb3c8741b70557": "3d92b3b0ea128531200f04e355f37859",
".git/objects/83/c93e26f97ce8df3bd1cf74bc5d4e656c41525c": "637b9ae012848254c4603ec1a5e891d5",
".git/objects/85/d1884e989c50d9bf4ff4fb9275766a4c3b617c": "af76c909d7034f28e24c861c4b52004c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e1add3ea728ef8410da523f2f524d493a805b4": "85585a51f02a982b513b21e8e6d4ca02",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3b6b745b4d71c6a135d5404e4cb2e383ac03fd": "a554f3aa86bdec1a727d57d1dacf231f",
".git/objects/8f/636dd52150c1ad83b21978c616155917881a64": "f57ed8210a43aecbf7ab797dd7433a4a",
".git/objects/90/04a35b5f51e114782880778d777dd43aefdf3d": "f0b8578043e625ea4782ac1fb515dd41",
".git/objects/92/75599bbb51d6966ff618237358a0e96de78c76": "7363a3112256af0ccc68fc7331aa4c66",
".git/objects/94/0643e21bfb6a7a1ec686d5e6d706ff7dc7b901": "2188ea8239576ad55570f90b315774ec",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/6c40ac056d31a45fdf4f4ac177fb0b8af35cba": "34d87fe5b49009e0c504fe9ddaa21237",
".git/objects/98/7c195e0016f87622379b6ac4fc407bbcf1cf6f": "8348317928203be39dfe3d0e3953ce8e",
".git/objects/99/311fb8ffa9a0738a49386e274501de6be87b40": "80cb56ce06d6d86304c86dcf2f978990",
".git/objects/9e/8b20f10a22b3981c90a6a4df9a5819a05345c8": "8910b1e20bb7719ff86c02f7bab179bf",
".git/objects/9e/f072ae5d6c6b13e7fd367266bc8132da8b1d75": "8ef59e282ca07c7c8643cfcc3762276c",
".git/objects/a2/18046de2db7b2e53cabc134cd7cfb27ec9c533": "cba279a05fe1fa874f6036e22e4e231c",
".git/objects/a5/cec3c7d5711b38fe807251364643d17c068663": "6b441cf23571ee333450d184c63e8a2f",
".git/objects/a8/f79d73c9178db853e22fa8d6c11f7728910d68": "a165644a98c15141023744e655417825",
".git/objects/a9/11f5da1c6b4a32ebbb59e2f33192abcf035554": "06dd45e1d6c7b976cb737bfc14d3daea",
".git/objects/a9/1fb55ab0035f43d3e61a871b7b73e6390f50f7": "548a16fe5c98e55eb936a565f8fe238c",
".git/objects/b2/a633d187f5ae7e1407fc58ae5cff6afb0221be": "00f12697859ae078e668bf81ae69fab7",
".git/objects/b4/f24b964c026445f72a776e023bc6e75d45fa1a": "9c1150d40229cbf02103368a15646b93",
".git/objects/b6/dc7c20dca9a4b6b0677f29096bb5ae6347ea40": "1fff848f600e2004ceb4aa99401d9fd4",
".git/objects/b7/067b29fc6b41bfbb8b926b4ee76c4bce89efc0": "94e0ce6c2aea48d8ab9563714e1bd8b1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/00794d7ca7c3aa79329297356fb49734ff7ae6": "d4e9ccb78ec051c78fac2b45333eec43",
".git/objects/bb/35549ffdda273d676686dec7d7be422cf1f6f1": "837c6acceb9925b57fb7930f227111cc",
".git/objects/bb/c6ffbbcf6c12bbde40a32f4617a49255164037": "e6c9c16bcac9c4046092bbb8966a798f",
".git/objects/bc/c766265e78d510867921a56b63cc95f3f32e4a": "a984491da2e49c7f75f93a7df4659b0a",
".git/objects/bc/cbbcb8960f46952d796ddd7a68c812d4b16a5a": "beba4cecb8b0d39be386485b1b026040",
".git/objects/bc/cbd7724b910066e1aed720e0ff4f59cd48c203": "0e573cf1e09e4cccbc3136e83d11855c",
".git/objects/c0/06d26ff03b3ea7dec27d7246b2fad996ca27d4": "5e3d5c402a55e4048f195e0d4971115a",
".git/objects/c1/83e4353912becb8bcfaa429b63133b983dad7a": "ae42a135b1714e9b3629880c6ac9292b",
".git/objects/c2/146e7970c21ea5be04f5b699665d7654be2fe9": "f364cd56178a21f80833a3fd678c09b0",
".git/objects/c4/40845e70aa041efc1e3dfcefac9c06f9073839": "450f818f84c3567571b76003d7777dcc",
".git/objects/c4/c8673b91f0e8320d3cf4cf2c23722760861057": "c4b2c2d5b9b88ab4a43f6373123c6a2f",
".git/objects/c6/8937a1058511e3674f990bc6d2720ee9d41a4a": "10f3cac2cbaa6127853c49ac3c2e2ad9",
".git/objects/c7/05ecd6e7ba73f5ec07c583d7c31e5129dc15bc": "ff8ff0dfb251bbf054a4f9e89ba8d146",
".git/objects/c8/311b9ca64b3cb0423bf75f86d61d6cf473d260": "4bc3fefbdce5762d7565558e17a3ae89",
".git/objects/cb/10b1bc443368516c963103629adf833e1f4a68": "f1a676faaccd26dc0af3c1c190db8e19",
".git/objects/ce/a8ccc52f431e8452d3577dc8cbda9698839884": "68f248cf0f5425758369e5920f6f68f4",
".git/objects/d2/11dc71cfcf41b215959b28f28c4152b3532b48": "24a737a80f16881140d47277031f3df2",
".git/objects/d2/789d44214c14ffbd1ad04bcf304f6c15a82ce9": "7db17b6298275285423dbfb3db1949aa",
".git/objects/d4/ea23d04bba4224b89a6d7ab65929f826874465": "dd5a985d25b6246424c2a30f5447bdd9",
".git/objects/d5/899ca4c1e9acedb0f50b24657a9fbde4541bd8": "6740407d0543f21edee19c2cc8894569",
".git/objects/d5/9caee8ab2a138b1ae63c14d87a91f77fe667ce": "28e988059e531c6d874e225779f23bff",
".git/objects/d8/0e5cecb59001fb593124fa764e7e8258c3c08d": "6af04ea28c9cbd9b1f08af4b2abc90e7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/0656f17b57361b5f8de089f58860b8899cdc37": "8fac810b5ab3eeee04ad00236bdd7f1d",
".git/objects/e0/e65e1fd7e4e86081f1794e54dbaa6ce0909d29": "7640338d7d48bb90a1cd93925bd04992",
".git/objects/e2/25c55067e8549a2ffa57bb645675771647b994": "11cda38ee6047b532727bd59f47d9c4c",
".git/objects/e4/ed74966d17a510d4a0b02c015855106631ea93": "dce40f5aebb35ec78ed1ab49c6e98229",
".git/objects/e8/5ed818247a0ce1d255b6d2476e954e5e69d0ec": "ae02332058a8222a1a6ca16cae343bd9",
".git/objects/ec/bd066778d5e4099920956a453c9e6edb9d341e": "89ada60d891e010e7f68f38a23a6c29a",
".git/objects/f6/da30d6dc69cff977d451306f1641ab1a611bd8": "c6257b362558613b249e513771c7ea09",
".git/objects/f9/c10ead73379bd1255402081a81f105ccd7e0f9": "6d60ac345bf63e55e8c4167366ca4b3a",
".git/objects/fa/4d4a34b719cd90c36d498ecb4794e64ae90893": "10fbd6106c0e5a34c92bfdeb95a23f68",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/b381683a4e2948bb9b527ddeee952f4d5ab598": "dd99b7f41437a8615da8e75df840897e",
".git/ORIG_HEAD": "dc3fd7f85372f03bb6db253e3a80328c",
".git/refs/heads/master": "f5253a8df3c1b78f0aad280f47da89e6",
".git/refs/remotes/origin/master": "f5253a8df3c1b78f0aad280f47da89e6",
"assets/AssetManifest.json": "79e0673139d566c1f1592bccf0f7222f",
"assets/assets/actionbar_camera.png": "def930a3a9c112a9afbb726bf183ce2a",
"assets/assets/actionbar_igtv.png": "bb108894cf47bda201a66190faa6ac3f",
"assets/assets/add.png": "a94c7513d6529de3d756d04f1400f985",
"assets/assets/bookmark.png": "5ba41722b3d6c91f426b965f71278e55",
"assets/assets/comment.png": "8753938d32626f35bce8bb2f8e16df5d",
"assets/assets/direct_message.png": "8c143ff0028bacecda8522da05ea3f31",
"assets/assets/fonts/KakaoBold.woff": "98ea5e9fe5b66354e23ee0d90175da1b",
"assets/assets/fonts/KakaoLight.woff": "1fa068e1d49ebd44544e9da0732a2955",
"assets/assets/fonts/KlavikaBold.otf": "e8a9d7a8c7a90eaca5ea1ca65606636f",
"assets/assets/grid.png": "08bab8ae6b553b28d71bb6fa13f9b7c9",
"assets/assets/heart.png": "fc7a487e3538082ce5b5c66eb4c46e54",
"assets/assets/heart_selected.png": "0dd998737986b101353d34994648a35c",
"assets/assets/home.png": "05b7cb77a7af0fd3eeb498a74c29e400",
"assets/assets/home_selected.png": "21e6bccd220b668ef9dfa13d9ce58ace",
"assets/assets/icon/facebook.png": "7caa5529aeb49069ac85cb82b87b9d13",
"assets/assets/icon/instagram_clone_icon.png": "e70fb4f40c03bec38251628bcb82675b",
"assets/assets/insta_text_logo.png": "840233b947563f7eea9590c170120bea",
"assets/assets/like.png": "6dfaf0675fdb369b979fb5030092b88a",
"assets/assets/loading_img.gif": "fcd8d05ca2a2981b7680f6b1b322c80e",
"assets/assets/profile.png": "c173b90c4b483934315bb9085af330a3",
"assets/assets/profile_selected.png": "dd6e1f316e4379e14252edbd130a6f41",
"assets/assets/saved.png": "2806bb713d4a82e786bb63cb567d5151",
"assets/assets/search.png": "c8f0d798d4490457fdf50b32705bf292",
"assets/assets/search_selected.png": "6a412c30d3e1a59e63d6fc812284d4b5",
"assets/assets/tree.jpg": "55712253671101601bb44dcca7ca7121",
"assets/FontManifest.json": "ad8cc4bce98b9058ab52d5d1d0c43d85",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8deaed3ef7654f2bbd7a185c9b095c2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "75ad4e14caec65a2f08f2ec614d1fc5e",
"main.dart.js": "cebf312ef4e748158cd4a08102ba44f2",
"manifest.json": "f841d3b7708d5b73c88849d6f85f9f13"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
