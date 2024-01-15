import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Buy = {
    $$type: 'Buy';
    seller: Address;
    amount: bigint;
    price: bigint;
    expiry: bigint;
}

export function storeBuy(src: Buy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3802013228, 32);
        b_0.storeAddress(src.seller);
        b_0.storeUint(src.amount, 32);
        b_0.storeInt(src.price, 256);
        b_0.storeInt(src.expiry, 256);
    };
}

export function loadBuy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3802013228) { throw Error('Invalid prefix'); }
    let _seller = sc_0.loadAddress();
    let _amount = sc_0.loadUintBig(32);
    let _price = sc_0.loadIntBig(256);
    let _expiry = sc_0.loadIntBig(256);
    return { $$type: 'Buy' as const, seller: _seller, amount: _amount, price: _price, expiry: _expiry };
}

function loadTupleBuy(source: TupleReader) {
    let _seller = source.readAddress();
    let _amount = source.readBigNumber();
    let _price = source.readBigNumber();
    let _expiry = source.readBigNumber();
    return { $$type: 'Buy' as const, seller: _seller, amount: _amount, price: _price, expiry: _expiry };
}

function storeTupleBuy(source: Buy) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.seller);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.price);
    builder.writeNumber(source.expiry);
    return builder.build();
}

function dictValueParserBuy(): DictionaryValue<Buy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeBuy(src)).endCell());
        },
        parse: (src) => {
            return loadBuy(src.loadRef().beginParse());
        }
    }
}

export type Cancel = {
    $$type: 'Cancel';
    amount: bigint;
    price: bigint;
    expiry: bigint;
}

export function storeCancel(src: Cancel) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1561823489, 32);
        b_0.storeUint(src.amount, 32);
        b_0.storeInt(src.price, 256);
        b_0.storeInt(src.expiry, 256);
    };
}

export function loadCancel(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1561823489) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadUintBig(32);
    let _price = sc_0.loadIntBig(256);
    let _expiry = sc_0.loadIntBig(256);
    return { $$type: 'Cancel' as const, amount: _amount, price: _price, expiry: _expiry };
}

function loadTupleCancel(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _price = source.readBigNumber();
    let _expiry = source.readBigNumber();
    return { $$type: 'Cancel' as const, amount: _amount, price: _price, expiry: _expiry };
}

function storeTupleCancel(source: Cancel) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeNumber(source.price);
    builder.writeNumber(source.expiry);
    return builder.build();
}

function dictValueParserCancel(): DictionaryValue<Cancel> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCancel(src)).endCell());
        },
        parse: (src) => {
            return loadCancel(src.loadRef().beginParse());
        }
    }
}

export type Fee = {
    $$type: 'Fee';
    sellPerc: bigint;
    txn: bigint;
}

export function storeFee(src: Fee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3455044923, 32);
        b_0.storeInt(src.sellPerc, 257);
        b_0.storeInt(src.txn, 257);
    };
}

export function loadFee(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3455044923) { throw Error('Invalid prefix'); }
    let _sellPerc = sc_0.loadIntBig(257);
    let _txn = sc_0.loadIntBig(257);
    return { $$type: 'Fee' as const, sellPerc: _sellPerc, txn: _txn };
}

function loadTupleFee(source: TupleReader) {
    let _sellPerc = source.readBigNumber();
    let _txn = source.readBigNumber();
    return { $$type: 'Fee' as const, sellPerc: _sellPerc, txn: _txn };
}

function storeTupleFee(source: Fee) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.sellPerc);
    builder.writeNumber(source.txn);
    return builder.build();
}

function dictValueParserFee(): DictionaryValue<Fee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFee(src)).endCell());
        },
        parse: (src) => {
            return loadFee(src.loadRef().beginParse());
        }
    }
}

 type Inshrimption_init_args = {
    $$type: 'Inshrimption_init_args';
}

function initInshrimption_init_args(src: Inshrimption_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Inshrimption_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initInshrimption_init_args({ $$type: 'Inshrimption_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Inshrimption_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    15518: { message: `Amount is too small` },
    18518: { message: `Order not found` },
    26825: { message: `Only owner can withdraw` },
    31099: { message: `Transaction fee is not enough` },
    34358: { message: `Only owner can set fee` },
    47395: { message: `Price is too low` },
    57383: { message: `Order not available` },
}

const Inshrimption_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Buy","header":3802013228,"fields":[{"name":"seller","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":256}},{"name":"expiry","type":{"kind":"simple","type":"int","optional":false,"format":256}}]},
    {"name":"Cancel","header":1561823489,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":256}},{"name":"expiry","type":{"kind":"simple","type":"int","optional":false,"format":256}}]},
    {"name":"Fee","header":3455044923,"fields":[{"name":"sellPerc","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"txn","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
]

const Inshrimption_getters: ABIGetter[] = [
    {"name":"sellFeePerc","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"txnFee","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"used","arguments":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"expiry","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Inshrimption_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Buy"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Cancel"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Fee"}},
    {"receiver":"internal","message":{"kind":"text","text":"Withdraw"}},
    {"receiver":"internal","message":{"kind":"text"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Inshrimption implements Contract {
    
    static async init() {
        return await Inshrimption_init();
    }
    
    static async fromInit() {
        const init = await Inshrimption_init();
        const address = contractAddress(0, init);
        return new Inshrimption(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Inshrimption(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Inshrimption_types,
        getters: Inshrimption_getters,
        receivers: Inshrimption_receivers,
        errors: Inshrimption_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Buy | Cancel | Fee | 'Withdraw' | string | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Buy') {
            body = beginCell().store(storeBuy(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Cancel') {
            body = beginCell().store(storeCancel(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Fee') {
            body = beginCell().store(storeFee(message)).endCell();
        }
        if (message === 'Withdraw') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (typeof message === 'string') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getSellFeePerc(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('sellFeePerc', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getTxnFee(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('txnFee', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getUsed(provider: ContractProvider, address: Address, amount: bigint, price: bigint, expiry: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(address);
        builder.writeNumber(amount);
        builder.writeNumber(price);
        builder.writeNumber(expiry);
        let source = (await provider.get('used', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}