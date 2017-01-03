#!/bin/bash
sleep 30
nohup cqlsh -f/base_data.cql 0.0.0.0 9042
