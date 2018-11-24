# ruby-vuejs-ec

RubyとVue.jsでECサイトを考えながら構築するワークショップ

## フォルダ構成

||||
|:-----------|:------------|:------------|
|public/|
||images/|画像ファイル|
||css/|cssファイル|
||js/|jsファイル|
||vue-template/|vueのテンプレートファイル|
|views/|erb(html)ファイルたち|
|vue-test/|今回は使いません|
|Gemfile|
|Gemfile.lock|
|Procfile|
|myapp.rb|本体:サーバー起動、APIレスポンス生成|

## cloneしてサーバーが起動できます
```
$ cd ruby-vuejs-ec
$ gem install bundler
$ bundle install
$ ruby myapp.rb
```
