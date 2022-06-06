import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  w-full 
  min-h-screen 
  flex
  items-center 
  justify-center 
  bg-black 
  text-white 
  text-2xl 
  flex-col 
  gap-y-3
`;

export const Button = tw.a`
  bg-blue-400 
  text-black 
  px-4 
  py-2 
  text-xl 
  rounded-lg 
`;
