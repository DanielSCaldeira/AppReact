import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { Container, Card, View, CardItem, Body, Content } from 'native-base';

import { defaultStyles, homeStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';
import { executeRequest } from '../services/api'
import { TextDefault } from '../components/Text';

export class Home extends React.Component {

    state = {
        banner: ''
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
        const { banner } = this.state;

        console.log(banner);

        return (
            <Container>
                {/* <Spinner
                visible={this.state.loading}
                textContent={'Efetuando Login...'}
                textStyle={defaultStyles.spinnerText}
            /> */}
                <SafeAreaView style={{ flex: 1 }}>
                    <HeaderComponent title={usuario.Nome} />
                    {banner ? <Image source={{ uri: banner }} style={homeStyles.banner} /> : null}
                    <View style={homeStyles.body}>
                        <Content>
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
                        </Content>
                    </View>
                    <View style={homeStyles.footer}></View>
                </SafeAreaView>

            </Container>
        );
    }
}