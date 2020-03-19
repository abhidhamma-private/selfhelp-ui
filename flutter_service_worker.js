'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"main.dart.js": "dca9f448e7e2e4e56384eb50d87e1368",
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
