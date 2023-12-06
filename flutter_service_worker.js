'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7269fa2508548e4032c455818f1e321",
".git/config": "1a85dd1f41d7c6f9161c1a6ce679e5af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "46278a002c3ff1d6fe34f96993d0cd0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04c807e764986386172a875eec982343",
".git/logs/refs/heads/master": "04c807e764986386172a875eec982343",
".git/logs/refs/remotes/origin/master": "f95165d6f29f375ea27d407d621ec1e4",
".git/objects/01/c3f34470d4f482c717554ae9ef0ce9976cec18": "a6671f928db2f9b0067594c3b91a1532",
".git/objects/04/5a70915d3f95e647eaa4e1643ba016de164b24": "0b60c45914dcb00791b7681ee0b720ac",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/1c/545750b4ec2685baa61be8ac25aaa7862130bc": "5124ff0265b6fe2d78d4b141c22067fb",
".git/objects/22/2a2b6e693537a7d702b7df526202bc161166a4": "effbad3af631a99f00596776ebb59afe",
".git/objects/22/f4c79d5cb96f6ebec37cdbd0c3efd35b50af33": "de10f8ea7271c08f54bf15a1e4d4e275",
".git/objects/23/d307397e279434cc709722958139cd71a4a0a3": "43de5d3cd8d40b1d167071bf2f96a8e4",
".git/objects/2b/49042a294e2de6e3483831a67e8a89972485b2": "c554b3b9964064f07d4b20ef0974383c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/4ea2f0e0dda68af459d09fc0ff11332110505f": "f6f76a5a1b7199e208e830a522f4a889",
".git/objects/39/43dbfb7d0cb3f856c78abbe112f8df00c0a9bb": "77920b9b23870a4638c6a123d2b35921",
".git/objects/39/f912f89ef7fa27aa8e852063047faa2a6f23ff": "c3e41a2b744cf71d35cee1ada23dc707",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/3e/cd2ba3813fd86f6ac7a59c7c868a539bd8d2e4": "ff0bc364d08bf953c798024c2f91ebcc",
".git/objects/40/26bd286462f3e296d3c2635fc246c8a012fb8f": "66aea56b9c8a7ecbaac14695d2bcd23f",
".git/objects/40/c704ce34166579824c28cd738c1f4903dc5976": "cd98466b1a94ce70235c5be690ae683f",
".git/objects/43/283023ef1d5eb580f7fcda83fd03dcf37a9873": "6902817d7c3fb0d14539d2e238ace4ee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/dd59bb1ddb5c4f832449e53db8bbf816ed07b3": "7014821cf04a3748f15222ab1512424e",
".git/objects/4a/aa6428c2d68443219b056dcaf9d0ac5da17bef": "c7fe122dd44560486db74049dcf45846",
".git/objects/4b/7bbd7c816ab66885ce15c2129e1a47b4b2a5e1": "00e47d2b9712a95fb5824840ef436dec",
".git/objects/4f/c57d25d0dbeebe2258827d2cb1a2e5c3200574": "83660f56c1239c62989792abca0cd784",
".git/objects/52/bfe730e837e7ad85bba807437817827e064912": "32200b9a47dfeb99cead7decb9c1d32e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/80a817f38615fc4ac3a6fb258f242a35f7a765": "173909731436256c580b6563001aaa8f",
".git/objects/55/2032a1a2fd9cbc38295aa66c5dca1c13749517": "d24cdf0fb7ee2700674895dc2751b367",
".git/objects/56/a5fd53b9209cf99e07514141c7ba623a4a9626": "4568fb3c0eb494296934384cdafa5177",
".git/objects/57/5c375805a77a36e946abd89a169371f5d896df": "37c420d33bc5b8b6aa4a360b1a437a28",
".git/objects/59/c6fe1392f70992abd25e47d196da72bde73258": "fd87003b154619abb6323098b04e088e",
".git/objects/5f/c77884e57949f090abe3c3c93cdcd9e9d6e8cf": "e1b64f46b0dafbdda30376be9f64d081",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/67/caee76387eb95b1d39d018a1680d11b7efd745": "42d434fa84bf30d8a0c9187ac2f5f956",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/76/28006fcc1c591cb55e8a98516a50b5bc8ea84c": "88ab27f261e192f992ff796866c895fd",
".git/objects/7a/4a626b585de66233f275af8a0ef5145f4bf4ca": "cab36ec86ec699dd0d603b0ce1293952",
".git/objects/7b/58da14ee62404697bc48782e434a4648a650c1": "a4cada4fd0f0cb5a5fd3848af7487215",
".git/objects/7f/6979aabea094939ed32f794dfd9b37a156d41f": "054bce69964b2df66273c6d7af14dfd2",
".git/objects/87/482fc6627512a389f87a39446d8713929724d4": "a55a0ca69a462afd7484521ea8205c06",
".git/objects/88/362dd85fda74338cd0407e292d14bc417d75c3": "e25b58934afee5b19897b6fafdd28a34",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3fbce2898222074a3b24e04e6d6fe00d5b2cf2": "0e72ec79a2f355d3da16b78732c1b954",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/5d0e4ae4a8b867d8cde943cf696cc1a70a5c9a": "344ff541433a7c33c6f4874a3a04903c",
".git/objects/92/15622e03367c935fd7da5acfb5da28683e438a": "fde3ea8316ffd43b473b86090f86c27a",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/c2b2fa5122303f6ee1b20c3bdc70ce4f3edc4c": "f3efe4554436b1e502dda41850b5777a",
".git/objects/a5/4153e05a48b84f9a29a9eb1450bea4c47d449c": "d87ff909c9c6248f5a38174f318bacf9",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a6/5e24e7eb566a9bd5d52d8e1e7bcc5b3038682f": "f9d27932b7090c448930b7ee3889a8ba",
".git/objects/a6/9188c77eaee1e1e7003e747f2bdb4a7cf77397": "3db098b5607ce5298099a08622a35d63",
".git/objects/ad/dee49b6b4e84e76d7e89e96757189015720eb3": "dd340e587eeca37ba5676277d58aee77",
".git/objects/b1/93a7e07189c07dcc6d29ed18cbecae344825a2": "c4df59d863b0e32502671e93977555dd",
".git/objects/b6/104675df97f7d37bd3b047b00911ecb63fef9b": "99403fce4976e4dc097e6c4269288bd0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b73c0d7ce9094a3c6aaa43aff93541294261e1": "fcbe15642e89ab06396f8c4e576acfc1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/dff36e87c8a7c101dc414998ce0fbd19ba4548": "41b4caa0dabf7f5df43221465fccabb8",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bfe50edad5c3a3f305fac6a2c45723146d5054": "bd1b92f678c9015c122075c5e3ece0fd",
".git/objects/cc/1ca55998dcb96bbd09cc4f4dd392357bc97942": "bea1b6734de943d74ffc9c50077bec65",
".git/objects/ce/ccf39d7a3164ba3fa1dd50c32117b5b8f06adf": "31eb2d84cb977813655954a5e0b308d0",
".git/objects/d0/ff87c37acacc0b02658aa139585a90ec72c716": "85a169706b85cf251fade7042b81d5e3",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/84585b6f75d9ed53d7a4ff6cc0a5702e917eb6": "62ab1f55a0a0a16dcf507f1eb696d8a5",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/8d9cf110b8d53dc1d0964ef2f9ea5f91506545": "1efc5d881b8c3aaca85babbe1900a270",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f5537534b99c76789139a4acb5a62035ad0860": "07be9a35f9a827a00e696068b08d2249",
".git/objects/f6/b5328a6eabfab6181838a823c6b66231bc39ee": "1a3a60e69a3c3124be26d4789fec5d57",
".git/objects/f6/e66a33d621ea75020f9dbf02dbcd7151fbec7f": "d57362ec3b42fff89e40f9dd87c1e8fa",
".git/objects/f8/f6684dd9d5d270c1c2bce9f67a34689d93a427": "dfc0849429b97c0e4f892f5ce1d7e193",
".git/objects/fa/6a0830e5c9a83749bd3e84c1483226cbaceeed": "a24b90e59f6d0a5a375a257824301074",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fd/f99e70dcdf4bc134e2a6846e470138afb6a929": "2b7d26906a439549750b6f32404ac0f2",
".git/objects/fe/524333b6cb727ee2ff1a94cba06fe03ca59486": "65e2f02e3b20804cbe3b3e3fc553dbda",
".git/refs/heads/master": "02b3c7d5a0d7104b4c0d06d7335c2461",
".git/refs/remotes/origin/master": "02b3c7d5a0d7104b4c0d06d7335c2461",
"assets/AssetManifest.bin": "fcb7eff6fa5bd272146bb66be2673c47",
"assets/AssetManifest.json": "801ee2159f7fe2b7b40b89278fa4a43e",
"assets/assets/logos/disrupt_logo.png": "985111f6f6586752f5c621d7faae537d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "884c5379a47fb425b36777977e6137fe",
"assets/NOTICES": "ab0ef72f4f57965b7007e06990413634",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b44041c03fea8e9eb807fd8b34d1181d",
"/": "b44041c03fea8e9eb807fd8b34d1181d",
"main.dart.js": "7b83a5be5f711062b18f6856d7b0774e",
"manifest.json": "aba4a804e379c8f2a113a50009068635",
"netlify.toml": "4666da89b00d5d6339b819f21470c988",
"version.json": "2148a5b8c7e05a9f2731cbede5a8a5d4",
"_redirects": "544445e4ad13016787d49196a7cc7ce6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
