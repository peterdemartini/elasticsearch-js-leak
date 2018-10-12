# elasticsearch-js-leak

A test project to prove a memory leak within the nodejs elasticsearch client.

The test essentially creates a bunch of records in elasticsearch.
See the [results](/RESULTS.md)

## Run the tests

**Requirements:**
  - node 8 or higher
  - yarn or npm
  - elasticsearch running on `localhost:9200`

**IMPORTANT** this project will create a fresh index
called `leakage` everytime the test is called.

```sh
yarn test
```

or if you want a simple and more debuggable script, use:

```sh
yarn start
```
