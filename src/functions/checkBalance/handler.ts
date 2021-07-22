import { balances } from '@libs/balances';
import * as Koa from 'koa';
import * as checkBalances from 'aws-serverless-koa';
import * as awsServerlessKoaMiddleware from 'aws-serverless-koa/middleware';

const app = new Koa();
app.use(awsServerlessKoaMiddleware());

const getBalances = async (address: string): Promise<number | string> => {
  let balanceOnSolana: number;

  try {
    balanceOnSolana = await balances.getBalanceOnSolana(address);
  } catch (e) {
    return e;
  }

  return balanceOnSolana;
};

app.use(async (ctx) => {
  const address: string = ctx.request.query.address as string || '';
  const balance: string | number = await getBalances(address);

  if (typeof balance == 'string') {
    ctx.body = { error: balance };
  } else {
    ctx.body = { balance: (balance / 1000000000) };// convert to SOLs
  }

});

export const main = checkBalances(app);
