import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { Container, Card, View, CardItem, Body, Content } from 'native-base';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { defaultStyles, homeStyles } from '../../styles';
import { HeaderComponent } from '../components/Header';
import { TextDefault } from '../components/Text';
import { Menu } from '../components/Menu';
import { FooterFuncef } from '../components/Footer';

import {
    getBanner,
    toggleAllOptions
} from '../redux/actions/home'

class HomeScreen extends React.Component {
    componentDidMount() {
        const {getBanner, lastUpdate} = this.props;
        getBanner(lastUpdate);
    }

    render() {
        const { banner, showAllOptions, toggleAllOptions } = this.props;

        return (
            <Container>
                {/* <Spinner
                visible={this.state.loading}
                textContent={'Efetuando Login...'}
                textStyle={defaultStyles.spinnerText}
            /> */}
                <SafeAreaView style={{ flex: 1 }}>
                    <HeaderComponent />
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

                            <Menu showAllOptions={showAllOptions} setShowAllOptions={toggleAllOptions} />

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

const mapStoreToProps = store => ({
    banner : store.home.banner,
    lastUpdate : store.home.lastUpdate,
    showAllOptions : store.home.showAllOptions
});

const mapActionToProps = dispatch => bindActionCreators({
    getBanner,
    toggleAllOptions
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionToProps) (HomeScreen);
export { conectado as HomeScreen}