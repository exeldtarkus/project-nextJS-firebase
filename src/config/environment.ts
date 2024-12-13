/* eslint-disable @typescript-eslint/no-explicit-any */
import getConfig from 'next/config';

const { publicRuntimeConfig }: { publicRuntimeConfig: any } = getConfig();
const ENV = publicRuntimeConfig;

export default ENV;
