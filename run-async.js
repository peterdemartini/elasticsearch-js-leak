'use strict';

/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

const SimpleClient = require('./lib/simple-client');
const { memDiff } = require('./lib/utils');

const iterations = 10;
const perRun = 500;
const total = iterations * perRun;

const runAll = async () => {
    console.log(`[info] creating ${total} records... (using promises)`);

    const client = new SimpleClient();
    await client.initialize();

    const all = await memDiff('all');

    for (let i = 0; i < iterations; i += 1) {
        const run = await memDiff(`run ${i + 1}`);
        await client.runAsync(perRun);
        await run();
    }

    await all();

    await client.printStats();
};

runAll().catch(err => console.error(err));
