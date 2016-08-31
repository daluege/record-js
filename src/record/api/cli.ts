import * as readline from 'readline'
import { createInterface, ReadLine } from 'readline'
import { Writable } from 'stream'
//import FileStream from '../devices/fs'
import { RecordStream } from './stream'

function escape () { }

var stream = new RecordStream()
//var fs = new FileStream(stream).stream.pipe(fs).pipe(stream)

export function start () {
  var cwd = process.cwd()
  var args = process.argv.slice(2)

  // Enter path and execute command line arguments via shebang
  stream.write(cwd+'\0#!'+args.map(escape).join(' ')+'\n')

  process.stdin.pipe(stream).pipe(process.stdout)
}
