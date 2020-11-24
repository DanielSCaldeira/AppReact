import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { Container, Card, View, CardItem, Body, Content } from 'native-base';

import { defaultStyles, homeStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';
import { executeRequest } from '../services/api'
import { TextDefault } from '../components/Text';
import { Menu } from '../components/Menu';
import { FooterFuncef } from '../components/Footer';

export class Home extends React.Component {

    state = {
        banner: '',
        showAllOptions: false
    }

    async componentDidMount() {
        try {
            const resultBanners = await executeRequest('https://autoatendimentoweb.funcef.com.br/apl/Autoatendimento_Web/api/ObterBanner', 'GET');

            if (resultBanners && resultBanners.data && resultBanners.data.Objeto) {
                const banners = resultBanners.data.Objeto;
                if (banners && banners.length > 0) {
                    const first = banners[0];
                    if (first && first.Imagem) {
                        this.setState({ banner: first.Imagem });
                    }
                }
            }

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { params } = this.props?.route;
        const { usuario } = params;
        const { banner, showAllOptions } = this.state;

        return (
            <Container>
                {/* <Spinner
                visible={this.state.loading}
                textContent={'Efetuando Login...'}
                textStyle={defaultStyles.spinnerText}
            /> */}
                <SafeAreaView style={{ flex: 1 }}>
                    <HeaderComponent title={usuario.Nome} />
                    {showAllOptions === false && banner ? <Image source={{ uri: banner }} style={homeStyles.banner} /> : null}
                    <View style={homeStyles.body}>
                        <Content ref={ref => this.contentView = ref}>
                            {showAllOptions === false ?
                                <>
                                    <TextDefault style={[homeStyles.label]} text="LIMITE DE EMPRÉSTIMO" />
                                    <View style={homeStyles.limiteEmprestimo}>
                                        <Card>
                                            <CardItem header style={homeStyles.cardHeader}>
                                                <TextDefault style={homeStyles.cardHeaderText} text="Modalidade Fixo" />
                                                <TextDefault style={homeStyles.cardHeaderText} text="R$ 9.626,09" />
                                            </CardItem>
                                            <CardItem style={homeStyles.cardBody}>
                                                <Body >
                                                    <View style={[defaultStyles.row, homeStyles.productLine, defaultStyles.spaceBetween,]}>
                                                        <TextDefault style={homeStyles.cardHeaderText} text="Plano: REB" />
                                                        <TextDefault style={homeStyles.cardHeaderText} text="Margem: R$ 1.62649,79" />
                                                    </View>
                                                    <View style={[defaultStyles.row, homeStyles.productLine, defaultStyles.spaceBetween,]}>
                                                        <TextDefault style={homeStyles.cardHeaderText} text="Prazo Máximo: 48" />
                                                        <TextDefault style={homeStyles.cardHeaderText} text="Juros: 9.12% a.a" />
                                                    </View>
                                                    <TextDefault style={homeStyles.cardHeaderText} text="Valor líquido disponível : R$ 9.626,09" />
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </>
                                :
                                null
                            }

                            <Menu showAllOptions={showAllOptions} setShowAllOptions={showAllOptions => this.setState({ showAllOptions })} />

                            {showAllOptions === false ?
                                <>
                                    <TextDefault style={[homeStyles.label]} text="MEU SALDO" />
                                    <View style={homeStyles.limiteEmprestimo}>
                                        <Card>
                                            <CardItem header style={[homeStyles.cardHeader, homeStyles.meuSaldoHeader]}>
                                                <TextDefault style={homeStyles.cardHeaderText} text="REB" />
                                                <TextDefault style={homeStyles.cardHeaderText} text="R$ 156.519,28" />
                                            </CardItem>
                                            <CardItem style={homeStyles.meuSaldoBody}>
                                                <Body >
                                                    <View style={[defaultStyles.row, homeStyles.productLine, defaultStyles.spaceBetween,]}>
                                                        <View style={[defaultStyles.row]}>
                                                            <TextDefault text="Valorização da Cota:" />
                                                            <TextDefault style={homeStyles.rowText} text="-1,01737833%" />
                                                        </View>
                                                        <View style={[defaultStyles.row, homeStyles.rowText]}>
                                                            <TextDefault text="Ref:" />
                                                            <TextDefault style={homeStyles.rowText} text="09/2020" />
                                                        </View>
                                                    </View>
                                                    <View style={[defaultStyles.row, homeStyles.productLine, defaultStyles.spaceBetween,]}>
                                                        <TextDefault text="Acumulado dos últimos 12 meses:" />
                                                        <TextDefault style={homeStyles.meuSaldoValueText} text="1,85380837%" />
                                                    </View>
                                                    <View style={[defaultStyles.row, homeStyles.productLine, defaultStyles.spaceBetween,]}>
                                                        <TextDefault text="Percentual atual:" />
                                                        <TextDefault style={homeStyles.meuSaldoValueText} text="10%" />
                                                    </View>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </>
                                :
                                null
                            }
                        </Content>
                    </View>
                    <View style={homeStyles.footer}>
                        <FooterFuncef/>
                    </View>
                </SafeAreaView>

            </Container>
        );
    }
}