import axios from 'axios';

class Balances {
  http: typeof axios;

  constructor() {
    this.http = axios;
  }

  async getBalanceOnSolana(address: string): Promise<number> {
    const balance = await this.http.post('https://api.mainnet-beta.solana.com/', {
      jsonrpc: '2.0',
      id: 1,
      method: 'getBalance',
      params: [address],
    });

    return balance.data.result.value;
  }
}

export const balances = new Balances();
