# Sequalize ToDo Sample
Node.jsの代表的なORMの一つである「[Sequalize](https://sequelize.org/master/)」を使ったToDoアプリのサンプルです。DBはMySQLを利用することを前提にしています。

Sequalizeの学習が目的のため実用性は考慮していません。

## Table of Contents
1. [Install](#install)
    1. [MySQL](#mysql)
    1. [git clone](#git-clone)
    1. [Node.js module](#node.js-module)
    1. [config](#config)
1. [Execute](#execute)
1. [Licence](#licence)

## Install
### MySQL
実行したい環境に合わせてMySQLを準備してください。

* [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/)

### git clone
GitHubからcloneします。
```shellsession
$ git clone https://github.com/katsube/sequelize-todo.git
```

### Node.js module
[Node.js](https://nodejs.org/)をインストールし、npmコマンドで必要なモジュールを取得します。
```shellsession
$ cd sequelize-todo
$ npm install
```

### config
MySQLへの接続情報を以下のファイルに記述します。デフォルトはdevelopment環境になっているので、とりあえず動かしたい場合は一番上にある「development」にMySQLへのログインに必要を記入します。
```shellsession
$ vi config/config.json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Execute
以下のコマンドでWebサーバが3000番のポートで起動します。
```shellsession
$ node serve.js
listening at http://localhost:3000
```

WebブラウザからアクセスするとTerminal上に表示されているURLへアクセスするとToDoアプリを操作できます。

## Licence
MIT Licence