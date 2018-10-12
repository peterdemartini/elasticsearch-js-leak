# Results

## creating 5000 records (v15.1.1)

```
$ node run.js
[info] creating 5000 records...
[info] all start: 34.6 MB total
[info] run 1 start: 34.6 MB total
[info] run 1 end: 10.4 MB (+/-) --- 45 MB total
[info] run 2 start: 45 MB total
[info] run 2 end: -11.3 MB (+/-) --- 33.7 MB total
[info] run 3 start: 33.7 MB total
[info] run 3 end: 9.41 MB (+/-) --- 43.1 MB total
[info] run 4 start: 43.1 MB total
[info] run 4 end: 8.11 MB (+/-) --- 51.2 MB total
[info] run 5 start: 51.2 MB total
[info] run 5 end: 1.96 MB (+/-) --- 53.2 MB total
[info] run 6 start: 53.2 MB total
[info] run 6 end: 14.1 MB (+/-) --- 67.3 MB total
[info] run 7 start: 67.3 MB total
[info] run 7 end: 5.19 MB (+/-) --- 72.5 MB total
[info] run 8 start: 72.5 MB total
[info] run 8 end: -135 kB (+/-) --- 72.3 MB total
[info] run 9 start: 72.3 MB total
[info] run 9 end: 41 kB (+/-) --- 72.4 MB total
[info] run 10 start: 72.4 MB total
[info] run 10 end: 77.8 kB (+/-) --- 72.5 MB total
[info] all end: 37.8 MB (+/-) --- 72.5 MB total
[info] created 5000 records
✨  Done in 71.64s.
```

## creating 5000 records (with http request fix)

See [peterdemartini/elasticsearch-js](https://github.com/peterdemartini/elasticsearch-js)

```
$ node run.js
[info] creating 5000 records...
[info] all start: 34.5 MB total
[info] run 1 start: 34.5 MB total
[info] run 1 end: 7.86 MB (+/-) --- 42.4 MB total
[info] run 2 start: 42.4 MB total
[info] run 2 end: -8.61 MB (+/-) --- 33.8 MB total
[info] run 3 start: 33.8 MB total
[info] run 3 end: 3.05 MB (+/-) --- 36.9 MB total
[info] run 4 start: 36.9 MB total
[info] run 4 end: 5.84 MB (+/-) --- 42.7 MB total
[info] run 5 start: 42.7 MB total
[info] run 5 end: 4.1 MB (+/-) --- 46.8 MB total
[info] run 6 start: 46.8 MB total
[info] run 6 end: 6.32 MB (+/-) --- 53.1 MB total
[info] run 7 start: 53.1 MB total
[info] run 7 end: 618 kB (+/-) --- 53.7 MB total
[info] run 8 start: 53.7 MB total
[info] run 8 end: 483 kB (+/-) --- 54.2 MB total
[info] run 9 start: 54.2 MB total
[info] run 9 end: 8.29 MB (+/-) --- 62.5 MB total
[info] run 10 start: 62.5 MB total
[info] run 10 end: 8.27 MB (+/-) --- 70.8 MB total
[info] all end: 36.3 MB (+/-) --- 70.8 MB total
[info] created 5000 records
✨  Done in 71.57s.
```
