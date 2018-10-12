'use strict';

/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

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

const runAll = async () => {
    console.log(`[info] creating ${total} records...`);

    const client = new SimpleClient();
    await client.initialize();

    const all = memDiff('all');

    for (let i = 0; i < iterations; i += 1) {
        const run = memDiff(`run ${i + 1}`);
        await client.run(perRun);
        run();
    }

    all();

    await client.printStats();
};

runAll().catch(err => console.error(err));
