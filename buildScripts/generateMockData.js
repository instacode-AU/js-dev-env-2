/*
This script denerates mock data for local development.
This way you don't have to point to a live API
but you can really enjoy realistic, but randomised data,
and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker'
import { schema } from './mockDataSchema';
import fs from 'fs'
import chalk from 'chalk'

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err){
    if (err) {
        return console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock data generated."));
    }
});