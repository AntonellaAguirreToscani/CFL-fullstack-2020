import {Persona} from './persona';
import {DeportistaProfesional} from './deportistaProfesional';
import {RunnerAmateur} from './runnerAmateur';

let secretaria: Persona= new Persona('Carla');
let deportistaOlimpico: DeportistaProfesional= new DeportistaProfesional('Bolt');
let runner: RunnerAmateur= new RunnerAmateur('Antonella');

// todos tienen capacidad de correr lo CAMBIA es la distancia que recorre cada uno por MINUTO
secretaria.correr();
deportistaOlimpico.correr();
runner.correr();