
import { useNuxtApp } from '#app';
import lawUrl  from '~/utils/lawUrl';
const proxyDev =  process.env.NODE_ENV === 'development' ? '/proxyDev': '';
// 官网-律师注册信息-免登录免加密
export const officialInfoLawyer = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    const proxyDev =  process.env.NODE_ENV === 'development' ? '/proxyDev': '';
    return $request(`${lawUrl}${proxyDev}/api/out/official/info/lawyer`, {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
