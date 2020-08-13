"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var deportistaProfesional_1 = require("./deportistaProfesional");
var runnerAmateur_1 = require("./runnerAmateur");
var secretaria = new persona_1.Persona('Carla');
var deportistaOlimpico = new deportistaProfesional_1.DeportistaProfesional('Bolt');
var runner = new runnerAmateur_1.RunnerAmateur('Antonella');
// todos tienen capacidad de correr lo CAMBIA es la distancia que recorre cada uno por MINUTO
secretaria.correr();
deportistaOlimpico.correr();
runner.correr();
