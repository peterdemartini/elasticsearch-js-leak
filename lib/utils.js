'use strict';

/* eslint-disable no-console */

const path = require('path');
const kebabCase = require('lodash/kebabCase');
const heapdump = require('heapdump');
const prettyBytes = require('pretty-bytes');
const prettyMs = require('pretty-ms');

const enableHeapdump = process.env.ENABLE_HEAPDUMP === 'true';

const createHeapdump = (label) => {
    if (!enableHeapdump) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const fileName = `${kebabCase(label)}.heapsnapshot`;
        const filePath = path.join(__dirname, '..', 'snapshots', fileName);
        heapdump.writeSnapshot(filePath, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

async function memDiff(label) {
    const startTime = Date.now();
    const start = process.memoryUsage().rss;
    console.log(`[info] ${label} start: ${prettyBytes(start)} total`);

    return async () => {
        const timeDiff = Date.now() - startTime;

        const end = process.memoryUsage().rss;
        const diff = end - start;

        console.log(`[info] ${label} end: ${prettyBytes(diff)} (+/-) -- ${prettyBytes(end)} total (${prettyMs(timeDiff)})`);
        await createHeapdump(label);
    };
}

module.exports = { memDiff };
