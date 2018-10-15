'use strict';

const { iterate, MemoryLeakError } = require('leakage');
const SimpleClient = require('../lib/simple-client');

jest.setTimeout(60 * 1000);

describe('Leak Test', () => {
    const client = new SimpleClient();
    const options = {
        iterations: 5,
        gcollections: 2,
    };
    const perRun = 500;
    const total = options.iterations * options.gcollections * perRun;

    beforeEach(() => client.initialize());

    describe('when using callbacks', () => {
        it(`should not leak when creating ${total} records`, async () => {
            console.log(`[info] creating ${total} records...`); // eslint-disable-line no-console

            let err;

            try {
                const result = await iterate.async(() => new Promise((resolve, reject) => {
                    client.run(perRun, () => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve();
                    });
                }), options);
                await result.printSummary();
            } catch (_err) {
                err = _err;
            }

            await client.printStats();

            expect(err).not.toBeInstanceOf(MemoryLeakError);
        });
    });

    describe('when using promises', () => {
        it(`should not leak when creating ${total} records`, async () => {
            console.log(`[info] creating ${total} records...`); // eslint-disable-line no-console

            let err;

            try {
                const result = await iterate.async(() => client.runAsync(perRun), options);
                await result.printSummary();
            } catch (_err) {
                err = _err;
            }

            await client.printStats();

            expect(err).not.toBeInstanceOf(MemoryLeakError);
        });
    });
});
