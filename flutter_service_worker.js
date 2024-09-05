'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36afede2e5794e67adebe1e33c2ff868",
"version.json": "9e520ac9ecc6399cfdc07af12767e7c0",
"index.html": "10faea3f7aae74d76bcea0d84c120066",
"/": "10faea3f7aae74d76bcea0d84c120066",
"main.dart.js": "7766a39d9559cacbe33fc3ffdafa92c6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/web.yml": "ba521d1450982e836c98641727195439",
"manifest.json": "438fcdafc14a3c9284500257cc53af4a",
"build/web/flutter_bootstrap.js": "3a22cf71f80114a4f52b2e6e3086108a",
"build/web/version.json": "9e520ac9ecc6399cfdc07af12767e7c0",
"build/web/index.html": "10faea3f7aae74d76bcea0d84c120066",
"build/web/main.dart.js": "7766a39d9559cacbe33fc3ffdafa92c6",
"build/web/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "438fcdafc14a3c9284500257cc53af4a",
"build/web/.git/config": "1851a292c334423972316adf2dab3f7a",
"build/web/.git/objects/0d/ebe4f333d5d8c98111cd475fa771dd75e1fd95": "3022122b34417fae583787beef140c5a",
"build/web/.git/objects/3e/3944a91643c4e73070b410e61aec4653b17612": "32989282d82e862fbf1a5ab760a5c195",
"build/web/.git/objects/3b/a7539bd19ec3d9c954c4061cd7f63f06361dce": "5a9915ce514b2cf06a04dbfcfb17a397",
"build/web/.git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
"build/web/.git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
"build/web/.git/objects/67/1e7a219eec67325d6a7ec00eab8eb53bac44a8": "f17ff1aea529a064f4acb3a9bb40c06a",
"build/web/.git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
"build/web/.git/objects/34/c251d681548cac9b7980ffa9bc114a7efd7d04": "311a163136b318c57214f9d4a2553fdf",
"build/web/.git/objects/9c/5520c43eab8f60fc8dcaa52b343b81b3a02caa": "013cce9d9a90c560faebb47da1329386",
"build/web/.git/objects/d7/4bda9a7130cfe6df363ec8217c1636352b8165": "810a138b60b01ad77afa54c9e17a5252",
"build/web/.git/objects/d7/e1f6b3ba363fca3eb058a564e7544d5a266325": "c3172523043bc9504cc519f5f8be729e",
"build/web/.git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
"build/web/.git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
"build/web/.git/objects/a2/b19de0b6cfdea54600aace0e60218f1fd20f50": "25d710a7462e475186013dd494dad012",
"build/web/.git/objects/a5/3b21c6947d3ce0df6001573f64b6a87daf0bc1": "8a07ad32b264f8ec4cc1faf119870441",
"build/web/.git/objects/bd/7c59805588042b87ac20fcbaa2ac5648d1bf62": "0309dd772c66db986bfc33a91ca5d848",
"build/web/.git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"build/web/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"build/web/.git/objects/e2/c6a0e075b775846a6a4e3a9583bf029110dfaa": "9701c862708a524f6065b46507d5292f",
"build/web/.git/objects/f4/3c8663d2fec0725a73b29c5c4c8712c118214d": "ab1459cd7004b3c81081aeaf8d89921c",
"build/web/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"build/web/.git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
"build/web/.git/objects/fd/493795b0bf43f4218cce4c8fafb5106bead435": "a13a78a6498f834b06a017b03b433b78",
"build/web/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"build/web/.git/objects/e4/e275571df0736a85e04817ba834539eb055c1d": "165aaaa94796d05c559799ffe22661d7",
"build/web/.git/objects/fe/3c5a8686c6f5a6361dd624fb34dc77c57ce006": "77294aac5e3da436327640aae035869b",
"build/web/.git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
"build/web/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"build/web/.git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
"build/web/.git/objects/18/9912cbe5170e9036549b2ac0e08bc522e90a94": "904a7f1b9c8c8c2c10ed5c8b729e5dae",
"build/web/.git/objects/16/3aa9e29beb6980fa2f3653afc29a1ae5b8d078": "0f360428f5f8dd0f0d7a735380344fd1",
"build/web/.git/objects/89/6ebfcf66548343bca63918bf389e72da0957a8": "4a5e66bd82cad0d78dca0fef63432b29",
"build/web/.git/objects/45/74336e47b641762487b7812ac3b12e53450abd": "2a97675c005979b1a65da8b9c5ac6a4b",
"build/web/.git/objects/45/a43013dc88ce59efe06a58e3fc2ed30c574ef4": "24490c2ddeafb8661dca2d24a20c1d0f",
"build/web/.git/objects/1f/5c1c2b2a8f41fa4573a10b3a17b6df746b68a7": "21388b4ff979be9ee5a5752a2b6ca616",
"build/web/.git/objects/1f/38efb6161b34265c34ffc5fa5966ffb4365f2a": "e57c110a982c6af103be273b2898c701",
"build/web/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"build/web/.git/objects/80/574e0560c3e2e2c3d43f9c08a63b66da14641f": "8190c0199ab546a378938b36d80fba26",
"build/web/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"build/web/.git/objects/19/f555184f664594c7a47b5cbac177834f295e58": "c1c64aaa53a16bcc23c028a15b210960",
"build/web/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"build/web/.git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
"build/web/.git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
"build/web/.git/objects/30/e38b4878c942dbd375f645f0659c7ee1249451": "cd40edd200f78c999dc3195435e10fa5",
"build/web/.git/objects/5e/e6cd0734f56b938c64f6a23246c78ca3434e46": "e1e5ad291f802cb97bea99e7819f01ad",
"build/web/.git/objects/63/9e775f65a987eee9892c0528e4f1d8c2d98284": "1d4299724293e361737993cc47cf051f",
"build/web/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"build/web/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"build/web/.git/objects/a0/50bec4db74f447e309e1dbc09b65d8277f9349": "a6dcbc70431e30c3628e8dba61e72f17",
"build/web/.git/objects/a7/aae737dac366f95cdd4ec99b025cdba9b6e5ae": "c77842b53029c5b7e1653b9fd49db0cf",
"build/web/.git/objects/b6/a67d3cf9bcb9d65942e81174706df541828d23": "73baaeaaab103aa6d72d788a5f714acf",
"build/web/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"build/web/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"build/web/.git/objects/e6/ceb2362958f0f799ff848e341e7db11cceae00": "0935d93f186e5d2fa17508b01ec48821",
"build/web/.git/objects/41/6f8e640b7c72c4a83ce0cb6a32d9f7e8ca34aa": "8fed2c604189bad007d32ae2247327f3",
"build/web/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"build/web/.git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
"build/web/.git/objects/71/ef893a28490a6c5e899f7c7c34353330c6b49b": "19d75def59eb79efb022e9132a53d39a",
"build/web/.git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
"build/web/.git/objects/49/36ad145a1634251e24dce1950eca10aa20f149": "9c2c4b6b43ecb143c35904e3c4e33e4f",
"build/web/.git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
"build/web/.git/objects/7a/dfea6c0ebb0c919e54acb75d81d0e8d7646508": "885c01578c3f9ba448115ed31d4aae6a",
"build/web/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"build/web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"build/web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"build/web/.git/logs/HEAD": "cf91328018c12ce0fed4c46872d7d244",
"build/web/.git/logs/refs/heads/main": "3803bbe8a794071f669ea4335c0faceb",
"build/web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"build/web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"build/web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"build/web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"build/web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"build/web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"build/web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"build/web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"build/web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"build/web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"build/web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"build/web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"build/web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"build/web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"build/web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"build/web/.git/refs/heads/main": "f9080b266e4bafb7cfe5a4b6a7c98a2b",
"build/web/.git/index": "33f1ba5c322e7768f9c8b3d692787622",
"build/web/.git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
"build/web/assets/images/volleyball.png": "490cbce7401f24a4bde38f8a8ac9830a",
"build/web/assets/images/rugby.png": "b7e1c2286244e24e0f10a87f77522cbe",
"build/web/assets/images/shock.png": "862c470272a9adf2bcf0cdfbb0cc9297",
"build/web/assets/images/cricket.png": "9a0be62ae34a54a86d5627d41dc88833",
"build/web/assets/images/tennis.png": "6291c51bf1c8cec3c13b39f0a861dcfe",
"build/web/assets/images/basket.png": "9826fa38da4441c9076b9aa32d231f4e",
"build/web/assets/images/hockey.png": "0ac9d0d6983ef2922f8bdf3d2cf12a88",
"build/web/assets/images/baseball.png": "15b16d231dd3e37389b6e008df95ed39",
"build/web/assets/images/golf.png": "1378d5a27ccaa8343497f10bb9ba9b96",
"build/web/assets/images/image.jpg": "25fc2dabebe2980e0d4a1dd2609c1a11",
"build/web/assets/images/goat.jpg": "4ea8f978a536cd100bf557ad0afe0f88",
"build/web/assets/images/american-football.png": "b4b7d0cc820ce3b9f25205d34d70033f",
"build/web/assets/AssetManifest.json": "c014ee3c1e19d704732be52bff66c429",
"build/web/assets/NOTICES": "5d0daa1e5fcb79baccc9d3650fa3ffb8",
"build/web/assets/FontManifest.json": "93e8ec657edbbb6e79ea53f502a18476",
"build/web/assets/AssetManifest.bin.json": "4599fced99b6a8b1a05fc613279c9bdb",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/assets/AssetManifest.bin": "b9744d60fd23a6005a68edd962bcc504",
"build/web/assets/fonts/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"build/web/assets/fonts/Oxygen-Regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"build/web/assets/fonts/coolvetica/coolvetica%2520rg.otf": "651b51cc4409a3926f85aa25861852ce",
"build/web/assets/fonts/coolvetica/coolvetica%2520condensed%2520rg.otf": "525c1f8f9efdb28f719f80dbf74318b1",
"build/web/assets/fonts/coolvetica/coolvetica%2520compressed%2520hv.otf": "7af4fe42470f0528a83dfc955a622bd6",
"build/web/assets/fonts/coolvetica/coolvetica%2520rg%2520it.otf": "3a039edde93ad79e42c722f1e64ba252",
"build/web/assets/fonts/coolvetica/coolvetica%2520crammed%2520rg.otf": "05c5750b3b2cb86f1610e0b899bde6fc",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "f5e188543fda83f3c8d8231c63f32138",
"build/web/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"build/web/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"build/web/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"build/web/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"build/web/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"build/web/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"build/web/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"build/web/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"build/web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".git/ORIG_HEAD": "39f7d195101a63179bc701a5296cd79e",
".git/subtree-cache/94638/d668a4bd5c18fe9d893935f7888215381d3fcdeb": "39f7d195101a63179bc701a5296cd79e",
".git/config": "72cdb57d6beb30d4162a053d05849215",
".git/objects/0d/32d3126003e53d5588d7a35f935f4aec5bc566": "1d5142b860818060afd0cc4e855bfe43",
".git/objects/0d/ebe4f333d5d8c98111cd475fa771dd75e1fd95": "3022122b34417fae583787beef140c5a",
".git/objects/3e/3944a91643c4e73070b410e61aec4653b17612": "32989282d82e862fbf1a5ab760a5c195",
".git/objects/3b/a7539bd19ec3d9c954c4061cd7f63f06361dce": "5a9915ce514b2cf06a04dbfcfb17a397",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/1e7a219eec67325d6a7ec00eab8eb53bac44a8": "f17ff1aea529a064f4acb3a9bb40c06a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/c251d681548cac9b7980ffa9bc114a7efd7d04": "311a163136b318c57214f9d4a2553fdf",
".git/objects/9c/5520c43eab8f60fc8dcaa52b343b81b3a02caa": "013cce9d9a90c560faebb47da1329386",
".git/objects/d7/4bda9a7130cfe6df363ec8217c1636352b8165": "810a138b60b01ad77afa54c9e17a5252",
".git/objects/d7/e1f6b3ba363fca3eb058a564e7544d5a266325": "c3172523043bc9504cc519f5f8be729e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/b19de0b6cfdea54600aace0e60218f1fd20f50": "25d710a7462e475186013dd494dad012",
".git/objects/a5/3b21c6947d3ce0df6001573f64b6a87daf0bc1": "8a07ad32b264f8ec4cc1faf119870441",
".git/objects/bd/7c59805588042b87ac20fcbaa2ac5648d1bf62": "0309dd772c66db986bfc33a91ca5d848",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/68a4bd5c18fe9d893935f7888215381d3fcdeb": "cbd3677dcd77496c723cbd8494a2bf9e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/c6a0e075b775846a6a4e3a9583bf029110dfaa": "9701c862708a524f6065b46507d5292f",
".git/objects/f4/3c8663d2fec0725a73b29c5c4c8712c118214d": "ab1459cd7004b3c81081aeaf8d89921c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/493795b0bf43f4218cce4c8fafb5106bead435": "a13a78a6498f834b06a017b03b433b78",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/e275571df0736a85e04817ba834539eb055c1d": "165aaaa94796d05c559799ffe22661d7",
".git/objects/fe/3c5a8686c6f5a6361dd624fb34dc77c57ce006": "77294aac5e3da436327640aae035869b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/9912cbe5170e9036549b2ac0e08bc522e90a94": "904a7f1b9c8c8c2c10ed5c8b729e5dae",
".git/objects/16/3aa9e29beb6980fa2f3653afc29a1ae5b8d078": "0f360428f5f8dd0f0d7a735380344fd1",
".git/objects/89/6ebfcf66548343bca63918bf389e72da0957a8": "4a5e66bd82cad0d78dca0fef63432b29",
".git/objects/45/74336e47b641762487b7812ac3b12e53450abd": "2a97675c005979b1a65da8b9c5ac6a4b",
".git/objects/45/a43013dc88ce59efe06a58e3fc2ed30c574ef4": "24490c2ddeafb8661dca2d24a20c1d0f",
".git/objects/1f/5c1c2b2a8f41fa4573a10b3a17b6df746b68a7": "21388b4ff979be9ee5a5752a2b6ca616",
".git/objects/1f/38efb6161b34265c34ffc5fa5966ffb4365f2a": "e57c110a982c6af103be273b2898c701",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/574e0560c3e2e2c3d43f9c08a63b66da14641f": "8190c0199ab546a378938b36d80fba26",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f555184f664594c7a47b5cbac177834f295e58": "c1c64aaa53a16bcc23c028a15b210960",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
".git/objects/30/e38b4878c942dbd375f645f0659c7ee1249451": "cd40edd200f78c999dc3195435e10fa5",
".git/objects/5e/e6cd0734f56b938c64f6a23246c78ca3434e46": "e1e5ad291f802cb97bea99e7819f01ad",
".git/objects/63/9e775f65a987eee9892c0528e4f1d8c2d98284": "1d4299724293e361737993cc47cf051f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/50bec4db74f447e309e1dbc09b65d8277f9349": "a6dcbc70431e30c3628e8dba61e72f17",
".git/objects/a7/aae737dac366f95cdd4ec99b025cdba9b6e5ae": "c77842b53029c5b7e1653b9fd49db0cf",
".git/objects/b6/a67d3cf9bcb9d65942e81174706df541828d23": "73baaeaaab103aa6d72d788a5f714acf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/ceb2362958f0f799ff848e341e7db11cceae00": "0935d93f186e5d2fa17508b01ec48821",
".git/objects/c2/00502020108e85764b798c18d99e17bcc203dc": "a32dae4d573050429f92c49bd1aa533d",
".git/objects/41/6f8e640b7c72c4a83ce0cb6a32d9f7e8ca34aa": "8fed2c604189bad007d32ae2247327f3",
".git/objects/1e/07b9f5d708f7b48830ecb76e1489f4110eb579": "687bce96ca7d0c5a7e28a620abba6fb9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/36ad145a1634251e24dce1950eca10aa20f149": "9c2c4b6b43ecb143c35904e3c4e33e4f",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/7a/dfea6c0ebb0c919e54acb75d81d0e8d7646508": "885c01578c3f9ba448115ed31d4aae6a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e7402c868662082a8d44cd1c44ca772",
".git/logs/refs/heads/web": "283e579e3345162ce672c9bfd1ee96a5",
".git/logs/refs/heads/gh-pages": "bbe0038d60858b18649f8bb0ada573ee",
".git/logs/refs/remotes/origin/gh-pages": "e4bd33ba93214d086ca55eb841316556",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/web": "39f7d195101a63179bc701a5296cd79e",
".git/refs/heads/gh-pages": "8b4287c397523e9c3f484759bd26477a",
".git/refs/remotes/origin/gh-pages": "39f7d195101a63179bc701a5296cd79e",
".git/index": "8e5b9cebb1d37dd1075499a51bd33b5e",
".git/COMMIT_EDITMSG": "0f7aa82a13deccba66b6815f0994b5f6",
".git/FETCH_HEAD": "870d8d8440f711c6e3d5dadef14a95a9",
"assets/images/volleyball.png": "490cbce7401f24a4bde38f8a8ac9830a",
"assets/images/rugby.png": "b7e1c2286244e24e0f10a87f77522cbe",
"assets/images/shock.png": "862c470272a9adf2bcf0cdfbb0cc9297",
"assets/images/cricket.png": "9a0be62ae34a54a86d5627d41dc88833",
"assets/images/tennis.png": "6291c51bf1c8cec3c13b39f0a861dcfe",
"assets/images/basket.png": "9826fa38da4441c9076b9aa32d231f4e",
"assets/images/hockey.png": "0ac9d0d6983ef2922f8bdf3d2cf12a88",
"assets/images/baseball.png": "15b16d231dd3e37389b6e008df95ed39",
"assets/images/golf.png": "1378d5a27ccaa8343497f10bb9ba9b96",
"assets/images/image.jpg": "25fc2dabebe2980e0d4a1dd2609c1a11",
"assets/images/goat.jpg": "4ea8f978a536cd100bf557ad0afe0f88",
"assets/images/american-football.png": "b4b7d0cc820ce3b9f25205d34d70033f",
"assets/AssetManifest.json": "c014ee3c1e19d704732be52bff66c429",
"assets/NOTICES": "5d0daa1e5fcb79baccc9d3650fa3ffb8",
"assets/FontManifest.json": "93e8ec657edbbb6e79ea53f502a18476",
"assets/AssetManifest.bin.json": "4599fced99b6a8b1a05fc613279c9bdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b9744d60fd23a6005a68edd962bcc504",
"assets/fonts/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"assets/fonts/Oxygen-Regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"assets/fonts/coolvetica/coolvetica%2520rg.otf": "651b51cc4409a3926f85aa25861852ce",
"assets/fonts/coolvetica/coolvetica%2520condensed%2520rg.otf": "525c1f8f9efdb28f719f80dbf74318b1",
"assets/fonts/coolvetica/coolvetica%2520compressed%2520hv.otf": "7af4fe42470f0528a83dfc955a622bd6",
"assets/fonts/coolvetica/coolvetica%2520rg%2520it.otf": "3a039edde93ad79e42c722f1e64ba252",
"assets/fonts/coolvetica/coolvetica%2520crammed%2520rg.otf": "05c5750b3b2cb86f1610e0b899bde6fc",
"assets/fonts/MaterialIcons-Regular.otf": "f5e188543fda83f3c8d8231c63f32138",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
