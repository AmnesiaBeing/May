/* eslint-disable no-console,node/no-extraneous-require */

'use strict'

const { client, xml } = require('@xmpp/client/react-native');

const resource = 'May';
// const service = 'ws://may.zzh-exp-pc:7070/ws';
const service = 'ws://[2001:250:217:7220::f783]:7070/ws';
// 2001:250:217:7220::f783
const domain = 'may.zzh-exp-pc';

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

export default class XMPPStore {


    constructor() {
        // this.xmppClient = client;
        this.xmppOptions = { service: service, domain: domain, resource: resource };
        this.isConnected = false;
        this.isOnline = false;
    }

    login(username, password) {
        console.log(username);
        console.log(password);
        this.xmppOptions.username = username;
        this.xmppOptions.password = password;
        this.xmppClient = client(this.xmppOptions);
        this.xmppClient.start().catch(console.error);
        this.addlistener();
    }

    addlistener() {
        this.xmppClient.on('error', err => this._xmpperror(err));
        this.xmppClient.on('offline', () => this._xmppoffline());
        this.xmppClient.on('stanza', stanza => this._xmppstanza(stanza));
        this.xmppClient.on('online', address => this._xmpponline(address));
        this.xmppClient.on('status', status => this._xmppstatus(status));
        this.xmppClient.on('input', input => this._xmppinput(input));
        this.xmppClient.on('output', output => this._xmppinput(output));
    }


    _xmpperror(err) {
        console.error('❌', err.toString());
    }

    _xmppoffline() {
        console.log('⏹', 'offline');
    }

    async _xmppstanza(stanza) {
        console.log('▶', 'stanza', stanza.toString())
    }

    async _xmpponline(address) {
        console.log('▶', 'online as', address.toString())
    }

    _xmppstatus(status) {
        console.debug('🛈', 'status', status);
    }

    _xmppinput(input) {
        console.debug('⮈', input);
    }

    _xmppoutput(output) {
        console.debug('⮊', output);
    }


}

