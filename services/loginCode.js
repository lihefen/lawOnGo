import { useNuxtApp } from '#app';
import lawUrl  from '~/utils/lawUrl';
const proxyDev =  process.env.NODE_ENV === 'development' ? '/proxyDev': '';
export const loginCode = ({ ...other } = {}, config = {}) => {
    const { $request } = useNuxtApp();
    const proxyDev =  process.env.NODE_ENV === 'development' ? '/proxyDev': '';
    return $request(`${lawUrl}${proxyDev}/api/app/login/login/code`, {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
