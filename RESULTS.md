# Results

## creating 5000 records (v15.1.1)

```
$ node run.js
[info] creating 5000 records... (using callbacks)
[info] all start: 35 MB total
[info] run 1 start: 35 MB total
[info] run 1 end: 6.26 MB (+/-) -- 41.3 MB total (6.6s)
[info] run 2 start: 41.3 MB total
[info] run 2 end: 9.63 MB (+/-) -- 50.9 MB total (5s)
[info] run 3 start: 50.9 MB total
[info] run 3 end: -13.5 MB (+/-) -- 37.3 MB total (5.1s)
[info] run 4 start: 37.3 MB total
[info] run 4 end: 7.16 MB (+/-) -- 44.5 MB total (5.3s)
[info] run 5 start: 44.5 MB total
[info] run 5 end: 8.11 MB (+/-) -- 52.6 MB total (5.1s)
[info] run 6 start: 52.6 MB total
[info] run 6 end: 1.38 MB (+/-) -- 54 MB total (5.4s)
[info] run 7 start: 54 MB total
[info] run 7 end: 6.02 MB (+/-) -- 60 MB total (5.6s)
[info] run 8 start: 60 MB total
[info] run 8 end: 9.9 MB (+/-) -- 69.9 MB total (5.4s)
[info] run 9 start: 69.9 MB total
[info] run 9 end: 2.02 MB (+/-) -- 71.9 MB total (4.9s)
[info] run 10 start: 71.9 MB total
[info] run 10 end: 3.4 MB (+/-) -- 75.3 MB total (4.8s)
[info] all end: 40.3 MB (+/-) -- 75.3 MB total (53.3s)
[info] created 5000 records
```

```
$ node run-async.js
[info] creating 5000 records... (using promises)
[info] all start: 35 MB total
[info] run 1 start: 35 MB total
[info] run 1 end: 6.32 MB (+/-) -- 41.3 MB total (5.3s)
[info] run 2 start: 41.3 MB total
[info] run 2 end: 8.96 MB (+/-) -- 50.3 MB total (4.9s)
[info] run 3 start: 50.3 MB total
[info] run 3 end: -13.7 MB (+/-) -- 36.6 MB total (5.5s)
[info] run 4 start: 36.6 MB total
[info] run 4 end: 8.85 MB (+/-) -- 45.4 MB total (4.8s)
[info] run 5 start: 45.4 MB total
[info] run 5 end: 4.32 MB (+/-) -- 49.8 MB total (5.3s)
[info] run 6 start: 49.8 MB total
[info] run 6 end: 4.42 MB (+/-) -- 54.2 MB total (5.6s)
[info] run 7 start: 54.2 MB total
[info] run 7 end: 7.06 MB (+/-) -- 61.2 MB total (5.8s)
[info] run 8 start: 61.2 MB total
[info] run 8 end: 10.3 MB (+/-) -- 71.5 MB total (6.3s)
[info] run 9 start: 71.5 MB total
[info] run 9 end: 2.61 MB (+/-) -- 74.1 MB total (5.8s)
[info] run 10 start: 74.1 MB total
[info] run 10 end: -2.08 MB (+/-) -- 72 MB total (5.5s)
[info] all end: 37 MB (+/-) -- 72 MB total (54.9s)
[info] created 5000 records
```

## creating 5000 records (with fixes)

```
$ node run.js
[info] creating 5000 records... (using callbacks)
[info] all start: 35 MB total
[info] run 1 start: 35 MB total
[info] run 1 end: 5.77 MB (+/-) -- 40.7 MB total (5.2s)
[info] run 2 start: 40.8 MB total
[info] run 2 end: -700 kB (+/-) -- 40.1 MB total (5.9s)
[info] run 3 start: 40.1 MB total
[info] run 3 end: -6.02 MB (+/-) -- 34 MB total (5.5s)
[info] run 4 start: 34 MB total
[info] run 4 end: 602 kB (+/-) -- 34.6 MB total (5.6s)
[info] run 5 start: 34.6 MB total
[info] run 5 end: 401 kB (+/-) -- 35 MB total (5.9s)
[info] run 6 start: 35 MB total
[info] run 6 end: 299 kB (+/-) -- 35.3 MB total (5.7s)
[info] run 7 start: 35.3 MB total
[info] run 7 end: 1.28 MB (+/-) -- 36.6 MB total (5.5s)
[info] run 8 start: 36.6 MB total
[info] run 8 end: 1.36 MB (+/-) -- 38 MB total (5.5s)
[info] run 9 start: 38 MB total
[info] run 9 end: 176 kB (+/-) -- 38.2 MB total (5.7s)
[info] run 10 start: 38.2 MB total
[info] run 10 end: 225 kB (+/-) -- 38.4 MB total (5.3s)
[info] all end: 3.43 MB (+/-) -- 38.4 MB total (55.8s)
[info] created 5000 records
```
```
$ node run-async.js
[info] creating 5000 records... (using promises)
[info] all start: 35.3 MB total
[info] run 1 start: 35.3 MB total
[info] run 1 end: 3.9 MB (+/-) -- 39.2 MB total (4.9s)
[info] run 2 start: 39.2 MB total
[info] run 2 end: 406 kB (+/-) -- 39.6 MB total (4.6s)
[info] run 3 start: 39.6 MB total
[info] run 3 end: -5.86 MB (+/-) -- 33.7 MB total (6.1s)
[info] run 4 start: 33.7 MB total
[info] run 4 end: 1.04 MB (+/-) -- 34.8 MB total (5.6s)
[info] run 5 start: 34.8 MB total
[info] run 5 end: 446 kB (+/-) -- 35.2 MB total (6.2s)
[info] run 6 start: 35.2 MB total
[info] run 6 end: 307 kB (+/-) -- 35.5 MB total (5.8s)
[info] run 7 start: 35.5 MB total
[info] run 7 end: 2.27 MB (+/-) -- 37.8 MB total (6.1s)
[info] run 8 start: 37.8 MB total
[info] run 8 end: 295 kB (+/-) -- 38.1 MB total (6.1s)
[info] run 9 start: 38.1 MB total
[info] run 9 end: 143 kB (+/-) -- 38.2 MB total (5.8s)
[info] run 10 start: 38.2 MB total
[info] run 10 end: 217 kB (+/-) -- 38.5 MB total (5.5s)
[info] all end: 3.18 MB (+/-) -- 38.5 MB total (56.8s)
[info] created 5000 records
```
