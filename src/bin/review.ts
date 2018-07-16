#!/usr/bin/env node
'use strict';

import {
  git,
} from '../'

async function review() {
  try {
    console.log('Searching for Binaries in node.js...')
    const result = await git.search({
      searchType: git.SearchTypes.code,
      organization: 'nodejs',
      extension: 'bin',
    })
    console.log('Success!')
    console.log(JSON.stringify(git.summarize(result.items), null, 2))
  } catch(err) {
    console.log('Error fetching node.js Binaries')
    console.log(err)
  }
}

review();
