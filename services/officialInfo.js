import { useNuxtApp } from '#app';
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
