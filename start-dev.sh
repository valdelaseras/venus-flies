#!/bin/bash

rm -rfv ./dist/* && npm run build && npm run serve & npm run service
