"use client";

import {RecoilRoot} from 'recoil';


const RecoilRootProvider = ({ children }: { children: any }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
