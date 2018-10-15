'use strict';

/* eslint-disable no-console */

const timesSeries = require('neo-async/timesSeries');
const SimpleClient = require('./lib/simple-client');
const { memDiff } = require('./lib/utils');

const iterations = 10;
const perRun = 500;
const total = iterations * perRun;

const runAll = (cb) => {
    console.log(`[info] creating ${total} records... (using callbacks)`);

    const client = new SimpleClient();
    client.initialize()
        .then(() => memDiff('all'))
        .then((all) => {
            timesSeries(iterations, (i, done) => {
                memDiff(`run ${i + 1}`).then((run) => {
                    client.run(perRun, (err) => {
                        if (err) {
                            done(err);
                            return;
                        }
                        run()
                            .then(() => {
                                done();
                            })
                            .catch((statErr) => {
                                done(statErr);
                            });
                    });
                });
            }, (err) => {
                if (err) {
                    cb(err);
                    return;
                }
                all()
                    .then(() => client.printStats())
                    .then((statErr) => {
                        cb(statErr);
                    });
            });
        });
};

runAll((err) => {
    if (err) {
        console.error(err);
    }
});
