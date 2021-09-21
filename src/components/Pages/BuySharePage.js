import React, { useState } from 'react';
import '../../css/BuySharePage.css'
import PaymentMethodCard from '../PaymentMethodCard';
import ShareCard from '../ShareCard';
import {
  paymentMethods,
  installmentsShareVariants,
  shareVariants
} from '../../data'

const InstalmentsPage = (props) => {
  const [mode, setMode] = useState('installments')

  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')
  const [selectedShareOption, setSelectedShareOption] = useState('')

  const buyBookmarkCls = ['buy-share-page__bookmark']
  const installmentsBoomarkCls = ['buy-share-page__bookmark']

  mode === 'buy'
    ? buyBookmarkCls.push('active')
    : installmentsBoomarkCls.push('active')

  const paymentSubmitHandler = (mode, selectedPaymentOption, selectedShareOption) => {

    if (selectedPaymentOption === '') {
      alert('Выбраны спопсоб оплаты')
      return
    } else if (selectedShareOption === '') {
      alert('Выбраны доли')
      return
    }

    console.log(
      'Тип оплаты: ' + mode,
      'Платежная система: ' + selectedPaymentOption,
      'Вариант Долей: ' + selectedShareOption
    );

    fetch('http://localhost:3000/fakeServer.json')
      .then(response => response.json())
      .then(data => {
        const correctMethod = data.find(item => item.method === selectedPaymentOption)
        window.location.href = correctMethod.url;
      })
  }

  return (
    <div className='buy-share-page'>

      <div className='buy-share-page__bookmarks'>
        <div
          className={buyBookmarkCls.join(' ')}
          onClick={() => setMode('installments')}
        >
          Рассрочка
        </div>
        <div
          className={installmentsBoomarkCls.join(' ')}
          onClick={() => setMode('buy')}
        >
          Купить доли
        </div>
      </div>

      <div className='buy-share-page__content'>
        <div className='content__installments'>

          <div className='content__step'>
            <div className='step__title title'>
              ШАГ 1. ВЫБЕРИТЕ ПАКЕТ ДОЛЕЙ
            </div>
            <div className='step__items'>
              {mode === 'installments'
                ?
                installmentsShareVariants.map(item => {
                  return (
                    <div
                      className='step__item'
                      key={item.id}
                      onClick={() => setSelectedShareOption(item.variant)}
                    >
                      <input
                        type='radio'
                        checked={selectedShareOption === item.variant}
                        onChange={() => setSelectedShareOption(item.variant)}
                      />
                      <ShareCard
                        count={item.count}
                        perMonth={item.perMonth}
                        perOne={item.perOne}
                        extra={item.extra}
                      />
                    </div>
                  )
                })
                :
                shareVariants.map(item => {
                  return (
                    <div
                      className='step__item'
                      key={item.id}
                      onClick={() => setSelectedShareOption(item.variant)}
                    >
                      <input
                        type='radio'
                        checked={selectedShareOption === item.variant}
                        onChange={() => setSelectedShareOption(item.variant)}
                      />
                      <ShareCard
                        count={item.count}
                        cost={item.cost}
                        perOne={item.perOne}
                        extra={item.extra}
                      />
                    </div>
                  )
                })
              }
            </div>
            <div className='step__terms'>
              <div>* цены в USD указаны приблизительно, счет выставляется в RUB</div>
              {mode === 'installments' && <div>**   подарок доступен при оплате суммы всего пакета в течении 30 дней</div>}
              {mode === 'installments' && <div>*** для оформления крупных пакетов, свяжитесь с нами</div>}
            </div>
          </div>

          <div className='content__step'>
            <div className='step__title title'>
              ШАГ 2. ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ
              {mode === 'installments' && ' (первый платеж)'}
            </div>
            <div className='step__items'>
              {paymentMethods.map(item => {
                return (
                  <div
                    className='step__item'
                    key={item.id}
                    onClick={() => setSelectedPaymentOption(item.method)}
                  >
                    <input
                      type='radio'
                      checked={selectedPaymentOption === item.method}
                      onChange={() => setSelectedShareOption(item.variant)}
                    />
                    <PaymentMethodCard title={item.title} imgs={item.imgs} />
                  </div>
                )
              })}
            </div>
          </div>

          <div className='content__step'>
            <div className='step__title title'>
              ШАГ 3.
              {mode === 'installments'
                ? ' ВНЕСИТЕ ПЕРВЫЙ ПЛАТЕЖ'
                : ' ОПЛАТИТЕ ДОЛИ'
              }
            </div>
            <button
              className='submit__button button'
              onClick={() => paymentSubmitHandler(mode, selectedPaymentOption, selectedShareOption)}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstalmentsPage