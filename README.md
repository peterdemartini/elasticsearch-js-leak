# elasticsearch-js-leak

A test project to prove a memory leak within the nodejs elasticsearch client.

The test essentially creates a bunch of records in elasticsearch.
See the [results](/RESULTS.md)

## Run the tests

```sh
yarn test
```

or if you want a simple and more debuggable script, use:

```sh
yarn start
```
