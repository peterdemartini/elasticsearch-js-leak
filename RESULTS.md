# Results

## creating 5000 records (v15.1.1)

```
$ node run.js
[info] creating 5000 records... (using callbacks)
[info] all start: 34.9 MB total
[info] run 1 start: 34.9 MB total
[info] run 1 end: 6.43 MB (+/-) --- 41.3 MB total
[info] run 2 start: 41.3 MB total
[info] run 2 end: 9.56 MB (+/-) --- 50.9 MB total
[info] run 3 start: 50.9 MB total
[info] run 3 end: -13.5 MB (+/-) --- 37.4 MB total
[info] run 4 start: 37.4 MB total
[info] run 4 end: 7.53 MB (+/-) --- 44.9 MB total
[info] run 5 start: 44.9 MB total
[info] run 5 end: 5.48 MB (+/-) --- 50.4 MB total
[info] run 6 start: 50.4 MB total
[info] run 6 end: 3.16 MB (+/-) --- 53.6 MB total
[info] run 7 start: 53.6 MB total
[info] run 7 end: 3.66 MB (+/-) --- 57.3 MB total
[info] run 8 start: 57.3 MB total
[info] run 8 end: 9.85 MB (+/-) --- 67.1 MB total
[info] run 9 start: 67.1 MB total
[info] run 9 end: 4.52 MB (+/-) --- 71.6 MB total
[info] run 10 start: 71.6 MB total
[info] run 10 end: -569 kB (+/-) --- 71.1 MB total
[info] all end: 36.2 MB (+/-) --- 71.1 MB total
[info] created 5000 records
```

```
$ node run-async.js
[info] creating 5000 records... (using promises)
[info] all start: 35 MB total
[info] run 1 start: 35 MB total
[info] run 1 end: 6.35 MB (+/-) --- 41.4 MB total
[info] run 2 start: 41.4 MB total
[info] run 2 end: 9.3 MB (+/-) --- 50.7 MB total
[info] run 3 start: 50.7 MB total
[info] run 3 end: -11.4 MB (+/-) --- 39.2 MB total
[info] run 4 start: 39.2 MB total
[info] run 4 end: 4.53 MB (+/-) --- 43.8 MB total
[info] run 5 start: 43.8 MB total
[info] run 5 end: 7.89 MB (+/-) --- 51.7 MB total
[info] run 6 start: 51.7 MB total
[info] run 6 end: 2.16 MB (+/-) --- 53.8 MB total
[info] run 7 start: 53.8 MB total
[info] run 7 end: 10.6 MB (+/-) --- 64.4 MB total
[info] run 8 start: 64.4 MB total
[info] run 8 end: 6.75 MB (+/-) --- 71.2 MB total
[info] run 9 start: 71.2 MB total
[info] run 9 end: 3.13 MB (+/-) --- 74.3 MB total
[info] run 10 start: 74.3 MB total
[info] run 10 end: -2.74 MB (+/-) --- 71.5 MB total
[info] all end: 36.5 MB (+/-) --- 71.5 MB total
[info] created 5000 records
```

## creating 5000 records (with fixes)

```
$ node run.js
[info] creating 5000 records... (using callbacks)
[info] all start: 34.9 MB total
[info] run 1 start: 34.9 MB total
[info] run 1 end: 5.68 MB (+/-) --- 40.6 MB total
[info] run 2 start: 40.6 MB total
[info] run 2 end: -733 kB (+/-) --- 39.9 MB total
[info] run 3 start: 39.9 MB total
[info] run 3 end: -6.4 MB (+/-) --- 33.5 MB total
[info] run 4 start: 33.5 MB total
[info] run 4 end: 1.06 MB (+/-) --- 34.6 MB total
[info] run 5 start: 34.6 MB total
[info] run 5 end: 348 kB (+/-) --- 34.9 MB total
[info] run 6 start: 34.9 MB total
[info] run 6 end: 426 kB (+/-) --- 35.3 MB total
[info] run 7 start: 35.3 MB total
[info] run 7 end: 1.29 MB (+/-) --- 36.6 MB total
[info] run 8 start: 36.6 MB total
[info] run 8 end: 1.29 MB (+/-) --- 37.9 MB total
[info] run 9 start: 37.9 MB total
[info] run 9 end: 176 kB (+/-) --- 38.1 MB total
[info] run 10 start: 38.1 MB total
[info] run 10 end: 193 kB (+/-) --- 38.3 MB total
[info] all end: 3.36 MB (+/-) --- 38.3 MB total
```
```
$ node run-async.js
[info] created 5000 records
[info] creating 5000 records... (using promises)
[info] all start: 35 MB total
[info] run 1 start: 35 MB total
[info] run 1 end: 4.17 MB (+/-) --- 39.2 MB total
[info] run 2 start: 39.2 MB total
[info] run 2 end: 504 kB (+/-) --- 39.7 MB total
[info] run 3 start: 39.7 MB total
[info] run 3 end: -6.39 MB (+/-) --- 33.3 MB total
[info] run 4 start: 33.3 MB total
[info] run 4 end: 594 kB (+/-) --- 33.9 MB total
[info] run 5 start: 33.9 MB total
[info] run 5 end: 586 kB (+/-) --- 34.5 MB total
[info] run 6 start: 34.5 MB total
[info] run 6 end: 2.44 MB (+/-) --- 36.9 MB total
[info] run 7 start: 36.9 MB total
[info] run 7 end: 197 kB (+/-) --- 37.1 MB total
[info] run 8 start: 37.1 MB total
[info] run 8 end: 311 kB (+/-) --- 37.4 MB total
[info] run 9 start: 37.4 MB total
[info] run 9 end: 184 kB (+/-) --- 37.6 MB total
[info] run 10 start: 37.6 MB total
[info] run 10 end: 201 kB (+/-) --- 37.8 MB total
[info] all end: 2.81 MB (+/-) --- 37.8 MB total
[info] created 5000 records
```
