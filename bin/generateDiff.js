#!/usr/bin/env node
import { program } from ('commander');

const program = new Command();

program
    .name('gendiff')
    .usage('[options] <filepath1> <filepath2>')
    .version('0.0.1')

program.parse();