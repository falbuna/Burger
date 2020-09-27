const express = require("express");
const mysql = require("mysql");

const orm = require("./config/orm.js")

orm.selectAll("burgers");