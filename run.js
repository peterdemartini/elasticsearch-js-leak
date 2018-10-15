'use strict';

/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

const timesSeries = require('neo-async/timesSeries');
const prettyBytes = require('pretty-bytes');
const SimpleClient = require('./lib/simple-client');

const iterations = 10;
const perRun = 500;
const total = iterations * perRun;

function memDiff(label) {
    const start = process.memoryUsage().rss;
    console.log(`[info] ${label} start: ${prettyBytes(start)} total`);

    return () => {
        const end = process.memoryUsage().rss;
        const diff = end - start;
        console.log(`[info] ${label} end: ${prettyBytes(diff)} (+/-) --- ${prettyBytes(end)} total`);
    };
}

const runAll = (cb) => {
    console.log(`[info] creating ${total} records...`);

    const client = new SimpleClient();
    client.initialize()
        .then(() => {
            const all = memDiff('all');
            timesSeries(iterations, (i, done) => {
                const run = memDiff(`run ${i + 1}`);
                client.run(perRun, (err) => {
                    run();
                    setTimeout(() => {
                        done(err);
                    }, 100);
                });
            }, (err) => {
                all();
                client.printStats()
                    .then((statErr) => {
                        cb(err || statErr);
                    });
            });
        });
};

runAll((err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    process.exit(0);
});
