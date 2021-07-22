import type { AWS } from '@serverless/typescript';
import checkBalance from '@functions/checkBalance';
import * as dotenv from 'dotenv';

dotenv.config();

const serverlessConfiguration: AWS = {
  configValidationMode: 'error',
  service: 'check-balance',
  frameworkVersion: '2',
  useDotenv: true,
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    'serverless-offline': {
      httpPort: 4000,
    },
    prune: {
      automatic: true,
      number: 1,
    },
  },
  plugins: [
    'serverless-offline',
    'serverless-webpack',
    'serverless-step-functions',
    'serverless-step-functions-offline',
    'serverless-prune-plugin',
    'serverless-iam-roles-per-function',
    'serverless-deployment-bucket',
  ],
  provider: {
    name: 'aws',
    stage: 'production',
    deploymentBucket: {
      name: 'check-balance',
    },
    runtime: process.env.NODE_ENV === 'development' ? 'nodejs12.x' : 'nodejs14.x', // https://github.com/dherault/serverless-offline/pull/1170#issuecomment-782314694
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    checkBalance,
  },
};

module.exports = serverlessConfiguration;
