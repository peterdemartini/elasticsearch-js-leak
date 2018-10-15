'use strict';

/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

const uniqueId = require('lodash/uniqueId');
const timesSeries = require('neo-async/timesSeries');
const elasticsearch = require('elasticsearch');
const mapping = require('./mapping.json');

const delay = () => new Promise((resolve) => {
    setTimeout(() => { resolve(); }, 500);
});

class SimpleClient {
    constructor() {
        this.index = 'leakage';
        this.client = new elasticsearch.Client({
            host: 'localhost:9200',
            apiVersion: '5.6',
            sniffOnStart: false,
            sniffOnConnectionFault: false,
            requestTimeout: 15000,
            deadTimeout: 5000,
            maxRetries: 3,
            selector: 'random',
            log: [{
                type: 'console',
                levels: ['error', 'warning']
            }]
        });
    }

    async initialize() {
        const exists = await this.client.indices.exists({
            index: this.index,
        });

        if (exists) {
            await this.client.indices.delete({
                index: this.index,
            });
        }

        await this.client.indices.create({
            index: this.index,
            body: mapping
        });

        await delay();
    }

    run(count = 1, cb) {
        timesSeries(count, (n, done) => {
            const testId = uniqueId('test-');
            const input = {
                index: this.index,
                type: 'test',
                id: testId,
                body: {
                    testId
                },
                refresh: true
            };

            this._create(input, done);
        }, (err) => {
            if (err) {
                cb(err);
                return;
            }

            setTimeout(() => { cb(); }, 500);
        });
    }

    _create(input, cb) {
        this.client.index(input, (err) => {
            if (err) {
                console.error('[error] request failure', err.toString());
                cb(err);
                return;
            }
            cb();
        });
    }

    async runAsync(count = 1) {
        for (let i = 0; i < count; i += 1) {
            const testId = uniqueId('test-');
            const input = {
                index: this.index,
                type: 'test',
                id: testId,
                body: {
                    testId
                },
                refresh: true
            };

            await this._createAsync(input);
        }

        await delay();
    }

    async _createAsync(input) {
        try {
            await this.client.index(input);
        } catch (err) {
            console.error('[error] request failure', err.toString());
            throw err;
        }
    }

    async printStats() {
        await this.client.indices.refresh({ index: this.index });

        const { _all } = await this.client.indices.stats({
            index: this.index,
        });

        console.log(`[info] created ${_all.total.docs.count} records`);
    }
}

module.exports = SimpleClient;
