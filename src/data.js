import PMmethodImg from './assets/img/Payments/PM.png'
import visaImg from './assets/img/Payments/visa.png'
import payerImg from './assets/img/Payments/payer.png'
import mtsImg from './assets/img/Payments/mts.png'
import mirImg from './assets/img/Payments/mir.png'
import mastercardImg from './assets/img/Payments/mastercard.png'
import maestroImg from './assets/img/Payments/maestro.png'
import litecinImg from './assets/img/Payments/litecoin.png'
import bitoinImg from './assets/img/Payments/bitcoin.png'
import beelineImg from './assets/img/Payments/beeline.png'
import advcashImg from './assets/img/Payments/advcash.png'
import bitoinCashImg from './assets/img/Payments/bitcoin-cash.png'
import ethereumImg from './assets/img/Payments/ethereum.png'
import zcashImg from './assets/img/Payments/zcash.png'
import binanceImg from './assets/img/Payments/binance.png'

export const paymentMethods = [
  { id: 'pm1', method: 'payeer', title: 'Payeer', imgs: [payerImg, visaImg, mastercardImg, maestroImg, mirImg, advcashImg, litecinImg, bitoinImg, beelineImg, mtsImg,] },
  { id: 'pm2', method: 'pm', title: 'PerfectMoney', imgs: [PMmethodImg] },
  { id: 'pm3', method: 'binance', title: 'Binance', imgs: [binanceImg] },
  { id: 'pm4', method: 'cry', title: 'Криптовалюта', imgs: [bitoinImg, bitoinCashImg, ethereumImg, litecinImg, zcashImg] },
  { id: 'pm5', method: 'balance', title: 'Баланс', imgs: [] },
]
export const installmentsShareVariants = [
  { id: 'iv1', variant: 'inst_var1', count: 54278, perMonth: 10, perOne: 0.00189 },
  { id: 'iv2', variant: 'inst_var2', count: 427152, perMonth: 40, perOne: 0.00096 },
  { id: 'iv3', variant: 'inst_var3', count: 743689, perMonth: 70, perOne: 0.00092 },
  { id: 'iv4', variant: 'inst_var4', count: 1798426, perMonth: 140, perOne: 0.00076 },
  { id: 'iv5', variant: 'inst_var5', count: 3632380, perMonth: 270, perOne: 0.00075, },
  { id: 'iv6', variant: 'inst_var6', count: 4540475, perMonth: 340, perOne: 0.00075, extra: '+подарок 136214 доли **' },
  { id: 'iv7', variant: 'inst_var7', count: 9080951, perMonth: 680, perOne: 0.00075, extra: '+подарок 454048 долей **' },
  { id: 'iv8', variant: 'inst_var8', count: 18161902, perMonth: 1370, perOne: 0.00075, extra: '+подарок 1271333 доли **' },
  { id: 'iv9', variant: 'inst_var9', count: 90809510, perMonth: 6850, extra: 'индивидуально ***' }
]

export const shareVariants = [
  { id: 'sv1', variant: 'sh_var1', count: 54278, cost: 100, perOne: 0.00189 },
  { id: 'sv2', variant: 'sh_var2', count: 108556, cost: 210, perOne: 0.00189, extra: '+подарок 3257 долей' },
  { id: 'sv3', variant: 'sh_var3', count: 427152, cost: 410, perOne: 0.00096, extra: '+подарок 12815 долей' },
  { id: 'sv4', variant: 'sh_var4', count: 743689, cost: 680, perOne: 0.00092, extra: '+подарок 22311 долей' },
  { id: 'sv5', variant: 'sh_var5', count: 1798426, cost: 1370, perOne: 0.00076, extra: '+подарок 53953 доли' },
  { id: 'sv6', variant: 'sh_var6', count: 3632380, cost: 2740, perOne: 0.00075, extra: '+подарок 108971 долей' },
  { id: 'sv7', variant: 'sh_var7', },
]