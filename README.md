# floating-browser

floating web browser for http://maruta.github.io/timekeeper

## Installation
```
git clone https://github.com/umaumax/floating-browser
cd floating-browser
npm install
```

## Execution

```
electron .
```

## Bug
### Windows
* スクロールバーのために，URLの画面がほぼ見えない状態となる

### release 0.0.1
* `ctrl`+`-`,`+`などの拡大縮小の操作ができない(自前ビルドでは可能)

## NOTE
### cross platform build
```
$ node build
floating-browser-0.0.1-mac.zip
floating-browser-0.0.1-win.zip
floating-browser-0.0.1.zip # linux
```

### how to release
```
git tag v0.0.1
git push origin v0.0.1
open https://github.com/umaumax/floating-browser/releases/new?tag=v0.0.1
```

## FYI
[webブラウザの試作：ElectronでWebブラウザを作る（その１） \| 悠雀堂ブログ]( http://www.yujakudo.com/blogs/develop/node-jselectron/test-of-webview/ )
