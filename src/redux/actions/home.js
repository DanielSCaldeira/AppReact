import { executeRequest } from "../../services/api";
export const HomeActions = Object.freeze({
    HOME_SET_BANNER: 'HOME_SET_BANNER',
    HOME_TOGGLE_ALL_OPTIONS: 'HOME_TOGGLE_ALL_OPTIONS'
});

export const getBanner = (lastUpdate) => {
    return async dispatch => {
        try {
            const now = new Date();
            if (lastUpdate) {
                lastUpdate = new Date(lastUpdate);
            }

            if (!lastUpdate || lastUpdate.getMonth() < now.getMonth() || lastUpdate.getDate() < now.getDate()) {
                console.log('getBanner');
                const resultBanners = await executeRequest('https://autoatendimentoweb.funcef.com.br/apl/Autoatendimento_Web/api/ObterBanner', 'GET');

                if (resultBanners && resultBanners.data && resultBanners.data.Objeto) {
                    const banners = resultBanners.data.Objeto;
                    if (banners && banners.length > 0) {
                        const first = banners[0];
                        if (first && first.Imagem) {
                            return dispatch({
                                type: HomeActions.HOME_SET_BANNER,
                                data: {
                                    banner: first.Imagem,
                                    lastUpdate: now
                                }
                            });
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const toggleAllOptions = _ => ({
    type: HomeActions.HOME_TOGGLE_ALL_OPTIONS
});