# MongoDB Aggregation: Incorrect Query Structure using $expr Operator

This repository demonstrates a common error when using the `$expr` operator in MongoDB aggregation queries.  The error involves incorrect quoting of field names, resulting in unexpected behavior.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Problem

Incorrectly quoting field names within the `$eq` operator of the `$expr` expression leads to the query failing to match documents as intended. This typically results in an empty result set even when matching documents exist.

## Solution

The solution involves correctly quoting field names using single quotes within the `$eq` operator to ensure proper field referencing.
