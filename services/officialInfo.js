import { useNuxtApp } from '#app';
// 官网-客户信息收集-免登录免加密
export const officialInfo = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    return $request('/proxyDev/api/out/official/info', {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
