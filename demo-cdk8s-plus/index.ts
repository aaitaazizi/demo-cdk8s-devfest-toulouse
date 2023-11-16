import { Construct } from 'constructs';
import { App, Chart } from 'cdk8s';
import * as kplus from 'cdk8s-plus-26';

export class Mychart extends Chart {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new kplus.Deployment(this, 'kplusdeployment', {
      containers: [{ image: 'paulbouwer/hello-kubernetes:1.7' }],
    });

  }
}

const app = new App();
new Mychart(app, 'demo-chart');
app.synth();