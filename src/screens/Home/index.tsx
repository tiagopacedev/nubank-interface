import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Cards from './components/Cards';
import { CreditCard } from './components/CreditCard';
import { Insurance } from './components/Insurance';
import { Loan } from './components/Loan';
import { NextPayment } from './components/NextPayment';

import { CardTips } from '~/common/components/CardTips/CardTips';
import { Header } from '~/common/components/Header';
import { NuBlog } from '~/common/components/NuBlog/NuBlog';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <Cards />
        <CardTips />
        <CreditCard />
        <Loan />
        <NextPayment />
        <Insurance />
        <NuBlog />
      </ScrollView>
    </SafeAreaView>
  );
}
