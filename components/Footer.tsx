import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">HuRobotics</h2>
            <div className="space-y-2 text-slate-400 text-sm">
                <p>대표이사: 홍길동</p>
                <p>주소: 서울특별시 가산디지털단지</p>
                <p>사업자등록번호: 123-45-67890</p>
                <p>전화: 02-1234-5678 | 팩스: 02-1234-5679</p>
                <p>이메일: contact@hurobotics.co.kr</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end w-full md:w-auto">
            <div className="flex flex-col items-start md:items-end">
                <div className="flex space-x-6 text-sm mb-6">
                    <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                    <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
                </div>
                <div className="relative">
                    <select className="bg-slate-700 border border-slate-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 appearance-none">
                        <option>FAMILY SITE</option>
                        <option>Family Site 1</option>
                        <option>Family Site 2</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>COPYRIGHT &copy; {new Date().getFullYear()} HuRobotics Co., Ltd. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
