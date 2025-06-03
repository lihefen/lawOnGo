import { useNuxtApp } from '#app';

export const gather = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    return $request('/proxyDev/api/out/info/gather', {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
