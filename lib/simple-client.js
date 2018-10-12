'use strict';

/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

const { promisify } = require('util');
const uuid = require('uuid/v4');
const elasticsearch = require('elasticsearch');
const mapping = require('./mapping.json');

const pDelay = promisify(setTimeout);
const nextTick = promisify(process.nextTick);

class SimpleClient {
    constructor() {
        this.index = 'leakage';
        this.client = new elasticsearch.Client({
            host: 'localhost:9200',
            apiVersion: '5.6'
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

        await pDelay(100);
    }

    async run(count = 1) {
        for (let i = 0; i < count; i += 1) {
            const testId = uuid();
            const input = {
                index: this.index,
                type: 'test',
                id: testId,
                body: {
                    testId
                },
                refresh: true
            };

            await this._create(input);
        }
    }

    async _create(input) {
        await nextTick();

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
