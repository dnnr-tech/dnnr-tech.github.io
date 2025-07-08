'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d83840eaf5088257804d921db3002224",
"version.json": "d6ab652998e645f9209cb523f423671b",
"index.html": "9e2adf9bc1d9b130b4f56e983f818ddc",
"/": "9e2adf9bc1d9b130b4f56e983f818ddc",
"CNAME": "cb8ea1596dc1b61e7d911f25e4ca4e5a",
"main.dart.js": "631ec0230cadba580753445656886937",
".well-known/apple-app-site-association": "b133efc645d6bb262c7582dfbf5f661c",
".well-known/assetlinks.json": "e0f362a450868435bcacc3396814afa1",
"404.html": "9713a7c311ecf598aa58ddb222d16ea8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "ce766dc837901ace890cf7c6980d6829",
"icons/Icon-192.png": "1caca835fb641e6e9ee0abdf284cac77",
"icons/Icon-maskable-192.png": "1caca835fb641e6e9ee0abdf284cac77",
"icons/Icon-maskable-512.png": "6c3f2179f760dc7360d447a34cee125d",
"icons/Icon-512.png": "6c3f2179f760dc7360d447a34cee125d",
"manifest.json": "16710106a412c5a067f3db45a927069f",
".git/config": "3951da49091ddc80cd53540baf91c1bc",
".git/objects/0c/083d3144fd4787a2f37d1e66ef9c6a3128af27": "a1f62ab081896a248124ad217498547b",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/3dcf2afe55081cf8be4b95e7ea82e1c0cd21c3": "a5dcd31cc7843c1342c67f487af56129",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/f409971a70de9bf120b1c46464e2a524d419cd": "0455dee199ad93943d5390d029859986",
".git/objects/33/b108fb5f7829f85a3a3c52db97467ecd025e21": "350cde1fc8b13efbf476bf6521f8798c",
".git/objects/ac/ee62f62df1c5c71f0439eff99166b2d6404d71": "c66c412c69136c620d3284d60aafbff4",
".git/objects/d8/4ed151bd7dfac204a7fa12abe2592286f109ea": "9e2061af498dd39282b62e421df66679",
".git/objects/e2/c1880039e84bc8f51d95e3566d62a2c1bdec02": "0f5d37dd777d901a7e8a921e2ed381c8",
".git/objects/ee/036fdf96a2415ab18429b32f459c1f188387ca": "7ce5ef128a424d15d6a44d6e16a19654",
".git/objects/ee/a523a28cf45409f91b2eb5c41e34692d24e504": "8e5c590a16533f4029665d0da542e501",
".git/objects/ee/d7bc256062194f6ca2580eec5923620e2ea353": "0eeb0d42615617d302fc745c92fbe7ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f4569c73661757e3402d92727ae1aceab0fec9": "2fcb6f0d7f82f6e523806587d2c1bfae",
".git/objects/ed/43607c057f68589f3a9f7130805c507120fd85": "d6387be440d5949f99387d2e38e9b02c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/f343d8ad4ba7aab3a0b6113cdc603786f2cc25": "0a8390ef409199cf3559320142b8d501",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/53fb6a7d01df05ab77d3efc29a5be9c71a5afe": "2e00fc91668f832918743a7b3b664395",
".git/objects/7c/d1b6284131c4c41118d85967c8bacbf93a4d11": "9d9723a07a9a2dfb7b493dac693d214f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/072f2175ae6f5ab67aaf324f19014226fc8148": "6e1f64471b3d129e76b5bea201f86e20",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/7e/3df9d39be3982c6ea01140519755c5dc70129a": "62bd9e937104cef111c01585eccac03a",
".git/objects/19/4fb209f230409bfcfe20919156b418bb2a9dd5": "a0d02c88d80d2230214bddd473b0afb9",
".git/objects/2f/ff19031949c67c43dd3bc67d7575fc080beca0": "0c6e8c57d2babf74758cf17ce20c39d6",
".git/objects/6b/ec488a4af49d8aa5e4a5cb2c594dc0eb195546": "420922a48244acda1069a87609e1da03",
".git/objects/07/5dcb8592d0f6503c6b0204dd912bab2d0603d9": "541768cc0701ddf81351713c6c131ccf",
".git/objects/6e/7e14c9d7fd8e69a30ffc655cc0e02b692c25c7": "a4c2b13d2ee6b4b77aa00dfee1c4233c",
".git/objects/3a/4fefa19a43727ec3d67d300ab4cf29be8fdb9f": "5676d6431cc9b65c78f7253eb6aa8ef6",
".git/objects/53/40074ac643ef419b6dd6961a354137e0a0f8a1": "9497b6be25e2c711e7046e92033b5611",
".git/objects/53/67ecaf23716a43e979e3a516003e8971c6e26b": "0ad7450bef45118a9559aee8a8aea7e3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/277c4b6e97a4d885a569ea827839970a3de9de": "66fc5ae561b5986e335892a53971efa0",
".git/objects/6d/fd0b4b505dc5cfb7c344fe18c9421466a648ea": "e188f7e7b1f1db0c687caa38c9b9a980",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/e547b59adb36ff3a3aa836ef6f5e866ef122db": "559c79c91a9176eddf367889d65bcec6",
".git/objects/97/3412dda7ff481d28dad4a6f87dc2c593c9164a": "53bd9994f5f2f89893d28b3f3610d214",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/576ffd84d7c3e69fc8146a8d794f8aab3460ac": "53770fa2efbce36f1a68d7693b4c5df6",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/d1e6695f7912749f0740c0432f1f60a32a9aa4": "ab72692d14ec8e4fd743b6e5729d89a1",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/a8/a3952bafca15fa4cfd17b81c8abb4e21ad10a2": "2427a8e3966939f92023ae5333260493",
".git/objects/b0/5b0e4e2654aa661356719cacebd06e49032da0": "c8521f215df951da3a0019bfbc6f5bd7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/a5b71ee6defef61c3d39c49f62aaee40da78d2": "0c45ceadc49cae38860b1babe5448c8c",
".git/objects/cc/22074a35ffbc1e5435f5314aa14e3dee235e14": "6533e4833bea2fc7991f222699a02b14",
".git/objects/cc/862ff20e1a38212b003c87fe13bd124e032477": "cd0fad284666879dc2b1663bbf622d28",
".git/objects/e6/0b25f0bfc5ff5f707d8e27b51926431c857d84": "cc95fa9602cc76528a6e5ee99087566a",
".git/objects/f6/ba3841ba67999073d1b88f69fe3febb4dfca9e": "8a96c90ee778c1f76234786b4cda9bca",
".git/objects/f1/39cd22479127273679b85fa11ca2b439bac08b": "46c3118cbe7fd785125e6e872fc038ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/23/6713ae9ad09932ae6b92911b9392b5c080c547": "248d25e79cb6adeaed53764fcb8ff2d7",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/981135c88902b1612b81c896213f02f436de04": "6aea0f10fd032327473d91756718f4fb",
".git/objects/8c/929ea254dc849e4f875a966b577ae6138bfd25": "9858587e883de5600780b58024a653c0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/ca63afa5891182258c7fe648f20dce14ffa5f9": "0b21633b842dc4353454a9e1a50abe6a",
".git/objects/1c/bf2ab6ae860f748e392e7c7d6a28694ac9d107": "a3db8099de770e5c8ccb2344279111e0",
".git/objects/47/aa624d479f43d8be9b35157b3eee7c48521551": "baeeab46e5d856fa27a3789518285503",
".git/objects/78/625f8c6c65aa255d78d6c30e36d28e522a9550": "ba98fbb8fc668d465fd0dc8bcad0db10",
".git/objects/7f/f4e02f5f108fc55235605ee89ccd138b82ad19": "fd604318de7a7e0d2b4c4e4b284af86d",
".git/objects/14/215f802f5400338da15882d65ba1b1abe66c0b": "6bdfe8a0ebdd1b8f7dde7574a549cd5b",
".git/objects/14/c6b9997f2b894961c6cb3e26ce8833d83b262e": "9e8eb7cc98efa7e669547e31adab303d",
".git/objects/25/311b176b8104b571265dbf947325272c3694c3": "5d5b9822f614bd640ca0478edfd5c333",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cd11fbbc80378a6a8db8039084f5e0a",
".git/logs/refs/heads/main": "32391f4fd3709eae81ea69d77b189b7f",
".git/logs/refs/remotes/deploy/main": "7db743fe01d3039256a07545575026b9",
".git/logs/refs/remotes/origin/main": "85813306573cbf73a1b6a2ae949f56f8",
".git/logs/refs/remotes/dnnr/main": "94b29409c009ffa904d6b2e18819b392",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "adb968f69060d5034b18deedc676fc11",
".git/refs/remotes/deploy/main": "adb968f69060d5034b18deedc676fc11",
".git/refs/remotes/origin/main": "5d0d5d867635ae22345a790f805bfbd3",
".git/refs/remotes/dnnr/main": "fd280438e173232a412a520c860c2d3f",
".git/index": "3faa2ffe54ea1ed999839d5b28575b87",
".git/COMMIT_EDITMSG": "c93b428c258801bc1aa249c7010c0c04",
".git/FETCH_HEAD": "058f104959089c4780b4e619ff6dd2df",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "eecd8b9da7b2bc5fcc35ae31cb389126",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "09b9459c8b7b8654a0e1a72d4d05231d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
