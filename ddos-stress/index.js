var Stress = require('ddos-stress');

const STRESS_COUNT = 1000;
const HOST = 'http://192.168.0.213:3000/';

const stressList = Array.from({ length: STRESS_COUNT }, (v, k) => new Stress());

for(const stress of stressList){
    stress.run(HOST, 10);
}
