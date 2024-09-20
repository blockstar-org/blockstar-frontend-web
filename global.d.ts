interface EthereumProvider {
  request(options: { method: string; params?: any[] }): Promise<any>
}

interface Window {
  ethereum?: EthereumProvider
}
