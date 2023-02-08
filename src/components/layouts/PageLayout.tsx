import Footer from '../Footer';
import Header from '../header/Header'
import React from 'react'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      <main className="m-auto">{children}</main>

      <Footer />
    </>
  );
}
