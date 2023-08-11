#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
    .name('gendiffs')
    .usage('[options] <filepath1> <filepath2>')
    .version('0.0.1')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')

program.parse();