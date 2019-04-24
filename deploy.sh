#!/bin/sh

aws s3 sync --profile jds build/ s3://resume.john-shenk.com/
aws s3 sync --profile jds build/ s3://john-shenk.com/
