
import { useNuxtApp } from '#app';
import lawUrl  from '~/utils/lawUrl';

export const sendCode = ({ ...other } = {}, config = {}) => {
    const proxyDev =  process.env.NODE_ENV === 'development' ? '/proxyDev': '';
    const { $request } = useNuxtApp();
    return $request(`${lawUrl}${proxyDev}/api/app/login/send-code`, {
		data: {},
		method: 'POST',
		showToast: false,
		showLoading: false,
		...other,
		...config,
	})
}
