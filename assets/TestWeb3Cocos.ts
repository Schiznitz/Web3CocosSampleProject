import { _decorator, Component, RichText } from 'cc';
import w3 from 'web3cocos';
import type { AbstractProvider } from 'web3cocos/types/web3-core';
const { ccclass, property } = _decorator;

declare global {
    interface Window {
        ethereum: AbstractProvider;
    }
}

@ccclass('TestWeb3Cocos')
export class TestWeb3Cocos extends Component {
    @property({ type: RichText })
    text: RichText;

    async login() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new w3.Web3(window.ethereum);
        const addr = await web3.eth.getCoinbase();
        console.log('Address: ', addr);
        this.text.string = `Address: ${addr}`;
    }
}
